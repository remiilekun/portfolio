export type SVGElementProps = React.SVGProps<SVGSVGElement>;

type StrapiImage = { data?: { attributes?: { url?: string } } };

export type AboutMeType = {
  avatar: StrapiImage;
  description: string;
  title: string;
};

export type HomeBannerType = {
  description: string;
  subtitle: string;
  title: string;
};

export type CompanyType = {
  description: { id: number; item: string }[];
  end_date?: string;
  id?: string;
  name: string;
  role: string;
  start_date: string;
};

export type ProjectType = {
  coverImage: StrapiImage;
  description: string;
  id?: string;
  imageOrder: number;
  link: { web?: string; ios?: string; android?: string };
  logo: StrapiImage;
  name: string;
  priority: number;
  technologies: { data: { id: string; attributes: SkillType }[] };
};

export type SkillType = {
  code: string;
  icon: StrapiImage;
  id?: string;
  name: string;
};
