import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import TypeProvider from "./providers/TypeProvider";
import MainRouter from "./MainRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <TypeProvider>
        <div className="app">
          <MainRouter />
          <Footer />
        </div>
      </TypeProvider>
    </BrowserRouter>
  );
}

export default App;
