// this is a weird one, but it ends up being super effective.
// we pick a random pivot point, and walk through our chunk.
// we find an element that is higher than the pivot, and an
// element that is lower than the pivot and swap them, leaving
// two chunks, one with all of the lower numbers and one with
// all the higher numbers.  we take those two chunks and rerun
// the process until all of the chunks are sorted.
function quicksort(arr, left, right) {
  // ensuring our starting left and right are valid
  if (left < right) {
    // picking our pivot number as the number at an index near
    // the middle fo the array
    let pivot = arr[Math.floor((left + right) / 2)];
    // the sorting magic happens in our partition function. this
    // function also returns the leftmost index less than our pivot,
    // which gives us the index that separates the lower numbers
    // and higher numbers
    let index = partition(arr, left, right, pivot);
    // using the index for our split, we recursively sort our two
    // chunks
    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);
  }
}

function partition(arr, left, right, pivot) {
  // we are going to walk towards the center from each end until we
  // meet
  while (left <= right) {
    // walking from the left towards the center until we find a value 
    // in the array that is higher and needs to be swapped to other
    // side
    while (arr[left] < pivot) {
      left++;
    }
    // walking from the right to towards the center until we find a 
    // value that is lower and needs to be swapped to the other side
    while (arr[right] > pivot) {
      right--;
    }
    // checking that it is a valid swap
    if (left <= right) {
      // swapping our two array values
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      // incrementing indexes for next iteration of the outer while
      left++;
      right--;
    }
  }
  // when left and right meet, return our left value so we know where
  // the separating line is between values higher and lower than the
  // pivot
  return left;
}

let testArr = [3, 5, 9, 1, 10, 4, 2, 8, 7];
// sorts the array in place
quicksort(testArr, 0, testArr.length - 1);
console.log(testArr);