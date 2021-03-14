import React from "react";
import styles from "./GridItem.module.scss";

const GridItem: React.FC = ({ children }) => (
  <div className={styles.gridItem}>{children}</div>
);

export default GridItem;
