function fibRecursive(num) {
  // setting the two initial fibonacci numbers
  if (num === 0) return 0;
  if (num === 1) return 1;

  // get the prior two fibonacci numbers and add them to get
  // the current fibonacci number.  These calls will recursively
  // walk back until they reach the default values above
  return fibRecursive(num - 1) + fibRecursive(num - 2);
}

console.log(fibRecursive(12));