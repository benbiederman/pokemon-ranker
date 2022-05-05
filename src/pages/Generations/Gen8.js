import React, { useState } from "react";
import FavoriteSection from "../../components/FavoriteSection/FavoriteSection";
import ListSection from "../../components/ListSection/ListSection";
import "./Generations.scss";

const Gen8 = ({ activeHeader }) => {
  return (
    <section className="generations">
      <FavoriteSection gen={"Gen 8"} activeHeader={activeHeader} />
      <ListSection gen={"Gen 8"} activeHeader={activeHeader} />
    </section>
  );
};

export default Gen8;
