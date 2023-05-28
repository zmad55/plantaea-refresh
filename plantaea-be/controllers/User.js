import { sendToken } from "../utils/sendToken.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

// Create a new user
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check for missing fields
        if (!username || !password) {
            return res.status(400).send({ success: false, message: "Username, email and password are required" });
        }

        // Check if the user with that username already exists
        const user = await User.findOne({ username: username });
        console.log(user)
        if (user) {
            return res.status(409).send({ success: false, message: "Username already exists" });
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        const hashPassword = await bcrypt.hash(password, salt);

        // Create the user
        await new User({ username, password: hashPassword }).save();
        res.status(201).send({ success: true, message: "User created successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Log in to an existing user
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check for missing fields
        if (!username || !password) {
            return res.status(400).send({ success: false, message: "Username, email and password are required" });
        }

        // Find user with the given username
        const user = await User.findOne({ username: username }).select('+password');
        if (!user) {
            return res.status(401).send({ success: false, message: 'Invalid username or password' });
        }

        // Check if password is correct
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).send({ success: false, message: 'Invalid username or password' });
        }

        // Log in the user
        const token = user.generateAuthToken();
        res.status(200)
            .cookie('token', token)
            .json({
                success: true,
                message: "Login successful",
                cookieToken: token,
                user: user.username,
                userId: user._id
            })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Verify
export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ success: false, message: 'Please login first' })

        console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        console.log(decoded)
        req.user = await User.findById(decoded._id)
        res.status(200).json({ success: true, message: 'User authenticated' });
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Logs out user
export const logout = async (req, res) => {
    try {
        // Get the token from the request header
        const token = res.cookies('token');
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Verify the token and get the user ID
        const decoded = jwt.verify(token, config.secret);
        const userId = decoded.user._id;

        // Remove the token from the user's token array
        const user = await User.findByIdAndUpdate(
            userId,
            { $pull: { tokens: { token: token } } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}


