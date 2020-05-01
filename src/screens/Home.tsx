import React from "react";
import css from "./Home.scss";
import Button from "../components/Button";

const Home = () => (
  <div>
    <h1>Hello world!</h1>
    <Button text="My button" />
    <p className={css.paragraph}>ciaoneee</p>
  </div>
);

export default Home;
