import "react-native";
import React from "react";
import { Link } from "../src";

import renderer from "react-test-renderer";

describe("Link", () => {
  it("renders correctly", () => {
    renderer.create(<Link />);
  });
});
