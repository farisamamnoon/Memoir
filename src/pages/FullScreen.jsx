import { useLoaderData } from "react-router-dom";
import styles from "./Places.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function FullScreen({ /* image, */ handleClose }) {
  const [image, setImage] = useState("");
  // const img = useLoaderData();
  // console.log(img);

  useEffect(() => {
    const image = async () => {
      // const response = await fetch("http://localhost:8000/1", {
      //   headers: {
      //     Accept: "image/jpeg, image/jpg, image/png",
      //   },
      // });

      const response = await axios.get("http://localhost:8000/1");
      console.log(response.data);

      const blob = await response.blob();
      console.log(blob);

      setImage(blob);

      // const fileReader = new FileReader();

      // fileReader.onload = () => {
      //   console.log("Heyy");
      //   setImage(fileReader.result);
      // };

      // fileReader.readAsDataURL(blob);
      const url = URL.createObjectURL(blob);

      setImage(url);
    };

    image();
  }, []);

  return (
    <div className={styles["model-container"]} onClick={handleClose}>
      <div className={styles["fullscreen-image"]}>
        {/* <img className={styles.image} src={`images/${image}`}></img> */}
        {image && <img className={styles.image} src={image}></img>}
      </div>
    </div>
  );
}

export default FullScreen;

// export const getTemp = async () => {
//   const response = await fetch("http://localhost:8000/1", {
//     headers: {
//       Accept: "image/jpeg; charset=utf-8",
//     },
//   });

//   const blob = await response.blob();

//   const imgURL = URL.createObjectURL(blob);

//   return imgURL;
// };
