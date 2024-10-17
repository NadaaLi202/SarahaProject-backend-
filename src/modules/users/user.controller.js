import { userModel } from "../../../databases/models/user.model.js";
import bcrypt  from "bcrypt";
import jwt from "jsonwebtoken";

const  signup = async (req,res) => {

const {name,email,password,age} = req.body ;


let user = await userModel.findOne({email})

if (user)

     return res.status(400).json({ message: " User already exists"});


    const hash = bcrypt.hashSync(password,8);
    await userModel.insertMany({name,email,password: hash,age});
    res.status(200).json({message: "user created"})
}

const signin = async (req,res) =>{

    const {email,password} = req.body

    let user = await userModel.findOne({email})

    if(!user || ( !await bcrypt.compare(password,user.password))){

        return res.status(400).json({message: "incorrect email or password"})
    }

    user.password = undefined; // return user without password
    const token = jwt.sign({user}, 'NadaAli')
    res.status(200).json({message: "login success",token})

    }


export {

    signup,
    signin
}