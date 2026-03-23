import { defineSchema, defineConfig } from 'tinacms';

export default defineConfig({
  clientId: process.env.TINACLOUD_CLIENT_ID,
  token: process.env.TINACLOUD_WRITE_TOKEN,
  branch: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || 'main',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  schema: defineSchema({
    collections: [
      // your collections here
    ],
  }),
});