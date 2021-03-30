require('dotenv').config();

const express = require('express');
const app = express();


app.use(express.json());


app.get("/", (req, res)=>{
    res.send('Mira! estoy haciendo una peticion get');
})

const productosRouter = require('./routes/producto')

app.use('/producto', productosRouter);

const puerto = process.env.PORT;
app.listen(3000, () => console.log(`Servidor Iniciado en : http://localhost:${puerto}`));