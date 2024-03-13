import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Pinterest from "../../images/pinterest.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h3>Contatti</h3>
      <div className={styles.footer_content}>
        <div style={{ flex: 4 }}>
          <div>
            <p>Telefono: </p>
            <p style={{ marginTop: -15 }}>+39 347 3159568</p>
          </div>
          <div>
            <p>Mail: </p>
            <p style={{ marginTop: -15 }}>osteopatalunardi@gmail.com</p>
          </div>
        </div>
        <div style={{ flex: 1, marginTop: 75 }}>
          <a href="https://www.instagram.com/osteolunardi/?hl=it">
            <img
              src={Instagram}
              height="40"
              width="40"
              alt="Immagine Instagram"
            />
          </a>
          <a href="https://www.facebook.com/osteopatalunardi/">
            <img
              src={Facebook}
              height="40"
              width="40"
              alt="Immagine Facebook"
              style={{ marginLeft: 15 }}
            />
          </a>
          <a href="https://twitter.com/osteo74?lang=it">
            <img
              src={Twitter}
              height="40"
              width="40"
              alt="Immagine Twitter"
              style={{ marginLeft: 15 }}
            />
          </a>
          <a href="https://www.pinterest.it/Osteolunardi/">
            <img
              src={Pinterest}
              height="40"
              width="40"
              alt="Immagine Instagram"
              style={{ marginLeft: 15 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
