import React from "react";

const ExpCard = (props) => {
  const { employment, place, address, duration, description } = props;
  return (
    <>
      <div class="card py-4 px-8 shadow-2xl rounded-lg my-20">
        <div className="p-10 space-x-4 xs:flex-wrap justify-evenly justify-items-center justify-self-center content-evenly align-items-center align-self-center place-content-evenly place-items-center place-self-center break-words">
          <div id="exp-n t-break">
            <h3 className="font-semibold text-lg ">{employment}</h3>
            <div className="text-sm font-light text-opacity-40">
              <p className="text-italic">{place}</p>
              <p>{address}</p>
              <p>{duration}</p>
            </div>
          </div>
          <div id="exp-d t-break font-normal">
            <p className="text-sm pt-3">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpCard;
