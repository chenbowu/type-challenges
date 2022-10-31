1.  当只有一个类型推断时，会匹配完整的字符串
``` Typescript
// Full 匹配完整的字符串
S extends `${infer Full}`
```
2. 存在具体类型和类型推断时，会从上一个具体类型结束匹配到下一个具体类型开始
```Typescript
// Prefix 会匹配到 hello 左边所有的字符串
// Suffix 会匹配的 hello 右边所有字符串
S extends `${infer Prefix}hello${infer Suffix}`
```
3. 使用两个类型推断进行匹配时，左侧的只会匹配到一位，右侧的则匹配剩余的
``` Typescript
// Prefix 只会匹配到一个字符
// Suffix 会匹配 Prefix 右侧所有的字符
S extends `${infer Prefix}${infer Suffix}`
```
4. 使用三个类型推断时，前两个只会各占一位，其余的都会被最右侧的匹配
``` Typescript
// Prefix 和 Mid 各自匹配一个字符
// Suffix 匹配 Mid 右侧所有字符
S extends `${infer Prefix}${infer Mid}${infer Suffix}`
```