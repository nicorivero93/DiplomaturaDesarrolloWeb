const express = require('express');
const app = express();

// Ruta 1: Página principal con botones para las diferentes rutas
app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Pagina Principal</title>
        <style>
          button { margin: 10px; padding: 10px 20px; font-size: 16px; }
          body { text-align: center; font-family: Arial, sans-serif; padding-top: 50px; }
        </style>
      </head>
      <body>
        <h1>Bienvenido a la Pagina Principal</h1>
        <button onclick="location.href='/usuario'">Ir a Usuario</button>
        <button onclick="location.href='/saludo/Nico'">Ir a Saludo</button>
      </body>
    </html>
  `);
});

// Ruta 2: Página de usuario con botón para volver al inicio
app.get('/usuario', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Informacion de Usuario</title>
        <style>
          button { margin: 10px; padding: 10px 20px; font-size: 16px; }
          body { text-align: center; font-family: Arial, sans-serif; padding-top: 50px; }
        </style>
      </head>
      <body>
        <h1>Informacion de Usuario</h1>
        <p>Nombre: Lucas Nicolas Tome Rivero</p>
        <p>Edad: 30</p>
        <p>Profesion: Desarrollador</p>
        <button onclick="location.href='/'">Volver al Inicio</button>
      </body>
    </html>
  `);
});

// Ruta 3: Página de saludo personalizada con un botón para volver al inicio
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`
    <html>
      <head>
        <title>Saludo Personalizado</title>
        <style>
          button { margin: 10px; padding: 10px 20px; font-size: 16px; }
          body { text-align: center; font-family: Arial, sans-serif; padding-top: 50px; }
        </style>
      </head>
      <body>
        <h1>¡Hola, ${nombre}!</h1>
        <p>Bienvenido a nuestra aplicacion.</p>
        <button onclick="location.href='/'">Volver al Inicio</button>
      </body>
    </html>
  `);
});

// Servidor escucha en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
