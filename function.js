function checkExpression (value) {
  var brackets = [{
    open: '(',
    close: ')'
  }, {
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }]

  var expressionState = []
  var symbols = value.split('')
  var result = true

  function closeExpression (bracket) {
    if (expressionState[expressionState.length - 1] === bracket.open) {
      expressionState.pop()
    } else {
      result = false
    }
  }

  symbols.every(function(symbol, index) {
    brackets.some(function(bracket) {
      if (symbol === bracket.close) {
        closeExpression(bracket)
        return true
      } else if (symbol === bracket.open) {
        expressionState.push(bracket.open)
        return true
      }
    })
    return result
  })

  if (result && expressionState.length > 0) {
    result = false
  }

  return result
}
