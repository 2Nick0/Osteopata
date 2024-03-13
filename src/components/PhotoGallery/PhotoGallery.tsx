import ImageStudio from "../../images/imageStudio.jpg";
import ImageStudio2 from "../../images/imageStudio2.jpg";
import ImageStudio3 from "../../images/imageStudio3.jpg";
import ImageStudio4 from "../../images/imageStudio4.jpg";
import ImageStudio5 from "../../images/imageStudio5.jpg";
import ImageStudio6 from "../../images/imageStudio6.jpg";
import ImageStudio7 from "../../images/imageStudio7.jpg";
import ImageStudio8 from "../../images/imageStudio8.jpg";
import ImageStudio9 from "../../images/imageStudio9.jpg";
import ImageStudio10 from "../../images/imageStudio10.jpg";

const PhotoGallery = () => {
  const images = () => {
    const ar = [];
    let img, img2;
    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        img = ImageStudio;
        img2 = ImageStudio2;
      } else if (i === 1) {
        img = ImageStudio3;
        img2 = ImageStudio4;
      } else if (i === 2) {
        img = ImageStudio5;
        img2 = ImageStudio6;
      } else {
        img = ImageStudio7;
        img2 = ImageStudio8;
      }
      ar.push(
        <span style={{ flex: 1, fontSize: 15 }}>
          <img
            src={img}
            alt="Immagine dello studio"
            style={{ marginLeft: 70, marginTop: 15 }}
          />
          <img
            src={img2}
            alt="Seconda immagine dello studio"
            style={{ marginLeft: 100 }}
          />
        </span>
      );
    }
    ar.push(
      <span style={{ flex: 1, fontSize: 15 }}>
        <img
          src={ImageStudio9}
          alt="Immagine dello studio"
          style={{ marginLeft: 120, marginTop: 15 }}
        />
        <img
          src={ImageStudio10}
          alt="Seconda immagine dello studio"
          style={{ marginLeft: 200 }}
        />
      </span>
    );
    return ar.map((image) => image);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {images()}
    </div>
  );
};

export default PhotoGallery;
