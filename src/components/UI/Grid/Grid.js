import React from "react";
import { Link } from "react-router-dom";
import GridItem from "./GridItem/GridItem";
import { CSSGrid, makeResponsive, measureItems } from "react-stonecutter";
import * as styles from "./Grid.module.scss";

const GridComponent = makeResponsive(measureItems(CSSGrid), { maxWidth: 2400 });

const Grid = (props) => {
  return (
    <div className={styles.grid}>
      <GridComponent
        component="ul"
        columnWidth={180}
        gutterWidth={12}
        gutterHeight={12}
        itemHeight={180}
        duration={800}
      >
        {props.data.map((item) => (
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
