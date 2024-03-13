import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use/lib/useCookie";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  refresh: boolean;
}

const NavBar: FC<NavBarProps> = ({ refresh }) => {
  const [valueCookie, setValueCookie] = useCookie("page");
  const navigate = useNavigate();
  const toHome = () => {
    setValueCookie("Home");
    navigate("/");
  };
  const toLink = (prop: string) => {
    setValueCookie(prop);
    if (refresh) window.location.reload();
    navigate("/Link");
  };
  return (
    <div className={styles.NavBar}>
      <div>
        <button onClick={toHome}>
          <h1 style={{ color: "green", fontWeight: "bolder" }}>
            <span style={{ fontWeight: "lighter", color: "white" }}>
              OSTEOPATA
            </span>{" "}
            LUNARDI, DO
          </h1>
        </button>
        <div className={styles.navBarContent}>
          <span>
            {valueCookie !== "Chi Sono" ? (
              <button onClick={() => toLink("Chi Sono")}>CHI SONO</button>
            ) : (
              <button style={{ backgroundColor: "rgb(6, 133, 6)" }}>
                CHI SONO
              </button>
            )}
            {valueCookie !== " Che Cos'è l'Osteopatia" ? (
              <button onClick={() => toLink("Che Cos'è l'Osteopatia")}>
                CHE COS'È L'OSTEOPATIA
              </button>
            ) : (
              <button style={{ backgroundColor: "rgb(6, 133, 6)" }}>
                CHE COS'È L'OSTEOPATIA
              </button>
            )}
            {valueCookie !== "Photo Gallery" ? (
              <button onClick={() => toLink("Photo Gallery")}>
                PHOTO GALLERY
              </button>
            ) : (
              <button style={{ backgroundColor: "rgb(6, 133, 6)" }}>
                PHOTO GALLERY
              </button>
            )}
            {valueCookie !== "Video Gallery" ? (
              <button onClick={() => toLink("Video Gallery")}>
                VIDEO GALLERY
              </button>
            ) : (
              <button style={{ backgroundColor: "rgb(6, 133, 6)" }}>
                VIDEO GALLERY
              </button>
            )}
            {valueCookie !== "Consulti On-Line" ? (
              <button onClick={() => toLink("Consulti On-Line")}>
                CONSULTI ON-LINE
              </button>
            ) : (
              <button style={{ backgroundColor: "rgb(6, 133, 6)" }}>
                CONSULTI ON-LINE
              </button>
            )}
            {valueCookie !== "Social" ? (
              <button onClick={() => toLink("Social")}>SOCIAL</button>
            ) : (
              <button style={{ backgroundColor: "rgb(6, 133, 6)" }}>
                SOCIAL
              </button>
            )}
            {valueCookie !== "Dove Mi Trovi" ? (
              <button
                onClick={() => toLink("Dove Mi Trovi")}
                style={{ marginBottom: -3 }}
              >
                DOVE MI TROVI
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "rgb(6, 133, 6)",
                  marginBottom: -3,
                }}
              >
                DOVE MI TROVI
              </button>
            )}
            {valueCookie !== "Contatti" ? (
              <button
                onClick={() => toLink("Contatti")}
                style={{ marginBottom: -3 }}
              >
                CONTATTI
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "rgb(6, 133, 6)",
                  marginBottom: -3,
                }}
              >
                CONTATTI
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
