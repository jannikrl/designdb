import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as manufacturerSelectors from "../../store/manufacturer/selectors";
import * as manufacturerActions from "../../store/manufacturer/actions";
import { Link, useParams } from "react-router-dom";
import styles from "./Manufacturer.module.scss";
import * as authSelectors from "../../store/auth/selectors";
import { RootState } from "../../store/types";

type ParamTypes = {
  id: string;
};

const Manufacturer: React.FC = () => {
  const manufacturer = useSelector((store: RootState) =>
    manufacturerSelectors.getManufacturer(store)
  );
  const isAuthenticated = useSelector((state: RootState) =>
    authSelectors.isAuthenticated(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    dispatch(manufacturerActions.fetchManufacturer(+id));
  }, [dispatch, id]);

  const { name, image } = manufacturer || {};

  return (
    manufacturer && (
      <div className={styles.manufacturer}>
        {isAuthenticated && (
          <div>
            <Link to={`/manufacturer/${id}/edit`}>Edit</Link>
          </div>
        )}

        <h2>{name}</h2>

        {image && (
          <img src={process.env.REACT_APP_IMAGE_URL + "/" + image} alt={name} />
        )}
      </div>
    )
  );
};

export default Manufacturer;
