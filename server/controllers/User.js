import { User } from "./../models/users.js"

export const createUser = async (req, res) => {
    try {
        // Check for missing fields
        if (!req.body.username || !req.body.password) {
            return res.status(400).send({
                message: 'Username and password are required'
            });
        }

        // Check if user with same username already exists
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(410).send({
                success: false,
                message: 'Username already exists'
            });
        }

        const user = new User({
            username: req.body.username,
            password: req.body.password
        });

        const savedUser = await user.save();
        res.send(savedUser);

    } catch (error) {
        console.log(error.message);
        res
            .status(500)
            .json({ success: false, message: "Error creating user.", error_message: error.message });
    }
}
