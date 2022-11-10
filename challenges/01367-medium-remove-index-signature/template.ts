type RemoveIndexSignature<T> = {
    // 索引类型的 key 类型为 string | number | symbol
    // 用 key 的类型依次与 这三种类型做比较，如果匹配上了，就证明是 index 返回 never 排除掉
    // 这里以 K 作为判断条件 string extends 'fun' 不成立，而 'fun' extends string 是成立的
    [K in keyof T as string extends K
        ? never
        : number extends K
        ? never
        : symbol extends K
        ? never
        : K]: T[K]
}

// 思考：为什么不用 string | number | symbol 联合类型做判断条件，而是依次比较？
// 因为只有当条件类型作用于泛型类型，联合类型根据泛型参数传入是才会变得可分配
// 所以这里如果直接使用 string | number | symbol extends string 结果一直为 false
// 假设设置了一个泛型参数 U = string | number | symbol; 那么 U extends string 结果为 never | never | K，
// 这样就没有达到排除的效果了，我们应该在 key 的类型与三种类型其中一个相匹配了就返回 never，而不是每个都去匹配
type RemoveIndexSignature2<T, U = string | number | symbol> = {
    // 条件类型的结果为 真和假的联合类型
    [K in keyof T as U extends K ? 1 : K]: T[K]
}