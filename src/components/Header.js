import NavBar from './NavBar';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header role="heading">
            <Link to="/">
                <img src={logo} alt="company-logo"></img>
            </Link>
            <NavBar />
        </header>
    );
};

export default Header;