import React from "react";
import {DownloadIcon} from "../../../icons";

interface DownloadResumeProps {
    label: string;
    filePath: string
}

const DownloadResume: React.FC<DownloadResumeProps> = ({label, filePath}) => {
    const fullFilePath = `${process.env.PUBLIC_URL}/files/${filePath}`;

  return (
      <a className="hover:text-accent hover:bg-white
                flex align-middle
                w-full
                mt-4
                text-center
                justify-center
                border-accent
                bg-accent text-xs px-4 py-1
                transition duration-300 ease-in-out hover:-translate-y-1
                text-white border" href={fullFilePath} download>
      {" "}
      <DownloadIcon className="w-5 mr-2" />
          <span className="xs:hidden lg:block">{label}</span>
    </a>
  );
};

export default React.memo(DownloadResume);
