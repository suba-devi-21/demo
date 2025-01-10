const logger = (req, res, next) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request time: ${new Date()}`);
    console.log(`Request IP: ${req.ip}`);
    console.log(`Request body: ${JSON.stringify(req.body)}`);
    console.log(`Request headers: ${JSON.stringify(req.headers)}`)
    console.log(`request params: ${JSON.stringify(req.params)}`)
    console.log(`request query:${JSON.stringify(req.query)}`)
    console.log("----------------------------------");
    
    next();
 }

 module.exports =logger