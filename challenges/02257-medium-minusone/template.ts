// 这种方式通过创建一个长度为 N 的数组，当传入的数字过大时 TS 会报异常
// type Tuple<N extends number, T extends unknown[] = []> = 0 extends 1
//   ? never
//   : T["length"] extends N
//     ? T
//     : Tuple<N, [unknown, ...T]>

// type MinusOne<T extends number> = Tuple<T> extends [unknown, ...infer R]
//   ? R["length"]
//   : -1

type MinusMap = {
  '0': -1
  '1': 0
  '2': 1
  '3': 2
  '4': 3
  '5': 4
  '6': 5
  '7': 6
  '8': 7
  '9': 8
}

type _GetHeadAndLast<T extends string, Acc extends string = ''> = T extends `${infer Head}${infer Tail}`
  ? Tail extends ''
    ? [head: Acc, last: Head]
    : _GetHeadAndLast<Tail, `${Acc}${Head}`>
  : never
type GetHead<T extends string> = _GetHeadAndLast<T>[0]
type GetLast<T extends string> = _GetHeadAndLast<T>[1]

type ToNumber<T extends string> = T extends `${infer U extends number}` ? U : never

// 将泛型参数 T 转成字符串类型 _T
type MinusOne<T extends number> = `${T}` extends infer _T extends string
  // 是否存在 map 中
  ? _T extends keyof MinusMap
    // 如果是一位数，就可以直接从 Map 表中映射好的结果
    ? MinusMap[_T]
    : ToNumber<
        // 取最后位判断是否为 0
        GetLast<_T> extends '0'
          // 第一次 _T 为 100  MinusOne<10>
          // 第二次 _T 为 10   Head 为 1   返回结果 9 
          // 拼接上第一次的 9 得 99
          ? `${GetHead<_T> extends '1' ? '' : MinusOne<GetHead<_T>>}9`
          : `${GetHead<_T>}${MinusMap[GetLast<_T>]}`
      >
  : never