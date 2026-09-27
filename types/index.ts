export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}

export interface TechItem {
  name: string;
  label: string;
  highlight?: boolean;
}

export interface TechCategory {
  id: string;
  title: string;
  items: TechItem[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  colorClass: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  focus: string;
}
