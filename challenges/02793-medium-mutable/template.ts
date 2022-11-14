type Mutable<T extends { [K in any ]: any}> = {
   -readonly [K in keyof T]: T[K]
}