# Pomodoro

Stay focused while working by slotting work and breaks into pre-defined time span.

## Features

Home

- "Start" your Pomodoro and get working
- Change your time slots through "Favorites"
- "Cancel" if you wish to stop the timer and discard your current tracker
- "Reset" when you have finished your one Pomodoro set and wish to start a new Pomodoro

Settings

- Configure your personalised timers
- if you wish to remember this setting , check on "Add to Favourites"

## Built with

- ReactJS v19
- React Router v7
- Bootstrap , React-Bootstrap

## Developer insights

- [React Router template](https://reactrouter.com/start/framework/installation) was used to set up this entire project
- localstorage is used to save your favorite timer settings
- [Audio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) used to indicate when each time slot is done
- Server side rendered app
- Deployed through [Render](https://render.com/)

---

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

---

Built with ❤️ using React Router.
