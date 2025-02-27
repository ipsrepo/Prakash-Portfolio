import React, {useCallback, useContext, useMemo, useState} from "react";
import ContentTitle from "../container/Utils/ContentTitle";
import DataContext from "../../Context/DataContext";
import {ISKillsRating} from "../../Context/data.interface";
import Rating from "../container/Utils/Skills/Rating";
import CategoryFilter from "../container/Utils/Skills/CategoryFilter";
import {ALL_CATEGORY} from "../common/page.constant";

const Skills = () => {
  const { data } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState(data?.skillsRating);

  const skills = filteredData?.map((skill: ISKillsRating) => {
    return (
      <div className="flex flex-row items-center justify-evenly my-8 w-full text-xs">
        <span className="w-24 text-xs font-bold">{skill.name}</span>
          <span className="text-xs text-sec-font">{skill.years} Years</span>
        <Rating rating={skill.rating} />
        <span className="font-bolder">{skill.rating} </span>

      </div>
    );
  });

  const handleCategoryFilter = useCallback(
    (category: string): void => {
      let filtered;
      if (category === ALL_CATEGORY) {
        filtered = data?.skillsRating;
      } else {
        filtered = data?.skillsRating?.filter(
          (skill: ISKillsRating) => skill.category.toLowerCase() === category.toLowerCase()
        );
      }
      setFilteredData(filtered);
    },
    [data?.skillsRating]
  );

  const category = useMemo(() => {
    const res = [...new Set(data?.skillsRating?.map((skill) => skill.category))];
    res.unshift(ALL_CATEGORY);
    return res;
  }, [data?.skillsRating]);

  return (
    <>
      <ContentTitle content={data.pageHeadings.skills} />
        <div className="section">
            <CategoryFilter category={category} onSelect={handleCategoryFilter}/>
            {skills}
        </div>
    </>
  );
};

export default React.memo(Skills);
