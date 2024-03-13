import OsteopataImage from "../../images/osteopatia.jpg";

const Osteopatia = () => {
  return (
    <div>
      <h3>La Medicina Osteopatica</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 3, fontSize: 15 }}>
          <p style={{ marginBottom: 20 }}>
            La Medicina Osteopatica individua a livello della struttura del
            corpo umano (Anatomia)la sede delle disfunzioni che alterano
            l’equilibrio funzionale del corpo ( generando malessere e dolore.
            Più lo squilibrio funzionale si aggrava e si cronicizza più il corpo
            si indebolisce e il processo può evolvere fino allo stato di
            malattia vera e propria), Fisiologia secondo la costituzione
            individuale (genetica).
          </p>
          <img src={OsteopataImage} alt="Immagine di una seduta" />
          <p>
            Spesso si tende a imitare la figura dell’osteopata ad una
            correlazione con il suo strumento: la manipolazione.
          </p>
          <p>
            Se è vero che la manipolazione è il gesto con il quale si identifica
            l’osteopata, le sue competenze vanno ben oltre.
          </p>
          <br />
          <br />
          <p style={{ fontSize: 18 }}>Principi dell’osteopatia:</p>
          <p>
            Unità di corpo/mente/spiritoCapacità di autoguarigione del corpo
            (omeostasi) Rapporto struttura funzione.
          </p>
          <br />
          <p style={{ fontSize: 18 }}>La lesione somatica</p>
          <p>
            Eventi traumatici di più o meno gravi, spesso passati inosservati
            perché non hanno comportato esiti gravi nell’immediato (fratture),
            hanno pur tuttavia alterato funzionalmente tessutie articolazioni,
            dando luogo a quella che gli osteopati chiamano lesione somatica o
            osteopatica. La lesione somatica si caratterista per la riduzione
            della mobilità del distretto interessato (vertebra, ginocchio,
            fegato ecc) il quale risulta non più integrato funzionalmente
            all’interno della rete di autoregolazione del corpo. Il dolore è il
            sintomo che spesso ci richiama alla presentadella lesione
            osteopatica. Quindi, grazie alla conoscenza molto dettagliata
            dell’anatomia, delle sue relazioni con la fisiologia e ad una fine
            abilità palpatoria, che non si ritrova in nessuna altra specialità,
            riesce a valutare la mobilità delle strutture e dei tessuti del
            corpo, intervenendo poi con adeguate manipolazioni per la loro
            correzione. L’intima e profonda relazione struttura/funzione
            consente all’osteopata, attraverso la manipolazione, di generare uno
            stimolo positivo (feedback positivo) che riattiva le capacità
            autorigenerative e curative insite nel corpo umano.
          </p>
        </div>
        <p style={{ flex: 1, marginLeft: 30 }}></p>
      </div>
    </div>
  );
};

export default Osteopatia;
