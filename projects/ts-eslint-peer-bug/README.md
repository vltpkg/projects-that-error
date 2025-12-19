# TypeScript ESLint Peer Dependency Bug Reproduction

This is a minimal reproduction of a bug in vlt's peer dependency resolution.

## The Bug

When a project has:
1. `typescript@5.7.3` as a **pinned** direct dependency (exact version, not a range)
2. `typescript-eslint@^8.49.0` (which has peer dependencies on TypeScript)

vlt incorrectly resolves the peer dependency for some `@typescript-eslint/*` packages to `typescript@5.9.3` instead of `typescript@5.7.3` (from the project).

**Important finding:**
- Using a range (`^5.7.3`) instead of a pinned version (`5.7.3`) causes the bug to disappear - vlt resolves all packages to `5.9.3` consistently (though not to `5.7.3` as might be expected).

This suggests the bug is related to how vlt handles pinned versions when resolving peer dependencies.

Specifically:
- `@typescript-eslint/parser` → 5.7.3 ✓ (correct)
- `@typescript-eslint/eslint-plugin` → **5.9.3** ✗ (WRONG!)
- `@typescript-eslint/typescript-estree` → 5.7.3 ✓ (correct)
- `@typescript-eslint/utils` → 5.7.3 ✓ (correct)
- `@typescript-eslint/type-utils` → **5.9.3** ✗ (WRONG!)

## Symptoms

Running `eslint .` produces parsing errors like:

```
0:0  error  Parsing error: Cannot read properties of null (reading 'range')
0:0  error  Parsing error: Cannot use 'in' operator to search for 'illegalDecorators' in 34
```

These errors occur because different `@typescript-eslint` packages are loading different TypeScript versions, causing AST incompatibilities.

## Steps to Reproduce with vlt (shows bug):

```bash
cd ./projects/ts-eslint-peer-bug

# Install with local vlt
vlt install

# Check which TypeScript versions are being loaded
node check-ts-version.mjs

# Try to lint - will fail with parsing errors
node --run lint
```

### Expected output of `node check-ts-version.mjs`:

```
=== TypeScript Version Check ===

Root TypeScript:
  Version: 5.7.3

@typescript-eslint/parser:
  TypeScript version: 5.7.3

@typescript-eslint/eslint-plugin:
  TypeScript version: 5.9.3    <-- BUG! Should be 5.7.3

@typescript-eslint/typescript-estree:
  TypeScript version: 5.7.3

@typescript-eslint/utils:
  TypeScript version: 5.7.3

@typescript-eslint/type-utils (from eslint-plugin):
  TypeScript version: 5.9.3    <-- BUG! Should be 5.7.3
```

### Expected output of `node --run lint`:

```
/path/to/src/index.ts
  0:0  error  Parsing error: Cannot use 'in' operator to search for 'illegalDecorators' in 34
```

## Verify with pnpm (works correctly):

```bash
# Remove vlt's install
rm -rf node_modules vlt-lock.json

# Install with pnpm
pnpm install

# Check TypeScript versions - all should be 5.7.3
node check-ts-version.mjs

# Lint should work
node --run lint
```

## Lockfile Evidence

After vlt install, check `vlt-lock.json`:

```bash
grep -E '@typescript-eslint.*typescript' vlt-lock.json
```

Shows:
```
"·npm·@typescript-eslint§eslint-plugin@8.50.0 typescript": "peer >=4.8.4 <6.0.0 ·npm·typescript@5.9.3"  <-- BUG
"·npm·@typescript-eslint§parser@8.50.0 typescript": "peer >=4.8.4 <6.0.0 ·npm·typescript@5.7.3"        <-- OK
```

## Root Cause

The bug is in vlt's peer dependency resolution during ideal graph building. When resolving peer dependencies for `@typescript-eslint` packages:

1. Some packages (parser, typescript-estree, utils) correctly resolve to `typescript@5.7.3`
2. Other packages (eslint-plugin, type-utils) incorrectly resolve to `typescript@5.9.3`

The peer resolution is incorrectly picking up `typescript@5.9.3` for some packages instead of consistently using the project's `typescript@5.7.3`.
