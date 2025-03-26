# Error: Expected to use Webpack bindings (react-server-dom-webpack/server.edge) for React but the current process is referencing 'createClientModuleProxy' from the Turbopack bindings (react-server-dom-turbopack/server.edge). This is likely a bug in our integration of the Next.js server runtime.

## How to recreate

```sh
pnpm install
pnpm dev
```

Navigate to http://localhost:3000, will see Internal Server Error `500` and terminal like this:

```shell
Error: Expected to use Webpack bindings (react-server-dom-webpack/server.edge) for React but the current process is referencing '__esModule' from the Turbopack bindings (react-server-dom-turbopack/server.edge). This is likely a bug in our integration of the Next.js server runtime.
    at esmImport (.next/server/chunks/ssr/[turbopack]_runtime.js:138:79)
```

## How to resolve

1. Delete the `next/` folder.
2. Run `pnpm dev` again.

OR FOR BUILD 2. Run `pnpm build`. 3. Run `pnpm start`.
