import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'xbqrez1m', // Your Sanity Project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
});
