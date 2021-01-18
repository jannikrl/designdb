import React from 'react';
import './GridItem.css';

const GridItem = (props) => (
    <div className='grid-item'>
        <img src={props.image} alt="" />
    </div>
)

export default GridItem;