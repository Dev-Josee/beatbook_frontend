const API_BASE_URL = import.meta.env.VITE_API_URL;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import styles from "./LoginUser.module.css";



const LoginUser = () => {
  const [formData, setFormData] = useState({
    nome_use: "",
    email_user: "",
    senha_user: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Verificação se já está autenticado
  useEffect(() => {
    const checkAuthStatus = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/auth/current_user`, { withCredentials: true });

        if (response.data) {
          // Se estiver autenticado, redireciona para home
          navigate('/login');
        }
      } catch (error) {
        console.log("Usuário não autenticado");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, formData, { withCredentials: true });

      Swal.fire({
        icon: 'success',
        title: 'Login realizado',
        text: response.data.msg
      });

      // Armazena apenas informações não sensíveis no localStorage
      const { senha_user, ...userData } = response.data.user;
      localStorage.setItem('user', JSON.stringify(userData));

      navigate('/home');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro no login',
        text: error.response?.data?.msg || 'Erro ao fazer login'
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleLogin = () => {
    
    window.open(`${API_BASE_URL}/auth/google`, '_self');
  }

  if (isLoading) {
    return (
      <section className={styles.LoginForm}>
        <h1>Verificando autenticação...</h1>
      </section>
    );
  }

  return (
    <section className={styles.LoginForm}>
      <h1>Login</h1>
      <form className={styles.formGlobal} onSubmit={handleSubmit}>

        <label>Email:</label>
        <input
          type="email"
          name="email_user"
          value={formData.email_user}
          onChange={handleChange}
          placeholder="Email do usuário"
          required
        />
        <br />
        <label>Senha:</label>
        <input
          type="password"
          name="senha_user"
          value={formData.senha_user}
          onChange={handleChange}
          placeholder="Senha do usuário"
          required
          minLength="6"
        />
        <div className={styles.btnDivider}>
          <button  type="submit" disabled={isLoading}>
            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>
          <div className={styles.divider}>ou</div>

          <button
            onClick={handleGoogleLogin}
            className={styles.googleButton}
            disabled={isLoading}
          >
            <img
              src="/assets/imgs/svg/dark/web_dark_rd_ctn.svg"
              alt="Google logo"
              

            />
            
          </button>
        </div>
      </form>

      <p>
        <Link to='/register'>Não tem conta? <span>Cadastre-se</span></Link>
      </p>

    </section>
  )
};

export default LoginUser;