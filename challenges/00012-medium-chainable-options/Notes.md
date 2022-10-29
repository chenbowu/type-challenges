Line 3 — key: `K extends keyof Opts ? (V extends Opts[K] ? never : K) : K`

This was required because `result2` reused the `name` key with the same value type (`string`), and it was tagged with a `// @ts-expect-error` directive. Then, right below, `result3` also reused the `name` key (but now with a different value type (was `string`, got `number`)), and was not tagged.

My understanding was that it is valid behavior if the key is reused but the value type is different.