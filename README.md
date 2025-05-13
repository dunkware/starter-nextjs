# DUNKWARE

A Next.js application with Tailwind CSS and shadcn-ui.

## Features

- Purplish gradient background
- White DUNKWARE hero text in the center
- Header with Platform | Solutions | About menu on the top right
- Configured to run on port 8081

## Project Structure

```
dunkware/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       └── button.tsx
├── lib/
│   └── utils.ts
├── .npmrc
├── next.config.js
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Quick Demo

For a quick demo of the UI, open the `demo.html` file in your browser. This file uses the Tailwind CDN to showcase the UI without requiring any dependencies to be installed.

```
open demo.html
```

## Development Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

   The server will run on port 8081 as configured in the npm scripts.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
