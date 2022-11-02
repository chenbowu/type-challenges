// type Flatten<
//     T extends unknown[], 
//     A extends unknown[] = []
// > = T extends [infer First, ...infer Rest]
//     ? First extends [...infer _]
//         ? Flatten<Rest, [...A, ...Flatten<First>]>
//         : Flatten<Rest, [...A, First]>
//     : A

// Solution 2 https://github.com/type-challenges/type-challenges/issues/18427
type Flatten<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? Head extends [...infer HElements]
    ? [...Flatten<HElements>, ...Flatten<Tail>]
    : [Head, ...Flatten<Tail>]
  : []

function flatten(arr: unknown[]): unknown[] {
    const result = []
    for(const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result
}

function flatten2(arr: unknown[]): unknown[] {
    if (arr.length === 0) {
        return [];
    }
    const [first, ...rest] = arr
    if (Array.isArray(first)) {
        return [...flatten2(first), ...flatten2(rest)]
    }
    return [first, ...flatten2(rest)]
}