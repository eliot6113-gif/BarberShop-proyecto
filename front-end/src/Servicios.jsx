import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Servicios() {
  const navigate = useNavigate();
  const listaServicios = [
    { nombre: 'Corte Clásico', precio: 'S/. 35.00', tiempo: '30 min' },
    { nombre: 'Fade / Degradado', precio: 'S/. 45.00', tiempo: '45 min' },
    { nombre: 'Corte + Barba', precio: 'S/. 60.00', tiempo: '60 min' },
    { nombre: 'Diseño / Tinte', precio: 'S/. 75.00', tiempo: '70 min' },
  ];

  return (
    <div className="app-container">
      <header className="hero-section hero-small">
        <h1 className="logo-title" onClick={() => navigate('/')}>@BarberShop</h1>
      </header>
      <main className="center-page">
        <div className="cinematic-panel list-panel">
          <h2>Servicios y Tarifas</h2>
          <ul className="item-list">
            {listaServicios.map((s, idx) => (
              <li key={idx} className="list-item">
                <div className="item-details">
                  <strong>{s.nombre}</strong>
                  <small>⏱ Tiempo estimado: {s.tiempo}</small>
                </div>
                <span className="price-tag">{s.precio}</span>
              </li>
            ))}
          </ul>
          <button className="btn-outline mt-4" onClick={() => navigate('/')}>Volver al Inicio</button>
        </div>
      </main>
    </div>
  );
}