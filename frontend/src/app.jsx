import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import { Home, Adotante, Adocao, Historico, Pet } from "./pages";

function App() {
  const [pets, setPets] = useState([]); // Estado para armazenar os pets

  // Função para adicionar um pet à lista
  const handleAddPet = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]); // Adiciona o novo pet ao estado
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adocao" element={<Adocao />} />
        {/* Passando o estado pets e a função onAddPet para o componente Pet */}
        <Route
          path="/pet"
          element={<Pet onAddPet={handleAddPet} pets={pets} />}
        />
        <Route path="/historico" element={<Historico />} />
        <Route path="/adotante" element={<Adotante />} />
      </Routes>
    </Router>
  );
}

export default App;
