import express from 'express';
import {createUser, deleteUser, getUser, getUserById, updateUser} from "../controllers/users.js";


const userRoute = express.Router();

userRoute.get('/', getUser );

userRoute.post('/', createUser);


userRoute.get('/:id', getUserById)

userRoute.delete('/:id', deleteUser )

userRoute.patch('/:id', updateUser)

export default userRoute;