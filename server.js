// GRAB THE PACKAGES / VARIABLES WE NEED
// ==================================================
var express = require('express');
var app     = express();
var ig      = require('instagram-node').instagram();

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure the view engine ejs
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: 'YOUR_TOKEN_ACCES_GO_HERE',
});

// SET THE ROUTES
// ===================================================
// home page route - our profile's images
app.get('/', function(req, res){
    // instagram package to get our get our profile's media
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
        // render the home and pass in the popular images
        res.render('pages/index', {grams: medias});
    });
});

// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');
