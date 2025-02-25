const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Configurar conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '', 
  database: 'habilix' // Nombre de la base de datos actualizado
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

// Inicializar Express
const app = express();
app.use(cors());
app.use(express.json());

// Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('❌ Error en la consulta:', err);
      return res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
    res.json(results);
  });
});

// Crear un nuevo usuario
app.post('/usuarios', (req, res) => {
  const { nombre_usuario, email, password, role } = req.body;
  
  if (!nombre_usuario || !email || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const query = 'INSERT INTO usuarios (nombre_usuario, email, password, role, fecha_creacion) VALUES (?, ?, ?, ?, NOW())';
  
  db.query(query, [nombre_usuario, email, password, role], (err, results) => {
    if (err) {
      console.error('❌ Error al agregar el usuario:', err);
      return res.status(500).json({ error: 'Error al agregar el usuario' });
    }
    res.status(201).json({ message: '✅ Usuario agregado correctamente', id: results.insertId });
  });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend en http://localhost:${PORT}`);
});
