import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.warn('Contentful space ID and access token must be defined in .env.local – projects will not load.');
}

export const contentfulClient = spaceId && accessToken
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  : null;
