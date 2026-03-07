import { useState } from "react";
import styles from "./form.module.css";

export function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se o nome contém apenas letras e espaços
    const nomeRegex = /^[A-Za-z\s]+$/;
    if (!nomeRegex.test(nome)) {
      setNomeError("O nome deve conter apenas letras e espaços.");
      return;
    }
    setNomeError(""); // Limpar mensagem de erro do nome

    // Verificar se o telefone contém apenas números
    const telefoneRegex = /^\d+$/;
    if (!telefoneRegex.test(telefone)) {
      setTelefoneError("O telefone deve conter apenas números.");
      return;
    }
    setTelefoneError("");

    console.log({ nome, email, telefone, endereco });
  };

  const handleNomeChange = (e) => {
    // Permitir apenas letras e espaços no campo de nome
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setNome(value);
  };

  const handleTelefoneChange = (e) => {
    // Permitir apenas números no campo de telefone
    const value = e.target.value.replace(/\D/g, "");
    setTelefone(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.adotanteForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome completo"
          value={nome}
          onChange={handleNomeChange}
          required
        />
        {nomeError && <span style={{ color: "red" }}>{nomeError}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          required
        />
        {telefoneError && <span style={{ color: "red" }}>{telefoneError}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Digite seu endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles.submitBtn}>
        Cadastrar-se
      </button>
    </form>
  );
}
