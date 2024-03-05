const jwt = require('jsonwebtoken')

const requireAuth = (req,res,next)=>{
    const token = req.headers.authorization;
    console.log(token)

    if(token){
        jwt.verify(token, 'Aryan secret key', (err,decodedToken) => {
            if(err){
                console.error(err.message);
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
       ;
    }
}

module.exports = {requireAuth};