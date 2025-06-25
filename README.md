# 🔐 MERN Authentication System

A full-stack authentication system built with the MERN stack. This project includes everything from user signup, email verification, login, password reset to secure route protection — all integrated with a beautiful UI and ready for production deployment.
---

## ✨ Live Demo

https://mernauth-1-eicr.onrender.com/login
---

## 📦 Features

### Backend Features
- 🗄️ MongoDB with Mongoose
- 🔐 User Signup & JWT Authentication
- 📧 Email Verification (Mailtrap)
- 🔍 Verify Email Endpoint
- 🔑 Secure Login / Logout
- 🔄 Forgot & Reset Password Flow
- ✔️ Check Auth Route
- 📄 Welcome Email Template

### Frontend Features
- 📋 Signup Page UI
- 🔓 Login Page UI
- ✅ Email Verification UI
- 🏠 Dashboard Page (Protected)
- 🔄 Forgot & Reset Password UI
- 🔒 Protected Route Handling
- ⚡ Real-time Feedback & Error Handling

---
## ⚙️ Tech Stack

**Frontend**  
- React  
- Tailwind CSS  
- JavaScript / HTML / CSS

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT for Auth  
- NodeMailer for Emails

**Deployment**  
- Render (for backend & frontend)

**Testing**  
- Postman for API Testing

---
*** API End Points**

Sign Up-api/auth/register-Post

Login-api/auth/login-Post

Logout-api/auth/logout-Post

verifyEMail-api/auth/verify-email-Post

ForGotPassword-api/auth/forgot-password-Post

ResetPassword-api/auth/reset-password/:token-Post

CheckAuth-api/auth/check-auth-Get

## 📁 .env Configuration

Create a `.env` file at the root:

```env
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

CLIENT_URL=http://localhost:5173

# Install dependencies
npm install

# Build frontend
npm run build

# Start backend
npm run start


