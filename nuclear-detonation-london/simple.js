russiaNatoNuclearexchangeInNextMonth = 0.00067

londonHitConditional = 0.18
informedActorsNotAbleToEscape = 0.25
proportionWhichDieIfBombDropsInLondon = 0.78
probabilityOfDying = russiaNatoNuclearexchangeInNextMonth * londonHitConditional * informedActorsNotAbleToEscape * proportionWhichDieIfBombDropsInLondon

remainlingLifeExpectancyInYears = 40 to 60
daysInYear=365
lostDays=probabilityOfDying*remainlingLifeExpectancyInYears*daysInYear

lostHours=lostDays*24
lostHours // Replace with mean(lostDays) to get an estimate in days instead
