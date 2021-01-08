const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const router = require('./routes/index.routes');

app.use(cors());
app.use('/api', router);

app.get("/", (req, res) => {
    res.send("Welcome to my checkpoint !")
})

module.exports = app;