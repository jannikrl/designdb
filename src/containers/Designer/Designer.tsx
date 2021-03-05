import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
import { Link, useParams } from "react-router-dom";
import styles from "./Designer.module.scss";
import * as authSelectors from "../../store/auth/selectors";
import { RootState } from "../../store/types";

type paramTypes = {
    id: string;
}

const Designer = () => {
  const designer = useSelector((store: RootState) => designerSelectors.getDesigner(store));
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams<paramTypes>();

  useEffect(() => {
    dispatch(designerActions.fetchDesigner(+id));
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
  } = designer ?? {};

  const didFetchDesigner = designer && designer.id === +id;

  return (
    didFetchDesigner && (
      <div className={styles.designer}>
        {isAuthenticated && (
          <div>
            <Link to={`/designer/${id}/edit`}>Edit</Link>
          </div>
        )}

        <h2>{name}</h2>

        {image && <img src={process.env.REACT_APP_IMAGE_URL + "/" + image} alt={name} />}
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
