import React from "react";
import { EducationCardProps } from "../../../Context/data.interface";

const EducationCard: React.FC<{ data: EducationCardProps }> = ({ data }) => {
  return (
    <div className="section">
      <h4 className="font-bold text-sm">
        {data.title}
        {"credentials" in data && (
          <>
            {" "}
            -{" "}
            <a
              className="text-xs italic text-accent underline font-semi text-pri-font"
              href={data.credentials}
              target="_blank"
              rel="noreferrer"
            >
              view credentials
            </a>
          </>
        )}
      </h4>
      <p className="text-sm pt-1 text-pri-font">
        {data.school}
        {data.date && <> - {data.date}</>}
      </p>
    </div>
  );
};

export default React.memo(EducationCard);
