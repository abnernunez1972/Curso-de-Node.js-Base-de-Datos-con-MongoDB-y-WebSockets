require("dotenv").config();

const config = {
     dbUrl : process.env.DB_URL ||  'mongodb+srv://abner:UTVaDzNyc7xuBxwh@cluster0.y9pjg.mongodb.net/Platzi?retryWrites=true&w=majority',
     port: process.env.PORT || 3000,
     host: process.env.HOST || 'http://localhost',
     publicRoute: process.env.PUBLIC_ROUTE || '/app',
     
}

module.exports = config;