import { useCookie } from "react-use";
import NavBar from "../../components/NavBar/NavBar";
import Dettagli from "../../components/Dettagli/Dettagli";
import Osteopatia from "../../components/Osteopatia/Osteopatia";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import VideoGallery from "../../components/VideoGallery/VideoGallery";
import ConsultiOnLine from "../../components/ConsultiOnLine/ConsultiOnLine";
import Social from "../../components/Social/Social";
import Posizione from "../../components/Posizione/Posizione";
import Contatti from "../../components/Contatti/Contatti";
import styles from "./Link.module.scss";
import Footer from "../../components/Footer/Footer";

const Link = () => {
  const [valueCookie] = useCookie("page");
  const toWhere = () => {
    if (valueCookie === "Chi Sono") return <Dettagli />;
    if (valueCookie === "Che Cos'è l'Osteopatia") return <Osteopatia />;
    if (valueCookie === "Photo Gallery") return <PhotoGallery />;
    if (valueCookie === "Video Gallery") return <VideoGallery />;
    if (valueCookie === "Consulti On-Line") return <ConsultiOnLine />;
    if (valueCookie === "Social") return <Social />;
    if (valueCookie === "Dove Mi Trovi") return <Posizione />;
    if (valueCookie === "Contatti") return <Contatti />;
  };
  return (
    <div className={styles.Link}>
      <div>
        <div>
          <NavBar refresh={true} />
          <div className={styles.linkContent}>
            <div>
              <h2>{valueCookie}</h2>
              <hr />
            </div>
            <div>{toWhere()}</div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
