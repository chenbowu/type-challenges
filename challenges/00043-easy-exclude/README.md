# Exclude 

Implement the built-in Exclude<T, U>

> Exclude from T those types that are assignable to U

For example:

``` Typescript
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```