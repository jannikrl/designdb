import React, { useCallback, useEffect } from "react";
import Toggle from "../../../components/UI/Toggle";
import Dropdown from "../../../components/UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import * as gridActions from "../../../store/grid/actions";
import * as gridSelectors from "../../../store/grid/selectors";

const Controls = (props) => {
  const showFeatured = useSelector((state) => gridSelectors.getShowFeatured(state));
  const designers = useSelector((state) => state.grid.designers);

  const dispatch = useDispatch();

  const updateShowFeatured = (value) => dispatch(gridActions.showFeatured(value));
  const selectDesigner = (id) => dispatch(gridActions.selectDesigner(id));
  const fetchDesigners = useCallback(() => dispatch(gridActions.fetchDesigners()), [dispatch]);

  useEffect(() => {
    fetchDesigners();
  }, [fetchDesigners]);

  return (
    <div>
      <Toggle
        name="Featured"
        selected={showFeatured}
        onChange={updateShowFeatured}
      />
      <Dropdown
        options={designers}
        placeholder="All designers"
        onChange={selectDesigner}
      />
    </div>
  );
};

export default Controls;
