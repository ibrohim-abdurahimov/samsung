import React from 'react'
import "./Header.scss"
import { SiSamsung } from "react-icons/si";
import { IoSearch  } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { COLLECTION, COLLECTIONSECOND } from "../../static"


const Header = () => {
    const navbarItems = COLLECTION?.map((link, index) => (
        <li className='navbar__item'>
            <a href="#" className="navbar__link">
                <span>{link}</span>
            </a>
        </li>
    ))
    const navItems = COLLECTIONSECOND?.map((link, index) => (
        <li className="navbar__item">
            <a href="#" className="navbar__link">
                <span>{link}</span>
            </a>
        </li>
    ))
    return (
        <header className='header'>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <SiSamsung />
                    </div>
                    <div className='navbar__category'>
                        <ul className="navbar__collection">
                            {navbarItems}
                        </ul>
                        <ul className="navbar__collection">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar__icon">
                        <IoSearch  />
                        <BsCart />
                        <FaRegUser />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header