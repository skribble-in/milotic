import "react-native";
import React from "react";
import { ShareIos } from "../src";

import renderer from "react-test-renderer";

describe("ShareIos", () => {
  it("renders correctly", () => {
    renderer.create(<ShareIos />);
  });
});
