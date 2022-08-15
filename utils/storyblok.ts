import {
  storyblokInit,
  apiPlugin,
  storyblokEditable,
  loadStoryblokBridge,
} from '@storyblok/js';

type StoryLinks = {
  [id: string]: {
    slug: string;
    name: string;
  };
};

type Story<T> = {
  name: string;
  slug: string;
  content: T;
};

type App = {
  name: string;
  description: string;
};

const dev = import.meta.env.DEV;
const storyblokToken = import.meta.env.STORYBLOK_TOKEN;

const { storyblokApi } = storyblokInit({
  use: [apiPlugin],
  apiOptions: {
    accessToken: storyblokToken,
    region: 'us',
  },
});

export async function getLinks(params: { folder?: string } = {}) {
  const { folder } = params;

  if (!storyblokApi) {
    throw new Error(`storyblok api not initialized.`);
  }

  const { data } = await storyblokApi.get('cdn/links', {
    version: 'draft',
    starts_with: folder && `${folder}/`,
  });

  const links = data ? data.links : {};

  return links as StoryLinks;
}

export async function getStory<T>(slug: string) {
  if (!storyblokApi) {
    throw new Error(`storyblok api not initialized.`);
  }

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  });

  return data.story as Story<T>;
}

export async function getStoryAsApp(slug: string) {
  return getStory<App>(slug);
}
