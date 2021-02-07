import React, { useCallback, useEffect } from "react";
import Toggle from "../../../components/UI/Toggle";
import Dropdown from "../../../components/UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import * as designsActions from "../../../store/designs/actions";
import * as designsSelectors from "../../../store/designs/selectors";
import * as designersActions from "../../../store/designers/actions";
import * as designersSelector from "../../../store/designers/selectors";

const Controls = (props) => {
  const showFeatured = useSelector((state) => designsSelectors.getShowFeatured(state));
  const getSelectedDesigner = useSelector((state) => designsSelectors.getSelectedDesigner(state));
  const designers = useSelector((state) => designersSelector.getDesigners(state));

  const dispatch = useDispatch();

  const updateShowFeatured = (value) => dispatch(designsActions.showFeatured(value));
  const selectDesigner = (id) => dispatch(designsActions.selectDesigner(id));
  const fetchDesigners = useCallback(() => dispatch(designersActions.fetchDesigners()), [dispatch]);

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
        value={getSelectedDesigner}
      />
    </div>
  );
};

export default Controls;
