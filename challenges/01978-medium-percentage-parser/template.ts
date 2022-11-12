type Plus = "+" | "-";
type Percentage = "%";

type GetNumAndUnitTuple<T extends string> = T extends `${infer R}${Percentage}` 
    ? [R, '%']
    : [T, '']

type PercentageParser<T extends string> = T extends `${infer F}${infer R}`
    ? F extends Plus
        ? [F, ...GetNumAndUnitTuple<R>]
        : ['', ...GetNumAndUnitTuple<T>]
    : ['', '', '']