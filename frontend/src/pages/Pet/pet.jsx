import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./pet.module.css";

import { Header } from "@/components/Header/header";
import { RouteBtn } from "@/components/RouteBtn/route-btn";

function Pet({ onAddPet = () => {}, pets = [] }) {
  const [formData, setFormData] = useState({
    nome: "",
    especie: "",
    idade: "",
    descricao: "",
    foto: null,
  });

  const onDrop = useCallback((acceptedFiles) => {
    const [selectedFile] = acceptedFiles;
    if (!selectedFile) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      foto: selectedFile,
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [],
    },
  });

  const previewUrl = useMemo(() => {
    if (!formData.foto) {
      return "";
    }

    return URL.createObjectURL(formData.foto);
  }, [formData.foto]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fotoUrl = formData.foto ? URL.createObjectURL(formData.foto) : null;

    const newPet = {
      ...formData,
      id: Date.now(),
      foto: fotoUrl,
      disponivel: true,
    };
    onAddPet(newPet);

    setFormData({
      nome: "",
      especie: "",
      idade: "",
      descricao: "",
      foto: null,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const petsDisponiveis = pets.filter((pet) => pet.disponivel === true);

  return (
    <div className={styles.petPage}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.formSection}>
          <form className={styles.petForm} onSubmit={handleSubmit}>
            <h2 className={styles.petFormTitle}>Cadastro de Pet</h2>

            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.formLabel}>
                Nome
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                className={styles.formInput}
                placeholder="Insira o nome do pet"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="especie" className={styles.formLabel}>
                Espécie
              </label>
              <input
                type="text"
                name="especie"
                id="especie"
                placeholder="Insira a espécie do pet"
                value={formData.especie}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="idade" className={styles.formLabel}>
                Idade
              </label>
              <input
                type="number"
                name="idade"
                id="idade"
                placeholder="Insira a idade do pet"
                value={formData.idade}
                onChange={handleNumberChange}
                min="0"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="descricao" className={styles.formLabel}>
                Descrição
              </label>
              <textarea
                name="descricao"
                id="descricao"
                placeholder="Insira a descrição do pet"
                value={formData.descricao}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <span className={styles.formLabel}>Foto</span>
              <div
                {...getRootProps({
                  className: `${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ""}`,
                })}
              >
                <input {...getInputProps()} />
                <p>
                  {isDragActive
                    ? "Solte a foto aqui..."
                    : "Arraste e solte a foto aqui ou clique para selecionar"}
                </p>
                <span className={styles.dropzoneHint}>
                  Formatos aceitos: PNG, JPG, WEBP
                </span>
              </div>
            </div>

            {previewUrl && (
              <div className={styles.previewGroup}>
                <h3 className={styles.photoTitle}>Pré-visualização</h3>
                <img className={styles.petPhoto} src={previewUrl} alt="Preview do pet" />
              </div>
            )}

            <button type="submit" className={styles.submitBtn}>
              Cadastrar Pet
            </button>
          </form>
        </section>

        <section className={styles.animaisDisponiveis}>
          <h2 className={styles.sectionTitle}>Animais Disponíveis para Adoção</h2>
          <div className={styles.animaisGrid}>
            {petsDisponiveis.length > 0 ? (
              petsDisponiveis.map((pet) => (
                <div key={pet.id} className={styles.animalCard}>
                  <img
                    src={pet.foto}
                    alt={pet.nome}
                    className={styles.animalImage}
                  />
                  <h3>{pet.nome}</h3>
                  <p>Idade: {pet.idade} anos</p>
                  <p>Espécie: {pet.especie || "Não informado"}</p>
                  <RouteBtn to={"/adocao"}>Mais detalhes</RouteBtn>
                </div>
              ))
            ) : (
              <p>Não há animais disponíveis no momento.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Pet;
