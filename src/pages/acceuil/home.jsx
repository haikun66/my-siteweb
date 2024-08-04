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

      <section className='section'>
        <h2>Contact</h2>
        <div className="contact" >
          <div className="contact-left" >
            <form className="form"  action="" method="post">
              <label htmlFor="prenom">Prenom :</label>
              <input type="text" name="prenom" id="prenom" />
              <label htmlFor="nom">nom</label>
              <input type="text" name="nom" id="nom" />
              <label htmlFor="mail">mail</label>
              <input type="email" name="mail" id="mail" />
              <label htmlFor="message">message</label>
              <input type="text" name="message" id="message" />
              <button type="submit">Envoyer</button>
            </form>
          </div>
          <div className='container-box'>
            <div className='box'>Github</div>
            <div className='box'>Linkedin</div>
            <div className='box'>Email hocine_gh@live.fr</div>
            <div className='box'>Numero 07-78-79-57-92</div>
          </div>
        </div>
        
      </section>
      <footer>
        <p>&copy; 2024 Mon Portfolio</p>
      </footer>
      <ScrollToTop/>
    </div>
  );
}

export default Home;

