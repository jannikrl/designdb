import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as manufacturerSelectors from "../../store/manufacturer/selectors";
import * as manufacturerActions from "../../store/manufacturer/actions";
import { Link, useParams } from "react-router-dom";
import * as classes from "./Manufacturer.module.scss";
import * as authSelectors from "../../store/auth/selectors";

const Manufacturer = (props) => {
  const manufacturer = useSelector((store) =>
    manufacturerSelectors.getManufacturer(store)
  );
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(manufacturerActions.fetchManufacturer(id));
  }, [dispatch, id]);

  const { name, image } = manufacturer ? manufacturer : {};

  return (
    manufacturer && (
      <div className={classes.manufacturer}>
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
