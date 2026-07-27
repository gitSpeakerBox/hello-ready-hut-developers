import { client, projectId } from "@/sanity/sanity.client";
import { query, allAuthorsQuery } from "./query";

const URL = `https://${projectId}.api.sanity.io/v2023-03-09/data/query/production?`;
const header = {
  "content-type": "application/json",
};


export async function getAuthorBySlug(slug: string) {
  const res = await fetch(URL, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      query: query(slug),
    }),
    cache: "no-store",
  });
  return await res.json();
}
export async function getAllAuthor() {
  const res = await fetch(URL, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      query: allAuthorsQuery,
    }),
    cache: "no-store",
  });
  return await res.json();
}
