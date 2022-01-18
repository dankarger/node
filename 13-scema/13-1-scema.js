const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { MongoClient, ObjectId } = require("mongodb");
const Url = require("url");

const URL= process.env.URL_MONGO
const client = new MongoClient(URL);

async function run() {
    try {
        await client.connect();
        await client.db("users13").command({ ping: 1 });
        console.log("Connected successfully to server");
        const db =client.db("users13")
        const user = await db.collection('users').insertOne({name:"user2",email:'email2',posts:[],
        })

            .catch(err => console.error(`Failed to insert documents: ${err}`))
        const post = await db.collection('post').insertOne({title:"post1",content:"content1",author:user.insertedId,
        })
            // .then( await db.collection('users').updateOne({_id:user.insertedId}, {$push:{posts:post.insertedId}}))
         await db.collection('users').updateOne({_id:user.insertedId}, {$push:{posts:post.insertedId}})


            .catch(err => console.error(`Failed to insert documents: ${err}`))

    } finally {
        await client.close();
    }
}
run().catch(console.dir);

