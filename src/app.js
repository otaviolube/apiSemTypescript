const express = require('express');

class App{

    constructor(){
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();
    }

    database(){
        require('./database');
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        require('./app/routes/index')(this.express);
    }
}

module.exports = new App().express;