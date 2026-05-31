import "./Nav_bar.css";
import logo_netflix from "../../images/Netflix-Logo-Streaming-Platform-765.png";
import logo_search from "../../images/search-interface-symbol.png";
import logo_notifications from "../../images/notification.png";
import manage_profile_icon from '../../images/edit-icon.png';
import transfer_profile_icon from '../../images/transfer-profile-icon.png';
import profile_icon from '../../images/profile-icon.png';
import help_icon from '../../images/help-icon.png';
import { useState } from "react";
import { useEffect } from 'react';
import Settings_pill from "./Settings_pill";
import Profile_pill from './Profile_pill';
import padlock_icon from '../../images/padlock-icon.png';

function browseMenu(onMenu : boolean){
  if(!onMenu)
    return null;

  return(
    <div id="div_browse_menu"
      onMouseEnter={() => (onMenu = true)}
      onMouseLeave={() => (onMenu = false)}
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="ul_browse_menu">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="a_browse_menu"
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_browse_menu" href="#">
              Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_browse_menu" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_browse_menu" href="#">
              Games
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_browse_menu" href="#">
              News & Popular
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_browse_menu" href="#">
              My List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_browse_menu" href="#">
              Browse by languages
            </a>
          </li>
        </ul>
    </div>
  );
}

function settings(onSettings: boolean){
  if(!onSettings)
    return;

  return(
    <ul className="position-absolute top-100 rounded z-3 list-unstyled shadow" id="ul_settings">
        <Profile_pill 
          url_text="https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" 
          text="David"
          href_text="#"
        />
        <Profile_pill 
          url_text="https://characterai.io/i/200/static/avatars/uploaded/2026/2/27/EWeWM4SDVQcNAB8yOUpxbEMRNAVZBLzSSgQiP809IHk.webp?webp=true&anim=0" 
          text="Jonatan"
          href_text="#"
          image_location={padlock_icon}
        />
        <Settings_pill 
            url_text= {manage_profile_icon} 
            text="Manage Profiles"
            href_text="#"
        />
        <Settings_pill 
            url_text= {transfer_profile_icon} 
            text="Transfer Profile"
            href_text="#"
        />
        <Settings_pill 
            url_text= {profile_icon} 
            text="Account"
            href_text="#"
        />
        <Settings_pill 
            url_text= {help_icon} 
            text="Help Center"
            href_text="#"
        />
        <li className="profile_setting_li rounded" id="li_sign_out">
          <a className="profile_setting_a" href="#">
            <p className="profile_setting_p">Sign out of Netflix</p>
          </a>
        </li>
    </ul>
  )
}

function Nav_bar() {
  const [onMenu, setOnMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onSettings, setOnSetting] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id={scrolled? 'nav_scrolled' : 'nav_container'}>
      <div 
        className="container-fluid" 
        id="container"
      >
        <a className="navbar-brand" id="a_logo" href="#">
          <img src={logo_netflix} id="logo_netflix" alt="Netflix Logo" />
        </a>
        <button
          className="navbar-toggler nav-link dropdown-toggle"
          type="button"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="browse_btn"
          onMouseEnter={()=>setOnMenu(true)}
          onMouseLeave={()=>setOnMenu(false)}
          onClick={()=>setOnMenu(!onMenu)}
        >
          Browse
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="ul_container">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="a_font"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                News & Popular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                My List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_font" href="#">
                Browse by languages
              </a>
            </li>
          </ul>
        </div>
        <ul
          className="navbar-nav me-auto mb-2 mb-lg-0"
          id="ul_container_profile"
        >
          <li className="nav-item">
            <a type="icon" className="nav-link" id="a_font" href="#">
              <img src={logo_search} alt="search logo" id="icon_format" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_font" href="#">
              Kids
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="a_font" href="#">
              <img
                src={logo_notifications}
                alt="notifications logo"
                id="icon_format"
              />
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              role="button"
              id="a_font"
              onClick = {()=>{setOnSetting(!onSettings)}}
            >
              <img
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                alt="profile picture"
                id="profile_picture"
              />
              <span className={`profile-chevron ${onSettings ? 'open' : ''}`}>▾</span>
            </a>
          </li>
        </ul>
      </div>
      {browseMenu(onMenu)}
      {settings(onSettings)}
    </nav>
  );
}

export default Nav_bar;