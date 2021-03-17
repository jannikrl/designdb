import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
import * as manufacturersSelectors from "../../store/manufacturers/selectors";
import * as manufacturersActions from "../../store/manufacturers/actions";
import DesignerForm, {
  DesignerFormValues,
} from "../../components/Forms/DesignerForm/DesignerForm";
import { RootState } from "../../store/types";

const DesignerCreate = () => {
  const [didSubmit, setDidSubmit] = useState(false);
  const designer = useSelector((state: RootState) =>
    designerSelectors.getDesigner(state)
  );
  const designerError = useSelector((state: RootState) =>
    designerSelectors.getError(state)
  );
  const designerIsLoading = useSelector((state: RootState) =>
    designerSelectors.isLoading(state)
  );
  const manufacturers = useSelector((state: RootState) =>
    manufacturersSelectors.getManufacturers(state)
  );

  const dispatch = useDispatch();

  const fetchManufacturers = useCallback(
    () => dispatch(manufacturersActions.fetchManufacturers()),
    [dispatch]
  );

  useEffect(() => {
    fetchManufacturers();
  }, [fetchManufacturers]);

  const createDesigner = (values: DesignerFormValues) =>
    dispatch(designerActions.createDesigner(values));

  const submitHandler = (values: DesignerFormValues) => {
    createDesigner(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !designerIsLoading && !designerError;
  const redirect = isSuccess && designer && (
    <Redirect to={`/designer/${designer.id}`} />
  );
  const errorMessage = didSubmit && designerError && (
    <p>Something went wrong, try again</p>
  );

  return (
    <div>
      {redirect}
      {errorMessage}
      <DesignerForm
        onSubmit={(values) => submitHandler(values)}
        manufacturers={manufacturers}
      />
    </div>
  );
};

export default DesignerCreate;
