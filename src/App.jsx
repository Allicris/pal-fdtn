import React from 'react';
import { Outlet } from 'react-router-dom';
import "./styles/App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div style={root}>
    <Nav />
    <Header />
    <Outlet />
    <Footer />
    </div>
  );
}

export default App;