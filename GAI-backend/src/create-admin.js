import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Admin } from "./models/Admin.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
await connectDB();

const createAdmin = async () => {
  try {
    const args = process.argv.slice(2);
    if (args.length < 3) {
      console.log('Usage: node src/create-admin.js "Name" "email@example.com" "password"');
      process.exit(1);
    }
    const [name, email, password] = args;
    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log("Admin already exists");
      process.exit(0);
    }
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    await Admin.create({ name, email, password_hash });
    console.log("Admin created successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

await createAdmin();
