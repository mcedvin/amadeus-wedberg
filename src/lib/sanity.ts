import { createClient } from '@sanity/client';
import { createImageUrlBuilder as imageUrlBuilder } from '@sanity/image-url';
import type { SanityImage } from './types';

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID ?? 'replace-me',
  dataset: import.meta.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImage) => builder.image(source);
