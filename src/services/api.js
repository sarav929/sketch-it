import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'tAaH-H-00QVNwTgU5tuGQXVby4j-ZyGepHOwO84GK9U',
});

export const fetchRandomImage = async (query = '') => {
  try {
    const orientations = ['portrait', 'squarish'];
    const randomOrientation =
      orientations[Math.floor(Math.random() * orientations.length)];

    const params = {
      orientation: randomOrientation,
    };

    if (query && query !== 'random') {
      params.query = query;
    }

    const response = await unsplash.photos.getRandom(params);

    if (response.errors) {
      if (response.errors.includes('Rate limit exceeded')) {
        throw new Error('API rate limit exceeded. Please try again later.');
      } else {
        throw new Error('Error fetching image: ' + response.errors.join(', '));
      }
    }

    const image = response.response;
    return image;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw new Error('Error fetching image: ' + error.message);
  }
};
