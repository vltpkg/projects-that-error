## Instructions

```
vlt i
rm vlt-lock.json
vlt i
```

## Version

```
$ vlt --version
0.0.0-15
```

## Expected Result

```
$ cat vlt-lock.json | jq '.nodes | .[][2]' | head -n1
"sha512-dyybb3AcajC7uha6CvhdVRJqaKyn7w2YKqKyAN37NKYgZT36w+iRb0Dymmc5qEJ549c/S31cMMSFd75bteCpCw=="
```

## Actual Output

```
$ cat vlt-lock.json | jq '.nodes | .[][2]' | head -n1
null
```

