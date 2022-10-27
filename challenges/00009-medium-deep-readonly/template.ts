// type DeepReadonly<T> = {
//     readonly [Key in keyof T]: T[Key] extends object
//         ? T[Key] extends Function
//             ? T[Key]
//             : DeepReadonly<T[Key]>
//         : T[Key]
// }

// Function extends Record<string | number | symbol, any> 成立的
// 所以当类型再判断类似是是函数类型
type DeepReadonly<T> = {
  readonly [Key in keyof T]: T[Key] extends Record<string | number | symbol, any> 
    ? T[Key] extends Function
        ? T[Key]
        : DeepReadonly<T[Key]>
    : T[Key]
}

type t00009 = Function extends Record<string | number | symbol, any> ? true : false