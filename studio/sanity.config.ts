import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'amadeus-wedberg',
  title: 'Amadeus Wedberg',

  projectId: 'uprvz5iv',   // ← paste your project ID here (it's not a secret)
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('settings')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
              ),
            S.divider(),
            S.documentTypeListItem('gig').title('Gigs'),
            S.documentTypeListItem('galleryPhoto').title('Gallery Photos'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
