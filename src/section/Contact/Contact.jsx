import Title from "../../components/Title/Title";
import "./style.scss";

const Contact = () => {
    return (
      <div id="contact">
        <Title background={"CONTACT"} title={"PARLONS DE VOTRE PROJET !"} />

        <form>
          <label>
            <input type="text" name="name" required placeholder="Nom"/>
          </label>
          <br />
          <label>
            <input type="email" name="email" required placeholder="Adresse e-mail"/>
          </label>
          <br />
          <label>
            <textarea name="message" required placeholder="Votre message"></textarea>
          </label>
          <br />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  
  