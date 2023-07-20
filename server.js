const app = require('./app')
const http = require('http');
const server = http.createServer(app)
const port = 3400;




server.listen(port ,()=>{
    console.log(`Server listening on port ${port}`);
})