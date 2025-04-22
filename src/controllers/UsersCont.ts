// Gets info from models/Users.ts
import {User} from '../models/Users.js';
import { Request, Response } from 'express';
// import { Types } from 'mongoose';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
}

export const getUsersById = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const user = await User.findById(req.params.id)
            .populate('thoughts') // Assuming 'thoughts' is a field in the User schema
            .populate('friends'); // Assuming 'friends' is a field in the User schema
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
}
// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
}
// Update a user by its _id
export const updateUser = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
}
// Delete a user and remove them from the database
export const deleteUser = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
}