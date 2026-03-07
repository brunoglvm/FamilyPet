import { useState, useEffect } from "react";
import styles from "./adocao.module.css";

import { Header } from "@/components/Header/header";
import { petsData } from "@/data";

const buscarPets = async () => {
  return petsData;
};

function Adocao() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({
    porte: "",
    sexo: "",
    idade: "",
    especie: "",
  });

  useEffect(() => {
    const fetchPets = async () => {
      const data = await buscarPets(filters);
      setPets(data);
    };

    fetchPets();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      {/* Filtros */}
      <div className={styles.filtroContainer}>
        <h3>Filtrar Pets</h3>
        <form>
          <label>
            Porte:
            <select
              name="porte"
              value={filters.porte}
              onChange={handleFilterChange}
            >
              <option value="">Selecione</option>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </label>

          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={filters.idade}
              onChange={handleFilterChange}
              placeholder="Idade"
            />
          </label>

          <label>
            Espécie:
            <select
              name="especie"
              value={filters.especie}
              onChange={handleFilterChange}
            >
              <option value="">Selecione</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </label>
        </form>
      </div>

      {/* Lista de Pets */}
      <h2>Pets Disponíveis para Adoção</h2>
      <div className={styles.petsContainer}>
        <ul>
          {pets.map((pet) => (
            <li key={pet.id} className={styles.petCard}>
              <img
                src={pet.foto || "https://via.placeholder.com/150"}
                alt={pet.nome}
                className={styles.petImage}
              />
              <div className={styles.petInfo}>
                <h3>{pet.nome}</h3>
                <p>Raça: {pet.raca}</p>
                <p>Porte: {pet.porte}</p>
                <p>Idade: {pet.idade} anos</p>
                <button>Quero Adotar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Adocao;
