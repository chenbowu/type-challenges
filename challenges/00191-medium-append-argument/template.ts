type AppendArgument<
  Fn extends Function, A
> = Fn extends (...args: infer Args) => infer R 
  ? (...args: [...Args, A]) => R
  : Fn