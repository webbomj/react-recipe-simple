const isPangram = (input) => {
	let inputLowerCaseArr = input.toLowerCase().split('').filter(el => el !== ' ');
  let withOutDouble = [...new Set(inputLowerCaseArr)]
  console.log(inputLowerCaseArr, withOutDouble)
	return withOutDouble.length === 26 ? true : false
}


console.log(isPangram('The quick brown fox jumps asdover the lazy dog'))