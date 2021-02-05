import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as classes from "./Design.module.scss";

const Design = (props) => {
  const design = useSelector((state) => designSelectors.getDesign(state));

  const dispatch = useDispatch();

  const fetchDesign = useCallback(
    (id) => dispatch(designActions.fetchDesign(id)),
    [dispatch]
  );

  const { id } = useParams();

  useEffect(() => {
    fetchDesign(id);
  }, [fetchDesign, id]);

  if (design && +id !== design.id) {
    dispatch(designActions.reset());
  }

  return (
    design && (
      <div className={classes.design}>
        <h1>{design.name}</h1>

        {design.image && <img src={design.image} alt={design.name} />}

        {design.model && (
          <p>
            <strong>Model:</strong> {design.model}
          </p>
        )}
        {design.yearFrom && (
          <p>
            <strong>Year from:</strong> {design.yearFrom}
          </p>
        )}
        {design.yearTo && (
          <p>
            <strong>Year to:</strong> {design.yearTo}
          </p>
        )}
        {design.designer && (
          <p>
            <strong>Designer:</strong> <Link to={"/designer/" + design.designer.id}>{design.designer.name}</Link>
          </p>
        )}
        {design.manufacturer && (
          <p>
            <strong>Manufacturer:</strong> {design.manufacturer.name}
          </p>
        )}
      </div>
    )
  );
};

export default Design;
