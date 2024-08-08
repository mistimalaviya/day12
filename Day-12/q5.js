
function es(num) {
 
  if (num < 2) return false;

  
  for (let i = 2; i <= Math.sqrt(num); i++) {

    if (num % i === 0) return false;
  }
  return true;
}

console.log(es(7));
console.log(es(10));
