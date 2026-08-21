import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contacto() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <header className="hero-section hero-small">
        <h1 className="logo-title" onClick={() => navigate('/')}>@BarberShop</h1>
      </header>
      <main className="center-page">
        <div className="cinematic-panel">
          <h2>Contacto y Ubicación</h2>
          <div style={{ color: '#aaa', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <p><strong>📍 Dirección:</strong> Av. Principal 1450, Lima</p>
            <p><strong>📞 Teléfono / WhatsApp:</strong> +51 999 888 777</p>
            <p><strong>🕒 Horarios de Atención:</strong> Lunes a Sábado de 10:00 AM a 8:00 PM</p>
            <p><strong>⚖ Legal:</strong> Proyecto Académico Institucional - Idat 2026</p>
          </div>
          <button className="btn-outline mt-4" onClick={() => navigate('/')} style={{ width: '100%' }}>Volver al Inicio</button>
        </div>
      </main>
    </div>
  );
}