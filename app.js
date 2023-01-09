const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy());

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to Xmen API Challenge'});
});

app.listen(3000, () => console.log('Server started at port 3000'));