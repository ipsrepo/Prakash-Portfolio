import { useContext } from "react";
import { ISocial } from "../../../Context/data.interface";
import DataContext from "../../../Context/DataContext";
import React from "react";
import { icons } from "../../../icons";
import { SOCIAL_LINK_TYPE } from "../../common/page.constant";

const SocialLink = ({type = SOCIAL_LINK_TYPE.BOTH}) => {
    const { data } = useContext(DataContext);
    const isIconVisible = type !== SOCIAL_LINK_TYPE.LINK_ONLY;
    const isLinkVisible = type !== SOCIAL_LINK_TYPE.ICON_ONLY;


    const socialLinks = data.social.map((link: ISocial, index: number) => {
        const IconComponent = icons[link.icon as keyof typeof icons];
        return (
            <a href={link.url} target="_new" key={index} className={`${index !== 0 ? "border-l border-line" : ""} px-2 text-sm hover:text-blue text-sec-font flex align-middle`}>
                {isIconVisible && IconComponent && <IconComponent className="h-5 inline-block mr-2" />}
                {isLinkVisible && link.title}
            </a>
        )
    });


    return <p className="my-4 flex row ">{socialLinks}</p>
}

export default React.memo(SocialLink);
