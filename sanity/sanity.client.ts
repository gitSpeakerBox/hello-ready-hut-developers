import { createClient } from "next-sanity";

export const projectId = "dbxfuf9k";
export const dataset = "production";
export const apiVersion = "2023-03-09";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
