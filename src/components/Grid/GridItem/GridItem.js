import React from 'react';
import * as styles from './GridItem.module.scss';

const GridItem = (props) => (
    <div className={styles.gridItem}>
        <img src={props.image} alt="" />
    </div>
)

export default GridItem;