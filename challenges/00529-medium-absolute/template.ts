// 先将 类型参数 T 统一转换成字符串
// 通过字符串匹配模式推断出负数的绝对值
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer Abs}` ? Abs : `${T}`
// Solution 1
// type Absolute<T extends number | string | bigint> = 
//     // 先判断 T 是否是个 string
//     T extends string 
//     // 通过字符串匹配模式判断是否是负数
//     ? T extends `-${infer L}` 
//         ? L 
//         : T 
//     // 如果不是 string 类型，就将类型 T 包装成一个字符串递归调用此类型方法
//     : Absolute<`${T}`>
