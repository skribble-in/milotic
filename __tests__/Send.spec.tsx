import "react-native";
import React from "react";
import { Send } from "../src";

import renderer from "react-test-renderer";

describe("Send", () => {
  it("renders correctly", () => {
    renderer.create(<Send />);
  });
});
