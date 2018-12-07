function fibMemo(num, memo = {}) {
  // memoization caches frequently used elements for later use
  // above we set a default memo to an empty object
  // below we add handling for our initial two values
  if (num === 0) return 0;
  if (num === 1) return 1;

  // we check the memo to see if the fibonacci number for that
  // value has been previously created
  if (memo[num]) {
    return memo[num];
  }

  // if not we caculate the fibonacci value at that number, 
  // store it to the memo and return it
  memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
  return memo[num];
}

console.log(fibMemo(12));