type TupleToNestedObject<T, U> = T extends [] 
    ? U 
    : T extends [infer First, ...infer Rest]
        ? {
            [K in First as First extends string ? First : never]: TupleToNestedObject<Rest, U>
        }
        : never