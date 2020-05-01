import React from "react";
import Button from "./Button";

export default { title: "Button" };

export const withText = () => <Button text='this is a button' />;

export const withEmoji = () => <Button text="😀 😎 👍 💯" />;
