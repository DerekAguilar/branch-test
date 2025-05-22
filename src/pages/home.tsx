import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Bienvenido a MNEMDC</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: '1rem', padding: '1rem', marginTop: '1rem' }}>
        <p>
          Este sistema facilita la gestión de noticias y encuestas para medios digitales.
          Puedes crear, editar y visualizar contenidos de forma segura y organizada.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/about">
            <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#007bff', color: 'white' }}>
              Más sobre el sistema
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
