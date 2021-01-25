import React, { useEffect } from "react";
import Toggle from "../../../components/UI/Toggle";
import Dropdown from "../../../components/UI/Dropdown";
import { connect } from "react-redux";
import * as gridActions from "../../../store/grid/actions";
import * as gridSelectors from "../../../store/grid/selectors";

const Controls = (props) => {
  const { fetchDesigners } = props;

  useEffect(() => {
    fetchDesigners();
  }, [fetchDesigners]);

  return (
    <div>
      <Toggle
        name="Featured"
        selected={props.showFeatured}
        onChange={props.updateShowFeatured}
      />
      <Dropdown
        options={props.designers}
        placeholder="All designers"
        onChange={props.selectDesigner}
      />
    </div>
  );
};

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
