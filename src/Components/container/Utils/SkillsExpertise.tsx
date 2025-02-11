import React from "react";
import { IExpertise } from "../../../Context/data.interface";

const SkillsExpertise: React.FC<{ content: IExpertise }> = ({ content }) => {
  return (
    <ul className="list-disc section">
      {Object.entries(content).map(([title, content], index) => (
        <li key={index} className="my-2 ml-4 capitalize">
          <span className="text-sm italic underline text-pri-font">{title}</span> :
          <span className="text-sm">
            {content.map((skill, i) => ` ${skill}${i !== content.length - 1 ? "," : "."}`)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(SkillsExpertise);
