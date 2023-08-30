function lab_01() {
  const array = prompt("nhập vào 1 chuỗi ký tự");
  const leng = array.length;
  for (let i = 0; i < leng / 2; i++) {
    if (array[i] !== array[leng - 1 - i]) {
      return alert("không phải chuối đối xứng");
    }
  }
  return alert("đây là không phải chuỗi đối xứng");
}

function lab_02() {
  const array = prompt("nhập vào 1 dòng chữ ");
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i].toLowerCase()) {
      new_array[i] = array[i].toUpperCase();
    } else {
      new_array[i] = array[i].toLowerCase();
    }
    // alert(new_array.join(""));
  }
  alert(new_array.join(""));
}

function lab_03() {
  const month = Number(prompt("nhập tháng"));
  const year = Number(prompt("nhập năm"));
  if ((month == 2 && year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
    alert("Ngày của tháng là 29");
  } else if (month == 2) {
    alert("Ngày của tháng là 28");
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    alert("Ngày của tháng là 31");
  } else {
    alert("Ngày của tháng là 30");
  }
}

function lab_05() {
  const array = prompt("Nhập vào 1 dãy số cách nhau bằng dấu (,)");
  //   const numbers = array.split(",", 5);
  //   const numbers = Number(number);
  console.log(numbers);
  if (numbers.length < 5) {
    alert("nhập đủ 5 số lớn hơn 0");
    return;
  }
}

// bài 4 dùng sort
let arr = [3, 25, 38, 49, 12];
let new_array = arr.sort;
// console.log(new_array);
// arr.sort(Comparator.naturalOrder());
// console.log(arr);
// let new_array = 0;
// let max = arr[0];

function sapxep(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] < arr[j] + 1) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
sapxep(arr);
console.log(arr);
