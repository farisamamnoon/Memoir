import { useLoaderData, useNavigate } from "react-router-dom";

import styles from "./Dash.module.css";
import Image from "../components/Image";

function Dash() {
  const navigate = useNavigate();
  const { success, message, data } = useLoaderData();

  if (!success) {
    return (
      <div className="error-boundary">
        <h1>Error</h1>
        <p>{message}</p>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    );
  }

  return (
    <>
      <h1 className="main-heading">Memoir</h1>
      <div className={styles["card-container"]}>
        {data.map((place) => (
          <div
            className={styles.card}
            onClick={() => navigate(`/${place.id}`)}
            key={place.id}
          >
            <Image cid={place.images[0].url} />
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

export async function dashLoader() {
  try {
    const response = await fetch("http://localhost:8000");
    if (!response.ok) {
      throw new Error("There has been an error");
    }
    const result = await response.json();

    return {
      success: true,
      message: "",
      data: result.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
      data: null,
    };
  }
}
