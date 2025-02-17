import UsersModel from '../models/users.model.js'
import bcrypt from 'bcryptjs';

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

export default userController