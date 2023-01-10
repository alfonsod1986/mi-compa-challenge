const express = require('express');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 8080;

app.use(helmet.hidePoweredBy());

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to Xmen API Challenge'});
});

app.listen(port, () => console.log(`Server started on port ${port}`));