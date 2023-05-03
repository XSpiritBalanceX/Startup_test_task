import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import RoutesComponent from "./components/RoutesComponent";
import "./styles/App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <RoutesComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
