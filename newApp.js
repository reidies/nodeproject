const http = require('http');
const { parse } = require('path');

const server = http.createServer((req, res)=> {
    const url = req.url;
    const body = [];
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment Page</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('<a href="/users">List users</a>');
        res.write('</html>');
        res.end;
    } else if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment Page</title></head>');
        res.write('<body>');
        res.write('<ul>');
        var bodySize = body.length();
        for (var i = 0; i < bodySize; i++){
            res.write('<l1>');
            res.write(body[i]);
            res.write('</l1>');
        }
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end;
    } else if (url === '/create-user'){
        req.on('data', chunk =>{
            body.push(chunk);
        });
        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end;
    }
});

server.listen(3000);