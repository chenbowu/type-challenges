// 约束传入的类型为一个索引对象
type Chainable<Opts extends Record<string, any> = {}> = {
  option<K extends string, V>(
    // 当 key 出现在对象中时，如果 value 的类型相同则忽略，否则替换
    key: K extends keyof Opts ? (V extends Opts[K] ? never : K) : K, 
    value: V
    // 1. Omit<Opts, K> 先将当前 key 从 Opts 中移除掉。
    //  为什么要移除？因为当 key 相同，value 类型不相同时，需要将 value 的类型设置成最后一次指定的类型
    //  因此这里先将原对象中的 key 移除, 再重新创建一个索引对象，然后通过获取两个对象的交叉类型，得到最终的结果
    // 2. { [Key in K]: V } 创建一个包含 key 的索引对象, 并设置最新的 value 类型
    // 3. 再通过 & 计算出交叉类型
  ): Chainable<Omit<Opts, K> & { [Key in K]: V }>
  // 每次执行 option 都会返回一个 Chainable 类型的对象，并且传入的 Opts 
  get(): Opts
}
// 总结：
//  使用交叉类型实现对索引类型进行新增和修改操作