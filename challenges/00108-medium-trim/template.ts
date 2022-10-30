// type Trim<S extends string> = S extends `${WhiteSpace}${infer Left}`
//     ? Trim<Left>
//     : S extends `${infer Right}${WhiteSpace}`
//         ? Trim<Right>
//         : S

// your answers
// 使用联合类型来判断左右是否存在空白字符
type Trim<S extends string> = S extends 
    | `${WhiteSpace}${infer R}` 
    | `${infer R}${WhiteSpace}` 
    ? Trim<R> 
    : S