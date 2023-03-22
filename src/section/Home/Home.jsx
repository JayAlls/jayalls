import { useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import scroll from "../../assets/scroll.svg";
import "./style.scss";

const Home = () => {
  // Effet de d'apparition pour le titre (tappage au clavier)
  const typeTextRef = useRef(null);

  useEffect(() => {
    const typeText = typeTextRef.current;
    const text = typeText.getAttribute("data-text");
    let index = 0;

    setInterval(() => {
      if (index <= text.length) {
        typeText.innerHTML = text.slice(0, index++);
      }
    }, 100);

    return () => clearInterval();
  }, []);

  // *********************************************************

  return (
    <div id="home">
      <img className="logo" src={logo} alt="Logo de Jayalls" />
      <h2 className="type-text" data-text="CONCEVEZ VOTRE VISION EN LIGNE" ref={typeTextRef}></h2>

      <div className="scroll">
        <img src={scroll} alt="SCROLL" />
        <p>SCROLL</p>
      </div>
    </div>
  );
};

export default Home;
