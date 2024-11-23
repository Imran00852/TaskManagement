# Task Management Application

A simple Node.js application that allows users to manage tasks. Users can register, log in, and perform CRUD operations on tasks. 

---

## Features

- **User Authentication**: 
  - Register and log in with secure password hashing using `bcrypt`.
  - JWT-based authentication with cookies for session management.
  
- **Task Management**:
  - Create, read, update, and delete tasks.
  - Each task is associated with a specific user.

- **Error Handling**:
  - Centralized error handling using custom middleware.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Cookies, JWT
- **Password Hashing**: Bcrypt

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app

2. Install dependencies:

   ```bash
   npm install

## .env Configuration

Create a `.env` file in the root directory of the project and add the following variables:

```env
# Server Port
PORT=5000

# MongoDB Connection URI
MONGO_URI=your_mongodb_connection_string

# JWT Secret for Authentication
JWT_SECRET=your_jwt_secret

## Starting the Application

To start the application, run the following command:

```bash
npm start
