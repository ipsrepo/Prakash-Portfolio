import React from "react";
import { PageHeadings } from "../../../Context/data.interface";

const ContentTitle: React.FC<{ content: PageHeadings }> = ({ content }) => {
  return (
    <div className="border-b border-line p-6">
      <h3 className="text-primary uppercase tracking-widest text-l font-boldest">
        {content?.title}
      </h3>
      {content?.text && (
        <h5 className="text-sm tracking-wide text-sec-font mt-4">{content?.text}</h5>
      )}
    </div>
  );
};
export default React.memo(ContentTitle);
