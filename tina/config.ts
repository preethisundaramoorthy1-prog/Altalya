import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "hero",
        label: "Hero",
        path: "content",
        format: "json",
        match: {
          include: "hero",
        },
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "content",
        format: "json",
        match: {
          include: "about",
        },
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description" },
        ],
      },
      {
        name: "courses",
        label: "Courses",
        path: "content",
        format: "json",
        match: {
          include: "courses",
        },
        fields: [
          {
            type: "object",
            list: true,
            name: "courses",
            label: "Courses",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },
    ],
  },
});