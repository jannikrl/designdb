/**
 * @TODO: Use API
 */

import egg from "../assets/egg.jpg";
import teddy from "../assets/teddy.jpg";
import swan from "../assets/swan.png";

const data = [
  {
    id: "egg",
    name: "Egg",
    image: egg,
    designer: {
      id: "1",
      name: "Arne Jakobsen",
    },
    featured: true,
  },
  {
    id: "swan",
    name: "Swan",
    image: swan,
    designer: {
      id: "1",
      name: "Arne Jakobsen",
    },
    featured: false,
  },
  {
    id: "teddy",
    name: "The Papa Bear Chair",
    image: teddy,
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

export const getDesign = (id) => {
  return data.find((design) => design.id === id);
};
