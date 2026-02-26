// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './app/sanity/schemas';
// import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
    name: 'default',
    title: 'Tchouanfe Portfolio',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    basePath: '/studio', // This is where the studio will live
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});