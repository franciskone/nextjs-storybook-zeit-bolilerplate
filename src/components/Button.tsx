import * as React from "react";

type Props = {
  text: string;
  onClick?: () => void;
};

export default ({ text, onClick }: Props) => (
  <button onClick={onClick}>{text}</button>
);
