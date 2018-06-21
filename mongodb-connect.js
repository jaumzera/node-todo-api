const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb://localhost:27017/todoApp";

MongoClient.connect(
  URL,
  (err, client) => {
    if (err) {
      console.log("Unable to connect db");
      return;
    }
    console.log("Connected to MongoDB server");

    const db = client.db("todoApp");

    // db.collection('todos').insertOne(
    //   {
    //     text: 'Something to do',
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert ToDo');
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection('users').insertOne(
    //   {
    //     name: 'Joao Massan',
    //     age: 34,
    //     location: 'Londrina, PR, Brazil'
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert ToDo');
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    client.close();
  }
);
