const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080
        this.usersPath = '/api/users'

        //Middlewaares - Functions that will add functionality to our webserveer.
        this.middlewares()

        //App routes
        this.routes()
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Reading and parsing body from Post
        this.app.use( express.json() )

        //Public folder
        this.app.use( express.static('public') )
    }

    routes() {
       this.app.use( this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running at port:', this.port)
        })
    }
}

module.exports = Server
