type StringToUnion<T extends string> = 
    T extends `${infer First}${infer Rest}` 
    ? First | StringToUnion<Rest>
    : never
// type StringToUnion<T extends string> = Split<T, ''>[number]

type Split<S extends string, By extends string> = S extends `${infer Head}${By}${infer Tail}` 
    ? [Head, ...Split<Tail, By>]
    : []
