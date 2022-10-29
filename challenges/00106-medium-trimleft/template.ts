type WhiteSpace = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer Rest}` ? TrimLeft<Rest> : S