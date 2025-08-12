const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.end('Here is our short history');
    } else if (req.url === '/data' && req.method == 'POST') {
        let completeData = '';
        req.on('data', (chunks) => {
            console.log(chunks);
            console.log(chunks.toString());
            completeData += chunks.toString();
        })
        return res.end(`${completeData} something`);
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a> 
        `);
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:5000/');
});