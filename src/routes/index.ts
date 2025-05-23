import { Router } from 'express';
const router = Router();
import { userRoutes } from './api/UserRoutes';


router.use('/api', userRoutes);

// router.use('/*', (_req, res) => {
//   res.status(404).send('Wrong route!');
// });

export default router;
// This code sets up the main routes for an Express application.
// It imports the necessary modules, including the Express router and the API routes.
// It defines a main router that uses the API routes and handles any undefined routes by sending a "Wrong route!" message.
// The router is then exported for use in the main application file.