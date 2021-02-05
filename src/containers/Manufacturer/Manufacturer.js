import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as manufacturerSelectors from "../../store/manufacturer/selectors";
import * as manufacturerActions from "../../store/manufacturer/actions";
import { useParams } from "react-router-dom";
import * as classes from "./Manufacturer.module.scss";

const Manufacturer = (props) => {
  const manufacturer = useSelector((store) => manufacturerSelectors.getManufacturer(store));

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(manufacturerActions.fetchManufacturer(id));
  }, [dispatch, id]);

  const {
    name,
    image,
  } = manufacturer ? manufacturer : {};

  return (
    manufacturer && (
      <div className={classes.manufacturer}>
        <h2>{name}</h2>
        {image && <img src={image} alt={name} />}
      </div>
    )
  );
};

export default Manufacturer;
