import { groq } from "next-sanity";

export const aboutsQuery = groq`*[_type == "abouts"]{
  _id,
  title,
  description,
  "imgUrl": imgUrl.asset->url
}`;


export const worksQuery = groq`*[_type == "works"]{
  _id,
  title,
  description,
  projectLink,
  codeLink,
  tags,
  "imgUrl": imgUrl.asset->url
}`;

export const skillsQuery = groq`*[_type == "skills"]{
  _id,
  name,
  bgColor,
  "icon": icon.asset->url
}`;

export const experiencesQuery = groq`*[_type == "experiences"] | order(year desc){
  _id,
  year,
  works[]{
    name,
    company,
    desc
  }
}`;

export const testimonialsQuery = groq`*[_type == "testimonials" && approved == true]{
  _id,
  name,
  company,
  feedback,
  "imageurl": imageurl.asset->url
}`;

export const brandsQuery = groq`*[_type == "brands"]{
  _id,
  name,
  "imgUrl": imgUrl.asset->url
}`;

export const heroQuery = groq`*[_type == "hero"][0]{
  name,
  mainTitle,
  description,
  yearsExperience,
  "profileImage": profileImage.asset->url,
    "resumeURL": resume.asset->url 
}`;

