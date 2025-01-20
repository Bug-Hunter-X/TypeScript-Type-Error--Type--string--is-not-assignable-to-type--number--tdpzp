function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];
arr1.push("a"); //Type 'string' is not assignable to type 'number'.

let arr2: number[] = [4, 5, 6];
let result = combine(arr1, arr2); // Argument of type 'number[]' is not assignable to parameter of type 'number[]'