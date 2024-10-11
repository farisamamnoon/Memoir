import { useLoaderData } from "react-router-dom";
import styles from "./Places.module.css";
import { useState } from "react";
import FullScreen from "./FullScreen";
import Image from "../components/Image";

function Places() {
  const { success, message, data } = useLoaderData();
  const [fullscreen, setFullScreen] = useState({
    open: false,
    cid: "",
  });

  const handleOpen = (img) => {
    setFullScreen({
      open: true,
      cid: img,
    });
  };
  const handleClose = () => {
    setFullScreen({
      open: false,
      cid: "",
    });
  };

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
      <h1 className="main-heading">{data.name}</h1>

      <div className={styles["card-container"]}>
        {data.images.map((img) => (
          <div
            className={styles.card}
            key={img.id}
            onClick={() => handleOpen(img.url)}
          >
            <Image cid={img.url} options={{quality: 30}}/>
          </div>
        ))}
      </div>
      {fullscreen.open && (
        <FullScreen image={fullscreen.cid} handleClose={handleClose} />
      )}
    </>
  );
}

export default Places;

export async function placeLoader({ params }) {
  try {
    const response = await fetch(`http://localhost:8000/${params.id}`);
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
