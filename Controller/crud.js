

const addNotes = (req,res) => {
     try {
        
        res.status(200).json('Message is done')
     } catch (error) {
         res.status(400).json({message:error})
     }
}


const adddata = (req,res) =>{ 
    try {
        res.status(200).json('data is set')
    } catch (error) {
        res.status(400).json({message:error})
    }
}

module.exports = {addNotes,adddata}