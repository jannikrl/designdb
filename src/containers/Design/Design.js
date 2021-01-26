import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as styles from "./Design.module.scss";

const Design = (props) => {
  const design = useSelector((state) => state.design.design);

  const dispatch = useDispatch();

  const fetchDesign = useCallback(
    (id) => dispatch(designActions.fetchDesign(id)),
    [dispatch]
  );

  const { designId } = useParams();

  useEffect(() => {
    fetchDesign(designId);
  }, [fetchDesign, designId]);
  
  return (
    design && (
      <div className={styles.design}>
        <h1>{design.name}</h1>
        <img src={design.image} alt={design.name} />
      </div>
    )
  );
};

export default Design;
