import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Acerca del Sistema</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: '1rem', padding: '1rem', marginTop: '1rem' }}>
        <p>
          El Módulo de Noticias y Encuestas para Medios Digitales Copycomtlx (MNEMDC) es una solución diseñada
          para gestionar publicaciones y recoger opiniones de los usuarios a través de encuestas.
        </p>
        <p>
          Ofrece seguridad, control de versiones, y una interfaz amigable para facilitar el trabajo
          editorial y la interacción con los lectores.
        </p>
      </div>
    </div>
  );
};

export default About;