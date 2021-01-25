import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as styles from "./Design.module.scss";

const Design = (props) => {
  const { fetchDesign, match } = props;

  useEffect(() => {
    const designId = match.params.id;
    fetchDesign(designId);
  }, [fetchDesign, match.params.id]);

  const name = props.design && props.design.name;
  const src = props.design && props.design.image;

  return (
    <div className={styles.design}>
      <h1>{name}</h1>
      <img src={src} alt={name} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    design: state.design.design,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDesign: (id) => dispatch(designActions.fetchDesign(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Design));
