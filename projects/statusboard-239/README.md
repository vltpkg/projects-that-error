# vlt Peer Dependency Resolution Bug - Workspace Reproduction

## The Bug

In a monorepo, vlt resolves peer dependencies to a version from another workspace instead of the version specified by the dependent workspace.

## Structure

```
vlt-peer-repro/
├── package.json              # Root package
├── vlt.json                  # workspaces: ["packages/*"]
├── pnpm-workspace.yaml       # packages: ['packages/*']
└── packages/
    ├── docs/                 # Has @scalar/api-reference-react → brings in zod@4.x
    └── registry/             # Has zod@^3.25.76 + @hono/zod-openapi (peer: zod>=3.0.0)
```

## The Problem

1. `@repro/docs` depends on `@scalar/api-reference-react`
   - This brings in `@scalar/*` packages → `zod@4.1.x` as prod dependency

2. `@repro/registry` depends on:
   - `zod@^3.25.76` (direct dependency - we want Zod 3.x)
   - `@hono/zod-openapi` (peer dep: `zod >= 3.0.0`)

3. **Expected**: `@hono/zod-openapi`'s peer dep resolves to `zod@3.25.76`
4. **vlt Bug**: Resolves to `zod@4.1.11` from the docs workspace

## Steps to Reproduce

### With pnpm (works ✅)

```bash
pnpm install
pnpm --filter @repro/registry typecheck
# No errors
```

### With vlt (fails ❌)

```bash
vlt install
vlt run --workspace=packages/registry typecheck
```

**Actual output:**
```
src/index.ts(19,31): error TS2554: Expected 2-3 arguments, but got 1.
src/index.ts(30,11): error TS2322: Type 'ZodObject<{ collaborators: ZodRecord<...>, SomeType>; }, $strip>' is not assignable to type '...'
src/index.ts(44,5): error TS2322: Type 'ZodObject<{ id: ZodString; }, $strip>' is not assignable to type 'RouteParameter'.
```

## Verification

Check what zod version `@hono/zod-openapi` sees:

```bash
# pnpm - correct ✅
ls -la node_modules/.pnpm/*zod-openapi*/node_modules/zod
# -> zod@3.25.76/node_modules/zod

# vlt - incorrect ❌
ls -la node_modules/.vlt/*zod-openapi*/node_modules/zod
# -> ·npm·zod@4.1.11/node_modules/zod
```

Check lockfiles:

```bash
# vlt-lock.json shows the bug:
grep "zod-openapi.*zod" vlt-lock.json
# "·npm·@hono§zod-openapi@0.19.10 zod": "peer >=3.0.0 ·npm·zod@4.1.11"  ← WRONG!
```

## Root Cause

vlt's peer dependency resolution picks `zod@4.1.11` (from `@scalar/*` packages in the docs workspace) instead of `zod@3.25.76` (from registry workspace's direct dependency).

Peer deps should resolve to the version from the **installing context** (the workspace that depends on the package), not from other workspaces.

## Expected Lockfile Entry

```json
"·npm·@hono§zod-openapi@0.19.10 zod": "peer >=3.0.0 ·npm·zod@3.25.76"
```
