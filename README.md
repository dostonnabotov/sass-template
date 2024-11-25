# Sass Template - v2.0

This is a template for a Sass project. Built with [Vite](https://vitejs.dev/).

![Landing Page](/public/landing-page.png)

## How to use it

1. Just download the `sass` folder
2. Include it in your project.
3. Start using Sass Template

## Folder structure

```bash
sass/
├── abstracts/
│   ├── _colors.scss      # Placeholder for color variables
│   ├── _mixins.scss      # Placeholder for SCSS mixins
│   ├── _type.scss        # Placeholder for typography styles
│   ├── ...               # Etc
│   ├── _index.scss       # Imports for abstracts
├── base/
│   ├── _global.scss      # Global styles for the project
│   ├── _reset.scss       # CSS reset styles
│   ├── _root.scss        # Root-level variables and custom properties
│   ├── ...               # Etc
│   ├── _index.scss       # Imports for base styles
├── components/
│   ├── _buttons.scss     # Styles for buttons
│   ├── _card.scss        # Styles for card components
│   ├── _navbar.scss      # Styles for navigation bar
│   ├── ...               # Etc
│   ├── _index.scss       # Imports for components
├── layouts/
│   ├── _header.scss      # Header layout styles
│   ├── _footer.scss      # Footer layout styles
│   ├── _grid.scss        # Grid layout styles
│   ├── ...               # Etc
│   ├── _index.scss       # Imports for layouts
├── pages/
│   ├── _home.scss        # Home page-specific styles
│   ├── _about.scss       # About page-specific styles
│   ├── _contact.scss     # Contact page-specific styles
│   ├── ...               # Etc
│   ├── _index.scss       # Imports for pages
├── utilities/
│   ├── _helpers.scss     # Utility classes and helpers
│   ├── _shame.scss       # Temporary fixes or overrides
│   ├── ...               # Etc
│   ├── _index.scss       # Imports for utilities
style.scss                # Main entry point for SCSS
```

If you want to clone the whole project, run the following:

- `npm install` - it will install all dependencies
- `npm run dev` - runs the app

## Useful Links

- [Vite Documentation](https://vitejs.dev/guide/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [Sass Guidelines](https://sass-guidelin.es/)
