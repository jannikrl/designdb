import React, { useCallback, useEffect } from "react";
import Controls from "./Controls/Controls";
import Grid from "../../components/UI/Grid/Grid";
import { useDispatch, useSelector } from "react-redux";
import * as designsActions from "../../store/designs/actions";
import * as designsSelectors from "../../store/designs/selectors";

const Designs = (props) => {
  const designs = useSelector((state) => designsSelectors.getDesigns(state));
  const isLoading = useSelector((state) => designsSelectors.isLoading(state));

  const dispatch = useDispatch();

  const fetchDesigns = useCallback(
    () => dispatch(designsActions.fetchDesigns()),
    [dispatch]
  );

  useEffect(() => {
    fetchDesigns();
  }, [fetchDesigns]);

  const isEmpty = !designs.length
  const emptyMessage = isEmpty && !isLoading && <p>No designs</p>;
  const loadingMessage = isEmpty && isLoading && <p>Loading</p>;

  return (
    <div>
      <Controls />
      {emptyMessage}
      {loadingMessage}
      <Grid data={designs} />
    </div>
  );
};

export default Designs;
