import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function SpringNavbar({scrollRef}){
    const scrollTo = (x) => scrollRef.current.scrollTo(x);
    return(
        <nav className="navbar navbar-expand-lg bg-transparent position-fixed start-50 translate-middle-x top-0">
            <div className="container mx-auto">
                <button className="navbar-toggler btn text-primary mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <FontAwesomeIcon icon={faCoffee} />
                </button>
            
                <div className="collapse navbar-collapse mx-auto text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link active text-white" to="#home" onClick={() => scrollTo(0)}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white" to="#about" onClick={() => scrollTo(1)}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white" to="#portfolio" onClick={() => scrollTo(2)}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white" to="#blog" onClick={() => scrollTo(3)}>Blog</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white" to="#contact" onClick={() => scrollTo(4)}>Contact</button>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default SpringNavbar;