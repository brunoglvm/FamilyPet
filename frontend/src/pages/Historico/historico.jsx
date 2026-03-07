import styles from "./historico.module.css";

import dogImage from "@/assets/card/cachorro.jpg";
import catImage from "@/assets/card/gato.jpg";

import { Header } from "@/components/Header/header";

function Historico() {
  const adotados = [
    {
      id: 1,
      nome: "Aurora",
      especie: "Gato",
      idade: 1,
      sexo: "Fêmea",
      foto: catImage,
      data: "10-05-2024",
    },
    {
      id: 2,
      nome: "Bruce",
      especie: "Cachorro",
      idade: 3,
      sexo: "Macho",
      foto: dogImage,
      data: "12-09-2024",
    },
    {
      id: 3,
      nome: "Floquinho",
      especie: "Gato",
      idade: 1,
      sexo: "Macho",
      foto: catImage,
      data: "04-07-2024",
    },
    {
      id: 4,
      nome: "Luke",
      especie: "Cachorro",
      idade: 2,
      sexo: "Macho",
      foto: dogImage,
      data: "29-08-2024",
    },
    {
      id: 5,
      nome: "Marley",
      especie: "Cachorro",
      idade: 1,
      sexo: "Macho",
      foto: dogImage,
      data: "18-10-2024",
    },
    {
      id: 6,
      nome: "Selina",
      especie: "Gato",
      idade: 4,
      sexo: "Fêmea",
      foto: catImage,
      data: "09-02-2024",
    },
  ];

  // Calcula o número ideal de colunas (3 ou 4, por exemplo)
  const columnCount =
    adotados.length <= 6 ? 3 : Math.ceil(Math.sqrt(adotados.length));

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    gap: "5rem 2rem",
    padding: "4rem 15rem",
    justifyItems: "center",
    width: "100%",
    maxWidth: "100%",
    marginLeft: "0rem",
  };

  return (
    <div className={styles.historicoMain}>
      <Header />
      <h1>Conheça alguns dos nossos animais adotados</h1>
      <div style={gridStyle} className={styles.petsContainer}>
        {adotados.map((adotado) => (
          <div key={adotado.id} className={styles.petCard}>
            <img
              src={adotado.foto}
              alt={adotado.nome}
              className={styles.petImage}
            />
            <div className={styles.petInfo}>
              <h3>{adotado.nome}</h3>
              <p>Especie: {adotado.especie}</p>
              <p>Sexo: {adotado.sexo}</p>
              <p>Idade: {adotado.idade} anos</p>
              <p className="data-adocao">Data da Adoção: {adotado.data} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historico;
