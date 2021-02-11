import React, { useCallback, useEffect } from "react";
import Toggle from "../../../components/UI/Toggle";
import Dropdown from "../../../components/UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import * as designsActions from "../../../store/designs/actions";
import * as designsSelectors from "../../../store/designs/selectors";
import * as designersActions from "../../../store/designers/actions";
import * as designersSelector from "../../../store/designers/selectors";
import * as manufacturersActions from "../../../store/manufacturers/actions";
import * as manufacturersSelector from "../../../store/manufacturers/selectors";

const Controls = (props) => {
  const showFeatured = useSelector((state) => designsSelectors.getShowFeatured(state));
  const selectedDesigner = useSelector((state) => designsSelectors.getSelectedDesigner(state));
  const selectedManufacturer = useSelector((state) => designsSelectors.getSelectedManufacturer(state));
  const designers = useSelector((state) => designersSelector.getDesigners(state));
  const manufacturers = useSelector((state) => manufacturersSelector.getManufacturers(state));

  const dispatch = useDispatch();

  const updateShowFeatured = (value) => dispatch(designsActions.showFeatured(value));
  const selectDesigner = (id) => dispatch(designsActions.selectDesigner(id));
  const selectManufacturer = (id) => dispatch(designsActions.selectManufacturer(id));
  const fetchDesigners = useCallback(() => dispatch(designersActions.fetchDesigners()), [dispatch]);
  const fetchManufacturers = useCallback(() => dispatch(manufacturersActions.fetchManufacturers()), [dispatch]);

  useEffect(() => {
    fetchDesigners();
    fetchManufacturers();
  }, [fetchDesigners, fetchManufacturers]);

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
        value={selectedDesigner}
      />
      <Dropdown
        options={manufacturers}
        placeholder="All manufacturers"
        onChange={selectManufacturer}
        value={selectedManufacturer}
      />
    </div>
  );
};

export default Controls;
