# node-rest
A simple rest-api made with node.js and mongoDB as a practice of Web Developing

-For run this program you need:
-
-Node.js

-NPM

-Mongodb.

-Start the program:
-
-Enter the project folder.


-Add your Mongo Atlas Cluster (or your db path if you are running a local mongodb database) link in the mongoose.connect() function.        
-Change the key <PASSWORD> for '+process.env.MONGO_ATLAS_PW +'
  
-Add your admin user password into "MONGO_ATLAS_PW" in nodemon.js (only if you're using mongo atlas) 

-Run "npm start" (this command will execute nodemon server.js and morgan)                                                              
-Test with Postman making http requests in the localhost:3000 (only GET, POST, PATCH AND DELETE)

-To do list:   
-
-Make a client using Vue.js                                                                      
