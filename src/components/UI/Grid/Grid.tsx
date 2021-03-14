import React from "react";
import { CSSGrid, makeResponsive, measureItems } from "react-stonecutter";
import styles from "./Grid.module.scss";

const GridComponent = makeResponsive(measureItems(CSSGrid), { maxWidth: 2400 });

const Grid: React.FC = ({ children }) => {
  return (
    <div className={styles.grid}>
      <GridComponent
        component="ul"
        columns={4}
        columnWidth={180}
        gutterWidth={12}
        gutterHeight={42}
        duration={800}
      >
        {children}
      </GridComponent>
    </div>
  );
};

export default Grid;
