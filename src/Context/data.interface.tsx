export interface IContext {
    data: IData,
    loading: boolean
}

export interface IData {
    name: string;
    title: string;
    about: IAbout
    mainSkills: Array<string>;
    expertise: IExpertise;
    pageHeadings: IPageHeadings
    social: Array<ISocial>;
    experience: Array<IContentCard>;
    projects: Array<IContentCard>;
    education: Array<IEducation>;
    certification: Array<ICertification>
}

export interface IContentCard {
    title: string;
    subTitle?: string;
    technology?: Array<string>
    period: {
        from: string | number;
        to: string | number
    }
    details: Array<string>
}
export interface IPageHeadings {
    [section: string]: PageHeadings
}

export interface PageHeadings {
    title: string;
    text?: string;
}

export interface ISocial {
    title: string;
    url: string;
}

export interface IAbout {
    summary: string;
}

export interface IExpertise {
    [section: string]: string[];
}

export interface IEducation {
    title: string;
    date: string;
    school: string
}

export interface ICertification extends IEducation {
    credentials: string;
}

export type EducationCardProps = IEducation | ICertification;
