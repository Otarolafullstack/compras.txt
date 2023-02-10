import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import ActivadesPage from './page/Actividades';
import AsistenciaPage from './page/Asistencia';
import HomePage from './page/Home';
import PaquetesPage from './page/Paquetes';
import VuelosPage from './page/Vuelos';




function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Vuelos" element={<VuelosPage />} />
          <Route path="/Activades" element={<ActivadesPage />} />
          <Route path="/Paquetes" element={<PaquetesPage />} />
          <Route path="/Asistencia" element={<AsistenciaPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
