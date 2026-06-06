// src/types/sanity.ts

export interface Photo {
  title: string;
  slug: string;
  imageUrl: string;
  alt?: string;
  shopifyHandle: string;
  description?: string;
  // Definiamo anche l'oggetto EXIF per il futuro
  exif?: {
    camera?: string;
    lens?: string;
    iso?: string;
    shutterSpeed?: string;
    aperture?: string;
  };
}

export interface SiteSettings {
  photographerName: string;
  yearsOfExperience: number;
  baseCity: string;
  email: string;
  instagramHandle?: string;
  facebookHandle?: string;
  linkedInHandle?: string;
  bioHeading: string;
  bioHeadingEm: string;
  bio: string;
  portraitUrl: string;
  portraitAlt?: string;
}

export interface Category {
  title: string;
  slug: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  description?: string;
  photoCount?: number;
  photos?: Photo[];
}