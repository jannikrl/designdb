import React, { useCallback, useEffect } from "react";
import Controls from "./Controls/Controls";
import Grid from "../../components/Grid/Grid";
import { useDispatch, useSelector } from "react-redux";
import * as designsActions from "../../store/designs/actions";
import * as designsSelectors from "../../store/designs/selectors";

const Designs = (props) => {
  const designs = useSelector((state) => designsSelectors.getDesigns(state));

  const dispatch = useDispatch();

  const fetchDesigns = useCallback(
    () => dispatch(designsActions.fetchDesigns()),
    [dispatch]
  );

  useEffect(() => {
    fetchDesigns();
  }, [fetchDesigns]);

  return (
    <div>
      <Controls />
      <Grid data={designs} />
    </div>
  );
};

export default Designs;
