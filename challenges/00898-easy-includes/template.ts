import { Equal } from '@type-challenges/utils'
// Why 为什么这里需要导出 并在测试中引入才能使用?
// 因为我们这里使用了 import 导入了 Equal util type
// TS 的模块规范
// -- 如果有 export/import 的话，那么就是模块
// -- 没有的话，那么就是全局的，可以直接在别的模块引用，无需 import
export type Includes<T extends readonly any[], U> = T extends [
   infer First, 
   ...infer Rest
] 
    ? Equal<First, U> extends true 
        ? true 
        : Includes<Rest, U> 
    : false