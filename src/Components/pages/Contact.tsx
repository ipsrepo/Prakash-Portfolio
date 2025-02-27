import React, {useContext} from "react";
import DataContext from "../../Context/DataContext";
import ContentTitle from "../container/Utils/ContentTitle";
import SocialLink from "../container/Utils/SocialLink";

const Contact = () => {
  const { data } = useContext(DataContext);
  return (
    <>
      <ContentTitle content={data.pageHeadings.contact} />
      <div className="px-4 pt-8 grid gap-8">
        <p className="text-sm text-sec-font italic">
          Email me @ {" : "}
          <a
            className="text-pri-font tracking-wide underline"
            href={`mailto:${data?.contact?.email}`}
          >
            {data?.contact?.email}
          </a>
        </p>
        <p className="text-sm text-sec-font italic">
          Call me @ {" : "}
          <span className="text-pri-font tracking-wide">
            {data?.contact?.phone} ({data?.contact?.location})
          </span>
        </p>

        <p className="text-sm text-sec-font italic">
          Message me @ {" : "}
          <a
              className="text-pri-font tracking-wide underline"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${data?.contact?.phone.toString().replace(/\s|\+/g, "")}`}
          >
            WhatsApp
          </a>
        </p>

        <SocialLink />
      </div>
    </>
  );
};

export default React.memo(Contact);
