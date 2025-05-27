import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Mi Página</h1>
            <nav>
                <Link style={styles.link} to="/">Inicio</Link>
                <Link style={styles.link} to="/about">Acerca de</Link>
                <Link style={styles.link} to="/contact">Contacto</Link>
            </nav>
        </header>
    )
}

const styles = {
    header: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '15px',
        textAlgn: 'center'
    },
    title: {
        margin: 0,
    },
    link: {
        color: 'white',
        margin: '0 10px',
        textDecorations: 'none',
        fontWeight: 'bold' 
    }
}

export default Header;