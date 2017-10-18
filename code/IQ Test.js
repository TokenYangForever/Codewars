function iqTest(numbers){
  // ...
  numbers = numbers.split(' ')
  let odd = 0
  let even = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 ==0) {
      even++
    } else {
      odd++
    }
    if (even === 2 || odd === 2) {
      let flag = even > odd ? 1 : 0
      return numbers.findIndex(val => {
        return val%2 === flag
      }) + 1
    }
  }
}
