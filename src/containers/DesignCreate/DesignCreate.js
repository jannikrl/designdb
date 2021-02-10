import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as designersActions from "../../store/designers/actions";
import * as designersSelectors from "../../store/designers/selectors";
import * as manufacturersActions from "../../store/manufacturers/actions";
import * as manufacturersSelectors from "../../store/manufacturers/selectors";
import DesignForm from "../../components/DesignForm/DesignForm";

const DesignEdit = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const designError = useSelector((state) => designSelectors.getError(state));
  const design = useSelector((state) => designSelectors.getDesign(state));
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

  const fetchDesigners = useCallback(
    () => dispatch(designersActions.fetchDesigners()),
    [dispatch]
  );
  const fetchManufacturers = useCallback(
    () => dispatch(manufacturersActions.fetchManufacturers()),
    [dispatch]
  );
  const createDesign = (values) => dispatch(designActions.createDesign(values));

  useEffect(() => {
    fetchDesigners();
    fetchManufacturers();
  }, [fetchDesigners, fetchManufacturers]);

  const submitHandler = (values) => {
    createDesign(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !designIsLoading && !designError;
  const redirect = isSuccess && <Redirect to={`/design/${design.id}`} />;
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
        onSubmit={(values) => submitHandler(values)}
      />
    </div>
  );
};

export default DesignEdit;
