import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
    <Header />
    {/* <Nav /> */}
    {/* <Login /> */}
    <Home />
    <Footer />
    </>
  );
}

export default App;