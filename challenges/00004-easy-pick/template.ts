// 使用 keyof 操作符，会返回该对象属性名组成的字符串或者数字字面量的联合
// 使用 extends 继承 K 的类型一定存在与 T
type MyPick<T, K extends keyof T> = {
    // 类型 for in, 获取 K 中的 key，再通过 T[key] 获取原类型中当前 key 的类型
    [P in K]: T[P];
}

type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;