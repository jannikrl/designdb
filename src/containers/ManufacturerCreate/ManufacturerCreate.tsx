import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as manufacturerSelectors from "../../store/manufacturer/selectors";
import * as manufacturerActions from "../../store/manufacturer/actions";
import ManufacturerForm, {
  ManufacturerFormValues,
} from "../../components/Forms/ManufacturerForm/ManufacturerForm";
import { RootState } from "../../store/types";

const ManufacturerCreate: React.FC = () => {
  const [didSubmit, setDidSubmit] = useState(false);
  const manufacturer = useSelector((state: RootState) =>
    manufacturerSelectors.getManufacturer(state)
  );
  const manufacturerError = useSelector((state: RootState) =>
    manufacturerSelectors.getError(state)
  );
  const manufacturerIsLoading = useSelector((state: RootState) =>
    manufacturerSelectors.isLoading(state)
  );

  const dispatch = useDispatch();

  const createManufacturer = (values: ManufacturerFormValues) =>
    dispatch(manufacturerActions.createManufacturer(values));

  const submitHandler = (values: ManufacturerFormValues) => {
    createManufacturer(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !manufacturerIsLoading && !manufacturerError;
  const redirect = isSuccess && manufacturer && (
    <Redirect to={`/manufacturer/${manufacturer.id}`} />
  );
  const errorMessage = didSubmit && manufacturerError && (
    <p>Something went wrong, try again</p>
  );

  return (
    <div>
      {redirect}
      {errorMessage}
      <ManufacturerForm onSubmit={(values) => submitHandler(values)} />
    </div>
  );
};

export default ManufacturerCreate;
