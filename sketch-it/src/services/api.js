import { createApi } from 'unsplash-js';

// Create Unsplash API instance
const unsplash = createApi({
  accessKey: 'tAaH-H-00QVNwTgU5tuGQXVby4j-ZyGepHOwO84GK9U', // Replace with your Unsplash API key
});

export const fetchImages = async (query) => {
  try {
    const response = await unsplash.search.getPhotos({
      query,
    });

    if (response.errors) {
      console.error('Error fetching images:', response.errors);
    } else {
      const images = response.response.results;
      console.log('Fetched Images:', images); // Use this for debugging
      return images; // Return the image data
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};
