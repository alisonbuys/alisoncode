export enum SelectedPage {
  Home = "home",
  Designs = "designs",
  Projects = "projects",
  ContactMe = "contactme",
}

export interface BenefitType {
  link:string;
  imageSrc:string;
  imageAlt:string;
 
  title: string;
  description: string;
}

export interface ClassType {
  link:string;
  name: string;
  description?: string;
  image: string;
}
