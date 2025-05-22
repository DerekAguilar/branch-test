import React from "react";

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Mi Pagina</h1>
            <nav>
                <a style={styles.link} href="#iicio">Inicio</a>
                <a style={styles.link} href="#Servicio">Servicio</a>
                <a style={styles.link} href="#Contacto">Contacto</a>
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