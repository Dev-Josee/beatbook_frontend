import React from "react";
import styles from "./Header.module.css";


const Header = () => {
    return (
        
            <div className={styles.Banner}>
                <h1>Suba de <span>nível</span> com sua <span>arte</span></h1>
                <div className={styles.ImgBanner}>
                    <img src="/assets/imgs/bg-primary.jpg.svg" alt="Banner" />
                </div>
            </div>
       
    )
}

export default Header;