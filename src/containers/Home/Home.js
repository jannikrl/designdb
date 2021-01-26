import React, { useCallback, useEffect } from "react";
import Controls from "./Controls/Controls";
import Grid from "../../components/Grid/Grid";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/grid/actions";

const Designs = (props) => {
  const designs = useSelector((state) => state.grid.designs);

  const dispatch = useDispatch();

  const fetchDesigns = useCallback(() => dispatch(actions.fetchDesigns()), [
    dispatch,
  ]);

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