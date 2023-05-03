import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import RoutesComponent from "./components/RoutesComponent";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
