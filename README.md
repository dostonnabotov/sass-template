# Sass Template - v2.0

This is a template for a Sass project. Built with [Vite](https://vitejs.dev/).

[![YouTube](https://img.shields.io/static/v1?label=&message=Watch%20on%20YouTube&labelColor=FFFFFF&color=FF0000&style=for-the-badge&logo=youtube&logoColor=FF0000)](https://youtu.be/GevImMd3o6c?si=qkwrVQYUANBCGlEH)

![Landing Page](/public/landing-page.png)

## How to use it

1. Just download the `sass` folder
2. Include it in your project.
3. Start using Sass Template

## Folder structure

```bash
sass/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _functions.scss
│   ├── _placeholders.scss
│   ├── _index.scss
├── base/
│   ├── _root.scss
│   ├── _reset.scss
│   ├── _global.scss
│   ├── _index.scss
├── pages/
│   ├── _home.scss
│   ├── _about.scss
│   ├── ...
│   ├── _index.scss
├── layouts/
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _grid.scss
│   ├── ...
│   ├── _index.scss
├── components/
│   ├── _buttons.scss
│   ├── _card.scss
│   ├── ...
│   ├── _index.scss
├── utilities/
│   ├── _accessibility.scss
│   ├── _helpers.scss
│   ├── _shame.scss
│   ├── ...
│   ├── _index.scss
├── style.scss
```

The way files are ordered is important since it defines which style should override the other. So, I made this diagram to better illustrate it:

![Order of SCSS files](/public/scss-files-order.png)

## Useful Links

- [Vite Documentation](https://vitejs.dev/guide/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [Sass Guidelines](https://sass-guidelin.es/)
