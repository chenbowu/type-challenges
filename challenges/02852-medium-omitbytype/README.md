# OmitByType 

From ```T```, pick a set of properties whose type are not assignable to ```U```.

For Example

```typescript
type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }
```
