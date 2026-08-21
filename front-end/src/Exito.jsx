import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Exito() {
  const navigate = useNavigate();
  return (
    <div className="app-container center-page">
      <div className="cinematic-panel text-center">
        <div className="success-icon">✅</div>
        <h2>¡Operación Realizada con Éxito!</h2>
        <p style={{ color: '#888', marginBottom: '20px' }}>Los cambios se guardaron correctamente en el sistema.</p>
        <button className="btn-primary" onClick={() => navigate('/citas')}>Ver Listado de Citas</button>
      </div>
    </div>
  );
}