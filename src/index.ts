export {};

// Example 1 - Merging String Enums in TypeScript
enum Sizes1 {
  Small = 'S',
  Medium = 'M',
}

enum Sizes2 {
  Large = 'L',
  ExtraLarge = 'XL',
}

export const Sizes = { ...Sizes1, ...Sizes2 };

// 👇️ {Small: 'S', Medium: 'M', Large: 'L', ExtraLarge: 'XL'}
console.log(Sizes);

export type Sizes = typeof Sizes;

// ✅ Now you can access the properties of both enums
type XL = Sizes['ExtraLarge'];
type S = Sizes['Small'];

// ---------------------------------------------------

// // EXAMPLE 2 - Merging Numeric Enums in TypeScript

// // ✅ For Numeric Enums
// enum Sizes1 {
//   Small = 0,
//   Medium,
// }

// enum Sizes2 {
//   Large = 2,
//   ExtraLarge,
// }

// export const Sizes = { ...Sizes1, ...Sizes2 };

// // 👇️ {Small: 'S', Medium: 'M', Large: 'L', ExtraLarge: 'XL'}
// console.log(Sizes);

// export type Sizes = typeof Sizes;

// type XL = Sizes['ExtraLarge'];
// type S = Sizes['Small'];
