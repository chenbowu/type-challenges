type Pop<T extends any[]> = T extends [] 
    ? [] 
    : T extends [...infer R, infer _] 
        ? R 
        : never