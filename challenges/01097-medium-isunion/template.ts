type IsUnion<T, U = T> = [T] extends [never]
    ? false
    : T extends U
        ? [U] extends [T] 
            ? false
            : true
        : never