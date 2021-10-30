import React from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-transparent position-fixed start-50 translate-middle-x top-0" style={{zIndex: 999}}>
            <div className="container mx-auto">
                <button className="navbar-toggler btn text-primary mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <FontAwesomeIcon icon={faCoffee} />
                </button>
            
                <div className="collapse navbar-collapse mx-auto text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="#home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#contact">Contact</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;