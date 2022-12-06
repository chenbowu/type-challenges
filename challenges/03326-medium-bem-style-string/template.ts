// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
type WithPrefix<P extends string, T extends any[]> = T extends [] ? '' : `${P}${T[number]}`
type BEM<B extends string, E extends any[], M extends any[]> = `${B}${WithPrefix<'__', E>}${WithPrefix<'--', M>}`