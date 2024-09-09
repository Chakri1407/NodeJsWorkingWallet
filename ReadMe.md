
# NodeJS Working Wallet(API only)
This project is a fully functional wallet system built with Node.js. It is an API-only implementation, designed to handle various wallet-related tasks such as user authentication, balance management, transfers, and transaction tracking.

## Features

- ES6 Standards: All code is written following ES6 standards. ESLint and Prettier are used to maintain code quality and consistency.
- User Authentication: User session management is handled via JWT (JSON Web Tokens).
- Email Verification: Users receive an email verification upon signup.
- Login: Users can log in using either a password or OTP.
- Initial Balance: Users are credited with a fake balance upon signup.
- Transfers: Users can transfer funds to each other.
- Transaction History: Both admin and users can view transaction details.
- Email Notifications: Users receive email notifications for successful or failed transactions.

## Installation

1. Clone the repository:
``git clone https://github.com/Chakri1407/wallet-api.git
 cd wallet-api `` 

2. Install dependencies:
`` npm install `` 
3. Set up environment variables:

Create a .env file in the root directory and add the following variables:

`` NODE_ENV = development
PORT = 3000 
DATABASE = mongodb+srv://chakravarthynaik101:<PASSWORD>@cluster0.ycpoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
DATABASE_LOCAL = mongodb://localhost:27017/natours
DATABASE_PASSWORD = Your Password
JWT_SECRET = secret key
JWT_EXPIRES_IN = 90d 
``
4. Run the application:
`` npm start ``

## Usage

### API Endpoints
- POST /signup: Create a new user account and send an email verification link.
- POST /login: Log in using a password or OTP.
- POST /verify-email: Verify a user's email address.
- GET /balance: Retrieve the user's current balance.
- POST /transfer: Transfer funds to another user.
- GET /transactions: Get the list of transactions (user/admin view).
- POST /transaction-email: Send transaction success/failure details via email.

## Error Handling

Proper error handling is implemented, and the API returns appropriate HTTP status codes and error messages.

## Linting and Formatting
ESLint and Prettier are configured to enforce coding standards.

## Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Open a Pull Request.
## Authors

- [@ChakravarthyN](https://github.com/Chakri1407)


## FAQ

#### Question 
For any questions, please feel free to reach out to me at: [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chakravarthy-naik-9626bb1ba/)


