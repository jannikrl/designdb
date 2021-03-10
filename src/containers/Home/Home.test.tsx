import React from "react";
import { shallow, mount } from "enzyme";
import { useSelector } from "react-redux";
import Home from "./Home";

const mockedUseDispatch = jest.fn();
const mockedUseSelector = useSelector as jest.Mock<typeof useSelector>;

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockedUseDispatch,
}));

jest.mock("./Controls/Controls", () => () => null);
jest.mock("../../components/UI/Grid/Grid", () => () => null);

describe("<Home />", () => {
  let store: object;

  beforeEach(() => {
    mockedUseSelector.mockImplementation((selectorFn) => selectorFn(store));
  });

  it("should render loading text", () => {
    store = { designs: { designs: [], loading: true } };

    const wrapper = shallow(<Home />);

    expect(wrapper.find("p").text()).toEqual("Loading...");
  });

  it("should render empty state text", () => {
    store = { designs: { designs: [], loading: false } };

    const wrapper = shallow(<Home />);

    expect(wrapper.find("p").text()).toEqual("No designs");
  });

  it("should render no placeholder texts", () => {
    store = { designs: { designs: [{}], loading: false } };

    const wrapper = shallow(<Home />);

    expect(wrapper.find("p")).toHaveLength(0);
  });

  it("should fetch designs one time", () => {
    mount(<Home />);

    expect(mockedUseDispatch).toHaveBeenCalledTimes(1);
  });
});
