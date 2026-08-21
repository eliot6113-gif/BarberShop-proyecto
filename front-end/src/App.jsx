import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NuevaCita from './NuevaCita';
import ListaCitas from './ListaCitas';
import Exito from './Exito';
import Servicios from './Servicios';
import Barberos from './Barberos';
import Promociones from './Promociones';
import Contacto from './Contacto';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nueva-cita" element={<NuevaCita />} />
        <Route path="/citas" element={<ListaCitas />} />
        <Route path="/exito" element={<Exito />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/barberos" element={<Barberos />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}