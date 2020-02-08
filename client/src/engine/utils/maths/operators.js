export function evaluateComparison(param1, param2, operator) {
  switch (operator) {
    case "===":
      return param1 === param2;
    case "!==":
      return param1 !== param2;
    case "<":
      return param1 < param2;
    case ">":
      return param1 > param2;
    case "<=":
      return param1 <= param2;
    case ">=":
      return param1 >= param2;
  }
}
