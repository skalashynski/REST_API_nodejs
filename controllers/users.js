import {v4 as uuidv4} from "uuid";
import {User} from "../models/userModel.js";


let users = [
    {
        "uuid": uuidv4(),
        "name": "John",
        "surname": "Doe",
        "age": 25
    }
];

export const createUser = async (req, res) => {
    const newUser = req.body;
    const savedUser = await User.create(newUser)
    res.send(`User with name ${savedUser.name} added to DB`);
}

export const getUser = async (req, res) => {
    const users = await User.find({})
    res.send(users)
}

export const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
        res.json(user).status(200);
    } else {
        res.status(404).send();
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const filter = {_id: id};
    await User.deleteOne(filter)
    res.send();
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const options = { returnOriginal: false };
    const updated = await User.findByIdAndUpdate(id, {$set: user}, options)
    res.json(updated);
}