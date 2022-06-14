russiaNatoNuclearexchangeInNextMonth=.0001 to .003
londonHitConditional = .1 to .5
informedActorsNotAbleToEscape = .1 to .6
proportionWhichDieIfBombDropsInLondon = 0.3 to 1

probabilityOfDying = russiaNatoNuclearexchangeInNextMonth*londonHitConditional*informedActorsNotAbleToEscape*proportionWhichDieIfBombDropsInLondon
remainingLifeExpectancyInYears = 40 to 60
daysInYear=365
lostDays=probabilityOfDying*remainingLifeExpectancyInYears*daysInYear

lostHours=lostDays*24
lostHours // Replace with mean(lostDays) to get an estimate in days instead
