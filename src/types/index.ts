// Common types used across the application
export type IdEntity = {
  readonly id: number;
};

export type LinkType = IdEntity & {
  label: string;
  href: string;
};

export type StateType = IdEntity & {
  heading: string;
  text: string;
};

export type TechType = IdEntity & {
  name: string;
  url: string;
};

export type FeatureType = IdEntity & {
  name: string;
  title: string;
  description: string;
};

export type NetworkType = IdEntity & {
  label: string;
  href: string;
};
