import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
export default function Header() {
  return (
    <div className='header'>
        <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt="Logo Space" />
        </div>
        <div className="searchBar">
            <div className="searchIconContainer">
                <img src={searchIcon} alt="searchIcon" />
            </div>
            <input className="searchInput" placeholder='Collection, item or name' />
        </div>
        <div className="headerItems">
          <p>Drops</p>
          <p>MarketPlace</p>
          <p>Create</p>
        </div>
        <div className="headerActions">
          <div className="themeSwitchContainer">
            <img src={themeSwitchIcon} alt="Select Theme" />
          </div>
        </div>
        <div className="loginButton">
          GET IN
        </div>
    </div>
  )
}
