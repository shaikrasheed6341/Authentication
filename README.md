# User Authentication System

This project implements user authentication using **Express**, **MongoDB**, **bcrypt**, and **jsonwebtoken**.

## Features
- Register users with hashed passwords.
- Login and generate secure JWT tokens.
- Logout by invalidating tokens.

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Security**: bcrypt and jsonwebtoken

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/shaikrasheed6341/Authentication.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Authcation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add a `.env` file with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key
   PORT=8000
   ```

## Usage
Run the server:
```bash
npm run dev
```

### API Endpoints
- **POST /api/v1/user/registration**: Register a user.
- **POST /api/v1/user/login**: Authenticate and return a token.
- **POST /api/v1/user/logout**: Invalidate a token.

## Folder Structure
```
project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
├── app.js
├── package.json
├── README.md
```

## License
This project is licensed under the MIT License.

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

