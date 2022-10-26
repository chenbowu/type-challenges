// 先通过 in keyof 获取对象的所有 key
// 再使用 as 对 key 进行重映射（可以对 key 进行修改）
type MyOmit<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
}

type t = MyOmit<Todo, 'title' | 'description'>
type tt = Omit<Todo, 'title'>

interface Todo {
  title: string
  description: string
  completed: boolean
}