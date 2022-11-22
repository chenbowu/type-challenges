type FlattenDepth<T extends any[], D = 1, C extends 1[] = []> = 
    C['length'] extends D 
        ? T
        : T extends [infer Head, ...infer Tail]
            ? Head extends any[]
                ? [...FlattenDepth<Head,  D, [...C, 1]>, ...FlattenDepth<Tail, D, C>]
                : [Head, ...FlattenDepth<Tail, D, C>]
            : []