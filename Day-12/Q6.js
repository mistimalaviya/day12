function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Print prime numbers from 1 to 100
  console.log("Prime numbers from 1 to 100:");
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  
  // Count prime numbers between 1 and 50
  let primeCount = 0;
  for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
      primeCount++;
    }
  }
  console.log("Number of prime numbers between 1 and 50:", primeCount);
  
  // Count even numbers between 1 and 100
  let evenCount = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenCount++;
    }
  }
  console.log("Number of even numbers between 1 and 100:", evenCount);
  