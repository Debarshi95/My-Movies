import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import TypeProvider from '../../providers/TypeProvider';
import MainRouter from '../MainRouter/MainRouter';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <TypeProvider>
        <div className="app">
          <MainRouter />
          <Footer />
        </div>
      </TypeProvider>
    </Router>
  );
}

export default App;
