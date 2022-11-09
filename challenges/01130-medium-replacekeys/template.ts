// Explicitly traverse U
type ReplaceKeys<U, T, Y> = U extends any ? {
    [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K]
}
: U
// step 1: 首先遍历联合类型 U，推断出类型 R     U extends infer R
// step 2: 重映射索引类型                    [Key in keyof R]
// step 3: 判断 key 是否在 需要替换的索引 Key 联合类型中
//         如果存在: 再判断 Key 是否存在与 Y 中，如果不存在 返回 never，否则取对 Key 的类型
//         如果不存在: 直接取原索引类型的类型

// But we don't have to, TS has a feature called Distributive Conditional Types will do it automatically
type ReplaceKeys2<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};