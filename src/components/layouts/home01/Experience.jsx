import React from "react";
import "./Experience.css";
import ExpCard from "./ExpCard";
import { exp } from "../exp";

const Experience = () => {
  const xpCard = exp.map((job, i) => {
    return (
      <ExpCard
        id={exp[i].id}
        employment={exp[i].employment}
        place={exp[i].place}
        logo={exp[i].logo}
        address={exp[i].address}
        duration={exp[i].duration}
        description={exp[i].description}
      />
    );
  });
  return (
    <>
      <div className="pt-5 mt-5 max-w-4xl container mx-auto p-5">
        <div className="text-center">
          <h1 className="font-black ex-txt">Experience</h1>
        </div>
        {xpCard}
      </div>
    </>
  );
};

export default Experience;
