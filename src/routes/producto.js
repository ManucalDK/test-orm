const express = require('express');
const router = express.Router();

/**
 * C - Crear - Post
 * R - Leer - Get
 * U - Actualizar - Patch
 * D - Eliminar - Delete
 */

router.get('/', (req, res) =>{
    console.log('Listar Todos Los Productos');
    res.send('Listar Todos Los Productos');
});

router.get('/:id', (req, res) =>{
    let id = req.params.id;
    console.log(`Info del producto: ${id}`);
    res.send(`Info del producto: ${id}`);
});

router.post('/', (req, res) => {
    let producto = req.body;
    console.log('Crear Producto:');
    console.log(producto);
    res.send({
        mensaje : "Crear Producto",
        objeto : producto
    });
});

router.patch('/:id', (req, res) =>{
    let id = req.id;
    let producto = req.body;
    console.log('Modificar Producto:');
    console.log(producto);
    res.send({
        mensaje : `Modificar Producto: ${id}`,
        objeto : producto
    });
});

router.delete('/:id', (req, res) =>{
    let id = req.id;
    let producto = req.body;
    console.log('eliminar Producto:');
    console.log(producto);
    res.send({
        mensaje : `Eliminar Producto: ${id}`,
        objeto : producto
    });
});

module.exports = router;