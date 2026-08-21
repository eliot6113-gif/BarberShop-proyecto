import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NuevaCita() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    barbero: 'Carlos',
    servicio: 'Corte Clásico',
    fecha: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/citas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate('/exito');
      }
    } catch (error) {
      console.error('Error al guardar cita:', error);
    }
  };

  return (
    <div className="app-container">
      <header className="hero-section hero-small">
        <h1 className="logo-title" onClick={() => navigate('/')}>@BarberShop</h1>
      </header>
      <main className="center-page">
        <div className="cinematic-panel">
          <h2>Nueva Cita</h2>
          <form onSubmit={handleSubmit} className="form-layout">
            <label>Nombre del Cliente</label>
            <input 
              type="text" 
              required 
              onChange={(e) => setFormData({...formData, nombre: e.target.value})} 
            />
            
            <label>Barbero</label>
            <select onChange={(e) => setFormData({...formData, barbero: e.target.value})}>
              <option value="Carlos">Carlos "The Blade" Ruiz</option>
              <option value="Alex">Alex Mendoza</option>
              <option value="Gianfranco">Gianfranco Silva</option>
            </select>

            <label>Servicio</label>
            <select onChange={(e) => setFormData({...formData, servicio: e.target.value})}>
              <option value="Corte Clásico">Corte Clásico</option>
              <option value="Fade / Degradado">Fade / Degradado</option>
              <option value="Corte + Barba">Corte + Barba</option>
              <option value="Diseño / Tinte">Diseño / Tinte</option>
            </select>

            <label>Fecha y Hora</label>
            <input 
              type="datetime-local" 
              required 
              onChange={(e) => setFormData({...formData, fecha: e.target.value})} 
            />
            
            <button type="submit" className="btn-primary mt-4">Confirmar Reserva</button>
            <button type="button" className="btn-outline mt-4" onClick={() => navigate('/')}>Cancelar</button>
          </form>
        </div>
      </main>
    </div>
  );
}