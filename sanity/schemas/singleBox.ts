import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "singleBox",
  title: "Single Box",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
    defineField({
      name: "links",
      title: "Multiple Links (Optional)",
      type: "array",
      of: [
        defineArrayMember({
          name: "linkItem",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "string" }),
          ],
        }),
      ],
    } as any),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
