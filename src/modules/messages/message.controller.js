import { messageModel } from "../../../databases/models/message.model.js"

const getAllMessages =  async(req,res) =>{

    const id = req.userId;

    const messages = await messageModel.find({receivedId: id})

    if(messages){

        return res.status(200).json({message: "Messages founded successfully",messages})
    }
    res.status(400).json({message: "Messages not founded"})
    }


const addMessage = async(req,res) =>{

    const {message,receivedId} = req.body;

   let newMessage =  await messageModel.insertMany({message,receivedId})

   if(newMessage)

    return res.status(200).json({message: "Message added successfully"})
   

   res.status(400).json({message: "Message not added"})
}


const deletedMessage = async(req,res) =>{


    const {id} = req.body;

    let deletedMessage = await messageModel.findByIdAndDelete(id)

    if(deletedMessage){

        return res.status(200).json({message: "Message deleted successfully"})

    }
    
    res.status(400).json({message: "Message not deleted"})
}


export{
    getAllMessages,
    addMessage,
    deletedMessage
}