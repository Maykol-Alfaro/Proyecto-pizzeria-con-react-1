import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login"
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/*<div className="flex-grow-1">
        <Home />
      </div>*/}
      {/* Mostrar Login */}
     {/* <Login />*/}

      {/* Y si quieres probar registro: */}
       <RegisterPage /> 
      <Footer />
    </div>
  );
}

export default App;