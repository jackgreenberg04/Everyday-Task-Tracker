# Everyday Task Tracker

A simple React.js application for managing your daily tasks. Add, edit, complete and delete tasks with persistence via `localStorage`.

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Features

- Add new tasks with a title and optional description
- Inline validation to prevent duplicate or empty titles
- Edit, complete or delete tasks
- Data persisted to `localStorage` so your tasks remain after refresh
- Pending task counter updates automatically

## Deployment

Build the app for production using:

```bash
npm run build
```

You can then deploy the contents of the `build` directory to services like Netlify or Vercel.

## License

MIT

