const mongoose = require ("mongoose");
const userModel = new mongoose.Schema(
    {
        nomuser:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelUser = mongoose.model("usuario",userModel);
module.exports = ModelUser;