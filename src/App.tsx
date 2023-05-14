import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import RoutesComponent from "./components/RoutesComponent";
import "./styles/App.scss";
import "./styles/media.scss";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="colored"
        />
        <NavBar />
        <RoutesComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
