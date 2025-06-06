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