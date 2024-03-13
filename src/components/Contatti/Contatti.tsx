import Phone from "../../images/phone.png";
import Mail from "../../images/mail.png";

const Contatti = () => {
  return (
    <div style={{ paddingBottom: 25 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <div>
            <div style={{ marginTop: 15 }}>
              <p>Telefono</p>
              <p style={{ fontSize: 15, marginTop: -20 }}>+39 347 3159568</p>
            </div>
            <br />
            <div style={{ marginTop: 20 }}>
              <p>Mail</p>
              <p style={{ fontSize: 15, marginTop: -20 }}>
                osteopatalunardi@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div style={{ flex: 4 }}>
          <img
            src={Phone}
            height="80"
            width="80"
            alt="Immagine telefono"
            style={{ marginTop: 0 }}
          />
          <br />
          <img
            src={Mail}
            height="80"
            width="80"
            alt="Immagine mail"
            style={{ marginTop: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contatti;
