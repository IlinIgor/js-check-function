// DO not use any kind of iterations (for-loops, etc)
function square(array) {
  return (function squareItem (newArray) {
    if (newArray.length !== array.length) {
      newArray.push(array[newArray.length] * array[newArray.length])
      return squareItem(newArray)
    }
    return newArray
  })([])
}
