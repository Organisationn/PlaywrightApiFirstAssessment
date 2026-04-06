class ApiHelper {
    constructor(request) {
        this.request = request
    }

    async registerUser(payload) {
        console.log('request url: ',`${process.env.BASE_URL_API_FIRST}/register`)
        console.log('headers: ',{
            'Content-Type' : 'application/json',
            'x-api-key' : process.env.API_KEY ? '***exists***' : '***MISSING***'
        })
        const response = await this.request.post(`${process.env.BASE_URL_API_FIRST}/register`,
            {
                data: payload
            }
        )
        return response
    }
    async loginUser(payload) {
        const response = await this.request.post(`${process.env.BASE_URL_API_FIRST}/login`,
            {
                data: payload
            }
        )
        return response
    }
    async newUser(payload) {
        const response = await this.request.post(`${process.env.BASE_URL_API_FIRST}/users`,
            {
                data: payload
            }
        )
        return response
    }
    async fullUpdateUserDetails(payload, id) {
        const response = await this.request.put(`${process.env.BASE_URL_API_FIRST}/users/` + id,
            {
                data: payload
            }
        )
        return response
    }
    async partialUpdateUserDetails(payload, id) {
        const response = await this.request.patch(`${process.env.BASE_URL_API_FIRST}/users/` + id,
            {
                data: payload
            }
        )
        return response
    }
    async deleteUserDetails(id) {
        console.log("Delete Headers:", process.env.API_KEY?"exist":NotExist)
        const response = await this.request.delete(`${process.env.BASE_URL_API_FIRST}/users/` + id,
            {
                headers: { "x-api-key": process.env.API_KEY } || ''
            }
        )
        return response
    }
    async getUserDetailsPostDelete(id) {
        const response = await this.request.get(`${process.env.BASE_URL_API_FIRST}/users/` + id,
            {
                headers: { "x-api-key": process.env.API_KEY } || ''
            }
        )
        return response
    }
}
module.exports = ApiHelper