const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Creator = require('../models/creator');



const signup = async (req, res) => {
    try {

        const {username, email, password} = req.body;

        // Check if user already exists
        const existingUser = await Creator.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Creator({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created' });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
        }
}

const login = async (req, res) => {
    try {

    const {email, password} = req.body

    // Check if user exists
    const user = await Creator.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ error: err.errors[0].message });
        }
        console.error('Error logging in:', err);
        res.status(500).json({ error: 'Error logging in' });
    }
}

const uploadStatus = async (req,res) => {
    try {
        console.log("reached uploadstatus")
        res.json({ 
            message: 'File uploaded successfully',
            filename: req.file.filename
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    signup,
    login,
    uploadStatus
};