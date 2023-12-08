import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

const User = mongoose.model("address", userSchema);

export default User;
