import "./style.scss";
import logo from "../../assets/navLogo.svg";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
    return (
       <footer>
            <div className="logo">
                <img src={logo} alt="Jayalls logo footer" />
                <p>JAYALLS</p>
            </div>

            <div className="reseaux-container">
                <a href="https://www.instagram.com/jayallswebcreator/"><img src={insta} alt="insta Logo" /></a>
                <a href="https://www.linkedin.com/in/jason-allais-jayalls/"><img src={linkedin} alt="linkedin logo"/></a>
                <a href="https://www.malt.fr/profile/jasonallais">
                    <span>MALT</span>
                </a>
            </div>

            <p>© 2023 JAYALLS, Tous droits réservés.</p>
       </footer> 
    )
}

export default Footer;