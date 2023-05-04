import {User} from "../models/user.js";

export const createUser = async (req, res) => {
    const newUser = req.body;
    const savedUser = await User.create(newUser)
    res.json(savedUser);
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
    const options = {returnOriginal: false};
    const updated = await User.findByIdAndUpdate(id, {$set: user}, options)
    res.json(updated);
}