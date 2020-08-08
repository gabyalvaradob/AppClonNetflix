import React, { useEffect, useState } from 'react';
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            className='nav_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" 
            alt="Netflix Logo"
            />

            <img 
            className='nav_avatar'
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" 
            alt="Usuario Netflix"
            />
        </div>
    )
}

export default Navbar
