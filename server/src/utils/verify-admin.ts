import { verifyJWTToken } from "./jwt-token.js";
import admin from "../models/admin.js";

export async function verifyAdmin(token: string): Promise<boolean> {
  if (token) {
    // verify the token
    // const jwtToken = token.split(" ")[1]; //TODO: Bearer token
    const jwtToken = token;
    const verified = verifyJWTToken(jwtToken) as { adminId: string };
    if (!verified || !verified.adminId) {
      return false;
    }

    // verify the admin id
    const adminData = await admin.findById(verified.adminId).select("_id");
    if (adminData) {
      return true;
    }
  }

  return false;
}
