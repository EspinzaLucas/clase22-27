// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from "./componente/layout/Header";
import Nav from './componente/layout/Nav';
import Footer from './componente/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Footer/>      
    </div>
  );
}

export default App;
