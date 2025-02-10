import React from 'react';
import { DownloadIcon } from '../../../icons';

interface DownloadResumeProps {
    className?: string;
  }

const DownloadResume: React.FC<DownloadResumeProps> = (props:any) => {

    const filePath = `${process.env.PUBLIC_URL}/files/Prakash_Thangaraj_FrontEnd_Engineer.pdf`;

    return (
        <a {...props} href={filePath} download> <DownloadIcon className='w-5 mr-2' />Download</a>
    )
}

export default React.memo(DownloadResume);
