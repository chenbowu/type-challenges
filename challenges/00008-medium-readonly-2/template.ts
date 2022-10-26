// = 为泛型参数设置默认值 
// 1. K extends keyof T 不成立时，赋值默认值 keyof T 给第二泛型参数
// 2. 先计算出一个只存在 readonly 字段的对象
// 3. 再通过内置工具类型 Omit，计算出不包含 K 的对象
// 4. 再使用 & 计算出两个类型的交叉类型()
type MyReadonly2<T, K extends keyof T = keyof T> = {
    +readonly [P in K]: T[P]
} & Omit<T, K>
