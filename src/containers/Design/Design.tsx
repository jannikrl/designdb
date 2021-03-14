import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as authSelectors from "../../store/auth/selectors";
import { RootState } from "../../store/types";
import Info from "./Info/Info";
import Image from "./Image/Image";
import styles from "./Design.module.scss";

type ParamTypes = {
  id: string;
};

const Design: React.FC = () => {
  const design = useSelector((state: RootState) =>
    designSelectors.getDesign(state)
  );
  const isAuthenticated = useSelector((state: RootState) =>
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

  const { name } = design ?? {};

  const didFetchDesign = design && design.id === +id;

  return (
    <>
      {didFetchDesign && (
        <div>
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
      )}
    </>
  );
};

export default Design;
