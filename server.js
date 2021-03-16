const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const publicPath = path.resolve('./public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(publicPath + '/index.html')
})

app.listen(port, () => console.log(`Quiz Server running on port ${port}!`))


// This page is just setting up a basic express server - - - - - - - - - - - - -