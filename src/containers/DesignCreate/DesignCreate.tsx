import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as designTypesActions from "../../store/designTypes/actions";
import * as designTypesSelectors from "../../store/designTypes/selectors";
import * as designersActions from "../../store/designers/actions";
import * as designersSelectors from "../../store/designers/selectors";
import * as manufacturersActions from "../../store/manufacturers/actions";
import * as manufacturersSelectors from "../../store/manufacturers/selectors";
import DesignForm, { DesignFormValues } from "../../components/Forms/DesignForm/DesignForm";
import { RootState } from "../../store/types";

const DesignEdit = () => {
  const [didSubmit, setDidSubmit] = useState(false);
  const designError = useSelector((state: RootState) =>
    designSelectors.getError(state)
  );
  const design = useSelector((state: RootState) =>
    designSelectors.getDesign(state)
  );
  const designIsLoading = useSelector((state: RootState) =>
    designSelectors.isLoading(state)
  );
  const designTypes = useSelector((state) =>
    designTypesSelectors.getTypes(state)
  );
  const designers = useSelector((state) =>
    designersSelectors.getDesigners(state)
  );
  const manufacturers = useSelector((state) =>
    manufacturersSelectors.getManufacturers(state)
  );

  const dispatch = useDispatch();

  const fetchDesignTypes = useCallback(
    () => dispatch(designTypesActions.fetchDesignTypes()),
    [dispatch]
  );
  const fetchDesigners = useCallback(
    () => dispatch(designersActions.fetchDesigners()),
    [dispatch]
  );
  const fetchManufacturers = useCallback(
    () => dispatch(manufacturersActions.fetchManufacturers()),
    [dispatch]
  );
  const createDesign = (values: DesignFormValues) => dispatch(designActions.createDesign(values));

  useEffect(() => {
    fetchDesignTypes();
    fetchDesigners();
    fetchManufacturers();
  }, [fetchDesignTypes, fetchDesigners, fetchManufacturers]);

  const submitHandler = (values: DesignFormValues) => {
    createDesign(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !designIsLoading && !designError && !!design;
  const redirect = isSuccess && <Redirect to={`/design/${design!.id}`} />;
  const errorMessage = didSubmit && designError && (
    <p>Something went wrong, try again</p>
  );

  return (
    <div>
      {redirect}
      {errorMessage}
      <DesignForm
        designers={designers}
        manufacturers={manufacturers}
        designTypes={designTypes}
        onSubmit={(values) => submitHandler(values)}
      />
    </div>
  );
};

export default DesignEdit;
