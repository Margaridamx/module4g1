import React from 'react';

const Button = ({ label, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color || '#007bff', // Cor padrão é azul se nenhuma cor for passada
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
