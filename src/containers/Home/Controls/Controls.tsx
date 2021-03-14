import React, { useCallback, useEffect } from "react";
import Toggle from "../../../components/UI/Toggle";
import Dropdown from "../../../components/UI/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import * as homeGridActions from "../../../store/homeGrid/actions";
import * as homeGridSelectors from "../../../store/homeGrid/selectors";
import * as designTypesActions from "../../../store/designTypes/actions";
import * as designTypesSelectors from "../../../store/designTypes/selectors";
import * as designersActions from "../../../store/designers/actions";
import * as designersSelectors from "../../../store/designers/selectors";
import * as manufacturersActions from "../../../store/manufacturers/actions";
import * as manufacturersSelectors from "../../../store/manufacturers/selectors";
import { RootState } from "../../../store/types";

const Controls = () => {
  const showFeatured = useSelector((state: RootState) =>
    homeGridSelectors.getShowFeatured(state)
  );
  const selectedDesigner = useSelector((state: RootState) =>
    homeGridSelectors.getSelectedDesigner(state)
  );
  const selectedManufacturer = useSelector((state: RootState) =>
    homeGridSelectors.getSelectedManufacturer(state)
  );
  const selectedDesignType = useSelector((state: RootState) =>
    homeGridSelectors.getSelectedDesignType(state)
  );
  const designers = useSelector((state: RootState) =>
    designersSelectors.getDesigners(state)
  );
  const manufacturers = useSelector((state: RootState) =>
    manufacturersSelectors.getManufacturers(state)
  );
  const designTypes = useSelector((state: RootState) =>
    designTypesSelectors.getTypes(state)
  );

  const dispatch = useDispatch();

  const updateShowFeatured = (value: boolean) =>
    dispatch(homeGridActions.showFeatured(value));
  const selectDesigner = (id: string) =>
    dispatch(homeGridActions.selectDesigner(+id));
  const selectManufacturer = (id: string) =>
    dispatch(homeGridActions.selectManufacturer(+id));
  const selectDesignType = (id: string) =>
    dispatch(homeGridActions.selectDesignType(+id));
  const fetchDesigners = useCallback(
    () => dispatch(designersActions.fetchDesigners()),
    [dispatch]
  );
  const fetchManufacturers = useCallback(
    () => dispatch(manufacturersActions.fetchManufacturers()),
    [dispatch]
  );
  const fetchDesignTypes = useCallback(
    () => dispatch(designTypesActions.fetchDesignTypes()),
    [dispatch]
  );

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
