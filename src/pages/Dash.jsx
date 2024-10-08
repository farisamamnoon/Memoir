import { useNavigate, useParams } from "react-router-dom";

import styles from "./Dash.module.css";
import data from "../data/data.json";

function Dash() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="main-heading">Memoir</h1>
      <div className={styles["card-container"]}>
        {data.places.map((place) => (
          <div
            className={styles.card}
            onClick={() => navigate(`/place/${place.id}`)}
            key={place.id}
          >
            <img src={`images/${place.images[0].url}`} />
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
            <button>More</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dash;
