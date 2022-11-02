type LengthOfString<
  S extends string, 
  A extends string[] = []
  // 将字符串转换成数组，再通过索引访问器得到数组的长度
> = S extends `${infer Head}${infer Rest}`
  ? LengthOfString<Rest, [...A, Head]>
  : A['length']
