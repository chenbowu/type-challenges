type TupleToNestedObject<T, U> = T extends [] 
    ? U 
    : T extends [`${infer First}`, ...infer Rest]
        ? {
            [K in First]: TupleToNestedObject<Rest, U>
        }
        : never