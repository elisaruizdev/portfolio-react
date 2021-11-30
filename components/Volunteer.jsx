import React from "react";
import "./Volunteer.css";

const Volunteer = ({ volunteer }) => {
  return (
    <div>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"> {item.name}</p>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Volunteer;