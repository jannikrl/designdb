import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
import DesignerForm from "../../components/DesignerForm/DesignerForm";

const DesignerCreate = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const designer = useSelector((state) => designerSelectors.getDesigner(state));
  const designerError = useSelector((state) =>
    designerSelectors.getError(state)
  );
  const designerIsLoading = useSelector((state) =>
    designerSelectors.isLoading(state)
  );

  const dispatch = useDispatch();

  const createDesigner = (designer) =>
    dispatch(designerActions.createDesigner(designer));

  const submitHandler = (values) => {
    createDesigner(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !designerIsLoading && !designerError;
  const redirect = isSuccess && <Redirect to={`/designer/${designer.id}`} />;
  const errorMessage = didSubmit && designerError && (
    <p>Something went wrong, try again</p>
  );

  return (
    <div>
      {redirect}
      {errorMessage}
      <DesignerForm onSubmit={(values) => submitHandler(values)} />
    </div>
  );
};

export default DesignerCreate;
