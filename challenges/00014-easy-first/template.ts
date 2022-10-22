// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends infer T ? 

// function describePerson(person: {
//   name: string;
//   age: number;
//   hobbies: [string, string]; // tuple
// }) {
//   return `${person.name} is ${person.age} years old and love ${person.hobbies.join(" and  ")}.`;
// }

// const alex = {
//   name: 'Alex',
//   age: 20,
//   hobbies: ['walking', 'cooking'] // type string[] != [string, string]
// }
