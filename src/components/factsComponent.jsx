import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Facts = () => {
  const { facts } = useContext(GlobalContext);
  return (
    <div>
      <h1>Fact about cat</h1>
      <p>{facts}</p>
    </div>
  );
};

export default Facts;
