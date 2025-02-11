import React, { useContext } from "react";
import Rating from "../container/Utils/Rating";
import ContentTitle from "../container/Utils/ContentTitle";
import DataContext from "../../Context/DataContext";
import { ISKillsRating } from "../../Context/data.interface";

const Skills = () => {
  const { data } = useContext(DataContext);

  const skills = data?.skillsRating?.map((skill: ISKillsRating) => {
    return (
      <div className="flex flex-row items-center justify-evenly my-4 w-full">
        <span className="w-24">{skill.name}</span>
        <Rating rating={skill.rating} />
        <span className="font-bolder">{skill.rating} </span>
        <span className="w-16 text-sec-font">{skill.years} Years</span>
      </div>
    );
  });

  return (
    <div>
      <ContentTitle content={data.pageHeadings.skills} />
      {skills}
    </div>
  );
};

export default React.memo(Skills);
