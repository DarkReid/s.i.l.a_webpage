import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
       <nav className='navbar'>
            <div className='nav-bar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        S.I.L.A.
                    </Link>
                    {/*mobile menu icons*/}
                    <div className='menu-icons' onClick={handleClick}>
                        {click ? (
                            <img src='/icons/image/icons-cross.png' alt='Menu' />
                            ): (
                            <img src='/icons/image/icons-menu.png' alt='Cross' />
                        )}
                    </div>
                    {/*navbar buttons*/}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link' onClick={closeMobileMenu}>
                                Главная
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/delivery" className='nav-link' onClick={closeMobileMenu}>
                                Перевозки
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className='nav-link' onClick={closeMobileMenu}>
                                Товары
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contacts" className='nav-link' onClick={closeMobileMenu}>
                                Контакты
                            </Link>
                        </li>
                    </ul>    
                </div>
            </div>
       </nav>
    </>
  )
}

export default Navbar