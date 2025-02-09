import { createApi } from 'unsplash-js';

// Create Unsplash API instance
const unsplash = createApi({
  accessKey: 'tAaH-H-00QVNwTgU5tuGQXVby4j-ZyGepHOwO84GK9U',
});

export const fetchRandomImage = async (query) => {
  try {
    const response = await unsplash.photos.getRandom({
      query,
      count: 1,
    });

    if (response.errors) {
      console.error('Error fetching image:', response.errors);
    } else {
      const image = response.response;
      return image;
    }
  } catch (error) {
    console.error('Error fetching image:', error);
  }
};
