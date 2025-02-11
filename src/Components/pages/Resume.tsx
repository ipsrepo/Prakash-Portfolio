import React, { useContext } from "react";
import ContentTitle from "../container/Utils/ContentTitle";
import DataContext from "../../Context/DataContext";
import SectionTitle from "../container/Utils/SectionTitle";
import ContentCard from "../container/Utils/ContentCard";
import { EducationCardProps, IContentCard } from "../../Context/data.interface";
import SkillsExpertise from "../container/Utils/SkillsExpertise";
import EducationCard from "../container/Utils/EducationCard";
import DownloadResume from "../container/Utils/DownloadResume";

const Resume = () => {
  const { data } = useContext(DataContext);

  const generateContent = (content: IContentCard[]) => {
    return content.map((exp: IContentCard, index: number) => (
      <ContentCard key={index} content={exp} />
    ));
  };

  const generateEduContent = (content: EducationCardProps[]) => {
    return content.map((data: EducationCardProps, index: number) => (
      <EducationCard key={index} data={data} />
    ));
  };

  const experience = generateContent(data.experience);
  const projects = generateContent(data.projects);
  const education = generateEduContent(data.education);
  const certifications = generateEduContent(data.certification);

  return (
    <>
      <ContentTitle content={data.pageHeadings.resume} />
      <section className="px-4 relative">
        <DownloadResume
          className="hover:text-accent hover:bg-white
                absolute flex align-middle 
                border-accent
                bg-accent text-sm px-4 py-1 
                text-white border 
                right-0 mr-4"
        />

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
