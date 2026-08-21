import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/citas?buscar=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="app-container">
      <header className="hero-section">
        <h1 className="logo-title">@BarberShop</h1>
        <form onSubmit={handleSearch} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Buscar tu cita por nombre..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
      <main className="cards-grid">
        <div className="card" onClick={() => navigate('/nueva-cita')}>
          <div className="icon">🔖</div>
          <h3>Nueva Cita</h3>
          <p>Reserva tu espacio con nuestros barberos</p>
        </div>
        <div className="card" onClick={() => navigate('/citas')}>
          <div className="icon">💳</div>
          <h3>Ver Citas</h3>
          <p>Consulta, edita o elimina tus citas pendientes</p>
        </div>
        <div className="card" onClick={() => navigate('/servicios')}>
          <div className="icon">🛒</div>
          <h3>Servicios Y Precios</h3>
          <p>Descubre nuestro servicio y los mejores precios</p>
        </div>
        <div className="card" onClick={() => navigate('/barberos')}>
          <div className="icon">👤</div>
          <h3>Barberos</h3>
          <p>Conoce a nuestro gran equipo profesional</p>
        </div>
        <div className="card" onClick={() => navigate('/promociones')}>
          <div className="icon">🚚</div>
          <h3>Promociones</h3>
          <p>Descuentos y beneficios exclusivos para ti</p>
        </div>
        <div className="card" onClick={() => navigate('/contacto')}>
          <div className="icon">💼</div>
          <h3>Contacto / Legal</h3>
          <p>Contáctanos y conoce más de nosotros</p>
        </div>
      </main>
    </div>
  );
}