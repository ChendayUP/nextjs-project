# Talkify

Text to speech app using the Web Speech API. Mainly wanted to try some things out (specifically seeing how MaterialUI plays with Next.js), and also since I'm currently editing my book it's really helpful to hear it read out loud to me so I can fix spelling/readibility/etc.

I'll be adding stuff as I go; I'm largely considering this a testing ground for tools and concepts I want to use in other, bigger projects so if you're wondering 'why are you using something so excessive for something so simple' well....there you go. Check it out if you're interested:

[Talkify](https://talkify.netlify.app)

Tools so far:

- Next.js
- Typescript
- MUI (Material UI)
- Web Speech API

Bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 待开发功能
- [ ] 多种语音选择
- [ ] 循环播放, 可以设置每句话循环播放次数, 每次播放间隔时间
- [ ] 添加播放列表界面, 读取代码中保存的文章