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
}
// Define the Thought interface
// This interface is used to define the structure of a thought document
// It extends the Document interface from mongoose
// The Thought interface includes the following properties:
interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
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
// Define the schema for the Thought model
// The schema defines the structure of a thought document
// It includes the following properties:
const ThoughtSchema = new Schema<IThought>({
    thoughtText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [{ type: Types.ObjectId, ref: 'Reaction' }]
    });

// Add a virtual for friendCount
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Add a virtual for reactionCount
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Ensure virtuals are included when converting to JSON
UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });

// Ensure virtuals are included when converting to JSON
ThoughtSchema.set('toJSON', { virtuals: true });
ThoughtSchema.set('toObject', { virtuals: true });

// Export the User and Thought models
// These models can be used to interact with the database
// and perform CRUD operations on user and thought documents
// export default { User, Thought };
export const User = model<IUser>('User', UserSchema);
export const Thought = model<IThought>('Thought', ThoughtSchema);
