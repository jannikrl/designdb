import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as designerSelectors from "../../store/designer/selectors";
import * as designerActions from "../../store/designer/actions";
import DesignerForm from "../../components/Forms/DesignerForm/DesignerForm";

const DesignerEdit = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const designer = useSelector((state) => designerSelectors.getDesigner(state));
  const designerError = useSelector((state) => designerSelectors.getError(state));
  const designerIsLoading = useSelector((state) =>
    designerSelectors.isLoading(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchDesigner = useCallback(
    () => dispatch(designerActions.fetchDesigner(id)),
    [dispatch, id]
  );

  const updateDesigner = (designer) => dispatch(designerActions.updateDesigner(designer));

  useEffect(() => {
    fetchDesigner();
  }, [fetchDesigner]);

  const submitHandler = (values) => {
    values.id = id;
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
          onSubmit={(values) => submitHandler(values)}
        />
      )}
    </div>
  );
};

export default DesignerEdit;
