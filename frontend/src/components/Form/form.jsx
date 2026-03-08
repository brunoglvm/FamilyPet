import { useState } from "react";
import InputMask from "react-input-mask";
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

    const telefoneSomenteNumeros = telefone.replace(/\D/g, "");
    if (
      telefoneSomenteNumeros.length < 10 ||
      telefoneSomenteNumeros.length > 11
    ) {
      setTelefoneError("Digite um telefone válido com DDD.");
      return;
    }
    setTelefoneError("");

    console.log({
      nome,
      email,
      telefone: telefoneSomenteNumeros,
      endereco,
    });
  };

  const handleNomeChange = (e) => {
    // Permitir apenas letras e espaços no campo de nome
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setNome(value);
  };

  const handleTelefoneChange = (e) => {
    setTelefone(e.target.value);
    if (telefoneError) {
      setTelefoneError("");
    }
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
        {nomeError && <span className={styles.errorText}>{nomeError}</span>}
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
        <InputMask
          mask="(99) 99999-9999"
          value={telefone}
          onChange={handleTelefoneChange}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="tel"
              name="phone"
              id="phone"
              placeholder="(11) 91234-5678"
              required
            />
          )}
        </InputMask>
        {telefoneError && (
          <span className={styles.errorText}>{telefoneError}</span>
        )}
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
