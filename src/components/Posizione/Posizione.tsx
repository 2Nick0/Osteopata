const Posizione = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <div style={{ flex: 1 }}>
          <p>Aosta, Via Challand, 19</p>
          <p style={{ fontSize: 12, marginTop: -18, marginBottom: 30 }}>
            Studio di proprietà
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.1957980589541!2d7.3171372292115135!3d45.7354426347483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b9f6d88851%3A0x74ea8098fb15131c!2sVia%20Challand%2C%2019%2C%2011100%20Aosta%20AO!5e0!3m2!1sit!2sit!4v1670857063842!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Posizione Aosta maps"
          />
          <br />
          <hr style={{ marginRight: 27 }} />
          <p>Este, Via Girolamo Versori, 1</p>
          <p style={{ fontSize: 12, marginTop: -18, marginBottom: 30 }}>
            Collaborazione con Studio Odontoiatrico Dr Lazzarini Vulzio
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.1754649531363!2d11.640445715033703!3d45.22401815745946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f1de7ceb4da7b%3A0x7747fb914abe4df3!2sVia%20Girolamo%20Versori%2C%201%2C%2035042%20Este%20PD!5e0!3m2!1sit!2sit!4v1670858714861!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Posizione Este maps"
          />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: 50 }}>Milano, Via Privata del Don, 5</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5772184536845!2d9.181205322062223!3d45.45817508481869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c401d9d4756b%3A0xaa0199744dcc5066!2sVia%20Privata%20del%20Don%2C%205%2C%2020123%20Milano%20MI!5e0!3m2!1sit!2sit!4v1670857766802!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Posizione Milano maps"
          />
          <br />
          <hr style={{ marginRight: 27 }} />
          <p>Ivrea, Via Circonvallazione</p>
          <p style={{ fontSize: 12, marginTop: -18, marginBottom: 30 }}>
            Studio Medico Aurora
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0000930752462!2d7.873331415042905!3d45.469802041091576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478884b889f0695d%3A0xb62de1455238f516!2sVia%20Circonvallazione%2C%2010015%20Ivrea%20TO!5e0!3m2!1sit!2sit!4v1670858987302!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="Posizione Ivrea maps"
          />
        </div>
      </div>
    </div>
  );
};

export default Posizione;
