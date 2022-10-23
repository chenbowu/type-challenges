// solution 1
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// solution 2
// infer R 推断出数组的第一个类型，...infer _ 推断出剩余元素的类型，由于用不上所以用_将其丢弃
type First<T extends any[]> = T extends [infer R, ...infer _] ? R : never;

// solution 3
// 判断 T 是否为一个空数组，如果不是空数组就通过索引取第一个元素的类型
// type First<T extends any[]> = T extends [] ? never : T[0]