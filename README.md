# Sketch it - Reference Site

[Live Demo](https://sketch-it-tau.vercel.app/)

Sketch It is powered by the Unsplash API and designed to help users find inspiration or reference images for their sketching sessions in a fun and interactive way. After selecting a desired subject from a variety of categories, the app will generate random related images, and users can control their session for an enhanced experience.

Originally built as [my final project](https://github.com/sarav929/cs50-finalproject) for CS50 using vanilla JavaScript, I've since refactored it with React for better state management and performance, and Tailwind CSS for improved styling and responsiveness. The app is now fully responsive, ensuring a seamless experience across all devices.

I began by designing the layout on Figma ([design](https://www.figma.com/design/XcQrfC8zKYMvzFZu1RGDXw/Sketch-it?node-id=0-1&t=9VnKobKTzPtXPqx0-1)), starting with mobile-first and gradually scaling up to desktop. After identifying the key components, I recreated them in React, focusing on scalability and reusability to accommodate future additions of categories or features. As an artist who loves painting and drawing, I aimed to create an app that I would personally use for sketching practice.

### Key Features:
- **Subject Selection**: Choose from a variety of categories or opt for a random subject.
- **Timer**: Set an optional time limit for each reference to challenge yourself.
- **Pause/Back**: Control your session easily with pause and back buttons.
- **Refresh Image**: Generate a new image to sketch at the click of a button.
- **Black & White Toggle**: Turn the image black and white to practice values and shapes.
- **Simple UI**: Minimalist design focused on the sketching experience.
- **Responsive Design**: Fully optimized for desktop and mobile devices using Tailwind CSS.

### Technologies:
- React
- Tailwind CSS
- [Yup](https://github.com/jquense/yup?tab=readme-ov-file)
- [Phosphor Icons](https://phosphoricons.com/)
- [Unsplash API](https://unsplash.com/)
- [Headless UI](https://headlessui.com/)
