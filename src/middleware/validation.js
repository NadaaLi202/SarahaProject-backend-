


export const validation = (schema) => {


    return (req,res,next) =>{

        let {error} = schema.validate(req.body,{abortEasly :false })

        console.log(error);
        
        if(!error){

            next()
        }else{
            res.status(400).json({errors: error.details})
        }
    }
}