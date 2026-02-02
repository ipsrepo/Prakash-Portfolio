import ContentCard from "./ContentCard";
import {EducationCardProps, IContentCard} from "../../../Context/data.interface";
import EducationCard from "./EducationCard";
import React from "react";

export const generateContent = (content: IContentCard[], isDetailed: boolean = false) => {
    return content.map((exp: IContentCard, index: number) => (
        <ContentCard key={index} content={exp} isDetailed={isDetailed} />
    ));
};

export const generateEduContent = (content: EducationCardProps[]) => {
    return content.map((data: EducationCardProps, index: number) => (
        <EducationCard key={index} data={data}/>
    ));
};
