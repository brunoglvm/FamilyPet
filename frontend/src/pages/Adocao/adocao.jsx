import { useState, useEffect } from "react";
import styles from "./adocao.module.css";

import { PageTitle } from "@/components/PageTitle/page-title";
import { Header } from "@/components/Header/header";
import { Dropdown } from "@/components/Dropdown/dropdown";
import { petsData } from "@/data";

const buscarPets = async (filters) => {
  return petsData.filter((pet) => {
    const matchPorte = !filters.porte || pet.porte === filters.porte;
    const matchIdade =
      !filters.idade || pet.idade === Number.parseInt(filters.idade, 10);
    const matchEspecie = !filters.especie || pet.especie === filters.especie;

    return matchPorte && matchIdade && matchEspecie;
  });
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

  const handleDropdownChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className={styles.page}>
      <PageTitle title="Adoção" />
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <aside className={styles.filtroContainer}>
            <h3>Filtrar Pets</h3>
            <form className={styles.filterForm}>
              <label>
                Porte:
                <Dropdown
                  name="porte"
                  value={filters.porte}
                  placeholder="Todos"
                  onChange={handleDropdownChange}
                  options={[
                    { value: "Pequeno", label: "Pequeno" },
                    { value: "Médio", label: "Médio" },
                    { value: "Grande", label: "Grande" },
                  ]}
                />
              </label>

              <label>
                Idade:
                <input
                  type="number"
                  name="idade"
                  value={filters.idade}
                  onChange={handleFilterChange}
                  placeholder="Idade"
                  min="0"
                />
              </label>

              <label>
                Espécie:
                <Dropdown
                  name="especie"
                  value={filters.especie}
                  placeholder="Todas"
                  onChange={handleDropdownChange}
                  options={[
                    { value: "Cachorro", label: "Cachorro" },
                    { value: "Gato", label: "Gato" },
                  ]}
                />
              </label>
            </form>
          </aside>

          <section className={styles.petsSection}>
            <h2 className={styles.sectionTitle}>
              Pets Disponíveis para Adoção
            </h2>
            <ul className={styles.petsList}>
              {pets.map((pet) => (
                <li key={pet.id} className={styles.petCard}>
                  <img
                    src={pet.foto || "https://via.placeholder.com/150"}
                    alt={pet.nome}
                    className={styles.petImage}
                  />
                  <div className={styles.petInfo}>
                    <h3>{pet.nome}</h3>
                    <p>Espécie: {pet.especie}</p>
                    <p>Porte: {pet.porte}</p>
                    <p>
                      Idade: {pet.idade} {pet.idade > 1 ? "anos" : "ano"}
                    </p>
                    <button type="button">Quero Adotar</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Adocao;
