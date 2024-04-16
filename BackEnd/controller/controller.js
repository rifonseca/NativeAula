const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async(req,res)=>{
        res.status(200).json({msg: "The API is running!!!"})
    }
};

module.exports = userController;
