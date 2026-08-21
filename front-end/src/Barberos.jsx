import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Barberos() {
  const navigate = useNavigate();
  const equipo = [
    { nombre: 'Carlos "The Blade" Ruiz', especialidad: 'Fade Master', exp: '5 años' },
    { nombre: 'Alex Mendoza', especialidad: 'Barba Clásica & Navaja', exp: '4 años' },
    { nombre: 'Gianfranco Silva', especialidad: 'Estilos Modernos & Texturas', exp: '6 años' },
  ];

  return (
    <div className="app-container">
      <header className="hero-section hero-small">
        <h1 className="logo-title" onClick={() => navigate('/')}>@BarberShop</h1>
      </header>
      <main className="center-page">
        <div className="cinematic-panel list-panel">
          <h2>Nuestro Equipo Profesional</h2>
          <ul className="item-list">
            {equipo.map((b, idx) => (
              <li key={idx} className="list-item">
                <div className="item-details">
                  <strong>{b.nombre}</strong>
                  <small>✂ {b.especialidad} • Experiencia: {b.exp}</small>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn-outline mt-4" onClick={() => navigate('/')}>Volver al Inicio</button>
        </div>
      </main>
    </div>
  );
}