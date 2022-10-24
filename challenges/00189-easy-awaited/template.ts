// 1. 先为泛型参数添加约束 使只能传入 Promise 类型
// 2. 再通过 infer 获取泛型类型是否是一个 Promise，如果是的话，递归调用
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R extends Promise<any> ? MyAwaited<R> : R : never