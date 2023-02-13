import React from 'react';
import '../styles.css'
import logo from '../images/logo.png'


const Navbar = () => {
    return (

        <nav>
            <img src={logo}className='logo' alt={"longlogo"}width={1260} style={{display: 'block', margin: '0 auto', marginTop: "40px"}} />
        </nav>
    )
}

export default Navbar