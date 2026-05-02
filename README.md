# 🚀 PlaywrightApiFirstAssessment

A scalable API automation framework built using Playwright API testing capabilities to validate end-to-end user workflows including authentication, CRUD operations, database-driven testing, and CI/CD execution.

---

## 📌 Project Overview

This project automates a complete API lifecycle using Reqres APIs:

- User Registration
- User Login
- Create User
- Full Update (PUT)
- Partial Update (PATCH)
- Delete User
- Validate user deletion via GET (404 validation)

The framework demonstrates real-world API automation practices with reusable utilities, externalized test data, database integration, and CI/CD execution.

---

## 🏗️ Framework Architecture

```bash
PlaywrightApiFirstAssessment/
│
├── tests/
│   ├── e2eFlowDbData.spec.js
│   └── e2eFlowJsonData.spec.js
│
├── utility/
│   ├── apiHelper.js
│   ├── dbHelper.js
│   └── fileReader.js
│
├── testdata/
│   └── userData.json
│
├── .github/workflows/
│   └── playwright.yml
│
├── .env
├── .env.example
├── playwright.config.js
├── package.json
└── README.md

🔥 Key Features
✅ Reusable API Utility Design
* Centralized API request methods in apiHelper.js
* Reduces duplicate code
* Improves maintainability
* Similar concept to Page Object Model for APIs

✅ End-to-End API Workflow Validation
Validates complete business flow:

1. Register user
2. Login user
3. Create user
4. Update user details
5. Delete user
6. Verify deletion

✅ Data-Driven Testing
JSON-Based Testing
* Reads payloads from external JSON files
Database-Based Testing
* Reads payloads dynamically from MySQL database

✅ Environment Configuration
* Uses .env for local execution
* Uses .env.example as configuration template
* Keeps secrets secure

✅ CI/CD Integration
* Integrated with GitHub Actions
* MySQL service container setup
* Dynamic database seeding
* Automated execution on push/pull requests

✅ Reporting
* Generates Playwright HTML reports
* Uploads reports as CI artifacts

⚙️ Installation & Setup

Clone repository
git clone https://github.com/Organisationn/PlaywrightApiFirstAssessment.git
cd PlaywrightApiFirstAssessment

Install dependencies
npm install

Run tests
npx playwright test

📊 API Flow Covered
* POST /register
* POST /login
* POST /users
* PUT /users/{id}
* PATCH /users/{id}
* DELETE /users/{id}
* GET /users/{id}

🧠 Design Principles
* Reusability
* Separation of concerns
* Externalized test data
* Maintainability
* Scalable API automation design

## 🚀 Future Enhancements

* Enable full cross-browser execution
* Implement advanced Playwright fixtures
* Support multiple environments
* Add negative API test scenarios

💼 Resume Highlights
* Built Playwright API automation framework for end-to-end CRUD validation
* Designed reusable API helper utilities
* Implemented JSON and database-driven testing
* Integrated GitHub Actions CI/CD pipeline
* Automated MySQL data seeding during execution
* Generated automated execution reports

🤝 Conclusion

This project demonstrates real-world API automation design by combining API validation, reusable utilities, database integration, and CI/CD practices.

⭐ If you like this project, consider giving it a star!
