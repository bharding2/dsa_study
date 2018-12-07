function quicksort(arr, left, right) {
  if (left < right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    let index = partition(arr, left, right, pivot);

    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);
  }
}

function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;

      left++;
      right--;
    }
  }

  return left;
}

let testArr = [3, 5, 9, 1, 10, 4, 2, 8, 7];

quicksort(testArr, 0, testArr.length - 1);
console.log(testArr);