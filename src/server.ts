import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Create variable to hold our database name
const dbName = 'UserDB';

// Use connect method to connect to the mongo server
await client.connect()
.catch(err => {console.log(err)});

const db = client.db(dbName);

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

// Post request to create a single document to collection
app.post('/Users', async (req, res) => {
  try {
    // collection() creates or selects instance of collection. Takes in collection name
    // insertOne() inserts single document into collection. Takes in object.
    const results = await db.collection('bookCollection').insertOne(
      { title: req.body.title, author: req.body.author }
    )
    // Sends results
    res.status(201).json(results);
  }
  catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

// Post request to add multiple sample documents to collection
app.post('/books/seed', async (_req, res) => {
  try {
    const results = await db.collection('bookCollection').insertMany(
      [
        { "title": "Oh the Places We Will Go!" },
        { "title": "Diary of Anne Frank" }
      ]
    )

    // Sends results
    res.status(201).json(results);
  } catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

// Get request to read all the documents in a collection
app.get('/books', async (_req, res) => {
  try {
    const results = await db.collection('bookCollection')
      // find() returns all documents. Equivalent to `Select *` in SQL.
      .find({})
      // Returns all the documents in an array
      .toArray()
    // Sends results
    res.status(200).json(results);
  }
  catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


