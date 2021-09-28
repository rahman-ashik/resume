import { React, Component } from "react";
import { edu, course, award, skill, lang, xtra } from "../education.js";

class EduCard extends Component {
  render() {
    let { place, logo, deg, grad, cgpa } = this.props;
    return (
      <>
        <div className="card w-auto mx-auto py-4 px-8 shadow-2xl rounded-lg my-20">
          <div className="p-10 flex flex-wrap justify-evenly justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words">
            <div id="exp-n t-break">
              <img className="logo w-full" src={`${logo}`} alt={place} />
            </div>
            <div id="exp-d font-normal">
              <h3 className="font-bold text-lg text-center">{place}</h3>
              <h4>{deg}</h4>
              <p className="font-medium">{`Intended Grad: ${grad}`}</p>
              <p className="font-semibold">{`CGPA: ${cgpa}/4.00`}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class CourseCard extends Component {
  render() {
    let { name } = this.props;
    return (
      <>
        <div className="card overflow-hidden rounded-lg shadow-lg">
          <div className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg font-bold text-center container mx-auto">
              {name}
            </h1>
          </div>
        </div>
      </>
    );
  }
}

class Awards extends Component {
  render() {
    let { name, date } = this.props;
    return (
      <>
        <div className="p-1">
          <div className="card overflow-hidden rounded-lg shadow-lg text-center">
            <div className="flex space-x-4 items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg font-bold text-center container mx-auto">
                {name}
              </h1>
              <p className="text-center container mx-auto">{date}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Skills extends Component {
  render() {
    let { name } = this.props;
    return (
      <>
        <div className="card overflow-hidden rounded-lg shadow-lg">
          <div className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg font-bold text-center container mx-auto">
              {name}
            </h1>
          </div>
        </div>
      </>
    );
  }
}

class Lang extends Component {
  render() {
    let { name } = this.props;
    return (
      <>
        <div className="card overflow-hidden rounded-lg shadow-lg">
          <div className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg font-bold text-center container mx-auto">
              {name}
            </h1>
          </div>
        </div>
      </>
    );
  }
}

class Xtra extends Component {
  render() {
    let { name, desc, time } = this.props;
    return (
      <>
        <div className="p-1">
          <div className="card overflow-hidden rounded-lg shadow-lg">
            <div className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg font-bold text-center container mx-auto">
                {name}
              </h1>
              <p className="text-sm text-center font-semibold container mx-auto">
                {time}
              </p>
              <p className="text-md text-center container mx-auto">{desc}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default class Education extends Component {
  render() {
    return (
      <>
        <div id={this.props.id}>
          <h1 className="pt-5 mt-5 text-4xl font-black text-center">
            Education
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="flex">
            {edu.map((e, i) => {
              return (
                <EduCard
                  id={edu[i].id}
                  place={edu[i].place}
                  logo={edu[i].logo}
                  deg={edu[i].deg}
                  grad={edu[i].grad}
                  cgpa={edu[i].cgpa}
                />
              );
            })}
          </div>
          <h1 className="font-bold text-2xl text-center align-top">
            Relevant CourseWorks
          </h1>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap justify-center justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words -mx-1 lg:-mx-4">
              {course.map((c, i) => {
                return <CourseCard id={course[i].id} name={course[i].name} />;
              })}
            </div>
          </div>
          <h1 className="font-bold text-2xl text-center align-top">Awards</h1>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap justify-center justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words -mx-1 lg:-mx-4 text-center">
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                {award.map((c, i) => {
                  return (
                    <Awards
                      id={award[i].id}
                      name={award[i].name}
                      date={award[i].date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <h3 className="font-bold text-2xl text-center align-top">Skills</h3>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap justify-center justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words -mx-1 lg:-mx-4">
              {skill.map((c, i) => {
                return <Skills id={skill[i].id} name={skill[i].name} />;
              })}
            </div>
          </div>
          <h3 className="font-bold text-2xl text-center align-top">
            Languages
          </h3>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap justify-center justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words -mx-1 lg:-mx-4">
              {lang.map((l, i) => {
                return <Lang id={lang[i].id} name={lang[i].name} />;
              })}
            </div>
          </div>
          <h3 className="font-bold text-2xl text-center align-top">
            Extracurricular Activities
          </h3>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap justify-center justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words -mx-1 lg:-mx-4">
              {xtra.map((l, i) => {
                return (
                  <Xtra
                    id={xtra[i].id}
                    name={xtra[i].name}
                    desc={xtra[i].desc}
                    time={xtra[i].time}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
