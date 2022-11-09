// 添加一个辅助类型，用来记录 T 的类型, 后面需要用来做比较
// 由于 never 在作为泛型参数时，会跳过判断，所以这里利用元组类型进行比较，如果传入的是 never 就直接返回 false
type IsUnion<T, U = T> = [T] extends [never] // is never check
    ? false
    // 首先利用联合类型的特性 distribute 遍历每个其中的每个类型, 
    // 这里的 T 如果是个联合类型将会被 distribute
    // 只需要确保条件成立，达到遍历的效果即可 T extends T 也可以
    : T extends U
        // 这里的 T 是 distribute 后的类型
        // use tuple avoid type distribute, 
        // from https://github.com/type-challenges/type-challenges/issues/1227#issuecomment-824176815.
        // 如果 T 不是一个联合类型，那么这里条件就成立，所以返回 false
        // [string] extends [string] 当 T 不是一个联合类型时
        // [string | number] extends [string] 当 T 是一个联合类型时
        ? [U] extends [T] 
            ? false
            : true
        : false