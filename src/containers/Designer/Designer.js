import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
import { useParams } from "react-router-dom";
import * as classes from "./Designer.module.scss";

const Designer = (props) => {
  const designer = useSelector((store) => designerSelectors.getDesigner(store));

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(designerActions.fetchDesigner(id));
  }, [dispatch, id]);

  const {
    name,
    image,
    bornYear,
    bornCity,
    bornCountry,
    diedYear,
    diedCity,
    diedCountry,
  } = designer ? designer : {};

  return (
    designer && (
      <div className={classes.designer}>
        <h2>{name}</h2>
        {image && <img src={image} alt={name} />}
        {bornYear && (
          <p>
            <strong>Born</strong> {bornYear}
            {bornCity && ", " + bornCity}
            {bornCountry && ", " + bornCountry}
          </p>
        )}
        {diedYear && (
          <p>
            <strong>Died</strong> {diedYear}
            {diedCity && ", " + diedCity}
            {diedCountry && ", " + diedCountry}
          </p>
        )}
      </div>
    )
  );
};

export default Designer;
