import React from 'react';
import "../firstpages/firstpages.css";
const pdpimg = require('./pdpstyler.png');
function FirstPage() {
    return (
        <div className='firstAnimation'>
            <div className='contenu'>
                <div className='intro'>
                    <h1 className='text'>Mon Portfolio</h1>
                    <h2 className='text'>À propos de moi</h2>
                    <p className='ph'>Je suis Hocine Ghouali, un concepteur et développeur d'applications passionné par la programmation et l'informatique.</p>
                    <p className='text'>Depuis que j'ai découvert le monde fascinant du développement logiciel, je suis constamment poussé par le désir de créer des applications innovantes qui résolvent des problèmes réels et améliorent la vie des gens.</p>
                    <p className='text'>Mon parcours m'a permis d'acquérir une solide expertise dans divers langages de programmation, frameworks et technologies, me permettant ainsi de transformer mes idées en solutions concrètes.</p>
                    <p className='text'>Explorez mes projets ci-dessous pour avoir un aperçu de mon travail, et n'hésitez pas à me contacter pour en savoir plus sur mes compétences et expériences.</p>
                </div>
                <img className='image' src={pdpimg} alt="pdp" />
            </div>
        </div>
    );
  }
  
  export default FirstPage;