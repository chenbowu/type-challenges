type ObjectEntries<T> = {
  // 如果是可选属性那么类型就会变成 T[K] | undefined
  // 所以这里需要使用 -? 取消可选
  // 如果这里不加 -? 那么该属性会继承原属性的类型变成可选属性
  // infer R extends R | undefined 是为了清除结果中的 undefined
    [K in keyof T]-?: [K, T[K] extends infer R | undefined ? R : T[K]]
}[keyof T]
