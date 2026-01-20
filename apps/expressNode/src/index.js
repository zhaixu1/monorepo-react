const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        code: 200,
        message: 'Hello World',
        data: {
            name: 'John',
            age: 20,
        },
    });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})