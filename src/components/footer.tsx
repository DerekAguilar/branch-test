import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center text-sm text-gray-700 py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Todos los derechos reservados a nacha salvaje.</p>
    </footer>
  );
};

export default Footer;