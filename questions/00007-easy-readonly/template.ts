// 使 T 中所有的属性变为只读
type MyReadonly<T> = {
    // 字段可以添加一个 readonly 前缀修饰符，这会阻止在构造函数之外的赋值
    // 通过 keyof 获取 T 对象中的所有属性 key，并通过 in 遍历
    readonly [P in keyof T]: T[P];
}
