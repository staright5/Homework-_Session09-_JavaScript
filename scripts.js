//Homework1

// let number = +prompt("Bạn sinh năm bao nhiêu: ");

// if (Number.isNaN(number)) {
//   alert("Vui lòng nhập số nguyên dương!");
// } else {
//   let age = 2024 - number;
//   console.log("Tuổi của bạn là " + age);
// }

//Homework2

// let number = +prompt("Mời bạn nhập vào một số bất kì");

// if (Number.isInteger(number)) {
//   if (Number.isNaN(number)) {
//     alert("Số không hợp lệ!");
//   } else {
//     if (number % 2 === 0) {
//       console.log(number + " là số chẵn");
//     } else {
//       console.log(number + " là số lẻ");
//     }
//   }
// } else {
//   alert("Vui lòng nhập số nguyên!");
// }

//Homework3

// let date = +prompt("Mời bạn nhập vào thứ trong tuần (2-8): ");

// switch (date) {
//   case 2:
//     console.log("Thứ 2 là Thứ Hai");
//     break;
//   case 3:
//     console.log("Thứ 3 là Thứ Ba");
//     break;
//   case 4:
//     console.log("Thứ 4 là Thứ Tư");
//     break;
//   case 5:
//     console.log("Thứ 5 là Thứ Năm");
//     break;
//   case 6:
//     console.log("Thứ 6 là Thứ Sáu");
//     break;
//   case 7:
//     console.log("Thứ 7 là Thứ Bảy");
//     break;
//   case 8:
//     console.log("Thứ 8 là Chủ Nhật");
//     break;
//   default:
//     alert("Vui lòng nhập vào thứ từ 2 đến 8!");
//     break;
// }

//Homework4

// let number = +prompt("Mời bạn nhập vào một số bất kì");

// if (Number.isNaN(number)) {
//   alert("Số không hợp lệ!");
// } else {
//   console.log(
//     number === 0
//       ? "Đây không phải là số âm hoặc số dương!"
//       : number > 0
//       ? "Số bạn vừa nhập là số dương!"
//       : "Số bạn vừa nhập là số âm!"
//   );
// }

//Homework5

// let number = +prompt("Mời bạn nhập vào một số nguyên dương bất kì");

// for (let i = 1; i <= number; i++) {
//     console.log(i);
// }

//Homework6

// let number = +prompt("Mời bạn nhập vào một số nguyên dương bất kì");

// let result = 1;
// for (let i = 1; i <= number; i++) {
//   result = result * i;
// }

//Homework7

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Homework8

let a = +prompt("Mời bạn nhập vào một số nguyên dương a:");
let b = +prompt("Mời bạn nhập vào một số nguyên dương b:");

if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0 && a >= b) {
  for (let i = b; i <= a; i++) {
    if (i % b === 0) {
      console.log(i);
    }
  }
} else {
  alert("Số a và b không hợp lệ");
}
