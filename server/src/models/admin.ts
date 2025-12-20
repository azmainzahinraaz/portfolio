import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

export default mongoose.model("Admin", adminSchema);
