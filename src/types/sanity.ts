// src/types/sanity.ts

export interface Photo {
  title: string;
  slug: string;
  imageUrl: string;
  alt?: string;
  shopifyHandle?: string;
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

export interface HomePage {
  photos?: Photo[];
}

export interface SiteSettings {
  photographerName: string;        
  yearsOfExperience?: number;      
  baseCity?: string;               
  email?: string;                  
  instagram?: string;
  facebook?: string;
  linkedin?: string;               
  bioHeading?: string;             
  bioHeadingEm?: string;           
  bio: string[];                   
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

export interface InfoPage {
    quote?: string;
    bioExtended?: string[];
    backstagePhotos?: Photo[];
}