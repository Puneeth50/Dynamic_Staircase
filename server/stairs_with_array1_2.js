function generate_Possible_stairs_for_1_2_combination(stairCaseValue) {
	var n = parseInt(stairCaseValue)
	var n1,n2,n3;	
				n1 = 1, n2 = 1, n3 = 1;
				for(i = 2; i < n; i++) {
					n3 = n1 + n2;
					n1 = n2;
					n2 = n3;
				}

				return n3;
				}
			}
