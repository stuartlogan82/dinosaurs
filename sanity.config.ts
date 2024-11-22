// ./sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';
import { presentationTool } from 'sanity/presentation';

export default defineConfig({
  projectId: 'bfkgtcoi',
  dataset: 'production',
  autoUpdates: true,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: location.origin,
    }),
  ],
  schema,
});
