from runlog.models import Run
from django.db.models import Sum

class SummaryStats:
    """Class to compile user run data for Summary Stats section of profile"""
    def __init__(self, user_id, **params):
        self.user_id = user_id
        self.params = params
        self.runs = Run.objects.filter(owner=self.user_id)

    #Calculate weekly mileage
    
    #Calculate monthly mileage
    def calc_monthly_mileage(self, month, year):
        """Returns total mileage for given month and year"""
        runs = self.filter_runs_by_month(month, year)
        return self.calc_mileage(runs)
    
    def filter_runs_by_month(self, month, year):
        """Returns runs for given month"""
        return self.runs.filter(date__year=year, date__month=month)

    #Calculate annual mileage
    def calc_annual_mileage(self, year):
        """Returns total mileage for given year"""
        runs = self.filter_runs_by_year(year)
        return self.calc_mileage(runs)

    def filter_runs_by_year(self, year):
        """Returns runs for given year"""
        return self.runs.filter(date__year=year)

    #Misc Functions
    def calc_mileage(self, runs):
        """Returns total mileage for given runs"""
        sum_dict = runs.aggregate(Sum('distance'))
        return sum_dict['distance__sum']