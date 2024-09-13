# Dino Explorer for Toddlers

Welcome to the Dino Explorer for Toddlers project! This interactive web application is designed to help young children learn about dinosaurs in a fun and engaging way.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)

## Project Overview

Dino Explorer for Toddlers is an educational web application that allows children to discover various dinosaur species, learn about their characteristics, and enjoy interactive features like dinosaur sounds and videos.

Key features include:

- Interactive dinosaur cards with images and information
- Filtering dinosaurs by group, period, diet, and habitat
- Alphabetical filtering
- YouTube video integration for dinosaur sounds
- Text-to-speech functionality for letter pronunciation
- Responsive design for various devices

## Technologies Used

- [Astro](https://astro.build/) - Static Site Generator
- [Sanity CMS](https://www.sanity.io/) - Headless CMS for content management
- [React](https://reactjs.org/) - For interactive components
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [YouTube API](https://developers.google.com/youtube/v3) - For video integration
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - For text-to-speech functionality

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/dino-explorer-for-toddlers.git
   cd dino-explorer-for-toddlers
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   PUBLIC_SANITY_DATASET=your_sanity_dataset
   PUBLIC_SANITY_API_VERSION=your_sanity_api_version
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:4321`

## Project Structure

```
dino-explorer-for-toddlers/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── sanity/
│   └── utils/
├── public/
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

## Contributing

We welcome contributions to the Dino Explorer for Toddlers project! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please ensure your code adheres to the existing style and passes all tests before submitting a pull request.

## Deployment

This project is set up to be deployed on Vercel. To deploy:

1. Push your changes to the main branch of your GitHub repository
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your site

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
