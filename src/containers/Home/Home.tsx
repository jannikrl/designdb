import React, { useCallback, useEffect } from "react";
import Controls from "./Controls/Controls";
import Grid from "../../components/UI/Grid/Grid";
import { useDispatch, useSelector } from "react-redux";
import * as designsActions from "../../store/designs/actions";
import * as designsSelectors from "../../store/designs/selectors";
import { RootState } from "../../store/types";

const Home: React.FC = () => {
  const designs = useSelector((state: RootState) => designsSelectors.getDesigns(state));
  const isLoading = useSelector((state: RootState) => designsSelectors.isLoading(state));

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
  const loadingMessage = isEmpty && isLoading && <p>Loading...</p>;

  return (
    <div>
      <Controls />
      {emptyMessage}
      {loadingMessage}
      <Grid data={designs} />
    </div>
  );
};

export default Home;
