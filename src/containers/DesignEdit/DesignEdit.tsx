import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as designTypesActions from "../../store/designTypes/actions";
import * as designTypesSelectors from "../../store/designTypes/selectors";
import * as designersActions from "../../store/designers/actions";
import * as designersSelectors from "../../store/designers/selectors";
import * as manufacturersActions from "../../store/manufacturers/actions";
import * as manufacturersSelectors from "../../store/manufacturers/selectors";
import DesignForm, {
  DesignFormValues,
} from "../../components/Forms/DesignForm/DesignForm";
import { RootState } from "../../store/types";

type ParamTypes = {
  id: string;
};

const DesignEdit = () => {
  const [didSubmit, setDidSubmit] = useState(false);
  const design = useSelector((state: RootState) =>
    designSelectors.getDesign(state)
  );
  const designError = useSelector((state: RootState) =>
    designSelectors.getError(state)
  );
  const designIsLoading = useSelector((state: RootState) =>
    designSelectors.isLoading(state)
  );
  const designTypes = useSelector((state: RootState) =>
    designTypesSelectors.getTypes(state)
  );
  const designers = useSelector((state: RootState) =>
    designersSelectors.getDesigners(state)
  );
  const manufacturers = useSelector((state: RootState) =>
    manufacturersSelectors.getManufacturers(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams<ParamTypes>();

  const fetchDesign = useCallback(
    () => dispatch(designActions.fetchDesign(+id)),
    [dispatch, id]
  );
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
  const updateDesign = (design: DesignFormValues) =>
    dispatch(designActions.updateDesign(design));

  useEffect(() => {
    fetchDesign();
    fetchDesignTypes();
    fetchDesigners();
    fetchManufacturers();
  }, [fetchDesign, fetchDesignTypes, fetchDesigners, fetchManufacturers]);

  const submitHandler = (values: DesignFormValues) => {
    values.id = +id;
    updateDesign(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !designIsLoading && !designError;
  const redirect = isSuccess && <Redirect to={`/design/${id}`} />;
  const errorMessage = didSubmit && designError && (
    <p>Something went wrong, try again</p>
  );

  const didFetchDesign = design && design.id === +id;

  return (
    <div>
      {redirect}
      {errorMessage}
      {didFetchDesign && (
        <DesignForm
          design={design}
          designTypes={designTypes}
          designers={designers}
          manufacturers={manufacturers}
          onSubmit={(values) => submitHandler(values)}
        />
      )}
    </div>
  );
};

export default DesignEdit;
