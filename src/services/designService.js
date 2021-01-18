/**
 * @TODO: Use API
 */

import egg from "../assets/egg.jpg";
import teddy from "../assets/teddy.jpg";
import swan from "../assets/swan.png";

const designList = [
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

export const getDesigns = (filterOptions) => {
    const showFeatured = filterOptions.showFeatured;
    return designList.filter((design) => (showFeatured) ? design.featured === showFeatured : true);
}