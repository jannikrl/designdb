import React, { Component } from "react";
import Controls from "./Controls/Controls";
import Grid from "../../components/Grid/Grid";
import { connect } from "react-redux";
import * as actions from "../../store/grid/actions";

class Designs extends Component {
  componentDidMount() {
      this.props.fetchDesigns();
  }

  render() {
    return (
      <div>
        <Controls />
        <Grid data={this.props.designs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    designs: state.grid.designs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDesigns: () => dispatch(actions.fetchDesigns()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Designs);
