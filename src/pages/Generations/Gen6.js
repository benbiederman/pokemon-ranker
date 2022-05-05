import React, { useState } from "react";
import FavoriteSection from "../../components/FavoriteSection/FavoriteSection";
import ListSection from "../../components/ListSection/ListSection";
import "./Generations.scss";

const Gen6 = ({ activeHeader }) => {
  return (
    <section className="generations">
      <FavoriteSection gen={"Gen 6"} activeHeader={activeHeader} />
      <ListSection gen={"Gen 6"} activeHeader={activeHeader} />
    </section>
  );
};

export default Gen6;
