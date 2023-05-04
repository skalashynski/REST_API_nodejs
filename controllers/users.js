import {v4 as uuidv4} from "uuid";


let users = [
    {
        "uuid": uuidv4(),
        "name": "John",
        "surname": "Doe",
        "age": 25
    }
];

export const createUser = (req, res) => {
    const newUser = req.body;
    users.push({...newUser, uuid: uuidv4()});
    res.send(`User with name ${newUser.name} added to DB`);
}

export const getUser = (req, res) => {
    res.send(users)
}

export const getUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find(e => e.uuid == id)
    if (user) {
        res.send(user).status(200);
    } else {
        res.status(404).send();
    }
}

export const deleteUser = (req, res) => {
    users = users.filter(e => e.uuid != req.params.id);
    res.send();
}

export const updateUser = (req, res) => {
    const userToUpdate = users.find(e => e.uuid = req.params.id);
    const {name, surname, age} = req.body;
    if (name) {
        userToUpdate.name = name;
    }
    if (surname) {
        userToUpdate.surname = surname;
    }
    if (age) {
        userToUpdate.age = age;
    }
    res.send();
}