// type DropChar<S, C> = S extends `${infer F}${infer R}`
//     ? F extends C
//         ? `${DropChar<R, C>}`
//         : `${F}${DropChar<R, C>}`
//     : S

// 只有当字符串为空时 条件才不成立
type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
    ? DropChar<`${L}${R}`, C>
    : S