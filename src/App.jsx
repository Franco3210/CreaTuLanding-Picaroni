import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";


function App() {
  return (
    
    <BrowserRouter>
    
      <div className="main">
        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;