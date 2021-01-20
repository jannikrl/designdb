import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as designActions from '../../store/design/actions';
import * as styles from "./Design.module.scss";

class Design extends Component {
  componentDidMount() {
    const designId = this.props.match.params.id
    this.props.fetchDesign(designId);
  }

  render() {
    const name = this.props.design && this.props.design.name;
    const src = this.props.design && this.props.design.image;

    return (
      <div className={styles.design}>
        <h1>{name}</h1>
        <img src={src} alt={name} />
      </div>
    );
  }
}

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
