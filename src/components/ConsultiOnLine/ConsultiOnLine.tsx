import styles from "./ConsultiOnLine.module.scss";
import { useState, /*FormEvent,*/ useEffect } from "react";

const ConsultiOnLine = () => {
  const [go, setGo] = useState(false);
  const [totDomande] = useState([{ email: "", domande: "" }]);
  const [mail, setMail] = useState("");
  const [domanda, setDomanda] = useState("");
  const onEnter = async (/*e: FormEvent<HTMLFormElement>*/) => {
    //e.preventDefault(); --> Per evitare il comportamento di default che fa ricaricare la pagina all'invio
    const promiseResult = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, domanda }),
    });
    console.log(promiseResult.status);
  };
  useEffect(() => {
    fetch("http://localhost:5000", {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore di connessione con il server");
        return res.json();
      })
      .then((json: [{ email: string; domanda: string }]) => {
        json.forEach((ask) => {
          let email = ask.email;
          let domande = ask.domanda;
          let obj = { email, domande };
          //setTotDomande([...totDomande, obj]);
          totDomande.push(obj);
        });
        setGo(true);
        console.log(totDomande);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <form onSubmit={onEnter} encType="text/plain" style={{ flex: 2 }}>
        <h3>
          Inserisci la domanda e la mail per ricevere un consulto e una risposta
          al tuo dubbio!
        </h3>
        <input
          type="text"
          name="mail"
          placeholder="Mail..."
          onChange={(e) => {
            setMail(e.target.value);
          }}
          value={mail}
          required
        />
        <br />
        <textarea
          name="domanda"
          placeholder="Domanda..."
          rows={4}
          cols={50}
          style={{ marginTop: 15, resize: "none" }}
          onChange={(e) => setDomanda(e.target.value)}
          value={domanda}
          required
        />
        <br />
        <input
          type="submit"
          value="Invio"
          style={{
            marginBottom: 20,
            backgroundColor: "grey",
            color: "white",
            border: 0,
            borderRadius: 4,
          }}
          className={styles.button}
        />
      </form>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {go
          ? totDomande.map((domanda) => {
              let i = 0;
              i++;
              if (i < 6)
                return (
                  <div style={{ flex: 1, marginTop: -14 }}>
                    <div style={{ marginLeft: 15 }}>
                      <h3 style={{ marginBottom: -15 }}>{domanda.email}</h3>
                      <p>{domanda.domande}</p>
                    </div>
                    <hr />
                  </div>
                );
              // eslint-disable-next-line array-callback-return
              else return;
            })
          : ""}
      </div>
    </div>
  );
};

export default ConsultiOnLine;
