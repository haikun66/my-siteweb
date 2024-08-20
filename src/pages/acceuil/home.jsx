import React from 'react';
import '../acceuil/home.css';
const mail = require('./media/email.png');
const tel = require('./media/telephone.png');
const linkedin = require('./media/linkedin.png');
const github = require('./media/github-logo.png');

function Home() {
  return (
    <div className="home">
      <section className="projects">
        <h2>Mes Projets</h2>
        Insérez ici vos projets sous forme de liens vers leurs pages individuelles 
      </section>
      <section className='section'>
        <h2 className='title2'>Contact</h2>
        <div className="contact" >
          <div className="contact-left" >
            <form className="form"  action="" method="post">
              <div className='input-group1 input-group'>
                <label className='label' htmlFor="prenom">Prenom</label>
                <input required type="text" name="prenom" id="prenom" placeholder='Entrer votre prénom' className='prenom'/>
              </div>
              
              <div className='input-group1 input-group'>
                <label className='label' htmlFor="nom">Nom</label>
                <input required type="text" name="nom" id="nom" placeholder='Entrer votre nom' className='nom'/>
              </div>
    
              <div className='input-group2 input-group'>
                <label className='label' htmlFor="mail">Mail</label>
                <input required type="email" name="mail" id="mail" placeholder='Entrer une email valide' className='email'/>
              </div>
              
              <div className='input-group3 input-group'>
                <label className='label' htmlFor="message">Message</label>
                <input required type="textarea" name="message" id="message" placeholder='Ecriver votre message' className='text'/>
              </div>
            
              <div className='button input-group'>
                <button type="submit" className='submit'>Envoyer</button>
              </div>
            </form>
          </div>
          <div className='container-box'>
            <div className='box'>
              <a className='link' href="https://github.com/haikun66"><img className='logo' src={github} alt="github logo" /></a>
              <h3>Github</h3>
            </div>
            <div className='box'>
              <a className='link' href="https://www.linkedin.com/in/hocine-ghouali-730a04220/"><img className='logo' src={linkedin} alt="linkedin logo" /></a>
              <h3>Linkedin</h3>
            </div>
            <div className='box'>
              <img className='logo' src={mail} alt="email" />
              <h3>hocine_gh@live.fr</h3>
            </div>
            <div className='box'>
              <img className='logo' src={tel} alt="telephone" />
              <h3>07-78-79-57-92</h3> 
            </div>
          </div>
        </div>
        
      </section>
      <footer>
        <p>&copy; 2024 Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default Home;

