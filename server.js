// This page is just setting up a basic express server - - - - - - - - - - - - -
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const publicPath = path.resolve('./public');
// Heroku = 
// npm run build - to create build folder 
// Update line 5 to point to new build'./public/build'
// Follow heroku start up guide for new app here - https://devcenter.heroku.com/articles/git
// git push heroku master - to push to heroku..let run its build sequence, check heroku live app


// Sets up Static File Sever below on one line
app.use(express.static(publicPath));

// Create Path to 'index.html' page, and use * 404 path selector to direct any other inputted paths to index.html
app.get('*', (req, res) => {
    res.sendFile(publicPath + '/index.html')
})

// Telling the express server to listen and to console log inside 'Node' what server it is listening on
app.listen(port, () => console.log(`Quiz Server running on port ${port}!`))