function nameValidation(name) {
  name = name.split(" ");
  let isValid = true;
  for (let i = 0; i < name.length; i++) {
    if (name.length === 1) {
      isValid = false;
    } else if (name[1].length === 1) {
      isValid = false;
    } else if (name[i][0] !== name[i][0].toUpperCase()) {
      isValid = false;
    } else if (name[name.length - 1][1] === ".") {
      isValid = false;
    } else if (name.length !== 2 && name[0][1] === "." && name[1][1] !== ".") {
      isValid = false;
    } else if (name[0].length > 2 && name[0][name[0].length - 1] === ".") {
      isValid = false;
    } else if (name[i].length < 2) {
      isValid = false;
    }
  }
  return isValid;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const sortNumb = nums.sort();
let n = sortNumb.length;
let missing = new Array();

for (let i = 1; i <= n; i++) {
  if (sortNumb.indexOf(i) === -1) {
    missing.push(i);
  }
}
console.log(missing);
