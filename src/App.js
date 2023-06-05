// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import'./App.css'
// import Header from "./Header";
// import Nav from './Nav';
// import Footer from './footer';
import Header from "./componente/layout/Header";
import Nav from "./componente/layout/Nav";
import Footer from "./componente/layout/Footer"
// paginas
import HomePage from "./pages/Homepage";
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Ejemplo1' element={<Ejemplo1/>}></Route>
      <Route path='/Ejemplo2' element={<Ejemplo2/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>    
    </div>
  )
}

export default App;
