export const run = function (expression: string, data: any) {
  // pick split operators from the expression: +, -, *, /, %
  const operators = expression.match(/[\+\-\*\/\%]/g) ?? []

  // split expression strings by +, -, *, /, %
  const expressions = expression.split(/[\+\-\*\/\%]/g)

  const evaluatedExpressions = expressions.map((exp) => evaluateExpression(exp, data))

  const finalArrayValues = evaluatedExpressions.map((exp) => finalEvaluation(exp))

  console.log(finalArrayValues)

  // evaluate the expression
  const result = finalArrayValues.reduce((totals, currentValue, index) => {
    if (index == 0) {
      return currentValue
    }

    const operator = operators[index - 1]

    return new Function(`return ${totals} ${operator} ${currentValue}`)()
  })

  console.log(result)
}

export const evaluateExpression = function (expression: string, data: any) {
  // get variables from the expression and trim any spaces
  // flexible for any variable_name_1, variable_name_2, etc
  const variables = expression.match(/([a-zA-Z_]+[0-9])/g)?.map((variable) => variable.trim()) ?? []
  // only matches var_1, var_2, var_3, etc
  //const variables = expression.match(/var_[0-9]+/g)?.map((variable) => variable.trim()) ?? []

  // replace variables with values from data
  variables.forEach((variable) => {
    expression = expression.replace(variable, data[variable])
  })

  return expression
}

export const finalEvaluation = function (expression: string): number {
  // expression e.g  if (1 == 2, 0, if (4 == 4, 15, 0))
  // for every occurrence of if, we need to evaluate the values in the brackets
  // remove the first if
  const expressionWithoutIf = expression.replace(/if\s*/, '').trim()

  // check if there is another if
  const ifIndex = expressionWithoutIf.indexOf('if')
  // if there is no if, evaluate the expression
  if (ifIndex == -1) {
    // pick the expression between the brackets
    // e.g  (1 == 2, 0, 15)
    const expressionToEvaluate = expressionWithoutIf.substring(
      expressionWithoutIf.indexOf('(') + 1,
      expressionWithoutIf.indexOf(')')
    )
    // evaluate the string "4 == 4, 15, 0" into a ternary operator
    const [condition, trueValue, falseValue] = expressionToEvaluate.split(',')

    return new Function(`return (${condition} ? ${trueValue} : ${falseValue})`)()
  }

  // pick the part from this if including the if
  // e.g  (1 == 2, 0, if (4 == 4, 15, 0))
  const expressionToEvaluate = expressionWithoutIf.substring(ifIndex)
  let expressionBeforeIf = expressionWithoutIf.substring(0, ifIndex)
  // remove brackets from the expression
  expressionBeforeIf = expressionBeforeIf.replace('(', '').replace(')', '')

  const recursiveEvaluation = finalEvaluation(expressionToEvaluate)

  // evaluate the string "4 == 4, 15, 0" into a ternary operator
  const [condition, trueValue, falseValue] = expressionBeforeIf.split(',')

  return new Function(`return (${condition} ? ${trueValue} : ${recursiveEvaluation})`)()
}


// Example usage
run(`if (var_1 == 2, 0, if (var_2 == 4, 15, 0))
+ if (var_2 == 3, 5, 0)
- if (var_4 == 2, 0, 5)
+ if (var_3 == 3, 5, 0)`, {
  var_1: 1,
  var_2: 4,
  var_3: 3,
  var_4: 5
});

// output: 15

/**
 * Instructions:
 *
 * Create a parser that evaluates and executes ternary operations in the string format of:
 *
 * "if ( <condition>, <truthy value>, <falsy value> )"
 */

/**
 * Which would normally equate to:
 */
/*
  if ( <condition> ) {
     return <truthy value>
  } else {
     return <falsy value>
  }
 */