import jwt from "jsonwebtoken";

export const auth = (req,res,next) => {

    const token = req.header('token')

    jwt.verify(token,'NadaAli',(err,decoded) =>{

        if (err)
            return res.status(401).json({message: "invalid token",err})

        req.userId = decoded.user._id
        next()
    })

}