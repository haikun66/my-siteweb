import React, { useState, useEffect, useRef } from 'react';
import '../acceuil/home.css';
const mail = require('./media/email.png');
const tel = require('./media/telephone.png');
const linkedin = require('./media/linkedin.png');
const github = require('./media/github-logo.png');

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const progressRef = useRef(null);
  const autoSlideRef = useRef(null);

  const projects = [
    {
      icon: '🚀',
      title: 'Application Web Innovante',
      description: "Développement d'une plateforme de gestion de projet collaborative en temps réel, permettant aux équipes distantes de travailler efficacement ensemble.",
      skills: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'WebSockets'],
      details: [
        'Tableaux Kanban personnalisables',
        'Chat en temps réel',
        'Intégration avec GitHub',
        'Rapports et analyses avancés'
      ],
      link: 'https://projects.example.com/innovative-web-app'
    },
    {
      icon: '🎨',
      title: 'Refonte UI/UX E-commerce',
      description: 'Transformation complète de l\'expérience utilisateur pour une plateforme e-commerce majeure, augmentant le taux de conversion de 35% et la satisfaction client.',
      skills: ['Figma', 'CSS3', 'SASS', 'JavaScript', 'A/B Testing'],
      details: [
        'Design adaptatif pour mobile, tablette et desktop',
        'Optimisation du tunnel de conversion',
        'Implémentation d\'un design système cohérent',
        'Amélioration de l\'accessibilité (WCAG 2.1 AA)'
      ],
      link: 'https://projects.example.com/ecommerce-ux-redesign'
    },
    {
      icon: '📊',
      title: 'Tableau de Bord Analytique',
      description: 'Création d\'un tableau de bord interactif pour une entreprise Fortune 500, visualisant des données complexes de vente et de performance en temps réel.',
      skills: ['D3.js', 'Vue.js', 'Python', 'SQL', 'AWS'],
      details: [
        'Visualisations de données interactives et personnalisables',
        'Intégration de multiples sources de données',
        'Système d\'alerte en temps réel',
        'Rapports automatisés et export de données'
      ],
      link: 'https://projects.example.com/analytics-dashboard'
    }
  ];

  // Fonction pour mettre à jour le carousel
  const updateCarousel = (index) => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
    if (progressRef.current) {
      progressRef.current.style.width = `${(index + 1) / projects.length * 100}%`;
    }
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Synchronisation avec les changements d'index
  useEffect(() => {
    updateCarousel(currentIndex);
  }, [currentIndex]);

  // Animation automatique
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      goToNextSlide();
    }, 7000);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  // Gérer l'arrêt et la reprise de l'animation automatique
  const handleMouseEnter = () => {
    clearInterval(autoSlideRef.current);
  };

  const handleMouseLeave = () => {
    autoSlideRef.current = setInterval(() => {
      goToNextSlide();
    }, 7000);
  };

  return (
    <div className="home">
      <section className="projects">
        <h2>Mes Projets</h2>
        <div className="carousel-container">
          <div
            className="carousel"
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {projects.map((project, index) => (
              <div key={index} className={`project ${index === currentIndex ? 'active' : ''}`}>
                <div className="project-icon">{project.icon}</div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="skills-container">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="skill">{skill}</span>
                  ))}
                </div>
                <div className="project-details">
                  <p>Fonctionnalités clés :</p>
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <a href={project.link} className="project-link">Voir le projet</a>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-buttons">
            <button className="nav-button" id="prevBtn" onClick={goToPreviousSlide}>Précédent</button>
            <button className="nav-button" id="nextBtn" onClick={goToNextSlide}>Suivant</button>
          </div>
          <div className="progress-bar">
            <div className="progress" id="progress" ref={progressRef}></div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="title2">Contact</h2>
        <div className="contact">
          <div className="contact-left">
            <form className="form" action="" method="post">
              <div className="input-group1 input-group">
                <label className="label" htmlFor="prenom">Prenom</label>
                <input required type="text" name="prenom" id="prenom" placeholder="Entrer votre prénom" className="prenom" />
              </div>
              <div className="input-group1 input-group">
                <label className="label" htmlFor="nom">Nom</label>
                <input required type="text" name="nom" id="nom" placeholder="Entrer votre nom" className="nom" />
              </div>
              <div className="input-group2 input-group">
                <label className="label" htmlFor="mail">Mail</label>
                <input required type="email" name="mail" id="mail" placeholder="Entrer une email valide" className="email" />
              </div>
              <div className="input-group3 input-group">
                <label className="label" htmlFor="message">Message</label>
                <input required type="textarea" name="message" id="message" placeholder="Ecrivez votre message" className="text" />
              </div>
              <div className="button input-group">
                <button type="submit" className="submit">Envoyer</button>
              </div>
            </form>
          </div>
          <div className="container-box">
            <div className="box">
              <a className="link" href="https://github.com/haikun66"><img className="logo" src={github} alt="github logo" /></a>
              <h3>Github</h3>
            </div>
            <div className="box">
              <a className="link" href="https://www.linkedin.com/in/hocine-ghouali-730a04220/"><img className="logo" src={linkedin} alt="linkedin logo" /></a>
              <h3>Linkedin</h3>
            </div>
            <div className="box">
              <img className="logo" src={mail} alt="email" />
              <h3>hocine_gh@live.fr</h3>
            </div>
            <div className="box">
              <img className="logo" src={tel} alt="telephone" />
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
