import React, {useContext} from 'react';
import DataContext from "../../Context/DataContext";
import {generateContent} from "../container/Utils/contentGenerator";
import ContentTitle from "../container/Utils/ContentTitle";

const Projects = () => {
    const {data} = useContext(DataContext);

    const projects = generateContent(data.projects, true);
    return (
        <>
            <ContentTitle content={data.pageHeadings.project}/>
            {projects}
        </>
    );
};

export default React.memo(Projects);