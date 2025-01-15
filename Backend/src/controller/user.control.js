import bcrypt from "bcrypt";
import crypto from 'crypto'; // Use lowercase 'crypto'
import { User } from "../model/user.model.js";

const registration = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existUser = await User.findOne({ username });
        if (existUser) {
            return res.status(409).json({ // 409 Conflict for already existing user
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ // 201 Created
            message: "You successfully registered",
        });
    } catch (e) {
        res.status(500).json({
            message: `Something went wrong during registration: ${e.message}`,
        });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({ // 400 Bad Request
                message: "Please provide both username and password",
            });
        }

        const findUser = await User.findOne({ username });
        if (!findUser) {
            return res.status(404).json({ // 404 Not Found
                message: "User not found",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, findUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ // 401 Unauthorized
                message: "Invalid password",
            });
        }

        const token = crypto.randomBytes(20).toString('hex');
        findUser.token = token; // Save the token to the user document
        await findUser.save();

        res.status(200).json({
            message: "You successfully logged in",
            token, // Return the token to the client
        });
    } catch (e) {
        res.status(500).json({
            message: `Something went wrong during login: ${e.message}`,
        });
    }
};

export { registration, login };
