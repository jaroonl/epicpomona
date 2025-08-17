export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  time: string;
  day: string;
  date: string; // e.g., "Aug 27"
  // Additional information for the back of the card
  longDescription?: string;
  organizer?: string;
  cost?: string;
  requirements?: string;
  contactInfo?: string;
  registrationLink?: string;
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
