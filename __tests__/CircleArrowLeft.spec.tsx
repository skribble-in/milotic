import "react-native";
import React from "react";
import { CircleArrowLeft } from "../src";

import renderer from "react-test-renderer";

describe("CircleArrowLeft", () => {
  it("renders correctly", () => {
    renderer.create(<CircleArrowLeft />);
  });
});
