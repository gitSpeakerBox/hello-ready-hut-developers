import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
    }),
    defineField({
      name: "buttonsCollection",
      title: "Buttons Collection",
      type: "array",
      of: [{ type: "reference", to: { type: "singleBox" } }],
    }),
    defineField({
      name: "cardsCollection",
      title: "Cards Collection",
      type: "array",
      of: [{ type: "reference", to: { type: "singleBox" } }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
