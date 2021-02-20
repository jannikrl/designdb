import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as designersActions from "../../store/designers/actions";
import * as designersSelectors from "../../store/designers/selectors";
import * as manufacturersActions from "../../store/manufacturers/actions";
import * as manufacturersSelectors from "../../store/manufacturers/selectors";
import DesignForm from "../../components/Forms/DesignForm/DesignForm";

const DesignEdit = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const design = useSelector((state) => designSelectors.getDesign(state));
  const designError = useSelector((state) => designSelectors.getError(state));
  const designIsLoading = useSelector((state) =>
    designSelectors.isLoading(state)
  );
  const designers = useSelector((state) =>
    designersSelectors.getDesigners(state)
  );
  const manufacturers = useSelector((state) =>
    manufacturersSelectors.getManufacturers(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchDesign = useCallback(
    () => dispatch(designActions.fetchDesign(id)),
    [dispatch, id]
  );
  const fetchDesigners = useCallback(
    () => dispatch(designersActions.fetchDesigners()),
    [dispatch]
  );
  const fetchManufacturers = useCallback(
    () => dispatch(manufacturersActions.fetchManufacturers()),
    [dispatch]
  );
  const updateDesign = (design) => dispatch(designActions.updateDesign(design));

  useEffect(() => {
    fetchDesign();
    fetchDesigners();
    fetchManufacturers();
  }, [fetchDesign, fetchDesigners, fetchManufacturers]);

  const submitHandler = (values) => {
    values.id = id;
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
          designers={designers}
          manufacturers={manufacturers}
          onSubmit={(values) => submitHandler(values)}
        />
      )}
    </div>
  );
};

export default DesignEdit;
