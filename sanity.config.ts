import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Erbsigne",

  projectId: "dbxfuf9k",
  dataset: "production",
  apiVersion: "2023-03-09",
  basePath: "/admin",

  plugins: [
    deskTool(),
    // visionTool()
  ],

  schema: {
    types: schemas,
  },
});
