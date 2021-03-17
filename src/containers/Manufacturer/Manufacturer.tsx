import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as manufacturerSelectors from "../../store/manufacturer/selectors";
import * as manufacturerActions from "../../store/manufacturer/actions";
import * as designsActions from "../../store/designs/actions";
import * as designsSelectors from "../../store/designs/selectors";
import { Link, useParams } from "react-router-dom";
import styles from "./Manufacturer.module.scss";
import * as authSelectors from "../../store/auth/selectors";
import { RootState } from "../../store/types";
import Grid from "../../components/UI/Grid/Grid";
import GridItem from "../../components/UI/Grid/GridItem/GridItem";

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
  const designs = useSelector((state: RootState) =>
    designsSelectors.getDesigns(state)
  );
  const isLoading = useSelector((state: RootState) =>
    designsSelectors.isLoading(state)
  );

  const dispatch = useDispatch();

  const fetchDesigns = useCallback(
    (filterOptions) => dispatch(designsActions.fetchDesigns(filterOptions)),
    [dispatch]
  );

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    dispatch(manufacturerActions.fetchManufacturer(+id));
    fetchDesigns({
      showFeatured: false,
      designer: null,
      manufacturer: id,
      type: null,
    });
  }, [dispatch, id, fetchDesigns]);

  const { name, image, description, websiteUrl } = manufacturer || {};

  const didLoadManufacturer = manufacturer && manufacturer.id === +id;

  return (
    <>
      {didLoadManufacturer && (
        <div>
          {isAuthenticated && (
            <div>
              <Link to={`/manufacturer/${id}/edit`}>Edit</Link>
            </div>
          )}

          <h2>{name}</h2>

          {image && (
            <img
              src={process.env.REACT_APP_IMAGE_URL + "/" + image}
              className={styles.manufacturerImage}
              alt={name}
            />
          )}

          {description && <p>{description}</p>}

          {websiteUrl && (
            <p>
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                Website
              </a>
            </p>
          )}

          {!isLoading && (
            <div>
              <h3>Designs from {manufacturer?.name}</h3>
              <Grid>
                {designs.map((design) => (
                  <li key={design.id}>
                    <Link to={"/design/" + design.id}>
                      <GridItem>
                        <img
                          src={
                            process.env.REACT_APP_IMAGE_URL + "/" + design.image
                          }
                          alt=""
                        />
                      </GridItem>
                    </Link>
                  </li>
                ))}
              </Grid>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Manufacturer;
