type Reverse2<T> = T extends [infer Head, ...infer Tail] ? [...Reverse2<Tail> ,Head] : []
type FlipArguments<T extends Function> = T extends (...args: infer Params) => infer Return
    ? (...args: Reverse2<Params>) => Return
    : never