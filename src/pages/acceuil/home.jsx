import React from 'react';
// import { Link } from 'react-router-dom'; // Si vous utilisez React Router

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Mon Portfolio</h1>
        <p>Bienvenue sur mon portfolio en ligne</p>
      </header>
      <section className="intro">
        <h2>À propos de moi</h2>
        <p>Je suis un développeur passionné par la création de logiciels innovants.</p>
        <p>Explorez mes projets ci-dessous ou contactez-moi pour en savoir plus.</p>
      </section>
      <section className="projects">
        <h2>Mes Projets</h2>
        {/* Insérez ici vos projets sous forme de liens vers leurs pages individuelles */}
        <ul>
          {/* <li><Link to="/projet-1">Projet 1</Link></li>
          <li><Link to="/projet-2">Projet 2</Link></li>
          <li><Link to="/projet-3">Projet 3</Link></li> */}
          {/* Ajoutez autant de liens que nécessaire */}
        </ul>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>N'hésitez pas à me contacter pour discuter de vos projets ou pour en savoir plus sur mon travail.</p>
        {/* Insérez ici un formulaire de contact ou des informations de contact */}
      </section>
      <footer>
        <p>&copy; 2024 Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default Home;

