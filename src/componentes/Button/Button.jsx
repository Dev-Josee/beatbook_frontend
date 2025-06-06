import React from "react";


const Button = ({ children, onclick, type='buton', disabled = false, variant = 'primary'}) => {
  return(
    <button
    type={type}
    onClick={onclick}
    disabled={disabled}
    className={`button ${variant}`}
    >

     {children}   
    </button>
  )
};

export default Button;