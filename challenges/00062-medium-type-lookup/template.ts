// type LookUp<U, T> = U extends Record<'type', any> 
//     ? U['type'] extends T ? U : never
//     : never

// 这样其实就能实现
type LookUp<U, T> = U extends { type: T } ? U : never;