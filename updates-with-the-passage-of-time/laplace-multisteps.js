// Useful for estimating, e.g., nuclear war
// Vars
numSuccessesStep1 = 8 
numFailuresStep1 = 50
numTrialsStep1 = numSuccessesStep1 + numFailuresStep1

numSuccessesStep2 = 1
numFailuresStep2 = numTrialsStep1 - numSuccessesStep2
numTrialsStep2 = numSuccessesStep2 + numFailuresStep2

// Laplace formulas
laplace(successes, failures) = (successes + 1)/( successes + failures + 2)
laplace2(successes, trials) = (successes + 1)/( trials + 2)

// Laplace update

pSuccess = laplace(numSuccessesStep1, numFailuresStep1) * laplace(numSuccessesStep2, numFailuresStep2)
