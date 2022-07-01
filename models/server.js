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
        this.app.get('/api', function (req, res) {
            res.status(201).json({
                msg:'Get Api'
            })
        });

        this.app.put('/api', function (req, res) {
            res.json({
                msg:'Put Api'
            })
        });
        this.app.post('/api', function (req, res) {
            res.json({
                msg:'Post Api'
            })
        });
        this.app.delete('/api', function (req, res) {
            res.json({
                msg:'Delete Api'
            })
        });
        
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        });
    }
}

module.exports = Server;