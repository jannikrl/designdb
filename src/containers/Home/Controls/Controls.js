import React, { Component } from "react";
import Toggle from "../../../components/UI/Toggle";
import Dropdown from "../../../components/UI/Dropdown";
import { connect } from "react-redux";
import * as gridActions from "../../../store/grid/actions";
import * as gridSelectors from "../../../store/grid/selectors";

class Controls extends Component {
  componentDidMount() {
      this.props.fetchDesigners();
  }

  render() {
    return (
      <div>
        <Toggle
          name="Featured"
          selected={this.props.showFeatured}
          onChange={this.props.updateShowFeatured}
        />
        <Dropdown
          options={this.props.designers}
          placeholder="Designer"
          onChange={this.props.selectDesigner}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showFeatured: gridSelectors.getShowFeatured(state),
    designers: state.grid.designers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateShowFeatured: (value) => dispatch(gridActions.showFeatured(value)),
    selectDesigner: (id) => dispatch(gridActions.selectDesigner(id)),
    fetchDesigners: () => dispatch(gridActions.fetchDesigners()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
