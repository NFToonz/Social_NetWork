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

// /api/users
router.route('/')
      .get(getUsers)
      .post(createUser);


// /api/users/:userId
router.route('/:userId').get(getUsersById);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);

// // /api/users/:userId/friends
// router.route('/:userId/friends').get(getFriends);

// /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId')
//   .post(addFriend)
//   .delete(removeFriend);

// Export the router
export { router as userRoutes };
// This code defines the routes for user-related operations in an Express application.


// // Get all users
// // Insomnia: GET http://localhost:<port>/api/users
// router.get('/', async (req, res) => {
//     try {
//         await getUsers(req, res);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// // Get a user by ID
// // Insomnia: GET http://localhost:<port>/api/users/:id
// // Example: GET http://localhost:<port>/api/users/123
// router.get('/:id', async (req, res) => {
//     try {
//         await getUsersById(req, res);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// // Create a new user
// // Insomnia: POST http://localhost:<port>/api/users
// // Example Body:
// // {
// //   "name": "John Doe",
// //   "email": "john.doe@example.com",
// //   "password": "password123"
// // }
// router.post('/', async (req, res) => {
//     try {
//         await createUser(req, res);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// // Update a user by ID
// // Insomnia: PUT http://localhost:<port>/api/users/:id
// // Example: PUT http://localhost:<port>/api/users/123
// // Example Body:
// // {
// //   "name": "Jane Doe",
// //   "email": "jane.doe@example.com"
// // }
// router.put('/:id', async (req, res) => {
//     try {
//         await updateUser(req, res);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });

// // Delete a user by ID
// // Insomnia: DELETE http://localhost:<port>/api/users/:id
// // Example: DELETE http://localhost:<port>/api/users/123
// router.delete('/:id', async (req, res) => {
//     try {
//         await deleteUser(req, res);
//     } catch (error) {
//         res.status(500).json({ error: (error as Error).message });
//     }
// });