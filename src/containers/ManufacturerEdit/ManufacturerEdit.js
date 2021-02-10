import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as manufacturerSelectors from "../../store/manufacturer/selectors";
import * as manufacturerActions from "../../store/manufacturer/actions";
import ManufacturerForm from "../../components/ManufacturerForm/ManufacturerForm";

const ManufacturerEdit = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const manufacturer = useSelector((state) => manufacturerSelectors.getManufacturer(state));
  const manufacturerError = useSelector((state) => manufacturerSelectors.getError(state));
  const manufacturerIsLoading = useSelector((state) =>
    manufacturerSelectors.isLoading(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchManufacturer = useCallback(
    () => dispatch(manufacturerActions.fetchManufacturer(id)),
    [dispatch, id]
  );

  const updateManufacturer = (manufacturer) => dispatch(manufacturerActions.updateManufacturer(manufacturer));

  useEffect(() => {
    fetchManufacturer();
  }, [fetchManufacturer]);

  const submitHandler = (values) => {
    values.id = id;
    updateManufacturer(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !manufacturerIsLoading && !manufacturerError;
  const redirect = isSuccess && <Redirect to={`/manufacturer/${id}`} />;
  const errorMessage = didSubmit && manufacturerError && (
    <p>Something went wrong, try again</p>
  );

  const didFetchManufacturer = manufacturer && manufacturer.id === +id;

  return (
    <div>
      {redirect}
      {errorMessage}
      {didFetchManufacturer && (
        <ManufacturerForm
          manufacturer={manufacturer}
          onSubmit={(values) => submitHandler(values)}
        />
      )}
    </div>
  );
};

export default ManufacturerEdit;
