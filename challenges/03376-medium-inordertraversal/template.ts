interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
    ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
    : []

// 为什么这里不转成元组就会报错
// 因为条件类型左边如果是联合类型参数的话，会触发分布式条件类型，会将联合类型中每一个类型单独传入进行计算
// [T] extends [TreeNode] 比较的是一个完整的联合类型，不会触发分布式条件类型
// type InorderTraversal2<T extends TreeNode | null> = T extends TreeNode
//     ? [...InorderTraversal2<T['left']>, T['val'], ...InorderTraversal2<T['right']>]
//     : []