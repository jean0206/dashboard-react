import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({buttonEvent,userName,backEvent}) => {
    return (
        <nav className="navBar">
            <div className="navBar-begin">
                <div className="menu-icon" >

            <FontAwesomeIcon  onClick={buttonEvent} color="#1d43ad" size="2x" icon={faBars} />
                </div>

            <span>Prueba Front-end</span>
            </div>
            <div className="navBar-end">
                <div className="photo-perfil"></div>
                <div className="name-profile">{userName}</div>
                <FontAwesomeIcon className="back-button" onClick={backEvent} color="#1d43ad" size="2x" icon={faArrowCircleRight} />
            </div>
            
        </nav>
    )
}

export default NavBar;