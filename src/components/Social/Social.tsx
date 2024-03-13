import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Pinterest from "../../images/pinterest.png";
import styles from "./Social.module.scss";

const Social = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
      }}
    >
      <div style={{ flex: 1 }} className={styles.loghi}>
        <a href="https://www.instagram.com/osteolunardi/?hl=it">
          <img
            src={Instagram}
            height="50"
            width="50"
            alt="Logo Instagram"
            style={{ marginTop: 5 }}
          />
        </a>
        <span>osteolunardi</span>
        <br />
        <a href="https://www.facebook.com/osteopatalunardi/">
          <img src={Facebook} height="50" width="50" alt="Logo Facebook" />
        </a>
        <span>Riccardo Lunardi, D.O.</span>
        <br />
        <a href="https://twitter.com/osteo74?lang=it">
          <img src={Twitter} height="50" width="50" alt="Logo Twitter" />
        </a>
        <span>@Osteo74</span>
        <br />
        <a href="https://www.pinterest.it/Osteolunardi/">
          <img src={Pinterest} height="50" width="50" alt="Logo Pinterest" />
        </a>
        <span>Osteolunardi</span>
      </div>
    </div>
  );
};

export default Social;
