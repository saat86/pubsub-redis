const express = require('express');
const redis = require('redis');

const publisher = redis.createClient()
publisher.connect()

const app = express()

app.get("/", (req, res) => {
    const message = {
        msg: "Hello, World"
    }

    publisher.publish('test', JSON.stringify(message))
    res.send("Published Event Using Redis");
})

app.listen(3002, () => {
    console.log('Server is listening on port 3002');
})