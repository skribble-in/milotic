import "react-native";
import React from "react";
import { History } from "../src";

import renderer from "react-test-renderer";

describe("History", () => {
  it("renders correctly", () => {
    renderer.create(<History />);
  });
});
