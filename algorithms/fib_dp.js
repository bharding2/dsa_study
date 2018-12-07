function fibDP(num) {
  // dynamic problem solves one small chunk of the problem and
  // incorporates it into the cumulative solution.  Here we will 
  // calculate the fibonacci values in sequence and store them so 
  // we can use them to calculate the next value in the sequence.
  let fib = [];

  fib.push(0);
  fib.push(1);

  // creating fibonacci numbers one at a time using the values 
  // previously created to avoid recursively creating the value
  // each time
  for (let i = 2; i < num + 1; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  // and the end we access the value stored when we had built to
  // the point of incorporating that number
  return fib[num];
}

console.log(fibDP(12));