import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Promociones() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <header className="hero-section hero-small">
        <h1 className="logo-title" onClick={() => navigate('/')}>@BarberShop</h1>
      </header>
      <main className="center-page">
        <div className="cinematic-panel text-center">
          <h2>Promociones de Temporada</h2>
          <div style={{ background: '#161616', padding: '25px', borderRadius: '12px', border: '1px solid #2a2a2a', margin: '20px 0' }}>
            <h3 style={{ color: '#8b5cf6', marginBottom: '10px' }}>20% OFF en Packs de Corte + Barba</h3>
            <p style={{ color: '#aaa', fontSize: '0.95rem' }}>Válido de martes a jueves presentando tu tarjeta de cliente frecuente o mencionando esta promoción en caja.</p>
          </div>
          <button className="btn-primary mt-4" onClick={() => navigate('/nueva-cita')}>Reservar con Promo</button>
          <br /><br />
          <button className="btn-outline" onClick={() => navigate('/')}>Volver al Inicio</button>
        </div>
      </main>
    </div>
  );
}