type Reverse<T extends unknown[]> = T extends []
    ? []
    : T extends [infer Head, ...infer Tail] 
        ? [...Reverse<Tail>, Head]
        : never