import egg from "../../assets/egg.jpg";
import teddy from "../../assets/teddy.jpg";
import swan from "../../assets/swan.png";

const data = [
  {
    image: egg,
    id: "egg",
    designer: {
      id: "1",
      name: "Arne Jakobsen",
    },
    featured: true,
  },
  {
    image: swan,
    id: "swan",
    designer: {
      id: "1",
      name: "Arne Jakobsen",
    },
    featured: false,
  },
  {
    image: teddy,
    id: "teddy",
    designer: {
      id: "2",
      name: "Hans Wegner",
    },
    featured: true,
  },
];

const initialState = {
  designs: data,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
