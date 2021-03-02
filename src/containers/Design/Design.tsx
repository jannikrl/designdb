import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import styles from "./Design.module.scss";
import * as authSelectors from "../../store/auth/selectors";
import { RootState } from "../../store/types";

type ParamTypes = {
  id: string;
};

const Design: React.FC = () => {
  const design = useSelector((state: RootState) =>
    designSelectors.getDesign(state)
  );
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );

  const dispatch = useDispatch();

  const fetchDesign = useCallback(
    (id) => dispatch(designActions.fetchDesign(id)),
    [dispatch]
  );

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    fetchDesign(id);
  }, [fetchDesign, id]);

  const {
    name,
    image,
    imageReference,
    alsoKnownAs,
    alsoKnownAsOriginCountry,
    originCountry,
    model,
    yearFrom,
    yearTo,
    designer,
    manufacturer,
    manufacturerUrl,
    manufacturerDescription,
    wikipediaUrl,
    recognitions,
  } = design || {};

  const didFetchDesign = design && design.id === +id;

  return (
    <>
      {didFetchDesign && (
        <div className={styles.design}>
          {isAuthenticated && (
            <div>
              <Link to={`/design/${id}/edit`}>Edit</Link>
            </div>
          )}
          <h2>{name}</h2>
          {image && (
            <img
              src={process.env.REACT_APP_IMAGE_URL + "/" + image}
              alt={name}
            />
          )}
          {imageReference && <a href={imageReference}>Source</a>}
          {model && (
            <p>
              <strong>Model:</strong> {model}
            </p>
          )}
          {alsoKnownAs && (
            <p>
              <strong>Also known as:</strong> {alsoKnownAs}
            </p>
          )}
          {alsoKnownAsOriginCountry && originCountry && (
            <p>
              <strong>
                Also known as in {originCountry && originCountry}:
              </strong>{" "}
              {alsoKnownAsOriginCountry}
            </p>
          )}
          {originCountry && (
            <p>
              <strong>Country:</strong> {originCountry}
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
          {recognitions && (
            <p>
              <strong>Recognitions:</strong> {recognitions}
            </p>
          )}
          {manufacturerDescription && (
            <p className={styles.multiLine}>
              <strong>Manufacturer description:</strong>{" "}
              {manufacturerDescription}
            </p>
          )}
          {manufacturerUrl && (
            <p>
              <a href={manufacturerUrl}>Learn more on manufacturer website</a>
            </p>
          )}
          {wikipediaUrl && <a href={wikipediaUrl}>Learn more on Wikipedia</a>}
        </div>
      )}
    </>
  );
};

export default Design;
