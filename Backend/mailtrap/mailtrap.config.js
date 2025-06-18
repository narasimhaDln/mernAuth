import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const EMAIL_USER = process.env.USER_EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;

console.log("EMAIL_USER:", EMAIL_USER);
console.log("EMAIL_PASS:", EMAIL_PASS ? "Loaded" : "Missing");

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("❌ EMAIL or EMAIL_PASS is missing in .env");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export default transporter;
