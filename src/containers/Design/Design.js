import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as designActions from '../../store/design/actions';

class Design extends Component {
  componentDidMount() {
    const designId = this.props.match.params.id
    this.props.fetchDesign(designId);
  }

  render() {
    return (
      <div>
        <h1>{this.props.design && this.props.design.name}</h1>
        <img src={this.props.design && this.props.design.image} />
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
