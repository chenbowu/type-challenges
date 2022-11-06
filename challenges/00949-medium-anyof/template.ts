type AnyOf<T extends readonly any[]> = 
    T extends [infer First, ...infer Rest] 
    ? First extends 0 | '' | false | [] | undefined | null | {[Key in any]: never}
        ? AnyOf<Rest>
        : true
    : false