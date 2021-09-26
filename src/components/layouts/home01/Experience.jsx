import React from "react";
// import "./Experience.css";
import { exp } from "../exp";

const ExpCard = (props) => {
  const { employment, place, logo, address, duration, description } = props;
  return (
    <>
      <div class="card py-4 px-8 shadow-2xl rounded-lg my-20">
        <div className="p-10 justify-evenly justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words">
          <div id="exp-n t-break">
            <img className="logo" src={`${logo}`} alt={place} />
            <h3 className="font-semibold text-lg text-center">{employment}</h3>
            <div className="text-sm font-light text-opacity-40">
              <p className="text-italic text-center">{place}</p>
              <p className="text-center">{address}</p>
              <p>{duration}</p>
            </div>
            <div id="exp-d t-break font-normal"></div>
            <p className="text-sm pt-3">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Experience = (props) => {
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
      <div
        id={props.id}
        className="pt-5 mt-5 max-w-4xl container mx-auto p-5"
      >
        <div className="text-center">
          <h1 className="font-black ex-txt">Experience</h1>
        </div>
        {xpCard}
      </div>
    </>
  );
};

export default Experience;
