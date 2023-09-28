This repo demonstrates a grammY/nextjs bug.

```shell
grammyjs-nextjs-edge-bug % pnpm build

> grammyjs-nextjs-edge-bug@0.1.0 build /Users/alex/tmp/grammyjs-nextjs-edge-bug
> next build

 ⚠ Compiled with warnings

./app/api/webhooks/telegram/route.ts
Attempted import error: 'Bot' is not exported from 'grammy' (imported as 'Bot').

Import trace for requested module:
./app/api/webhooks/telegram/route.ts
./node_modules/.pnpm/next@13.5.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhooks%2Ftelegram%2Froute&page=%2Fapi%2Fwebhooks%2Ftelegram%2Froute&pagePath=private-next-app-dir%2Fapi%2Fwebhooks%2Ftelegram%2Froute.ts&appDir=%2FUsers%2Falex%2Ftmp%2Fgrammyjs-nextjs-edge-bug%2Fapp&appPaths=%2Fapi%2Fwebhooks%2Ftelegram%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!./app/api/webhooks/telegram/route.ts?__next_edge_ssr_entry__

```
