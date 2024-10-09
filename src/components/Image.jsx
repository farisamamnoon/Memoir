import { useEffect, useState } from "react";
import styles from "./Image.module.css";

export default function Image({ cid }) {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/photos/${cid}`);
        if (!response.ok) {
          throw new Error("There was an error on our side");
        }
        const data = await response.blob();
        const url = URL.createObjectURL(data);
        await new Promise((res) => {
          setTimeout(() => {
            res();
          }, 3000);
        });
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
    return <div className={styles.loading} />;
  }

  return <img src={image} alt="Image of a place" />;
}
