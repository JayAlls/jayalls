import Title from "../../components/Title/Title";
import "./style.scss";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";

const Presentation = () => {
    return (
        <div id="presentation">
                <div className="presentation-container">
                    <AnimatedComponent>
                        <Title background={"Qui est Jayalls ?"} title={"PRÉSENTATION"}/>
                        <div className="presentation-text">
                            <p>Je suis <strong>développeur front-end passionné</strong> avec deux ans d'expérience. Je crée des <strong>sites web sur mesure</strong> pour répondre aux besoins spécifiques de mes clients, en <strong>travaillant en étroite collaboration</strong> avec eux pour faire de leur <strong>vision une réalité</strong></p>
                        </div>
                    </AnimatedComponent>
                </div>
        </div>
    )
}

export default Presentation;