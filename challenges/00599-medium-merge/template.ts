// Solution 1
// type Merge<F, S> = F & S extends infer T 
//     ? { [Key in keyof T]: Key extends keyof S ? S[Key] : T[Key] } 
//     : never

// Solution 2 refer: https://github.com/type-challenges/type-challenges/issues/18431
// use Omit to excludes S keys which keys in F
type Merge<F, S> = Omit<F, keyof S> & S extends infer R
    ? { 
        [K in keyof R]: R[K] 
      }
    : never