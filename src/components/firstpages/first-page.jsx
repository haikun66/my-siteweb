import React from 'react';
import "../firstpages/firstpages.css";
const pdpimg = require('./pdpstyler.png');
function FirstPage() {
    return (
        <div className='firstAnimation'> 
            <div className='contenu'>
                <div className='intro'>
                    <h1 className='text'>Mon Portfolio</h1>
                    <h2  className='text'>À propos de moi</h2>
                    <p  className='text'>Je suis un développeur passionné par la création de logiciels innovants.</p>
                    <p  className='text'>Explorez mes projets ci-dessous ou contactez-moi pour en savoir plus.</p>
                </div>
                
                <img className='image' src={pdpimg} alt="pdp" />
            </div>
        </div>
    );
  }
  
  export default FirstPage;