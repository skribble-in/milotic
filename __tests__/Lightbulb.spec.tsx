import "react-native";
import React from "react";
import { Lightbulb } from "../src";

import renderer from "react-test-renderer";

describe("Lightbulb", () => {
  it("renders correctly", () => {
    renderer.create(<Lightbulb />);
  });
});
