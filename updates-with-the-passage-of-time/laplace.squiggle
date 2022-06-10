// Vars
numSuccesses = 0 
numFailures = 10
numTrials = numSuccesses + numFailures

// Laplace formulas
laplace(successes, failures) = (successes + 1)/( successes + failures + 2)
laplace2(successes, trials) = (successes + 1)/( trials + 2)

laplaceSuccessByNthTrial(successes, failures, numFutureTrials) = {
	numTrialsAlready = successes + failures
	numTrialsAtTheEnd = numTrialsAlready + numFutureTrials
	pAllFailures = (failures + 1) / ( numTrialsAtTheEnd + x) 
  // e.g., 2 trials, 2 failures, no successes
	// then probability of one additional failure is:
	// 3/4
	// and the probability of three additional failures is:
	// 3/4 * 4/5 * 5/6 = 3 / 6 =  (failures + 1) / ( numTrialsAtTheEnd + 1)
	// e.g.: 3/4 * 4/5 * 5/6 * 6/7 * 7/8 = 3/8
	1 - pAllFailures
}

// Laplace update

pSuccess = laplace(numSuccesses, numFailures)
pSuccessBy10thTrial = laplaceSuccessByNthTrial(numSuccesses, failures, 10)
