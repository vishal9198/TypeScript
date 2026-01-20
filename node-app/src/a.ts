function getFirstEl<T>(arr: T[]) {
  return arr[0];
}

let val = getFirstEl<string>(["hello", "ram", "mhan"]);
let val2 = getFirstEl<number>([1, 2, 3]);
console.log(val);
console.log(val2);
