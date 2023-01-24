import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'myblogadachi',
  apiKey: process.env.API_KEY,
});