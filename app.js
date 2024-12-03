const express = require('express'); 
const dbconnect = require('./config');
const ModelUser = require( "./model");
const app = express();

const router = express.Router();

app.use((req, res, next) => { 
    if (req.originalUrl === '/favicon.ico') { 
            res.status(204).end(); 
            return; 
        } 
        next(); 
    });

//CREATE
router.post("/registrer", async(req,res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create (body)
    res.send(respuesta)
})

// INICIO DE SESIÓN 
router.post("/login", async(req, res) => { 
    const { nomuser, password } = req.body; 
    const user = await ModelUser.findOne({ nomuser: nomuser });
    
    if (user && user.password === password) { 
        res.send("Autenticación satisfactoria"); 
    } else { 
        res.status(401).send("Error en la autenticación"); 
    } 
});

//CONSULTAR
router.get("/", async(req,res) =>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta)

})

//CONSULTAR POR ID
router.get("/:id", async(req,res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById ({_id:id})
    res.send(respuesta)
})

//ACTUALIZAR
router.put("/:id", async(req,res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate ({_id:id},body);
    res.send(respuesta)
}) 

//ELIMINAR
router.delete("/:id", async(req,res) =>{
    const id = req.params.id
    const respuesta = await ModelUser.deleteOne ({_id:id})
    res.send(respuesta)
})


app.use(express.json());
app.use(router);

app.listen(3005, ()=>{
    console.log("El servidor esta en el puerto 3005")
})
 dbconnect();