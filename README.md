# CI/CD Practice Node App

This is a small Node.js app to practice CI/CD pipelines.

## Run locally

```bash
npm test
npm start
```

The app runs on `http://localhost:3000` by default.

## Endpoints

- `GET /` -> app status message
- `GET /health` -> health check

## Useful CI steps

A basic CI workflow can run:

1. `actions/checkout`
2. `setup-node`
3. `npm test`
4. `npm start` (optional smoke test)
