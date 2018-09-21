import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import Admin from "../admin";

test("Admin renders correctly", () => {
  const component = Enzyme.shallow(<Admin />);
  expect(component).toMatchSnapshot();
});
