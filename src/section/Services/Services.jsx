import Title from "../../components/Title/Title";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";
import planifier from "../../assets/planifier.svg";
import concevoir from "../../assets/concevoir.svg";
import integrer from "../../assets/integrer.svg";
import "./style.scss";

const Services = () => {
    return (
        <div id="services">
            <AnimatedComponent>
                <Title background={"SERVICES"} title={"RÉALISEZ VOTRE VISION"} />

                <div className="icon-container">
                        <div>
                            <img src={planifier} alt="" />
                            <p>PLANIFIER</p>
                        </div>
                        <div>
                            <img src={concevoir} alt="" />
                            <p>CONCEVOIR</p>
                        </div>
                        <div>
                            <img src={integrer} alt="" />
                            <p>INTÉGRER</p>
                        </div>
                </div>

                <div className="text">
                    <p>Travaillons <strong>ensemble</strong> pour planifier votre projet de <strong>développement web</strong> sur mesure</p>
                    <p>Nous concevons des <strong>maquettes</strong> qui reflètent l'<strong>identité de votre entreprise</strong> et s'adressent à votre <strong>public cible</strong></p>
                    <p>Nous assurons <strong>une intégration réussie</strong> de votre design sur votre site web pour une <strong>expérience utilisateur optimale</strong></p>
                </div>

            </AnimatedComponent>
        </div>
    )
}

export default Services;