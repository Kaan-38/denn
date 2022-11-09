import React from 'react'
import './Navbar.css'
import { Helmet } from 'react-helmet'
const Navbar = ( { navbaropen } ) => {
  return (
    <div className={`ContainerNavbar ${navbaropen == true ? 'active' : ''} `}>

      <Helmet>
         <title>
            DENGEBET
         </title>
      </Helmet>
       
        <div className='navbar-name'>
            <a href="https://www.dengebet133.com/">
            <h1>
                DENGEBET 
            </h1>
            </a>
        </div>
        
        
        <li>
            <a href="https://www.dengebet133.com/">
            <h3>
                ANA SAYFA
            </h3>
            </a>
        </li>

        <li>
            <a href="https://www.dengebet133.com/">
            <h3>
                CANLI BAHİS
            </h3>
            </a>
        </li>

        <li>
            <a href="https://www.dengebet133.com/">
            <h3>
                CANLI CASİNO
            </h3>
            </a>
        </li>

        <li>
            <a href="https://www.dengebet133.com/">
            <h3>
                SPOR BAHİSLERİ
            </h3>
            </a>
        </li>

        <li>
            <a href="https://www.dengebet133.com/">
            <h3>
                E-SPORT
            </h3>
            </a>
        </li>

        <li>
            <a href="https://www.dengebet133.com/">
            <h3>
                CASİNO
            </h3>
            </a>
        </li>

        <li>
           <a href="https://www.dengebet133.com/">
           <h3>
                SANAL BAHİS
            </h3>
           </a>
        </li>

        <li>
           <a href="https://www.dengebet133.com/">
           <h3>
                BAHİS BOZDUR
            </h3>
           </a>
        </li>
    </div>
  )
}

export default Navbar
