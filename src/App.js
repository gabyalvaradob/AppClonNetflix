import React from 'react';
import './App.css';
import Row from './Row.js';
import Banner from './Banner.js';
import Navbar from './Navbar.js';
import requests from './requests';

function App() {
  return (
    <div className="app">
      {/* NavBar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      <Row 
      title="Originales de Netflix" 
      fetchURL={requests.fetchNetflixOriginals} 
      isLargeRow
      />
      <Row title="En Tendencia" fetchURL={requests.fetchTrending} />
      <Row title="Mejor punteados" fetchURL={requests.fetchtopRated} />
      <Row title="Peliculas de Acción" fetchURL={requests.fetchActionMovies} />
      <Row title="Peliculas de Comedia" fetchURL={requests.fetchComedyMovies} />
      <Row title="Peliculas de Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Peliculas romanticas" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentales" fetchURL={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
