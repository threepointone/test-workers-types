There are a couple of missing types in workers-types. Specifically:

- `URL.canParse()`
- `Headers.prototype.getSetCookie`

Run `npm run typecheck` to see the errors.

```

src/index.ts:9:21 - error TS2339: Property 'canParse' does not exist on type 'typeof URL'.

9     console.log(URL.canParse, Headers.prototype.getSetCookie);
                      ~~~~~~~~

src/index.ts:9:49 - error TS2339: Property 'getSetCookie' does not exist on type 'Headers'.

9     console.log(URL.canParse, Headers.prototype.getSetCookie);
                                                  ~~~~~~~~~~~~


Found 2 errors in the same file, starting at: src/index.ts:9
```
