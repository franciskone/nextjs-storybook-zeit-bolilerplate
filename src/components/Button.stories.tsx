import React from "react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const withEmoji = () => (
  <Button
    onClick={action("button-clicked")}
    text={text("Text", "😀 😎 👍 💯")}
  />
);

export const withText = () => (
  <Button
    onClick={action("button-clicked")}
    text={text("Text", "this is a button")}
  />
);
