import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
import * as designsActions from "../../store/designs/actions";
import * as designsSelectors from "../../store/designs/selectors";
import { Link, useParams } from "react-router-dom";
import styles from "./Designer.module.scss";
import * as authSelectors from "../../store/auth/selectors";
import { RootState } from "../../store/types";
import Grid from "../../components/UI/Grid/Grid";
import GridItem from "../../components/UI/Grid/GridItem/GridItem";

type paramTypes = {
  id: string;
};

const Designer: React.FC = () => {
  const designer = useSelector((store: RootState) =>
    designerSelectors.getDesigner(store)
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

  const { id } = useParams<paramTypes>();

  useEffect(() => {
    dispatch(designerActions.fetchDesigner(+id));

    fetchDesigns({
      showFeatured: false,
      designer: id,
      manufacturer: null,
      type: null,
    });
  }, [dispatch, id, fetchDesigns]);

  const {
    name,
    image,
    bornYear,
    bornCity,
    bornCountry,
    diedYear,
    diedCity,
    diedCountry,
    description,
    descriptionReference,
    descriptionManufacturer,
  } = designer ?? {};

  const didLoadDesigner = designer && designer.id === +id;

  return (
    <>
      {didLoadDesigner && (
        <div className={styles.designer}>
          {isAuthenticated && (
            <div>
              <Link to={`/designer/${id}/edit`}>Edit</Link>
            </div>
          )}

          <h2>{name}</h2>

          {image && (
            <img
              src={process.env.REACT_APP_IMAGE_URL + "/" + image}
              alt={name}
            />
          )}
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

          {description && descriptionReference && descriptionManufacturer && (
            <div>
              <p className={styles.multiLine}>
                <strong>Description from {descriptionManufacturer.name}</strong>
                <br />
                {description}
              </p>

              <p>
                <a href={descriptionReference} target="_blank" rel="noreferrer">
                  Source
                </a>
              </p>
            </div>
          )}

          {didLoadDesigner && !isLoading && (
            <div>
              <h3>Designs from {designer?.name}</h3>
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

export default Designer;
