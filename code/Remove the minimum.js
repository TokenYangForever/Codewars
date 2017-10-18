function removeSmallest(numbers) {
  if (!numbers) return []
  let min = numbers.indexOf(Math.min(...numbers))
  return numbers.slice(0, min).concat(numbers.slice(min+1))
}
