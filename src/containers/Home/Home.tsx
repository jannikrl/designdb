import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as homeGridActions from "../../store/homeGrid/actions";
import * as homeGridSelectors from "../../store/homeGrid/selectors";
import { RootState } from "../../store/types";
import { Link } from "react-router-dom";
import Controls from "./Controls/Controls";
import Grid from "../../components/UI/Grid/Grid";
import GridItem from "../../components/UI/Grid/GridItem/GridItem";

const Home: React.FC = () => {
  const designs = useSelector((state: RootState) =>
    homeGridSelectors.getDesigns(state)
  );
  const isLoading = useSelector((state: RootState) =>
    homeGridSelectors.isLoading(state)
  );

  const dispatch = useDispatch();

  const fetchDesigns = useCallback(
    () => dispatch(homeGridActions.fetchDesigns()),
    [dispatch]
  );

  useEffect(() => {
    fetchDesigns();
  }, [fetchDesigns]);

  const isEmpty = !designs.length;
  const emptyMessage = isEmpty && !isLoading && <p>No designs</p>;
  const loadingMessage = isEmpty && isLoading && <p>Loading...</p>;

  return (
    <div>
      <Controls />
      {emptyMessage}
      {loadingMessage}
      <Grid>
        {designs.map((design) => (
          <li key={design.id}>
            <Link to={"/design/" + design.id}>
              <GridItem>
                <img
                  src={process.env.REACT_APP_IMAGE_URL + "/" + design.image}
                  alt=""
                />
              </GridItem>
            </Link>
          </li>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
