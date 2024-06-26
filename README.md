This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**NOTE**: This repo is part of an organization, to make use of vercels on-click deployment, you will have to have an vercel pro plan. One work around to keep using a hobby plan, is to deploy using github actions. You will need 3 keys: VERCEL_TOKEN, ORG_ID, PROJECT_ID. The GITHUB_TOKEN gets filled in automatically.

To get the VERCEL_TOKEN, you will have to login in your account and create one manually.

To get the ORG_ID and PROJECT_ID, I recommend that you download the [vercel CLI](https://vercel.com/docs/cli). Then run the command ```vercel```. The first time it will ask some question that can be left default(if nothing has changed). It will then deploy a version to vercel and generate a .vercel folder in your project folder. This folder contains a json containing the ORG_ID and PROJECT_ID.

These 3 can be filled in the repository secrets. 
