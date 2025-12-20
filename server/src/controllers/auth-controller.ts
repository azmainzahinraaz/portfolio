import { Request, Response } from "express";
import admin from "../models/admin.js";
import { compareHash, generateHash } from "../utils/hash.js";
import { signJWTToken } from "../utils/jwt-token.js";
import { verifyAdmin } from "../utils/verify-admin.js";

export async function loginAdmin(req: Request, res: Response): Promise<void> {
  try {
    const { username, password } = req.body;

    const hashedPassword = await generateHash(password);
    console.log("Generated Hash: ", hashedPassword);

    // validate the request
    if (!username || !password) {
      res.status(400).json({ message: "Username and password are required" });
      return;
    }

    const adminData = await admin.findOne({ username });
    if (!adminData) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // verify password
    const isPasswordValid = await compareHash(password, adminData.passwordHash);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    // sign a jwt token
    const token = signJWTToken({ adminId: adminData._id.toString() });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.log("Error logging in admin - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}

export async function createAdmin(req: Request, res: Response): Promise<void> {
  try {
    const { username, password, token } = req.body;

    // validate the request
    if (!username || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // verify admin token
    const isAdmin = await verifyAdmin(token);
    if (!isAdmin) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    // check if admin already exists
    const existingAdmin = await admin.findOne({ username });
    if (existingAdmin) {
      res.status(409).json({ message: "Admin already exists" });
      return;
    }

    // create new admin
    const passwordHash = await generateHash(password);
    const newAdmin = await admin.create({ username, passwordHash });

    res
      .status(201)
      .json({ message: "Admin created successfully", admin: newAdmin });
  } catch (err) {
    console.log("Error creating admin - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}
