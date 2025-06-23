## Instructions

```
vlt i
jq '.catalog.react = "^19.0.0"' vlt.json > tmp.json
mv tmp.json vlt.json
vlt i
```

## Version

```
$ vlt --version
0.0.0-15
```

## Expected Result

```
$ cat node_modules/react/package.json | jq .version
"19.1.0"
```

## Actual Output

```
$ cat node_modules/react/package.json | jq .version
"18.3.1"
```

