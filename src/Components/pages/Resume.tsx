import React, {useContext} from "react";
import ContentTitle from "../container/Utils/ContentTitle";
import DataContext from "../../Context/DataContext";
import SectionTitle from "../container/Utils/SectionTitle";
import SkillsExpertise from "../container/Utils/SkillsExpertise";
import {generateContent, generateEduContent} from "../container/Utils/contentGenerator";

const Resume = () => {
  const { data } = useContext(DataContext);


  const experience = generateContent(data.experience);
  const projects = generateContent(data.projects);
  const education = generateEduContent(data.education);
  const certifications = generateEduContent(data.certification);

  return (
    <>
      <ContentTitle content={data.pageHeadings.resume} />
      <section className="px-4 relative">

        <SectionTitle>Skills & Expertise</SectionTitle>
        <SkillsExpertise content={data.expertise} />

        {experience.length && (
          <>
            <SectionTitle>Experience</SectionTitle>
            {experience}
          </>
        )}

        {projects.length && (
          <>
            <SectionTitle>Projects</SectionTitle>
            {projects}
          </>
        )}

        {education.length && (
          <>
            <SectionTitle>Education</SectionTitle>
            {education}
          </>
        )}

        {certifications.length && (
          <>
            <SectionTitle>Certifications</SectionTitle>
            {certifications}
          </>
        )}
      </section>
    </>
  );
};
export default React.memo(Resume);
