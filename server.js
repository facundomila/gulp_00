var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/temp'));

app.get('/',function(request, response){
    response.send(__dirname + '/temp/index.html');
});

app.listen(port, function(){
    console.log('Server Express Ready!' + port);
});
