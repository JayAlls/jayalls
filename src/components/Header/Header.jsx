import logo from "../../assets/navLogo.svg";
import "./style.scss";

const Header = () => {
    return (
        <header>
            <nav>

                <div className="nav-logo">
                    <a  href="#presentation">
                        <img src={logo} alt="Logo de Jayalls" />
                    </a>
                </div>

                <div className="link">
                    <a href="https://jayalls.github.io/portfolio/" className="portfolio-link">PORTFOLIO</a>
                    <a href="#services">SERVICES</a>
                    <a href="#about">À PROPOS</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;