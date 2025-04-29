//talking to the seeds Users.ts
import { Schema, Types, model, type Document } from 'mongoose';

// Define the User interface
// This interface is used to define the structure of a user document
// It extends the Document interface from mongoose
// The User interface includes the following properties:
interface IUser extends Document {
    username: string;
    email: string;
    thoughts: Types.ObjectId[];
    friends: Types.ObjectId[];
    reactions: Types.ObjectId[];
}


// Define the schema for the User model
// The schema defines the structure of a user document
// It includes the following properties:
const UserSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: [{ type: Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Types.ObjectId, ref: 'User' }]
});



// Add a virtual for friendCount
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});



// Ensure virtuals are included when converting to JSON
UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });



// Export the User and Thought models
// These models can be used to interact with the database
// and perform CRUD operations on user and thought documents
// export default { User, Thought };
export const User = model<IUser>('User', UserSchema);

