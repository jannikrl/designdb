import React, { useCallback, useEffect } from "react";
import Toggle from "../../../components/UI/Toggle";
import Dropdown from "../../../components/UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import * as designsActions from "../../../store/designs/actions";
import * as designsSelectors from "../../../store/designs/selectors";
import * as designTypesActions from "../../../store/designTypes/actions";
import * as designTypesSelectors from "../../../store/designTypes/selectors";
import * as designersActions from "../../../store/designers/actions";
import * as designersSelectors from "../../../store/designers/selectors";
import * as manufacturersActions from "../../../store/manufacturers/actions";
import * as manufacturersSelectors from "../../../store/manufacturers/selectors";

const Controls = (props) => {
  const showFeatured = useSelector((state) => designsSelectors.getShowFeatured(state));
  const selectedDesigner = useSelector((state) => designsSelectors.getSelectedDesigner(state));
  const selectedManufacturer = useSelector((state) => designsSelectors.getSelectedManufacturer(state));
  const selectedDesignType = useSelector((state) => designsSelectors.getSelectedDesignType(state));
  const designers = useSelector((state) => designersSelectors.getDesigners(state));
  const manufacturers = useSelector((state) => manufacturersSelectors.getManufacturers(state));
  const designTypes = useSelector((state) => designTypesSelectors.getTypes(state));

  const dispatch = useDispatch();

  const updateShowFeatured = (value) => dispatch(designsActions.showFeatured(value));
  const selectDesigner = (id) => dispatch(designsActions.selectDesigner(id));
  const selectManufacturer = (id) => dispatch(designsActions.selectManufacturer(id));
  const selectDesignType = (id) => dispatch(designsActions.selectDesignType(id));
  const fetchDesigners = useCallback(() => dispatch(designersActions.fetchDesigners()), [dispatch]);
  const fetchManufacturers = useCallback(() => dispatch(manufacturersActions.fetchManufacturers()), [dispatch]);
  const fetchDesignTypes = useCallback(() => dispatch(designTypesActions.fetchDesignTypes()), [dispatch]);

  useEffect(() => {
    fetchDesigners();
    fetchManufacturers();
    fetchDesignTypes();
  }, [fetchDesigners, fetchManufacturers, fetchDesignTypes]);

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
      <Dropdown
        options={designTypes}
        placeholder="All types"
        onChange={selectDesignType}
        value={selectedDesignType}
      />
    </div>
  );
};

export default Controls;
