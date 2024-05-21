import React from 'react';
import "../firstpages/firstpages.css";
import { TypeAnimation } from 'react-type-animation';
const pdpimg = require('./pdpstyler.png');
function FirstPage() {
    return (
        <div className='firstAnimation'>
            <div className='contenu'>
                <div className='intro'>
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', display: 'flex', color:'white' }}
                        sequence={[
                            `Mon Portfolio`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                            10000,
                        ]}
                        wrapper='h1'
                        repeat={0}
                        
                    />
                    <h2 className='text'>À propos de moi</h2>
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', fontSize: '1,5rem', display: 'flex' , color:'white'}}
                        sequence={[
                            `Je suis Hocine Ghouali, un concepteur et développeur d'applications passionné par la programmation et l'informatique.\n
                            Depuis que j'ai découvert le monde fascinant du développement logiciel, je suis constamment poussé par le désir de créer des applications innovantes qui résolvent des problèmes réels et améliorent la vie des gens.\n
                            Mon parcours m'a permis d'acquérir une solide expertise dans divers langages de programmation, frameworks et technologies, me permettant ainsi de transformer mes idées en solutions concrètes.\n
                            Explorez mes projets ci-dessous pour avoir un aperçu de mon travail, et n'hésitez pas à me contacter pour en savoir plus sur mes compétences et expériences.
                            `, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                            1000,
                        ]}
                        repeat={0}
                        cursor={false}
                    />
                </div>
                <img className='image' src={pdpimg} alt="pdp" />
            </div>
        </div>
    );
  }
  
  export default FirstPage;