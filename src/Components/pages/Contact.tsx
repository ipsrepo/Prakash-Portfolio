import React, { useContext } from 'react'
import DataContext from '../../Context/DataContext';
import ContentTitle from '../container/Utils/ContentTitle';

const Contact = () => {
    const { data } = useContext(DataContext);
    return (
        <>
            <ContentTitle content={data.pageHeadings.contact} />
        </>
    )
}

export default React.memo(Contact);
