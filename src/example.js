// This file contains intentional linting violations

const unusedVar = "This variable is never used"

function badFunction() {
  console.log("Using double quotes instead of single quotes")
  var x = 10
  return x
}

const anotherUnused = 42

export default badFunction