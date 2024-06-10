import React from 'react';
import Navbar from '../../components/navbar/navbar';
import ScrollToTop from '../../components/scrolltop';
import '../acceuil/home.css';


function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      
      <section className="projects">
        <h2>Mes Projets</h2>
        Insérez ici vos projets sous forme de liens vers leurs pages individuelles 
      </section>

      <section>
        <h2>Contact</h2>
        <form  className="contact" action="" method="post">
          <label htmlFor="prenom">Prenom :</label>
          <input type="text" name="prenom" id="prenom" />
          <label htmlFor="nom">nom</label>
          <input type="text" name="nom" id="nom" />
          <label htmlFor="mail">mail</label>
          <input type="email" name="mail" id="mail" />
          <label htmlFor="message">message</label>
          <input type="text" name="message" id="message" />
        </form>
        <p>N'hésitez pas à me contacter pour discuter de vos projets ou pour en savoir plus sur mon travail.</p>
        {/* Insérez ici un formulaire de contact ou des informations de contact */}
      </section>

      <footer>
        <p>&copy; 2024 Mon Portfolio</p>
      </footer>
      <ScrollToTop/>
    </div>
  );
}

export default Home;

