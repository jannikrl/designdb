import React from "react";
import styles from "./GridItem.module.scss";

interface GridItemProps {
  image: string;
}

const GridItem: React.FC<GridItemProps> = ({ image }) => (
  <div className={styles.gridItem}>
    <img src={process.env.REACT_APP_IMAGE_URL + "/" + image} alt="" />
  </div>
);

export default GridItem;
