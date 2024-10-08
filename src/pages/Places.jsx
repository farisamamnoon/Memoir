import { useParams } from "react-router-dom";
import styles from "./Places.module.css";
import data from "../data/data.json";
import { useMemo, useState } from "react";
import FullScreen from "./FullScreen";

function Places() {
  const id = useParams().id;
  const [fullscreen, setFullScreen] = useState(false);
  const [image, setImage] = useState("");

  const handleOpen = (img) => {
    setImage(img);
    setFullScreen(true);
  };
  const handleClose = () => {
    setImage("");
    setFullScreen(false);
  };

  const here = data.places.filter((p) => p.id == id)[0];

  return (
    <>
      <h1 className="main-heading">{here.name}</h1>

      <div className={styles["card-container"]}>
        {here.images.map((img) => (
          <div
            className={styles.card}
            key={img.id}
            onClick={() => handleOpen(img.url)}
          >
            <img src={`../../images/${img.url}`} />
          </div>
        ))}
      </div>
      {fullscreen && <FullScreen image={image} handleClose={handleClose} />}
    </>
  );
}

export default Places;
