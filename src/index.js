
const express = require("express");
const connection = require("./config")
const port = 3002;
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser())

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


app.listen(port, () => {
    console.log(`Server is runing on 3002`);
  });


