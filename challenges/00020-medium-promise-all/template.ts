type AwaitedArray<T extends any[]> = T extends [infer First, ...infer Rest]
    // NOTE 如何理解这里的递归，以及使用扩展运算符
    // 假设执行 AwaitedArray<[1, 2, 3]>
    // 1. [Awaited<1>, ...AwaitedArray<[2,3]>]
    // 2. [Awaited<2>, ...AwaitedArray<[3]>]
    // 3. [Awaited<3>, ...AwaitedArray<[]>]
    // 4. return []
    // 替换每次递归的结果 [Awaited<1>, ...[Awaited<2>, ...[Awaited<3>, ...[]]] 
    // 化简后得到 [Awaited<1>, Awaited<2>, Awaited<3>]
    ? [Awaited<First>, ...AwaitedArray<Rest>]
    // 这里必须返回一个空数组
    : T

declare function PromiseAll<T extends any[]>(
    // TODO readonly T 会报错, 为什么？
    // readonly 修饰符只能在数组和元组字面量类型上使用
    // 所以这里通过展开类型参数 T，计算出一个新的字面量元组类型中
    // values: readonly any[]       OK
    // values: readonly T           Error
    values: readonly [...T]
): Promise<AwaitedArray<T>> 