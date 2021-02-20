import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as manufacturerSelectors from "../../store/manufacturer/selectors";
import * as manufacturerActions from "../../store/manufacturer/actions";
import ManufacturerForm from "../../components/Forms/ManufacturerForm/ManufacturerForm";

const ManufacturerCreate = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const manufacturer = useSelector((state) => manufacturerSelectors.getManufacturer(state));
  const manufacturerError = useSelector((state) =>
    manufacturerSelectors.getError(state)
  );
  const manufacturerIsLoading = useSelector((state) =>
    manufacturerSelectors.isLoading(state)
  );

  const dispatch = useDispatch();

  const createManufacturer = (manufacturer) =>
    dispatch(manufacturerActions.createManufacturer(manufacturer));

  const submitHandler = (values) => {
    createManufacturer(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !manufacturerIsLoading && !manufacturerError;
  const redirect = isSuccess && <Redirect to={`/manufacturer/${manufacturer.id}`} />;
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
