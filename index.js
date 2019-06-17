const http = require('http');
const fs = require ('fs');
const port = 3000;


// handles HTTP requests
const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)

  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;
  
  console.log('success');  

  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if(err) {
  	return console.log(`You have an error: ${err}`);
  }

  console.log(`server is listening on ${port}`);
});