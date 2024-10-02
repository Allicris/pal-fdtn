import React from 'react';
import { Outlet } from 'react-router-dom';
import "./styles/App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <div style={root}>
    <Nav />
    <Outlet />
    <Footer />
    </div>
  );
}

export default App;