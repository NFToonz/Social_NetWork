import express from 'express';
import { userRoutes } from './routes/api/userRoutes.js'; // Adjust the path if necessary

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount the user routes
app.use('/api/users', userRoutes);

// ...existing code...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});