import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import ListaLavori from "./components/ListaLavori";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./components/favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/ListaLavori" element={<ListaLavori />} />
        <Route path="/preferiti" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
