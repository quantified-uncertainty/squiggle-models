// Initial setup
yearly_probability=0.9
period_probability_function(epsilon)=1-(1-yearly_probability)^(1/epsilon)
probability_decayed(t, total_time, period_probability) = 1-(1-period_probability)^(total_time-t)

// Monthly decomposition
total_time_monthly=12 # months in a year
monthly_probability=period_probability_function(total_time_monthly)
probability_decayed_monthly(t)=probability_decayed(t, total_time_monthly, monthly_probability) 

// Display
probability_decayed_monthly
// probability_decayed_monthly(6)
