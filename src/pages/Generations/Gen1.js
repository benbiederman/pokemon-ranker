import React, { useState } from "react";
import FavoriteSection from "../../components/FavoriteSection/FavoriteSection";
import ListSection from "../../components/ListSection/ListSection";
import "./Generations.scss";

const Gen1 = ({ activeHeader }) => {
  return (
    <section className="generations">
      <FavoriteSection gen={"Gen 1"} activeHeader={activeHeader} />
      <ListSection gen={"Gen 1"} activeHeader={activeHeader} />
    </section>
  );
};

export default Gen1;
