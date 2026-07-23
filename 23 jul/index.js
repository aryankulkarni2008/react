const http=require('http')
const port = 3000;

const server=http.createServer((req,res)=>{
    res.setHeader("content.type","text/html");
    res.end("<h1>hello from node js</h1>");
})
server.listen(port,()=>{
    console.log(`server is listening on http://localhost:${port}` );
})