const express = require('express');
const cors = require('cors');
class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';
        //Middlewares
        this.middleware();
        //App routes
        this.routes();
    }

    middleware(){
        this.app.use(cors());
        //read and parse json
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));        
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        });
    }
}

module.exports = Server;