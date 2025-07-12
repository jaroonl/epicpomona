export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  time: string;
  day: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  icon: React.ReactNode;
}

export interface NavigationItem {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  items: NavigationItem[];
}
