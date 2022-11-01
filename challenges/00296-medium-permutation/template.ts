// your answers
type Permutation<T,U = T> = [T] extends [never]
    ? []
    : U extends T 
        ? [U,...Permutation<Exclude<T,U>>] 
        : never
// 假设 Permutation<'A' | 'B' | 'C'>
// 1. U = 'A'  ['A', ...Permutation<Exclude<T,U>>]  = ['A', ...Permutation<'B' | 'C'>]      
//      ['A', ...Permutation<'B' | 'C'>] = ['A', ['B', ...Permutation<'C'>]] = ['A', ...['B', ...['C']]] 
//      ['A', 'B', 'C']
// 2. U = 'B'  ['B', ...Permutation<'A' | 'C'>] => ['B', ...['A', ...['C']]] => ['B', 'A', 'C']
// 3. U = 'C'  ['C', ...Permutation<'A' | 'B'>] => ['C', ...['A', ...['B']]] => ['C', 'A', 'B']
type testst = Permutation<'A' | 'B' | 'C'>