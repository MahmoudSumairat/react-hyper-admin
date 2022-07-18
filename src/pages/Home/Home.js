import React from "react";
import Checkbox from "../../components/shared/Checkbox/Checkbox";
import Radio from "../../components/shared/Radio/Radio";
import Select from "../../components/shared/Select/Select";
import TextField from "../../components/shared/TextField/TextField";
import styles from "./styles.module.scss";

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
    {
      displayName: "test 3",
      id: 3,
    },
    {
      displayName: "test 4",
      id: 4,
    },
  ];

  return (
    <div className={home}>
      this is the home page
      <Checkbox label="test checkbox" />
      <Radio name="test" />
      <Radio name="test" />
      <Select
        value={[2]}
        onSelectionChange={(item) => console.log(item)}
        items={dummyItems}
        multiSelect
      />
      <TextField type="number" max="20" placeholder="test" />
    </div>
  );
};

export default Home;
