import React, {useMemo} from "react";
import {IContentCard} from "../../../Context/data.interface";
import {formatText} from "./formatText";

const ContentCard: React.FC<{ content: IContentCard, isDetailed:boolean }> = ({ content, isDetailed }) => {
  const { title, subTitle, period, technology, summary, detailed } = content;

  const details =  isDetailed ? detailed : summary;

  const responsibilities = useMemo(
    () => (
      <ul className="list-disc pl-4">
        {" "}
        {details.map((response: string, index: number) => {
          return (
            <li
              className="text-sm py-1"
              key={index}
              dangerouslySetInnerHTML={{ __html: formatText(response) }}
            ></li>
          );
        })}
      </ul>
    ),
    [details]
  );

  const technologyContent = useMemo(() => {
    return technology?.join(", ") || "";
  }, [technology]);

  const periodEle = (
      <span className="text-sm text-pri-font py-1 italic">
      {period.from} - {period.to}
    </span>
  );

  return (
    <div className="section" key={title}>
      <h3 className="text-md">
        <span className="font-bolder uppercase tracking-wide">{title}</span> -{" "}
        {subTitle ? subTitle : periodEle}
      </h3>
      {subTitle && periodEle}
      {technology && <p className="text-sm text-pri-font my-2">{technologyContent}</p>}
      {responsibilities}
    </div>
  );
};
export default React.memo(ContentCard);
