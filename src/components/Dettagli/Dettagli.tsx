import DettagliImage from "../../images/dettagli.jpg";

const Dettagli = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3>Biografia</h3>
        <p style={{ fontSize: 18 }}>ITA</p>
        <div style={{ fontSize: 15 }}>
          <p>
            Nato ad Aosta il 01 settembre 1974, dopo aver concluso gli studi
            magistrali nel 1994 mi trasferisco a Aix en Provence (Fr) dove mi
            iscrivo all’Institut Superieur d’Osteopathie al corso Full time
            della durata 5 anni e che consta di un monte ore pari a 5500 circa.
            L’Aikido, arte marziale che pratico per diversi anni, risveglia in
            me la consapevolezza intuitiva delle potenzialità di autoguarigione
            che il corpo umano possiede e che sono COMPLETAMENTE trascurate
            dalla medicina accademica. L’osteopatia mi offre la possibilità di
            acquisire le conoscenze medico-scientifiche e tecnico pratiche per
            sviluppare questo feeling in una professione molto bella ed
            appassionante. Sul personale cammino di crescita incontro nel 1995
            la meditazione che ancora oggi pratico con mezzo per rimanere “
            connesso “. Gli anni di studio in Francia mi danno l’opportunità di
            incontrare insegnanti di “lungo corso “ che praticano ed insegnano
            da 30/40 anni e che rappresentano quanto di meglio sia presente in
            Francia e in Europa. Termino i miei studi nel 1999 e nel 2001
            divento socio del ROI ( Registro Osteopati Italiani ) In particolare
            mi interesso dei rapporti che intercorrono tra occlusione e postura
            collaborando con diversi dentisti ( Milano e Este -Pd-). Nel 2001
            frequento un corso post graduate a Saint Etienne con la Fondation
            Nationale d’Osteopathie, approfondendo le mie conoscenze in MTC (
            medicina tradizionale cinese ) e la diagnosi dei polsi applicate al
            trattamento osteopatico. Un’altra tappa fondmentale è stata la
            formazione in omeopatia alla scuola del Dr Micozzi, il quale ha
            sviluppato un approccio originale rileggendo la teoria
            dell’omeopatia sulla base delle moderne acquisizioni in campo
            immunologico. Ho studiato e mi occupo di Kinesiologia applicata.
          </p>
          <p style={{ marginTop: 30, fontSize: 18 }}>ENG</p>
          <p>
            Born in Aosta September 1, 1974, after finishing his studies
            masterful I moved to Aix en Provence (Fr) where I sign the Institut
            Superieur d’Osteopathie course Full time duration of 5 years and
            consisting of a number of hours equal to 5500 approx. Aikido, a
            martial art that I practice for several years, awakens in me the
            intuitive awareness of the potential of self-healing that the human
            body possesses and that are completely neglected by academic
            medicine. Osteopathy offers me the opportunity to acquire the
            medical and scientific knowledge and technical practices to develop
            this feeling in a job very beautiful and exciting. On the personal
            journey of growth meeting in 1995 that still practice meditation
            with means to stay “connected”. The years of study in France give me
            the opportunity to meet teachers “long course” who practice and
            teach from 30/40 years and they represent the best that is present
            in France and in Europe. I finish my studies in 1999 and in 2001
            became a member of the ROI (Register Osteopaths Italian) I
            particularly interested in the relationships between occlusion and
            posture working with several dentists (Milan and Este -Pd-). In 2001
            I attend a post graduate in Saint Etienne with the Fondation
            Nationale d’Osteopathie, deepening my knowledge in TCM (traditional
            Chinese medicine) and pulse diagnosis applied to osteopathic
            treatment. Another stage fondmentale has been training in homeopathy
            in the school of Dr Micozzi, who has developed an original approach
            by re-reading the theory of homeopathy on the basis of modern
            acquisitions in the bio-medical field. I studied and I deal with
            Applied Kinesiology.
          </p>
          <br />
          <img src={DettagliImage} alt="Immagine ostepata" />
          <p style={{ fontSize: 18, marginBottom: -12 }}>CURRICULUM VITAE</p>
          <p>1993 Conseguimento Maturità Magistrale</p>
          <p>
            1994 iscrizione presso l’Istituto Superiore di Osteopatia formazione
            Full time-Aix en Provence- FR . La durata del corso di 5 anni,
            consta di 5500 ore di corso. http://www.aix-osteopathie.com/
          </p>
          <p>
            1998/2000 rientro in Italia e termino l’ultimo anno di corso all’
            ISO, Instituto Superiore di Osteopatia 2001 Sostengo l’esame di
            ammissione al ROI, Registro Osteopati Italiani.
          </p>
          <p>http://www.registro-osteopati-italia.com/osteopati-ditalia/</p>
          <p>
            2001 Master in gnatologia Neuro Mio Fasciale (T.E.N.S.) e
            elettromiografia della IAPNOR. www.iapnor.org/
          </p>
          <p>
            2001/2003 Master presso la FNO (fondation nationale d’osteopathie)
            della durata triennale sul tema ” diagnosi pulsologica secondo la
            medicina tradizionale Cinese e sue conseguenze sul trattamento
            Osteopatico del rachide – Saint Étienne (Fr)
          </p>
          <p>
            2004/2008. Formazione della durata quadriennale in omeopatia a
            Milano presso la scuola del dottor Angelo Micozzi . www.omeoweb.com
          </p>
          <p>
            2008 Formazione in Applied Kinesiology presso il Nobile Collegio
            Omeopatico www.nobilecollegiomeopatico.it
          </p>
          <p>
            2015 Eletto membro del collegio dei probiviri del ROI ( registro
            osteopati italiani ). Il ROI oggi rappresenta il referente del
            ministero della salute per il processo di regolamentazione
            dell’osteopatia in Italia come professione sanitaria di primo
            contatto.
          </p>
          <br />
          <p style={{ fontSize: 18 }}>
            ESPERIENZE PROFESSIONALI (dove mi trovi)
          </p>
          <p>Libero professionista presso: </p>
          <p style={{ marginBottom: -15 }}>
            Studio di proprietà Via Challand, 19 11100 Aosta
          </p>
          <p style={{ marginBottom: -15 }}>
            Collaborazione con la Dssa Borrelli dentista , viale Stelvio, 29
            Milano.
          </p>
          <p style={{ marginBottom: -15 }}>
            Collaborazione con Studio Odontoiatrico Dr Lazzarini Vulzio, Via
            Versori, 1 Este PD
          </p>
          <p>
            Studio Medico Aurora, Via Circonvallazione, Banchette d’Ivrea (TO)
          </p>
        </div>
      </div>
      <div style={{ flex: 1, marginLeft: 30 }}></div>
    </div>
  );
};

export default Dettagli;
