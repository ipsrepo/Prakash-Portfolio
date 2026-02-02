import React, {useContext} from 'react';
import {generateContent} from "../container/Utils/contentGenerator";
import DataContext from "../../Context/DataContext";
import ContentTitle from "../container/Utils/ContentTitle";

const Experiences = () => {
    const {data} = useContext(DataContext);
    const experience = generateContent(data.experience, true);
    return (
        <>
            <ContentTitle content={data.pageHeadings.experience}/>
            {experience}
        </>
    );
};

export default React.memo(Experiences);