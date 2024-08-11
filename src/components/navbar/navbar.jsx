import React from 'react';
import '../navbar/navbar.css';
function Navbar() {
    return (
        <nav className='nav'>
            <img src="" alt="" />
            <div >
                <a href=".section" className='App-link'>Contact</a>
                <a href=".projects" className='App-link'>Projets</a>
                <a href="/projet-1" className='App-link'>A propos</a>
            </div>
        </nav>
    );
  }
  
  export default Navbar;