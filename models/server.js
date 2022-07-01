const express = require('express');

class Server {
    constructor () {
        this.app = express()
        this.port = process.env.PORT;
        //Middlewares
        this.midleware();
        //App routes
        this.routes();
    }

    midleware(){
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/', function (req, res) {
            res.send('Hello World!!')
        });
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        });
    }
}

module.exports = Server;