// Contacto.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contacto: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white text-center py-8">
      <p className="mb-4">Nuestra redes sociales</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Contacto;

