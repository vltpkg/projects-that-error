## Instructions

```
vlt i
cd workspace
./node_modules/.bin/astro sync
```

## Expected Output

`astro sync` completes successfully

## Current Output

```
$ vlt --version
0.0.0-13
```

```
$ ./node_modules/.bin/astro sync
2:14:00 PM [vite] (ssr) Error when evaluating SSR module /Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/workspace/astro.config.mjs: Cannot find module 'astro/errors' imported from '/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/··starlight-links-validator@0.14.3/node_modules/starlight-links-validator/index.ts'
      at fetchModule (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46813:19)
      at RunnableDevEnvironment.fetchModule (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:47904:12)
      at fetchModule (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:47858:21)
      at handleInvoke (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:38973:28)
      at EventEmitter.listenerForInvokeHandler (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:39046:25)
      at EventEmitter.emit (node:events:518:28)
      at Object.send (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:25190:40)
      at Object.invoke (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/module-runner.js:621:34)
      at Object.invoke (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/module-runner.js:682:34)
      at SSRCompatModuleRunner.getModuleInformation (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/module-runner.js:1205:94)
[astro] Unable to load your Astro config

Cannot find module 'astro/errors' imported from '/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/··starlight-links-validator@0.14.3/node_modules/starlight-links-validator/index.ts'
  Stack trace:
    at fetchModule (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46813:19)
    at fetchModule (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:47858:21)
    at EventEmitter.listenerForInvokeHandler (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:39046:25)
    at Object.send (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:25190:40)
    at Object.invoke (file:///Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-796/node_modules/.vlt/%C2%B7%C2%B7vite@6.3.5/node_modules/vite/dist/node/module-runner.js:682:34)
```