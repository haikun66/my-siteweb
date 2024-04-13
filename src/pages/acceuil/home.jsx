import React from 'react';
import Navbar from '../../components/navbar/navbar';


function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
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
        Insérez ici vos projets sous forme de liens vers leurs pages individuelles 
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

