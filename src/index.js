import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap';
import Header from './components/cabecalho';
import Footer from './components/footer';


ReactDOM.render(
  <React.StrictMode>

    <Header />

    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);
