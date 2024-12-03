const mongoose = require('mongoose');

const dbconnect = async () => {
    mongoose.set("strictQuery", true)
    mongoose.connect('mongodb://127.0.0.1:27017/bdmongo')
    .then((success)=> console.log("Conexion exitosa"))
    .catch((err)=> console.log(err.message));
}

module.exports = dbconnect;
