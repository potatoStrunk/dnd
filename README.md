# D&D Character Generator

A modern web application for creating Dungeons & Dragons characters using the 2024 Player's Handbook specifications.

## Features

- **Step-by-step Character Creation**: Guided wizard interface for building characters
- **Species Selection**: Choose from official D&D species (formerly races)
- **Class Selection**: All 12 core classes from the Player's Handbook
- **Background Selection**: Various backgrounds with skills and equipment
- **Point Buy System**: Official 27-point ability score assignment (scores 8-15)
- **Character Sheet**: Complete printable character sheet with all stats
- **Export Functionality**: Export character data as JSON

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Character Creation Process

1. **Choose Species**: Select your character's species (race)
2. **Choose Class**: Select your character's class
3. **Choose Background**: Select your character's background
4. **Assign Ability Scores**: Use the point buy system (27 points, scores 8-15)
5. **Review**: View and print your complete character sheet

## Based on 2024 Player's Handbook

This generator follows the latest D&D rules including:
- Updated terminology (Species instead of Race)
- 27-point point buy system
- Official ability score ranges
- Latest class and background options

## Technologies

- React 18
- Vite
- Modern CSS with gradients and glassmorphism effects

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages. Here's how to deploy:

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Update the base path** (if needed):
   - If your repository is named something other than `luke-site-cursor`, update `vite.config.js`:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```
   - If deploying to a custom domain or user/organization page, use `base: '/'`

3. **Push to main branch**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

### Other Hosting Options

This is a static site and can also be deployed to:
- **Netlify**: Drag and drop the `dist` folder or connect your GitHub repo
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Heroku**: Not recommended for static sites (overkill and costs money)
- **Any static hosting**: The `dist` folder contains everything needed

## License

This project is for personal use and educational purposes. D&D content is property of Wizards of the Coast.

