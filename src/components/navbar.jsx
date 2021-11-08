import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import isMobile from '../utils/isMobile';

function Navbar(){
    function toSnap(e){
        if(isMobile()){
            e.preventDefault();
            let elm = document.getElementById(e.target.getAttribute('to').slice(1));
            elm.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }
    return(
        <nav className={`navbar navbar-expand bg-transparent mx-auto position-absolute start-50 translate-middle-x top-0 mx-auto`} style={{zIndex: 999}}>
            <div className="container mx-auto">
                <button className="navbar-toggler btn text-primary mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <FontAwesomeIcon icon={faCoffee} />
                </button>
            
                <div className={`collapse navbar-collapse text-center mx-auto`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-auto">
                            <button className="nav-link btn btn-transparent text-white" onClick={(e)=> toSnap(e)} to="#about">About</button>
                        </li>
                        <li className="nav-item mx-auto">
                            <button className="nav-link btn btn-transparent text-white" onClick={(e)=> toSnap(e)} to="#portfolio">Portfolio</button>
                        </li>
                        <li className="nav-item mx-auto">
                            <button className="nav-link btn btn-transparent text-white" onClick={(e)=> toSnap(e)} to="#contact">Contact</button>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;