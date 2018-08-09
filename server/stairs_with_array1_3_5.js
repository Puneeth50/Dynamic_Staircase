function generatePossibleStairsFor_1_3_5_Combination(stairCaseValue) {
	var userInput = parseInt(stairCaseValue)
	
	if ((!userInput || userInput < 0) && userInput !== 0) {
		console.log("please enter positive integter starting from zero");
		return "please enter positive integer starting with zero";
	} else {
        var n1,n2,n3;	
		n1 = 1, n2 = 1, n3 = 1;
		
		for(i = 3; i <=userInput; i++) {
			n3 = n1 + n2;
			n1 = n2;
		    n2 = n3;
		}
		
		    console.log("Number of possible paths = " +n3);
		    return n3;
	}
}

module.exports = generatePossibleStairsFor_1_3_5_Combination;