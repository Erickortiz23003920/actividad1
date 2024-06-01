const express = require('express');
const app = express();
const PORT = 3000; // Puedes cambiar el puerto según tus necesidades

// Middleware para parsear JSON y configurar CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Array para almacenar estudiantes
const estudiantes = [];

// Endpoint para agregar un estudiante
app.post('/agregar-estudiante', (req, res) => {
    const { nombre, carnet, email } = req.body;
    const apiKey = req.headers.authorization;

    if (!nombre || !carnet || !email) {
        return res.status(400).json({ error: 'Faltan datos del estudiante' });
    }

    if (apiKey !== '123@') {
        return res.status(401).json({ error: 'ApiKey incorrecto' });
    }

    // Agregar el estudiante al array
    estudiantes.push({ nombre, carnet, email });
    res.status(201).json({ message: 'Estudiante agregado correctamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});