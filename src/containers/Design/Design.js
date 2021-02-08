import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as classes from "./Design.module.scss";
import * as authSelectors from "../../store/auth/selectors";

const Design = (props) => {
  const design = useSelector((state) => designSelectors.getDesign(state));
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );

  const dispatch = useDispatch();

  const fetchDesign = useCallback(
    (id) => dispatch(designActions.fetchDesign(id)),
    [dispatch]
  );

  const { id } = useParams();

  useEffect(() => {
    fetchDesign(id);
  }, [fetchDesign, id]);

  const {
    name,
    image,
    model,
    yearFrom,
    yearTo,
    designer,
    manufacturer,
  } = design ? design : {};

  const didFetchDesign = design && design.id === +id;

  return (
    didFetchDesign && (
      <div className={classes.design}>
        {isAuthenticated && (
          <div>
            <Link to={`/design/${id}/edit`}>Edit</Link>
          </div>
        )}

        <h2>{name}</h2>

        {image && <img src={process.env.REACT_APP_IMAGE_URL + "/" + image} alt={name} />}

        {model && (
          <p>
            <strong>Model:</strong> {model}
          </p>
        )}
        {yearFrom && (
          <p>
            <strong>Year:</strong> {yearFrom}
            {yearTo && "-" + yearTo}
          </p>
        )}

        {designer && (
          <p>
            <strong>Designer:</strong>{" "}
            <Link to={`/designer/${designer.id}`}>{designer.name}</Link>
          </p>
        )}
        {manufacturer && (
          <p>
            <strong>Manufacturer:</strong>{" "}
            <Link to={`/manufacturer/${manufacturer.id}`}>
              {manufacturer.name}
            </Link>
          </p>
        )}
      </div>
    )
  );
};

export default Design;
