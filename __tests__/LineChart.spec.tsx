import "react-native";
import React from "react";
import { LineChart } from "../src";

import renderer from "react-test-renderer";

describe("LineChart", () => {
  it("renders correctly", () => {
    renderer.create(<LineChart />);
  });
});
