# React Native / Expo Boilerplate

This is a boilerplate for React Native / Expo projects. It includes:

- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [twrnc](https://www.npmjs.com/package/twrnc)
- [Formik](https://jaredpalmer.com/formik/)
- [Yup](https://www.npmjs.com/package/yup)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- Auth Flow Screens (SignIn, Register)
- Custom React Native Components with Tailwind (Button, Input, Text, Container, etc.)
- Custom React Native Hook for caching images and fonts (useCachedResources)
- Custom Fonts (Rubik, Poppins)

## Getting Started

1. Clone this repo

2. Install dependencies

```bash
npm install
```

3. Start the app

```bash
npm start
```

## Structure

```
.
├── App.tsx
├── src
│   ├── assets
│   ├── components
│   ├── libs
│   ├── modules
```

## How to use

### Components

All components are located in `src/components`. You can add your own components here. For example, if you want to create a `Toggle` component, you can create a `Toggle` folder in `src/components` and add a `Toggle.tsx` file and a `index.tsx` file. The `index.tsx` file will export the `Toggle` component.

### Modules

All modules are located in `src/modules`. You can add your own modules here.

- `screens` - All screens that are only used in this module are located here.
- `components` - All components that are only used in this module are located here

### Assets

All assets are located in `src/assets`. You can add your own assets here.

### Libraries

All libraries are located in `src/libs`. You can add your own libraries here. For example, you can add a library for Tailwind CSS here.

## How to change custom fonts

- Go to `src/modules/asset-cache/useCachedResources.tsx`

- Add your custom fonts to the `fontAssets` function
