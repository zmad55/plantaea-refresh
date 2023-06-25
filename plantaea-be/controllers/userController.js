import generateToken from "./../utils/generateToken.js";
import User from "./../models/userModel.js";
import asyncHandler from 'express-async-handler';
import bcrypt from "bcrypt"

// @desc    User login
// @route   GET api/user/login
// @access  Private
export const userLogin = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    // Check for missing fields
    if (!username || !password) {
        return res.status(400).send({ success: false, message: "Username and password are required." });
    }

    // Find user with the given username
    const user = await User.findOne({ username: username }).select('+password');
    if (!user) {
        return res.status(401).send({ success: false, message: 'Invalid username or password.' });
    }

    // Check if password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        return res.status(401).send({ success: false, message: 'Invalid username or password.' });
    }

    generateToken(res, user._id)
    res.status(200)
        .json({
            success: true,
            message: "Login successful",
            user: user.username,
            userId: user._id
        })
});

// @desc    Get user profile
// @route   GET api/user/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            user: user.username,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Create new user account
// @route   GET api/user/register
// @access  Private
export const userRegister = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    // Check for missing fields
    if (!username || !password) {
        res.status(401).send({ success: false, message: "Username, email and password are required" });
        return;
    }

    // Check if the user with that username already exists
    const user = await User.findOne({ username: username });
    if (user) {
        res.status(401).send({ success: false, message: "Username already exists" });
        return;
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashPassword = await bcrypt.hash(password, salt);

    // Create the user
    await new User({ username, password: hashPassword }).save();
    res.status(201).send({ success: true, message: "User created successfully" })
});

// @desc    Logs out current user
// @route   GET api/user/logout
// @access  Private
export const userLogout = asyncHandler(async (req, res) => {
    // Obtain jwt secret from client
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: newDate(0),
    })

    res.status(200), json({ message: 'User logged out' })
});


