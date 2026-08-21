import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ListaCitas() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('buscar') || '';

  const [citas, setCitas] = useState([]);
  const [filterText, setFilterText] = useState(searchParam);

  useEffect(() => {
    fetch('http://localhost:3000/citas')
      .then(res => res.json())
      .then(data => setCitas(data))
      .catch(err => console.error('Error cargando citas:', err));
  }, []);

  const eliminarCita = async (id) => {
    if (!window.confirm('¿Estás seguro de cancelar esta cita?')) return;
    try {
      const res = await fetch(`http://localhost:3000/citas/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setCitas(citas.filter(cita => cita.id !== id));
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  const editarCita = (cita) => {
    navigate('/nueva-cita', { state: { citaToEdit: cita } });
  };

  // Filtrado de citas (Criterio 5: Búsquedas y filtros)
  const citasFiltradas = citas.filter(cita => 
    cita.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
    cita.servicio.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="hero-section hero-small">
        <h1 className="logo-title" onClick={() => navigate('/')}>@BarberShop</h1>
      </header>
      <main className="center-page">
        <div className="cinematic-panel list-panel">
          <h2>Gestión de Citas Pendientes</h2>
          
          {/* Barra de filtrado local en vivo */}
          <input 
            type="text" 
            placeholder="Filtrar por cliente o servicio..." 
            className="search-filter-input"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />

          {citasFiltradas.length === 0 ? (
            <p className="no-data">No se encontraron citas registradas.</p>
          ) : (
            <ul className="item-list">
              {citasFiltradas.map(cita => (
                <li key={cita.id} className="list-item">
                  <div className="item-details">
                    <strong>{cita.nombre}</strong> - <span>{cita.servicio}</span> <br/>
                    <small>📅 {cita.fecha} ⏰ {cita.hora}</small>
                  </div>
                  <div className="action-buttons">
                    <button className="btn-edit" onClick={() => editarCita(cita)}>Editar</button>
                    <button className="btn-danger" onClick={() => eliminarCita(cita.id)}>Cancelar</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <button className="btn-outline mt-4" onClick={() => navigate('/')}>Volver al Inicio</button>
        </div>
      </main>
    </div>
  );
}