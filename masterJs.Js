let rowLenght = +prompt("Введіть довжину масиву");
array = [];

for (let i = 0; i < rowLenght; i++) {
  let element = +prompt("Введіть елементи масиву");
  array.push(element);
  array.sort(function (a, b) {
    return a - b;
  });
}
array.splice(1, 3);
console.log(array);
