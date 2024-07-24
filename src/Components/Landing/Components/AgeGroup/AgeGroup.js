import React from "react";
import "./agegroup.css";
import Child1 from "./img/child1.png";
import Child2 from "./img/child2.png";
import Child3 from "./img/child3.png";
import Child4 from "./img/child4.png";

const ageGroups = [
  { image: Child1, title: "0 - 4 Years" },
  { image: Child2, title: "4 - 6 Years" },
  { image: Child3, title: "6 - 10 Years" },
  { image: Child4, title: "10+ Years" }
];

function AgeGroup() {
  return (
    <div>
      <div className="age_section">
        <h1 className="age_topic">Books By Age Group</h1>
        <p className="age_sub_topic">Discover Perfect Reads for Your Child’s Stage</p>
        <div className="age_card_full">
          {ageGroups.map((group, index) => (
            <div className="age_card" key={index}>
              <img src={group.image} alt={`Child${index + 1}`} className="img_child" />
              <h2 className="age_card_topic">{group.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgeGroup;
