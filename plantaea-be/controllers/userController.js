import generateToken from "./../utils/generateToken.js";
import User from "./../models/userModel.js";
import asyncHandler from 'express-async-handler';
import bcrypt from "bcrypt"

// Log in to an existing user
const login = async (req, res) => {
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
        const token = generateToken(res, user._id)
        res.status(200)
            .json({
                success: true,
                message: "Login successful",
                user: user.username,
                userId: user._id
            })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// @desc    Get user profile
// @route   GET api/user/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
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

// Create a new user
const register = async (req, res) => {
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

// // Logs out user
// export const logout = async (req, res) => {
//     try {
//         // Get the token from the request header
//         const token = res.cookies('token');
//         if (!token) {
//             return res.status(401).json({ message: 'No token provided' });
//         }

//         // Verify the token and get the user ID
//         const decoded = jwt.verify(token, config.secret);
//         const userId = decoded.user._id;

//         // Remove the token from the user's token array
//         const user = await User.findByIdAndUpdate(
//             userId,
//             { $pull: { tokens: { token: token } } },
//             { new: true }
//         );

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({ message: 'Logout successful' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// }

// Logs out user
const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: newDate(0),
        })

        res.status(200), json({ message: 'User logged out' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export { register, login, getUserProfile, logout };


