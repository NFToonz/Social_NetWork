// Gets Info from controllers files
import { Router } from 'express';
const router = Router();

// Import the User controller functions
import { 
    getUsers, 
    getUsersById, 
    createUser, 
    updateUser, 
    deleteUser } from '../../controllers/UsersCont.js';

// Get all users
Router.get('/', getUsers); // Get all users

// Get a user by ID
Router.get('/:id', getUsersById); // Get a user by ID

// Create a new user
Router.post('/', createUser); // Create a new user

// Update a user by ID
Router.put('/:id', updateUser); // Update a user by ID

// Delete a user by ID
Router.delete('/:id', deleteUser); // Delete a user by ID

// Export the router
export default router;
// This code defines the routes for user-related operations in an Express application.