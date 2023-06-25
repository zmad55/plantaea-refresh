import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: [6, "Password must be at least 6 characters long"], select: false }
}, { timestamps: true, });

const User = mongoose.model("User", userSchema);

// const validate = (data) => {
//     const schema = Joi.object({
//         username: Joi.string().required().label("username"),
//         password: Joi.string().required().label("password")
//     });
//     return schema.validate(data);
// };

export default User;