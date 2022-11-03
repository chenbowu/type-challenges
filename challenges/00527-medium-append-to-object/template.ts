type AppendToObject<T, U extends string, V> = 
    // 这里只是返回了一个交叉类型，而我们需要的是一个添加好的元素的新索引类型
    T & Record<U, V> extends infer F 
    // infer 推导出交叉类型，并使用映射类型形成一个全新的索引类型
    ? { [Key in keyof F]: F[Key] }
    : never

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}