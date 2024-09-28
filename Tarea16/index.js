const express = require('express');
const app = express();

// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir cuáles son los números pares e impares
const paresDefinidos = [2, 4, 6, 8, 10];
const imparesDefinidos = [1, 3, 5, 7, 9];

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Ruta principal con el formulario
app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Pares, Impares, Primos y Nombre</title>
        <style>
          button, input { margin: 10px; padding: 10px 20px; font-size: 16px; }
          body { text-align: center; font-family: Arial, sans-serif; padding-top: 50px; }
        </style>
      </head>
      <body>
        <h1>Verificar si un numero es par, impar, primo, y cuantas letras tiene tu nombre</h1>
        <form action="/resultado" method="POST">
          <label for="numero">Ingresa un numero entre 1 y 10:</label><br>
          <input type="number" name="numero" id="numero" min="1" max="10" required><br><br>
          <label for="nombre">Ingresa tu nombre:</label><br>
          <input type="text" name="nombre" id="nombre" required><br><br>
          <button type="submit">Verificar</button>
        </form>
      </body>
    </html>
  `);
});

// Ruta POST para procesar el formulario y verificar los datos
app.post('/resultado', (req, res) => {
    const numero = parseInt(req.body.numero, 10); // Convertir el valor ingresado en un número entero
    const nombre = req.body.nombre.trim(); // Tomar el nombre ingresado
    let mensaje;

    // Verificar si el número está entre los definidos como pares o impares
    if (paresDefinidos.includes(numero)) {
        mensaje = `El numero ${numero} es considerado par.`;
    } else if (imparesDefinidos.includes(numero)) {
        mensaje = `El numero ${numero} es considerado impar.`;
    } else {
        mensaje = `El numero ${numero} no está entre 1 y 10.`;
    }

    // Verificar si el número es primo
    if (esPrimo(numero)) {
        mensaje += ` Ademas, el numero ${numero} es primo.`;
    } else {
        mensaje += ` Ademas, el numero ${numero} no es primo.`;
    }

    // Contar cuántas letras tiene el nombre
    const cantidadLetras = nombre.length;
    mensaje += ` Tu nombre, ${nombre}, tiene ${cantidadLetras} letras.`;

    res.send(`
    <html>
      <head>
        <title>Resultado</title>
        <style>
          button { margin: 10px; padding: 10px 20px; font-size: 16px; }
          body { text-align: center; font-family: Arial, sans-serif; padding-top: 50px; }
        </style>
      </head>
      <body>
        <h1>${mensaje}</h1>
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
