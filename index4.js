let age = prompt(`你多大了？`);
age = Number(age);
console.log(typeof age);
if (age > 40) {
  console.log(`You are too old`)
} else if (age < 2) {
  console.log(`ni shi 20 hou`)
} else if (age >= 3 && age <= 13) {
  console.log(`ni shi 10 hou`)
} else {
  console.log2(`bu zhi dao`)
}