import React from "react";
import { Design } from "../../../store/design/types";
import styles from "./Image.module.scss";

interface ImageProps {
  design: Design | null;
}

const Image: React.FC<ImageProps> = ({ design }) => {
  const { name, image, imageReference } = design ?? {};

  return (
    <div>
      {image && (
        <img
          src={process.env.REACT_APP_IMAGE_URL + "/" + image}
          className={styles.image}
          alt={name}
        />
      )}
      <br />
      {imageReference && <a href={imageReference}>Source</a>}
    </div>
  );
};

export default Image;
