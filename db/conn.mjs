import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://Bakshe:cCNiEIIeDeU4Q8Nv@mongopractice.f6xo0.mongodb.net/";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;