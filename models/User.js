import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    phoneNumber: { type: String, unique: true, required: true },
    role: { type: String, },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
