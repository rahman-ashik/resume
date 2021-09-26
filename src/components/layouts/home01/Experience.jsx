import React from "react";
import { exp } from "../experience";

class Exp extends React.Component {
  render() {
    const { employment, place, logo, address, duration, description } =
      this.props;
    return (
      <>
        <div class="card py-4 px-8 shadow-2xl rounded-lg my-20">
          <div className="p-10 flex justify-evenly justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words">
            <div id="exp-n t-break">
              <img className="logo" src={`${logo}`} alt={place} />
              <h3 className="font-semibold text-lg text-center">
                {employment}
              </h3>
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
  }
}

export default class Experience extends React.Component {
  render() {
    return (
      <>
        <div className="pt-5 mt-5 max-w-4xl container mx-auto p-5">
          <div className="text-center">
            <h1
              id={this.props.id}
              className="font-black text-center align-top mt-10 pt-10 ex-txt"
            >
              Experience
            </h1>
          </div>
          {exp.map((job, i) => {
            return (
              <Exp
                id={exp[i].id}
                employment={exp[i].employment}
                place={exp[i].place}
                logo={exp[i].logo}
                address={exp[i].address}
                duration={exp[i].duration}
                description={exp[i].description}
              />
            );
          })}
        </div>
      </>
    );
  }
}
