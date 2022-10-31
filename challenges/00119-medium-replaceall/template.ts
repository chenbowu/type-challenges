// 这么写导致替换后的内容被重复替换 <'foobar', 'ob', 'b'>
// 第一次替换后变成 fobar, 导致字符串中又组合除了 ob, 导致最终结果变成 fobar, 而期望的结果时 fobar 

// type ReplaceAll<
//   S extends string, 
//   From extends string, 
//   To extends string
// > = From extends ''
//   ? S
//   : S extends `${infer Prefix}${From}${infer Suffix}`
//     ? ReplaceAll<`${Prefix}${To}${Suffix}`, From, To>
//     : S


type ReplaceAll<
  S extends string, 
  From extends string, 
  To extends string
> = From extends ''
  ? S
  : S extends `${infer Prefix}${From}${infer Rest}`
    // 将剩余字符串通过递归调用进行替换操作
    ? `${Prefix}${To}${ReplaceAll<Rest, From, To>}`
    : S