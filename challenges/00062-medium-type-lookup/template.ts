type LookUp<U, T> = U extends Record<'type', any> 
    ? U['type'] extends T ? U : never
    : never