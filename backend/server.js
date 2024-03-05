require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/route')

const cors = require('cors');

const mongoose = require('mongoose');
const {requireAuth} = require('./middleware/authMiddleware');
const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');

const app = express();
//middleware

app.use(cors({
    origin: 'http://localhost:3000', // Adjust the origin to match your frontend URL
    credentials: true, // Enable credentials (cookies)
  }));
  

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

app.use(cookieParser());

app.use(express.json());

//routes
app.use('/', userRoutes);

app.get('/', (req, res)=> {
    // console.log('Request to /donate');
    res.json({mssg: 'Welcome to this app'})
})

app.get('/home', (req,res)=> {
    console.log(req.headers);
    const token = req.headers.authorization;
    console.log(token);
    jwt.verify(token, 'Aryan secret key', (err, decodedToken) => {
        if(err){
            console.log('Failed to verify token:', err.message);
        } else {
            console.log(decodedToken)
            if(decodedToken.type == 'investor'){
                res.json({mssg: "Here is the home page for investor"})
            } else {
                res.json({mssg: "Here is the home page for founder"})
            }
            
        }
    })
    
})

mongoose.connect(process.env.MONGO_URL).then(()=> {
    //Listen for requests
    app.listen(process.env.PORT, ()=> {
        console.log("Server started on port & connected to MongoDB", process.env.PORT)
    })
}).catch((error)=>{
    console.log(error);
})