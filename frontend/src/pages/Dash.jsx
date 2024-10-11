import { useLoaderData, useNavigate } from "react-router-dom";

import styles from "./Dash.module.css";
import Image from "../components/Image";

function Dash() {
  const navigate = useNavigate();
  const { success, message, data } = useLoaderData();

  return (
    <>
      <h1 className="main-heading">Memoir</h1>
      <div className={styles["card-container"]}>
        {data.map((place) => (
          <div className={styles.card} key={place.id}>
            <Image
              cid={place.images[0].url}
              options={{ width: 400, height: 400, fit: "cover" }}
            />
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
            <button onClick={() => navigate(`/${place.id}`)} disabled={!data}>
              More
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dash;

export async function dashLoader() {
  const response = await fetch("https://memoir-backend-84ny.onrender.com");
  if (!response.ok) {
    throw new Error("There has been an error");
  }
  const result = await response.json();

  return {
    success: true,
    message: "",
    data: result.data,
  };
}
