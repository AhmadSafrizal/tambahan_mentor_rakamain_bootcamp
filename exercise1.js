for (let fizzBuzz = 1; fizzBuzz <= 100; fizzBuzz++) {
  if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
    console.log ("FizzBuzz")
  } else if (fizzBuzz % 5 === 0) {
    console.log ("Buzz")
  } else if (fizzBuzz % 3 === 0) {
    console.log ("Fizz")
  } else {
    console.log (fizzBuzz)
  }
}