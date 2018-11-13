# node-rest
A simple rest-api made with node.js and mongoDB as a practice of Web Developing

## Features
-[MongoDB](https://www.mongodb.com/) as Database and [mongoose](https://mongoosejs.com/) for database models.                        

-[Express](https://expressjs.com/es/) for REST-API operations.

-[Bcrypt](https://www.npmjs.com/package/bcrypt) to hash the stored passwords and to make them safier.

-[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) for authentication.

-[morgan](https://www.npmjs.com/package/morgan) as HTTP request logger middleware.

-[body-parser](https://www.npmjs.com/package/body-parser) to parse the request body.

-[multer](https://www.npmjs.com/package/multer) for image uploads in the request body.


## For run this program you need:
-Node.js

-NPM

-MongoDB.

## Start the program:

-Enter the project folder.


-Add your Mongo Atlas Cluster (or your db path if you are running a local mongodb database) link in the mongoose.connect() function.

```javascript
mongoose.connect(''+ process.env.MONGO_ATLAS+'',{useNewUrlParser: true})//replace with your Mongo Atlas Cluster here
.then(db => console.log('DB connected'))
.catch(err =>console.error(err));
mongoose.set('useCreateIndex', true);
```

-Add your admin user password into "MONGO_ATLAS_PW" in nodemon.js (only if you're using mongo atlas)
```
{
    "env" : {
        "MONGO_ATLAS_PW": "Your admin user password here",
        "JWT_KEY": "secret"
    }
}
```
  
-Open a terminal in the folder and run this command

```bash
npm start
```
(this command will execute nodemon server.js and morgan)


-Test with Postman making http requests in the localhost:3000 (only GET, POST, PATCH AND DELETE)

## To do list:   

-Make a client using Vue.js                                                                      
