export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Settings {
  artistName: string;
  tagline: string;
  bio: any[]; // Sanity block content
  profilePhoto?: SanityImage;
  email?: string;
  soundcloudUrl?: string;
  instagramUrl?: string;
}

export interface Gig {
  _id: string;
  date: string;
  venue: string;
  city: string;
  country?: string;
  description?: string;
  ticketUrl?: string;
}

export interface GalleryPhoto {
  _id: string;
  image: SanityImage;
  caption?: string;
  date?: string;
}
