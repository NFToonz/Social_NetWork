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
router.get('/', getUsers); // Get all users

// Get a user by ID
router.get('/:id', getUsersById); // Get a user by ID

// Create a new user
router.post('/', createUser); // Create a new user

// Update a user by ID
router.put('/:id', updateUser); // Update a user by ID

// Delete a user by ID
router.delete('/:id', deleteUser); // Delete a user by ID

// Export the router
export default router;
// This code defines the routes for user-related operations in an Express application.