## Instructions

```
vlt i
rm -rf workspace/node_modules/
vlt i
```

## Expected Output

`vlt i` completes successfully

## Current Output

```
$ vlt --version
0.0.0-14
```

```
$ vlt i
build ✓ > actual ✓ > reify⠋
202 requests
Error: EEXIST: file already exists, symlink '../sass-embedded/dist/bin/sass.js' -> '/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-797/node_modules/.vlt/··vite@6.3.5/node_modules/.bin/sass'

Full details written to: /Users/lukekarrys/.local/data/vlt/error-logs/error-79148.log

Open an issue with the full error details at:
  https://github.com/vltpkg/vltpkg/issues/new

```

```
Error: EEXIST: file already exists, symlink '../sass-embedded/dist/bin/sass.js' -> '/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-797/node_modules/.vlt/··vite@6.3.5/node_modules/.bin/sass'
    at async symlink (node:internal/fs/promises:1005:10)
    at async Promise.all (index 1)
    at async addEdge (/Users/lukekarrys/.config/packages/src/graph/src/reify/add-edge.ts:75:24)
    at async Promise.all (index 6)
    at async reify_ (/Users/lukekarrys/.config/packages/src/graph/src/reify/index.ts:116:27)
    at async reify (/Users/lukekarrys/.config/packages/src/graph/src/reify/index.ts:61:5)
    at async install (/Users/lukekarrys/.config/packages/src/graph/src/install.ts:29:16)
    at async command (/Users/lukekarrys/.config/packages/src/cli-sdk/src/commands/install.ts:25:21)
    at async outputCommand (/Users/lukekarrys/.config/packages/src/cli-sdk/src/output.ts:149:33)
    at async Module.run (/Users/lukekarrys/.config/packages/src/cli-sdk/src/index.ts:114:3) {
  errno: -17,
  code: 'EEXIST',
  syscall: 'symlink',
  path: '../sass-embedded/dist/bin/sass.js',
  dest: '/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-797/node_modules/.vlt/··vite@6.3.5/node_modules/.bin/sass',
  cause: {
    errno: -17,
    code: 'EEXIST',
    syscall: 'symlink',
    path: '../sass-embedded/dist/bin/sass.js',
    dest: '/Users/lukekarrys/projects/vltpkg/projects-that-error/projects/vltpkg-797/node_modules/.vlt/··vite@6.3.5/node_modules/.bin/sass'
  }
}
```