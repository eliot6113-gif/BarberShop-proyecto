const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Base de datos en memoria (o tu conexión a base de datos)
let citas = [
  { id: 1, nombre: 'Juan Pérez', fecha: '2026-06-01', hora: '10:00', servicio: 'Corte Clásico' }
];

// 1. GET: Listar todas las citas
app.get('/citas', (req, res) => {
  res.json(citas);
});

// 2. POST: Registrar nueva cita
app.post('/citas', (req, res) => {
  const nuevaCita = { id: Date.now(), ...req.body };
  citas.push(nuevaCita);
  res.status(201).json(nuevaCita);
});

// 3. PUT: Actualizar / Modificar cita existente (Criterio 2 y 6 de la rúbrica)
app.put('/citas/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, hora, servicio } = req.body;
  
  let index = citas.findIndex(c => c.id == id);
  if (index === -1) return res.status(404).json({ error: 'Cita no encontrada' });

  citas[index] = { id: Number(id), nombre, fecha, hora, servicio };
  res.json(citas[index]);
});

// 4. DELETE: Cancelar / Eliminar cita
app.delete('/citas/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = citas.length;
  citas = citas.filter(c => c.id != id);
  
  if (citas.length === initialLength) {
    return res.status(404).json({ error: 'Cita no encontrada' });
  }
  res.json({ mensaje: 'Cita eliminada correctamente' });
});

app.listen(3000, () => {
  console.log('Servidor backend corriendo en http://localhost:3000');
});