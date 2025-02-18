import UsersModel from '../models/users.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userController = {}

userController.registerUser = async (req, res) => {
    const {name, last_name, email, password} = req.body
    try {
        const existUser = await UsersModel.findOne({email})
        if(existUser) {
            return res.status(400).send({message: 'The user already exist'})
        }

        const encryptedPassword = await bcrypt.hash(password, 10)

        const newUser = new UsersModel({
            name,
            last_name,
            email,
            password: encryptedPassword
        })

        await newUser.save();

        res.status(201).send({message: 'The user has been created correctly.'})
    } catch (ex) {
        res.status(500).send({message: "An error occurred while registering", error: ex.message})
    }
}

userController.loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await UsersModel.findOne({email})
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" });

        res.json({ message: "Login successful", token});

    } catch (ex) {
        res.status(500).json({ message: "An error occurred while logging in", error: ex.message });
    }
}

export default userController