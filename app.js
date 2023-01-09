const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to Xmen API Challenge'});
});

app.listen(3000, () => console.log('Server started at port 3000'));