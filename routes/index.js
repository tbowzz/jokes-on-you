var express = require('express');
var router = express.Router();

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

module.exports = router;

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

router.get('/joke', function(req,res,next)
{
	var URL = "http://api.yomomma.info/";
	var client = new HttpClient();
	client.get(URL, function(response) 
	{
		res.status(200).json(response);
	});
});


