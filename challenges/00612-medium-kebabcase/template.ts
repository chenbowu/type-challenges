type KebabCase<S extends string> = S extends `${infer L}${infer R}`
    // 剩余部门开头是否为小写
    ? R extends Uncapitalize<R>
        ? `${Uncapitalize<L>}${KebabCase<R>}`
        : `${Uncapitalize<L>}-${KebabCase<Uncapitalize<R>>}`
    : S