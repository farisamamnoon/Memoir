import { useEffect, useState } from "react";
import styles from "./Image.module.css";

export default function Image({ fullScreenLoading, cid, options }) {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        let query = "";
        if (options) {
          query = new URLSearchParams(options).toString();
        }
        const response = await fetch(
          `http://localhost:8000/photos/${cid}?${query}`
        );
        if (!response.ok) {
          throw new Error("There was an error on our side");
        }
        const data = await response.blob();
        const url = URL.createObjectURL(data);
        setLoading(false);
        setImage(url);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchImage();
  }, []);

  if (error) {
    return (
      <div>
        <h5>{error}</h5>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className={
          fullScreenLoading ? styles["loading-fullscreen"] : styles.loading
        }
      />
    );
  }

  return <img src={image} alt="Image of a place" />;
}
