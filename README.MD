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
