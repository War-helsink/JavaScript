function mas(a) {
  let b = a.length;
  for (let i = 0; i < b; i++) {
    a.push(a[i]);
  }
  return a;
}

console.log(mas([1, 2, 3, 4, 5]));
