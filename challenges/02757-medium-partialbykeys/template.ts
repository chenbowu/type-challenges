type PartialByKeys<T, K extends keyof T = keyof T> = ({
    [Key in keyof T as Key extends K ? Key : never]? : T[Key]
} & {
    [Key in keyof T as Key extends K ? never : Key] : T[Key]
}) extends infer R ? {
    [Key in keyof R]: R[Key]
} : never