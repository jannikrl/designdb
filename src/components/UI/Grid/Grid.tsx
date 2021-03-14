import React from "react";
import { Link } from "react-router-dom";
import GridItem from "./GridItem/GridItem";
import { CSSGrid, makeResponsive, measureItems } from "react-stonecutter";
import styles from "./Grid.module.scss";

const GridComponent = makeResponsive(measureItems(CSSGrid), { maxWidth: 2400 });

interface GridProps {
  data: { id: number; image: string }[];
}

const Grid: React.FC<GridProps> = ({ data }) => {
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
        {data.map((item) => (
          <li key={item.id}>
            <Link to={"/design/" + item.id}>
              <GridItem image={item.image} />
            </Link>
          </li>
        ))}
      </GridComponent>
    </div>
  );
};

export default Grid;
