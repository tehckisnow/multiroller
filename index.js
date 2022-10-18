const express = require('express');
const app = express();
const port = 5000;
// 3000 - 8000

app.get('/', (req, res) => {                     // get requests to the root ("/") will route here
  res.sendFile('index.html', {root: __dirname})  // server responds by sending index.html to client's browser
                                                 //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});


app.listen(port, () => {         // server starts listening for attempts from a client to connect to port {port}
  console.log(`Now listening on port ${port}`);
});

// start the server using:
// node index.js
