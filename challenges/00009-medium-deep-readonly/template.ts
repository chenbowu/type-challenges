// 根据示例得出，除了函数类型，其他类型都要设置成 readonly
// 所以当碰到函数类型的直接返回该函数类型，反之递归调用

// Solution 1
// type DeepReadonly<T> = {
//     readonly [Key in keyof T]: T[Key] extends object
//         ? T[Key] extends Function
//             ? T[Key]
//             : DeepReadonly<T[Key]>
//         : T[Key]
// }

// Solution 2
// Function extends Record<string | number | symbol, any> 成立的
// 所以当类型再判断类似是是函数类型
// type DeepReadonly<T> = {
//   readonly [Key in keyof T]: T[Key] extends Record<string | number | symbol, any> 
//     ? T[Key] extends Function
//         ? T[Key]
//         : DeepReadonly<T[Key]>
//     : T[Key]
// }
//type t00009 = Function extends Record<string | number | symbol, any> ? true : false

// Solution 3
type DeepReadonly<T> = {
    readonly [P in keyof T]: keyof T[P] extends never 
        ? T[P] 
        : DeepReadonly<T[P]>
}
type t00009 = Function extends never ? true : false