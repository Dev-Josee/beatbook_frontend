import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import styles from "./RegisterUser.module.css";
import googleLogo from "/assets/imgs/svg/dark/web_dark_rd_ctn.svg"

const RegisterUser = () => {
    const [formData, setFormData] = useState({ nome_user: "", email_user: "", senha_user: "" });
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, formData);
            Swal.fire({
                title: 'Sucesso',
                text: 'Cadastro realizado com sucesso',
                icon: 'success',
            }).then(() => navigate('/login'));
        } catch (error) {
            Swal.fire({ icon: 'error', title: 'Erro ao cadastrar', text: error.response?.data?.message || 'Ocorreu um erro inesperado.' });
        } finally{
            setIsLoading(false);
        }
    };
    const handleGoogleLogin = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
    };

    return (
        <section className={styles.FormUser}>
            <div className={styles.container}>
                <h1>Cadastro de Usuário</h1>
                <form className={styles.formGlobal} onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input placeholder="Seu nome" type="text" name="nome_user"
                        value={formData.nome_user}
                        onChange={handleChange}
                        required
                    />
                    <label>Email:</label>
                    <input placeholder="Seu e-mail" type="email" name="email_user"
                        value={formData.email_user}
                        onChange={handleChange}
                        required
                    />

                    <label>Senha:</label>
                    <input placeholder="Sua senha" type="password" name="senha_user"
                        value={formData.senha_user}
                        onChange={handleChange}
                        required
                    />
                    <div className={styles.btnDivider}>
                        <button className={styles.googleButton} type="submit" disabled={isLoading}>
                            {isLoading ? 'Carregando...' : 'Entrar'}
                        </button>
                        <div className={styles.divider}>ou</div>

                        <button
                            onClick={handleGoogleLogin}
                            className={styles.googleButton}
                            disabled={isLoading}
                        >
                            <img
                                src={googleLogo}
                                alt="Google logo"
                                className={styles.googleLogo}

                            />
                            Continuar com Google
                        </button>
                    </div>
                </form>


                <Link to="/login">Já possui cadastro? <span>Faça o Login</span></Link>
            </div>
        </section>
    )
};

export default RegisterUser;