import React from "react";
import { proj } from "../projects";

class Proj extends React.Component {
  render() {
    const { name, description, link, img } = this.props;
    return (
      <article className="card overflow-hidden rounded-lg shadow-4xl">
        {/* <img src={`${img}`} alt="Project" className="block h-auto w-full" /> */}
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg font-bold text-center container mx-auto">
            {name}
          </h1>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="ml-2 text-sm flex items-center">{description}</p>
          <a
            className="no-underline text-grey-darker text-center align-center"
            href={`${link}`}
          >
            <button className="bg-blue-700 hover:bg-black text-white m-5 p-5 py-2 px-4 rounded-full">
              <p className="text-xs">Checkout the repo</p>
            </button>
          </a>
        </footer>
      </article>
    );
  }
}

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <div id={this.props.id} className="container mx-auto">
          <h1 className="font-black text-4xl text-center align-top">
            Projects
          </h1>
        </div>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap justify-center justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words -mx-1 lg:-mx-4">
            {proj.map((p, i) => {
              return (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <Proj
                    id={proj[i].id}
                    name={proj[i].name}
                    description={proj[i].description}
                    img={proj[i].img}
                    link={proj[i].link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
