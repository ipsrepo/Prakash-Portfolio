export interface IContext {
  data: IData;
  loading: boolean;
}

export interface IData {
  name: string;
  title: string;
  about: IAbout;
  onePageResume: string;
  detailedResume: string;
  contact: IContact;
  mainSkills: Array<string>;
  skillsRating: Array<ISKillsRating>;
  expertise: IExpertise;
  pageHeadings: IPageHeadings;
  social: Array<ISocial>;
  experience: Array<IContentCard>;
  projects: Array<IContentCard>;
  education: Array<IEducation>;
  certification: Array<ICertification>;
}

export interface IContact {
  [section: string]: string[];
}

export interface ISKillsRating {
  name: string;
  rating: string;
  category: string;
  years?: string;
}

export interface IContentCard {
  title: string;
  subTitle?: string;
  technology?: Array<string>;
  period: {
    from: string | number;
    to: string | number;
  };
  summary: Array<string>;
  detailed: Array<string>;
}
export interface IPageHeadings {
  [section: string]: PageHeadings;
}

export interface PageHeadings {
  title: string;
  text?: string;
}

export interface ISocial {
  title: string;
  url: string;
  icon?: string;
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
  school: string;
}

export interface ICertification extends IEducation {
  credentials: string;
}

export type EducationCardProps = IEducation | ICertification;
