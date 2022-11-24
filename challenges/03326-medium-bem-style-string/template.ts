type BEM<B extends string, E extends string[], M extends string[]> = BEM2<B, E[number], M[number]>

type BEM2<B extends string, E extends string, M extends string> = `${B}${E extends string ? '__' : ''}${M extends string ? '--' : ''}`
type tst = BEM<'btn', ['fsjdl'], []>
type tsts = BEM2<'btn', 'fksdlj', 'flsdj'>