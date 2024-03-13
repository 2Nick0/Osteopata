import { useState } from "react";
import articoli from "../../data/articoli";
import Up from "../../images/up.png";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  const [switchMenu, setSwitchMenu] = useState(false);
  const [filter, setFilter] = useState("");
  const searchArticles = (
    <div style={{ marginLeft: 50, marginRight: 50 }} className={styles.links}>
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 20,
          paddingTop: -20,
        }}
      >
        <p style={{ marginBottom: -1, fontSize: 20 }}>
          Cerca qui l'articolo che ti interessa
        </p>
        <input
          type="text"
          placeholder="Cerca..."
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );
  const readArticles = articoli
    .filter((articolo) => {
      return articolo.nomeArticolo.startsWith(filter);
    })
    .map((articolo) => (
      <div
        style={{
          paddingBottom: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
          className={styles.links}
        >
          <div
            style={{ flex: 1, marginLeft: 15, marginTop: 10, marginBottom: 10 }}
          >
            <a href={articolo.linkArticolo!} style={{ color: "black" }}>
              <h3>{articolo.nomeArticolo}</h3>
            </a>
            <p style={{ marginTop: -20, fontSize: 15 }}>
              {articolo.contenutoArticolo}
            </p>
          </div>
          <div
            style={{
              flex: 1,
              marginLeft: 15,
              marginTop: 10,
              marginBottom: 10,
              marginRight: -320,
            }}
          >
            <img src={articolo.immagineArticolo} alt="" />
          </div>
        </div>
      </div>
    ));
  const flip = () => {
    setFilter("");
    setSwitchMenu(!switchMenu);
  };
  return (
    <div>
      {!switchMenu ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: 250,
          }}
        >
          <h1 className="Title">
            RICCARDO LUNARDI, <span style={{ color: "white" }}>DO MROI</span>
          </h1>
          <p style={{ color: "white", marginTop: -30 }}>OSTEOPATA</p>
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles.Newsletter}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 10 }}>
              <h3>Newsletter</h3>
            </div>
            <div
              style={{
                flex: 1,
                marginTop: 25,
              }}
            >
              <button
                style={{ border: 0, background: "transparent" }}
                onClick={flip}
              >
                {switchMenu ? (
                  <img
                    src={Up}
                    height="50"
                    width="50"
                    alt="Down"
                    className={styles.upsideDown}
                  />
                ) : (
                  <img src={Up} height="50" width="50" alt="Down" />
                )}
              </button>
            </div>
          </div>
          <hr style={{ marginLeft: 5, marginRight: 20 }} />
          <div>
            {articoli.length === 0 ? (
              <p style={{ fontSize: 15 }}>
                Non sono ancora stati pubblicati articoli
              </p>
            ) : switchMenu ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 2 }}>
                  {readArticles.length > 0 ? (
                    readArticles
                  ) : (
                    <div style={{ paddingBottom: 300 }}>
                      <h2>Nessun risultato trovato</h2>
                    </div>
                  )}
                </div>
                <div style={{ flex: 1 }}>{searchArticles}</div>
              </div>
            ) : (
              <div>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
