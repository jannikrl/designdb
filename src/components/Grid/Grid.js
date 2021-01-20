import React, { Component } from "react";
import { Link } from "react-router-dom";
import GridItem from "./GridItem/GridItem";
import { CSSGrid, makeResponsive } from "react-stonecutter";
import * as styles from "./Grid.module.scss";

const GridComponent = makeResponsive(CSSGrid, { maxWidth: 2400 });

class Grid extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <GridComponent
          component="ul"
          columns={5}
          columnWidth={180}
          gutterWidth={12}
          gutterHeight={12}
          itemHeight={180}
          duration={800}
        >
          {this.props.data.map((item) => (
            <li key={item.id}>
              <Link to={"/d/" + item.id}>
                <GridItem image={item.image} />
              </Link>
            </li>
          ))}
        </GridComponent>
      </div>
    );
  }
}

export default Grid;
