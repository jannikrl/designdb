import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
import * as manufacturersSelectors from "../../store/manufacturers/selectors";
import * as manufacturersActions from "../../store/manufacturers/actions";
import DesignerForm, {
  DesignerFormValues,
} from "../../components/Forms/DesignerForm/DesignerForm";
import { RootState } from "../../store/types";

type paramTypes = {
  id: string;
};

const DesignerEdit = () => {
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

  const { id } = useParams<paramTypes>();

  const fetchDesigner = useCallback(
    () => dispatch(designerActions.fetchDesigner(+id)),
    [dispatch, id]
  );

  const fetchManufacturers = useCallback(
    () => dispatch(manufacturersActions.fetchManufacturers()),
    [dispatch]
  );

  const updateDesigner = (values: DesignerFormValues) =>
    dispatch(designerActions.updateDesigner(values));

  useEffect(() => {
    fetchDesigner();
    fetchManufacturers();
  }, [fetchDesigner, fetchManufacturers]);

  const submitHandler = (values: DesignerFormValues) => {
    values.id = +id;
    updateDesigner(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !designerIsLoading && !designerError;
  const redirect = isSuccess && <Redirect to={`/designer/${id}`} />;
  const errorMessage = didSubmit && designerError && (
    <p>Something went wrong, try again</p>
  );

  const didFetchDesigner = designer && designer.id === +id;

  return (
    <div>
      {redirect}
      {errorMessage}
      {didFetchDesigner && (
        <DesignerForm
          designer={designer}
          manufacturers={manufacturers}
          onSubmit={(values) => submitHandler(values)}
        />
      )}
    </div>
  );
};

export default DesignerEdit;
