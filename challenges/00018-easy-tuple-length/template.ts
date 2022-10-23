type Length<T extends readonly any[]> = T['length']

// What is different between tuple and array
// Array 每个元素的类型一样
// Tuple 每个元素可以是不同的类型

// Array['length'] 返回的类型为 number 因为 Array 是不固定长度的
// Tuple['length] 返回的类型是实际长度， 因为在定义时就指定了有多少个元素
let a: Array<number> = [1, 2, 3]
let b: [string, number] = ['hello', 1]

type al = typeof a['length'] // al: number
type tl = typeof b['length'] // tl: 2