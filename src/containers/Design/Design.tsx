import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as designsActions from "../../store/designs/actions";
import * as designsSelectors from "../../store/designs/selectors";
import * as authSelectors from "../../store/auth/selectors";
import { RootState } from "../../store/types";
import Info from "./Info/Info";
import Image from "./Image/Image";
import styles from "./Design.module.scss";
import Grid from "../../components/UI/Grid/Grid";
import GridItem from "../../components/UI/Grid/GridItem/GridItem";

type ParamTypes = {
  id: string;
};

const Design: React.FC = () => {
  const [didFetchDesigns, setDidFetchDesigns] = useState(false);

  const design = useSelector((state: RootState) =>
    designSelectors.getDesign(state)
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

  const fetchDesign = useCallback(
    (id) => dispatch(designActions.fetchDesign(id)),
    [dispatch]
  );

  const fetchDesigns = useCallback(
    (filterOptions) => dispatch(designsActions.fetchDesigns(filterOptions)),
    [dispatch]
  );

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    fetchDesign(id);
  }, [fetchDesign, id]);

  const didLoadDesign = design && design.id === +id;

  if (didLoadDesign && !didFetchDesigns) {
    fetchDesigns({
      showFeatured: false,
      designer: design?.designerId,
      manufacturer: null,
      type: null,
    });
    setDidFetchDesigns(true);
  }

  const { name } = design ?? {};

  return (
    <>
      {didLoadDesign && (
        <div>
          <div className={styles.overflowHidden}>
            <h2>
              {name}
              {isAuthenticated && (
                <small className={styles.floatRight}>
                  <Link to={`/design/${id}/edit`}>Edit</Link>
                </small>
              )}
            </h2>

            <div className={styles.floatLeft}>
              <Image design={design} />
            </div>

            <Info design={design} />
          </div>

          {didFetchDesigns && !isLoading && (
            <div>
              <h3>More from {design?.designer?.name}</h3>
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

export default Design;
