type Flip<T extends Record<PropertyKey, any>> = {
    [K in keyof T as `${T[K]}`]: K
}


type tss = Flip<{ pi: 3.14; bool: true }>