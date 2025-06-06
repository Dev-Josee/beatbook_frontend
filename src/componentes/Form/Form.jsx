import React, { useState } from "react";

import emailJs from "@emailjs/browser";
import Button from "../Button/Button";
import styles from "./Form.module.css";



const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    assunt: "",
    email: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.assunt || !formData.email) {
      setError('Todos os campos obrigatorios');
      return;
    }
    setIsSubmitting(true);
    setError('');

    emailJs
      .send(
        "service_3tf4ich",
        "template_vwn4kpa",
        formData,
        "6HqA7irQqUGn9Hetl"
      )

      .then(() => {
        alert('Enviado com sucesso!!', formData);
        setIsSubmitting(false);
        setFormData({ name: "", assunt: "", email: "" });
      })
      .catch((err) => {
        alert("Erro ao enviar:", err);
        setError("Erro ao enviar formulario");
        setIsSubmitting(false);
      });
  }





  return (
    <div className={styles.formAll}>
      <div className={styles.contact_form}>
        <h2 className={styles.TitleCtt}>Contato</h2>
        {error && <p className={styles.error}><span>⚠️</span>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome:</label>
            <input
              placeholder="Seu nome"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="assunt">Assunto:</label>
            <input
              placeholder="Assunto"
              type="text"
              id="assunt"
              name="assunt"
              value={formData.assunt}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail:</label>
            <input
              placeholder="Seu e-mail"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >

            {isSubmitting ? <span className={styles.spinner}></span> : 'Enviar'}
          </Button>


        </form>
      </div>
    </div>
  )
};

export default Form;