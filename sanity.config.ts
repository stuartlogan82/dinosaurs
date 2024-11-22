// ./sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';
import { presentationTool } from 'sanity/presentation';

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  autoUpdates: true,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: location.origin,
    }),
  ],
  schema,
});
