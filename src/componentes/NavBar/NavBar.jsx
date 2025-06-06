import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    console.log('tudo ok meu chapa')

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }

    const closeMenu = () =>{
      setMenuOpen(false);
    }
    return (
        <nav className={styles.NavBar}>
        <div className={styles.NavContainer}>
          
          <div className={styles.logo}>
            <Link to="/" onClick={closeMenu}>Beat Book</Link>
          </div>

          <button className={styles.hamburguer} onClick={toggleMenu}>
          ☰
          </button>
          
          <div className={`${styles.NavLinks} ${menuOpen ? styles.showMenu:""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/projetos" onClick={closeMenu}>Projetos</Link>
            <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
            <Link to="/contato" onClick={closeMenu}>Contato</Link>
            
          </div>
          
          
          <div className={`${styles.BtnNav}  ${menuOpen ? styles.showMenu:""}`}>

            <div className={styles.loginBtn}>
                <Link to="/login">Login</Link>
            </div>

           <div className={styles.registerBtn}> 
            <Link to="/register" className={styles.BtnRegister}>Cadastrar</Link>
           </div>
          </div>
          
        </div>
      </nav>
      
    )
}

export default NavBar;