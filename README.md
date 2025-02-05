 # Service Review System

Welcome to the **Service Review System** backend! This project serves as the backend for a comprehensive platform where users can register, review services, and manage their accounts. The project is built using Node.js, Express, and MongoDB.

---

## Live URL

 [Project Live View with Frontend](https://service-review-system-953ea.web.app) 

---

## Purpose

The purpose of this project is to provide a robust backend for:
- Managing user accounts and authentication.
- Allowing users to review services.
- Providing secure access to personal reviews.
- CRUD operations for services and reviews.

---

## Key Features

### 1. User Authentication:
- Registration with secure password validation.
- Login with JSON Web Token (JWT)-based authentication.
- Logout functionality.
- Role-based authorization for user-specific data access.

### 2. Services Management:
- Add, update, delete, and fetch services.
- Retrieve service details by ID.
- Fetch a limited number of services for previews.

### 3. Reviews Management:
- Add, update, delete, and fetch reviews.
- Fetch reviews for a specific service.
- Fetch user-specific reviews securely with JWT.

### 4. Secure Cookies:
- HTTP-only and secure cookies for token storage in production.
- Configurations adapt to different environments (development/production).

### 5. Environment Configurations:
- Environment-based setups using `process.env.NODE_ENV`.
- Separate configurations for development and production environments.

---

## NPM Packages Used

Below are the major npm packages used in this project:

### Core Packages:
- **Express**: For building the web server.
- **Cors**: To handle cross-origin requests.
- **Cookie-parser**: For parsing cookies in requests.
- **Dotenv**: For environment variable management.
- **MongoDB**: For connecting and interacting with MongoDB.

### Authentication:
- **Jsonwebtoken (JWT)**: For secure user authentication and session management.

### Development Tools:
- **Nodemon**: For automatic server restarts during development.

---

## Environment Variables

The application uses environment variables to secure sensitive information. Below are the required variables:

- `PORT`: The port on which the server runs.
- `DB_USER`: MongoDB username.
- `DB_PASS`: MongoDB password.
- `JWT_SECRET`: Secret key for signing JWT tokens.
- `NODE_ENV`: Specifies the environment (`development` or `production`).

---

## Setup Instructions

### Prerequisites:
- Node.js installed.
- MongoDB setup.
- `.env` file with necessary variables.

### Steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd service-review-system-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file.
4. Run the server:
   ```bash
   npm start
   ```
5. Access the backend at `http://localhost:<PORT>`.

---

## APIs Overview

### User APIs:
- **POST** `/jwt`: Generate a JWT token for a user.
- **GET** `/users`: Fetch all users.
- **POST** `/users`: Add a new user.
- **POST** `/logOut`: Clear the user's token.

### Services APIs:
- **GET** `/servicesLimit`: Fetch limited services for preview.
- **GET** `/services`: Fetch all services.
- **GET** `/services/:id`: Fetch details of a specific service by ID.
- **POST** `/services`: Add a new service.
- **PUT** `/services/:id`: Update a service by ID.
- **DELETE** `/services/:id`: Delete a service by ID.

### Reviews APIs:
- **GET** `/reviews`: Fetch all reviews.
- **GET** `/reviews/:email`: Fetch reviews of a specific user (authenticated).
- **POST** `/services/reviews/:id`: Add a review to a specific service.
- **PUT** `/reviews/:id`: Update a review by ID.
- **DELETE** `/reviews/:id`: Delete a review by ID.

--- 
  <h2>📸 Screenshot</h2>
  <img src="https://github.com/Litonuddinnil/service-review-system-client-site/blob/main/Screenshot%202025-02-05%20154937.png">
  
---

### Contributions

Feel free to fork this repository, submit pull requests, or create issues for bugs or feature requests. We welcome all contributions to improve this project!

---

### Contact

For any queries, please contact the maintainer at [mdniloyhasan544@gmail.com].

