import "./style.scss";
import Title from "../../components/Title/Title";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";

const About = () => {
    return (
        <div id="about">

            <AnimatedComponent>
                <Title background={"À PROPOS"} title={"VISION ET FONCTIONNEMENT"} />

                <div className="text-container">
                    <div className="vision">
                        <h3>VISION</h3>
                        <p>Chez JAYALLS, ma vision est de fournir des <strong>solutions numériques innovantes et personnalisées</strong> pour répondre aux besoins uniques de chaque client. 
                        Je m'engage à <strong>offrir un service de qualité supérieure</strong>, à utiliser les technologies les plus récentes et à établir des <strong>relations durables avec mes clients</strong>. <br /><br /> 

                        Je crois que la technologie est un outil puissant qui peut <strong>transformer les entreprises et les communautés</strong>, et je suis passionné par l'idée de contribuer à ce changement positif. <br /><br /> 

                        Mon slogan "Concevez votre vision en ligne" reflète cet engagement en <strong>travaillant en étroite collaboration avec vous</strong> pour créer une expérience en ligne qui répond à vos besoins uniques et qui se démarque de la concurrence.</p>
                    </div>

                    <div className="about-line"></div>

                    <div className="fonctionnement">
                        <h3>FONCTIONNEMENT</h3>
                        <p>Je suis fier de fournir des <strong>solutions web réactives, évolutives et personnalisées</strong> pour aider les entreprises à atteindre leurs objectifs. <br /><br /> 

                        J'utilise des plateformes de freelance pour les devis, et je passe par Malt pour les missions, pour garantir une <strong>collaboration transparente et professionnelle</strong>. <br /><br />

                        Je travaille en étroite collaboration avec mes clients pour comprendre leurs besoins et leur proposer des solutions adaptées. Je suis <strong>expert en développement web</strong>, mais je comprends également l'importance de l'esthétique et de la convivialité. C'est pourquoi je m'engage à fournir des solutions qui sont à la fois fonctionnelles et agréables à utiliser. <br /><br />

                        Je suis également déterminé à fournir un service exceptionnel et à établir des <strong>relations durables avec mes clients</strong>, en offrant un support continu pour assurer la réussite de leurs projets. Avec JAYALLS, vous pouvez être assuré que <strong>la conception et la réalisation de votre projet</strong> seront réalisées avec le plus grand professionnalisme et refléteront <strong>la vision unique de votre entreprise</strong></p>
                    </div>
                </div>
            </AnimatedComponent>
        </div>
    )
}

export default About;