import Image from "../components/Image";
import styles from "./Places.module.css";

function FullScreen({ image, handleClose }) {
  return (
    <div className={styles["model-container"]} onClick={handleClose}>
      <div className={styles["fullscreen-image"]}>
        {image && <Image fullScreenLoading cid={image} />}
      </div>
    </div>
  );
}

export default FullScreen;
