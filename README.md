# resume-website

## Setting up the React Experience Section

This project currently does not use React. To implement a modern, interactive, light-themed Work Experience section as described, follow these steps:

### 1. Create a React App

```
npx create-react-app experience-section
cd experience-section
```

### 2. Install Tailwind CSS

Follow the [official Tailwind CSS React guide](https://tailwindcss.com/docs/guides/create-react-app):

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Edit `tailwind.config.js` and add:
```
  content: ["./src/**/*.{js,jsx,ts,tsx}"]
```

In `src/index.css`, add:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Add the Components

- Create `src/ExperienceCard.jsx` and `src/ExperienceList.jsx` with the provided code.
- Import and use `<ExperienceList />` in your `App.js`.

### 4. Run the App

```
npm start
```

You will now have a beautiful, interactive, light-themed experience section in React!
