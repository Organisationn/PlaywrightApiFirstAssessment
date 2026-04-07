const {test,expect} = require('@playwright/test')
const getUserTestData = require('../utility/dbHelper')
const ApiHelper = require('../utility/apiHelper')

let userData,apiHelper

test.beforeEach(async ({request})=>{
    userData = await getUserTestData(1)
    apiHelper = new ApiHelper(request)
})
test('reqres e2e flow', async ({request}) => {
    //Register
    const registerResp = await apiHelper.registerUser({
        email: userData.email,
        password: userData.register_password
    })
    const registerJson = await registerResp.json()
    const token = registerJson.token
    expect(token).not.toBeNull()
    expect(registerResp.status()).toBe(200)
    console.log(`Registered successfully | Token : ${registerJson.token}`)

    // Login
    const loginResp = await apiHelper.loginUser({
        email: userData.email,
        password: userData.login_password
    })
    const loginJson = await  loginResp.json()
    expect(loginResp.status()).toBe(200)
    expect(loginJson.token).not.toBeNull()
    console.log(`Logged in | Token : ${loginJson.token}`)

    //create a new user
    const createResp = await apiHelper.newUser({
        name: userData.new_user_name,
        job: userData.new_user_job
    })
    const createJson = await createResp.json()
    expect(createResp.status()).toBe(201)
    expect(createJson.id).not.toBeNull()
    const userId = createJson.id
    console.log(`User created | id: ${createJson.id}`)

    //Full update
    const putResp = await apiHelper.fullUpdateUserDetails({
        name: userData.updated_name,
        job: userData.updated_job
    },userId)
    const putJson = await putResp.json()
    expect(putResp.status()).toBe(200)
    expect(putJson.name).toBe(userData.updated_name)
    expect(putJson.job).toBe(userData.updated_job)
    console.log(`Full update done | Name: ${putJson.name}`)

    //partial update user details
    const patchResp = await apiHelper.partialUpdateUserDetails({
        job: userData.partial_job
    },userId)
    const patchJson = await patchResp.json()
    expect(patchResp.status()).toBe(200)
    expect(patchJson.job).toBe(userData.partial_job)
    console.log(`Partial update done | Job:${patchJson.job}`)

    //delete the user
    const deleteResp = await apiHelper.deleteUserDetails(userId)
    expect(deleteResp.status()).toBe(204)
    console.log(`User deleted | ID:${userId}`)

    //Verify 404 after delete
    const getResp = await  apiHelper.getUserDetailsPostDelete(userId)
    expect(getResp.status()).toBe(404)
    console.log(`404 found for User | ID: ${userId}`)
})