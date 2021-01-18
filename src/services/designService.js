/**
 * @TODO: Use API
 */

import egg from "../assets/egg.jpg";
import teddy from "../assets/teddy.jpg";
import swan from "../assets/swan.png";

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

export const getDesigns = (filterOptions) => {
  const showFeatured = filterOptions.showFeatured;
  const selectedDesigner = filterOptions.selectedDesigner;

    console.log(selectedDesigner);

  let designList = data;
  designList = showFeatured
    ? designList.filter((design) => design.featured)
    : designList;
  designList = selectedDesigner.length
    ? designList.filter((design) => design.designer.id === selectedDesigner)
    : designList;

  return designList;
};
