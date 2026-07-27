import { groq } from "next-sanity";

export const query = (slug: string) => {
  const q = groq`*[_type=="person" && slug =="${slug}"][0]{
    name,
    position,
    slug,
    "image": image.asset->url,
    buttonsCollection[] -> {
      title,
      link,
      links[] {
        label,
        url
      },
      "icon" : icon.asset->url
    },
    cardsCollection[] -> {
      title,
      link,
      links[] {
        label,
        url
      },
      "icon" : icon.asset->url
    }
  }`;
  return q;
};
export const allAuthorsQuery = groq`*[_type=="person"]{
    name,
    position,
    slug,
    "image": image.asset->url,
  }`;
