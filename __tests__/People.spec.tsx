import "react-native";
import React from "react";
import { People } from "../src";

import renderer from "react-test-renderer";

describe("People", () => {
  it("renders correctly", () => {
    renderer.create(<People />);
  });
});
