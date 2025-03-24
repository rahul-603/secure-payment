# Secure Payment Gateway System

A full-stack application that provides a secure payment gateway integration for online transactions, using the PayPal API.

## Overview

This project implements a secure payment processing system that enables businesses to handle online transactions using PayPal. It features user authentication, transaction management, and secure payment processing through PayPal's APIs.

## Features

- *Secure User Authentication*: JWT-based authentication system
- *PayPal Integration*: Process payments securely through PayPal
- *Transaction Management*: Create and track payment transactions
- *Responsive UI*: Clean and user-friendly payment interface

## Tech Stack

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- PayPal Server SDK for payment processing
- bcrypt.js for password hashing

### Frontend
- React.js (v19.0.0)
- React Router for navigation
- PayPal React SDK for payment buttons
- Axios for API requests

## System Architecture

The application follows a client-server architecture:

1. *Client*: React.js frontend with PayPal integration
2. *Server*: Express.js REST API backend
3. *Database*: MongoDB for persistent storage
4. *External Service*: PayPal payment processing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas)
- PayPal Developer Account

### Installation

#### Backend Setup

1. Clone the repository:
   
   git clone https://github.com/yourusername/secure-payment.git
   cd secure-payment-main
   

2. Install backend dependencies:
   
   npm install
   

3. Create a .env file in the root directory with the following variables:
   
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/secure-payment
   JWT_SECRET=your_jwt_secret_key
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   

4. Start the backend server:
   
   node server.js
   

#### Frontend Setup

1. Navigate to the frontend directory:
   
   cd frontend
   

2. Install frontend dependencies:
   
   npm install
   

3. Create a .env file in the frontend directory with:
   
   REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
   

4. Start the frontend development server:
   
   npm start
   

## API Endpoints

### Authentication
- POST /auth/signup: Register a new user
- POST /auth/login: Authenticate and get JWT token
- GET /auth/profile: Get user profile (protected)

### Payment
- POST /api/payments/create-order: Create a new PayPal order
- POST /api/payments/capture-order: Capture payment for an order

## Payment Flow

1. User initiates payment on the frontend
2. Backend creates an order with PayPal
3. User approves payment through PayPal interface
4. Backend captures the payment
5. Transaction is recorded in database

## Security Measures

- JWT authentication for API protection
- Environment variables for sensitive credentials
- Password hashing with bcrypt
- PayPal's secure payment flow (no direct handling of card information)

## Test Accounts

### Seller Account
- Email: rahulk@business.example.com
- Password: Rahulk@7813

### Buyer Account
- Email: rahulk@personal.example.com
- Password: BuyThings

## Future Enhancements

- Multiple payment gateway integrations (Stripe, RazorPay)
- Advanced analytics dashboard
- Subscription payment support
- Multi-currency support
- Invoice generation

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
