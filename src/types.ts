export interface MediaCoverage {
  id: string;
  imageUrl?: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export type SegmentType = 'waste_management' | 'health_management' | 'environmental_activities' | 'skill_development';

export interface Vendor {
  id: string;
  name: string;
  description: string;
  contact?: string;
  link?: string;
  imageUrl?: string;
  segment: SegmentType;
}

export interface AppEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  location?: string;
  link?: string;
  imageUrl?: string;
  imageUrls?: string[];
  segment: SegmentType;
}

export interface SiteContent {
  aboutShirish: string;
  scentwaveDescription: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  // Core Philosophy
  corePhilosophyTitle: string;
  corePhilosophyDescription: string;
  // Mission & Vision
  missionTitle: string;
  missionDescription: string;
  visionTitle: string;
  visionDescription: string;
  // Impact Stats
  impactCommunities: string;
  impactWaste: string;
  impactLives: string;
  impactVolunteers: string;
  // Shirish Section
  shirishTitle: string;
  shirishDescription: string;
  shirishQuote: string;
  // Scentwave Section
  scentwaveTitle: string;
  // Focus Areas
  segmentsTitle: string;
  segmentsSubtitle: string;
  shirishLogoUrl?: string;
  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
}
