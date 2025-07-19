import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from './assets/images/logo.svg';

export default function Navigation() {

    return (
        <div className="header">
            <NavLink className="img_link" to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <nav className="navbar">
                <NavLink to="/" className="nav_link">მთავარი</NavLink>
                <NavLink to="/why_us" className="nav_link">რატომ ჩვენ</NavLink>
                <NavLink to="/about" className="nav_link">ჩვენს შესახებ</NavLink>
                <NavLink to="/contact" className="nav_link">კონტაქტი</NavLink>
            </nav>
            <div className="contact_button_box">
                <div className="contact_button"></div>
            </div>
        </div>
    );
}
