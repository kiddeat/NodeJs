console.log("Criando um servidor com NodeJs");
console.log("Aula 01");

var http = require('http');


var server = http.createServer(function(req,res){
    var categoria = req.url;
    
    if(categoria == '/tecnologia'){

        res.end("<html><head><title>Curso de NodeJs</title></head><body><h1>Portal de Tecnologia com NodeJs</h1></body></html>");

    }else if(categoria == '/moda'){

        res.end("<html><head><title>Curso de NodeJs</title></head><body><h1>Portal de Moda com NodeJs</h1></body></html>");

    }else if(categoria == 'Beleza'){

        res.end("<html><head><title>Curso de NodeJs</title></head><body><h1>Portal de Beleza com NodeJs</h1></body></html>");

    }else{

        res.end("<html><head><title>Curso de NodeJs</title></head><body><h1>Portal de noticias com NodeJs</h1></body></html>");

    }    

});

server.listen(3000);