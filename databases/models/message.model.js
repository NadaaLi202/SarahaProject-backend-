

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

message:{

    type: String,
    required:true,
    minLength : [4, "Message must be at least 4 characters"],
},

receivedId:{

    type : mongoose.Schema.Types.ObjectId,
    // ref : "user",
    required: true,
}
})


export const messageModel = mongoose.model("message", messageSchema);