import React, { useState, useEffect } from "react";
import styles from "./home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import { Card } from "@/components/Card/card";
import { RouteBtn } from "@/components/RouteBtn/route-btn";

import gatoBanner from "@/assets/gato2.png";
import cachorroFeliz from "@/assets/cachorro-feliz.png";
import cachorro2 from "@/assets/cachorro2.png";
import cachorro1 from "@/assets/cachorro1.png";
import dogImage from "@/assets/card/cachorro.jpg";
import catImage from "@/assets/card/gato.jpg";

// Função para obter os pets disponíveis
const buscarPets = async () => {
  return [
    {
      id: 1,
      nome: "Alex",
      especie: "Cachorro",
      porte: "Pequeno",
      idade: 2,
      foto: dogImage,
      descricao:
        "Alex é um cachorro pequeno e muito amigável. Adora brincar e é ótimo com crianças.",
    },
    {
      id: 2,
      nome: "Bailey",
      especie: "Cachorro",
      porte: "Médio",
      idade: 3,
      foto: dogImage,
      descricao:
        "Bailey é um cachorro de porte médio, muito leal e protetor. Perfeito para famílias.",
    },
    {
      id: 3,
      nome: "Charlie",
      especie: "Gato",
      porte: "Pequeno",
      idade: 1,
      foto: catImage,
      descricao:
        "Charlie é um gato pequeno e curioso. Adora explorar e é muito carinhoso.",
    },
    {
      id: 4,
      nome: "Riley",
      especie: "Cachorro",
      porte: "Grande",
      idade: 4,
      foto: dogImage,
      descricao:
        "Riley é um cachorro grande e enérgico. Precisa de espaço para correr e brincar.",
    },
    {
      id: 5,
      nome: "Max",
      especie: "Gato",
      porte: "Pequeno",
      idade: 2,
      foto: catImage,
      descricao:
        "Max é um gato pequeno e tranquilo. Gosta de descansar em lugares aconchegantes.",
    },
  ];
};

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const data = await buscarPets();
      setPets(data);
    };

    fetchPets();
  }, []);

  return (
    <div>
      <Header />
      {/* Banner */}
      <section className={styles.banner}>
        <h1 className={styles.bannerTitle}>FamilyPet</h1>
        <p className={styles.bannerSubtitle}>
          Encontre seu melhor amigo de quatro patas aqui!
        </p>
        <img src={gatoBanner} alt="Gato com o seu dono" />
      </section>

      {/* Por Que Adotar? */}
      <section className={styles.porQueAdotar}>
        <h2>Por Que Adotar?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Benefícios de Adotar</h3>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                Ajuda a combater o abandono animal.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                Ganha um companheiro fiel e amoroso.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                Reduz o estresse e aumenta a felicidade.
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Adotar é um Ato de Amor</h3>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                Proporciona uma nova oportunidade para quem precisa de carinho.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                É uma forma de contribuir para um mundo melhor para todos.
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Adoção Transforma Vidas</h3>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                Oferece uma segunda chance para o animal.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                Cria um vínculo único entre humano e pet.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  size="xs"
                  className={styles.listItemIcon}
                />
                Impacta positivamente na sociedade.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Animais Disponíveis */}
      <section className={styles.animaisDisponiveis}>
        <h2>Animais Disponíveis para Adoção</h2>
        <div className={styles.animaisGrid}>
          <Card pets={pets}>
            <RouteBtn to={"/adocao"}>Mais detalhes</RouteBtn>
          </Card>
        </div>
      </section>

      {/* Informações Educativas */}
      <section className={styles.informacoesEducativas}>
        <h2>Informações Educativas</h2>
        <div className={styles.educacaoGrid}>
          <div className={styles.educacaoCard}>
            <img src={cachorroFeliz} alt="Cachorro e dona" />
            <h3>Cuidados com Animais Adotados</h3>
            <p>
              Animais adotados precisam de atenção especial. Alimentação
              adequada é essencial para mantê-los saudáveis e cheios de energia.
              Exercícios regulares, como passeios e brincadeiras, ajudam a
              reduzir o estresse e melhorar o comportamento. Além disso,
              consultas veterinárias periódicas garantem que a saúde do seu
              amigo peludo esteja sempre em dia.
            </p>
          </div>
          <div className={styles.educacaoCard}>
            <img src={cachorro1} alt="Cachorro e dono" />
            <h3>Responsabilidade e Compromisso</h3>
            <p>
              Adotar um animal é um ato de amor, mas também uma grande
              responsabilidade. Você estará assumindo o compromisso de cuidar
              dele por toda a sua vida. Isso significa garantir alimentação,
              higiene, saúde e muito carinho. Esteja preparado para dedicar
              tempo e recursos para proporcionar bem-estar ao seu pet.
            </p>
          </div>
          <div className={styles.educacaoCard}>
            <img src={cachorro2} alt="Cachorro e dona" />
            <h3>Importância da Castração e Vacinação</h3>
            <p>
              A castração é uma medida essencial para controlar a população
              animal, evitando ninhadas indesejadas que podem acabar em
              abandono. Além disso, castrar os animais reduz o risco de doenças
              graves, como tumores e infecções, melhorando sua qualidade de
              vida.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className={styles.contato}>
        <form className={styles.formContato}>
          <h2>Entre em Contato</h2>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            required
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            required
          />

          <textarea
            name="message"
            id="message"
            placeholder="Digite sua mensagem"
            required
          />

          <button>Enviar</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
