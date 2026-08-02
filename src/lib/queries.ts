export const photosQuery = `*[_type == "photo"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  "alt": image.alt,
  shopifyHandle
}`;

export const homePageQuery = `*[_type == "homePage"][0] {
  "photos": photos[]->{
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "alt": image.alt,
    shopifyHandle
  }
}`;

export const settingsQuery = `*[_type == "siteSettings"][0] {
  photographerName,
  yearsOfExperience,
  baseCity,
  email,
  instagram,
  facebook,
  linkedin,
  bioHeading,
  bioHeadingEm,
  bio,
  "portraitUrl": portrait.asset->url,
  "portraitAlt": portrait.alt
}`;

export const categoriesQuery = `*[_type == "category" ] | order(title asc){
  title,
  "slug": slug.current,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  description,
  "photoCount": count(photos),
  photos[]->{
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "alt": image.alt,
    shopifyHandle
  }
}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  description,
  "photoCount": count(photos),
  photos[]->{
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "alt": image.alt,
    shopifyHandle
  }
}`;

export const infoPageQuery = `*[_type == "info"][0] {
  quote,
  bioExtended,
  backstagePhotos[]->{
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "alt": image.alt
  }
}`;