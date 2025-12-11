## Instructions

```
vlt i
cat packages/a/date.txt # shows that prepare script ran
vlt build
rm -rf node_modules/ packages/a/node_modules/ packages/a/.astro/
vlt i
```

## Version

```
$ vlt --version
1.0.0-rc.10
```

## Expected Result

```
$ vlt i
# it works
```

## Actual Output

```
$ vlt i
resolving dependencies ✓ > extracting files ⠸
779 cache hits
Graph traversal failure at: workspace packages/a 
Command: astro sync && echo $(date) >> date.txt
Cwd: /Users/lukekarrys/Desktop/scratch/vlt-astro-build-scripts-maybe/packages/a

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'package-manager-detector' imported from /Users/lukekarrys/Desktop/scratch/vlt-astro-build-scripts-maybe/node_modules/.vlt/·npm·astro@5.16.5/node_modules/astro/dist/core/messages.js
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:256:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:854:18)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:780:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:704:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:687:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:305:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:175:49) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Status: 1

Full details written to: /Users/lukekarrys/.local/data/vlt/error-logs/error-59518.log
```

