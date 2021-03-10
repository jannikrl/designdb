import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Avoid issue of missing property matchMedia
// https://github.com/akiran/react-slick/issues/742
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// Ensyme setup
configure({ adapter: new Adapter() });
