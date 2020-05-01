import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withA11y } from '@storybook/addon-a11y';

import Button from "./Button";

export default {
  title: "Button",
  decorators: [withKnobs, withA11y],
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
