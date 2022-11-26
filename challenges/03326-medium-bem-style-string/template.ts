// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
type WithPrefix<S extends string[], P extends string> = S extends [] ? '' : `${P}${S[number]}`
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${WithPrefix<E, '__'>}${WithPrefix<M, '--'>}`