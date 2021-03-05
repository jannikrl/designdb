import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
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

  const dispatch = useDispatch();

  const createDesigner = (values: DesignerFormValues) =>
    dispatch(designerActions.createDesigner(values));

  const submitHandler = (values: DesignerFormValues) => {
    createDesigner(values);
    setDidSubmit(true);
  };

  const isSuccess = didSubmit && !designerIsLoading && !designerError;
  const redirect = isSuccess && designer && <Redirect to={`/designer/${designer.id}`} />;
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
