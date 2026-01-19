type arrArg = number[];

function maxValue(arr: arrArg) {
  let mx = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > mx) mx = arr[i];
  }
  return mx;
}

let i = maxValue([1, 2, 3]);
console.log(i);
