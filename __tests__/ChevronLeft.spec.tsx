import "react-native";
import React from "react";
import { ChevronLeft } from "../src";

import renderer from "react-test-renderer";

describe("ChevronLeft", () => {
  it("renders correctly", () => {
    renderer.create(<ChevronLeft />);
  });
});
