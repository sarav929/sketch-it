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

    // Check if the API returned errors
    if (response.errors) {
      // Check for specific errors like rate limit
      if (response.errors.includes('Rate limit exceeded')) {
        throw new Error('API rate limit exceeded. Please try again later.');
      } else {
        throw new Error('Error fetching image: ' + response.errors.join(', '));
      }
    }

    // If the response is successful and contains data
    const image = response.response;
    return image;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw new Error('Error fetching image: ' + error.message);
  }
};
