

import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({

    name:{

        type: String,
        required: true,
        minLength : [3, "Name must be at least 3 characters"],
        maxLength : 30,
    } ,

    email:{

        type: String,
        required:true,
        unique: true,
    },

    // confirmEmail:{

    //     type: Boolean,
    //     default: false,
    //     required: true
    // },


    password:{
        type: String,
        required: true,
        minLength:[6,"password must be at least 6 characters"],
    },

    age:{

        type:Number,
        required: true,
        min: 18,
        max: 100
    }

})

export const userModel =  mongoose.model("user", userSchema);

