import React from "react";
import Checkbox from "../../components/shared/Checkbox/Checkbox";
import Radio from "../../components/shared/Radio/Radio";
import Select from "../../components/shared/Select/Select";
import styles from "./Home.module.scss";

const { home } = styles;

const Home = () => {
  const dummyItems = [
    {
      displayName: "test 1",
      id: 1,
    },
    {
      displayName: "test 2",
      id: 2,
    },
  ];

  return (
    <div className={home}>
      this is the home page
      <Checkbox label="test checkbox" />
      <Radio name="test" />
      <Radio name="test" />
      <Select items={dummyItems} />
    </div>
  );
};

export default Home;
