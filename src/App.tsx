import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import Home from './paginas/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';


function App() {

  return (
    <BrowserRouter>
      {/* Tudo que precisa ser renderizado na tela que vai direcionar para algum lugar fica aqui */}
      <Navbar />
      <Routes>

        
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {<Route path="/cadastrousuario" element={<CadastroUsuario />} />}
        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
