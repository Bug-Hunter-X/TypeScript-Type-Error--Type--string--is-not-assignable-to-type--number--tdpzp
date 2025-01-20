# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: assigning a value of an incompatible type to an array.

## The Bug
The `bug.ts` file contains a function `combine` that takes two number arrays as input and returns their concatenation. However, the code attempts to add a string ('a') to a number array, resulting in a type error.

## The Solution
The `bugSolution.ts` file demonstrates how to fix this.  The solution involves ensuring that only numbers are added to the number array.