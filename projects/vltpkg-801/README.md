## Instructions

```
vlt i
vlr test
```

## Expected Output

`vlr test` should complete successfully

## Current Output

```
$ vlt --version
0.0.0-13
```

```
$ vlr test
/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:4279
  throw new Error("Objects are not valid as a React child (found: " + (childString === '[object Object]' ? 'object with keys {' + Object.keys(newChild).join(', ') + '}' : childString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
        ^

Error: Objects are not valid as a React child (found: object with keys {$$typeof, type, key, props, _owner, _store}). If you meant to render a collection of children, use an array instead.
    at throwOnInvalidObjectType (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:4279:9)
    at reconcileChildFibers (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:5220:7)
    at reconcileChildren (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:10366:28)
    at updateHostRoot (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:11085:5)
    at beginWork (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:12827:14)
    at beginWork$1 (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:19608:14)
    at performUnitOfWork (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:18742:12)
    at workLoopSync (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:18648:5)
    at renderRootSync (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:18616:7)
    at performSyncWorkOnRoot (/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-801/node_modules/.vlt/··react-reconciler@0.29.2/node_modules/react-reconciler/cjs/react-reconciler.development.js:18232:20)

Node.js v22.14.0
```
