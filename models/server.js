const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');
class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';
        this.authPath = '/api/auth';

        this.connectDB();
        //Middlewares
        this.middleware();
        //App routes
        this.routes();
    }

     async connectDB(){
        
        await dbConnection();
    }

    middleware(){
        this.app.use(cors());
        //read and parse json
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));  
        this.app.use(this.authPath, require('../routes/auth'));          
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        });
    }
}

module.exports = Server;