import math
from datetime import datetime
from runlog.models import Run
from django.db.models import Sum

class SummaryStats:
    """Class to compile user run data for Summary Stats section of profile"""
    def __init__(self, user_id, **params):
        self.user_id = user_id
        self.month = params['month'][0]
        self.year = params['year'][0]
        self.runs = Run.objects.filter(owner=self.user_id)
        self.mileage = dict()

    def pull_data(self):
        """Populates data list with monthly mileage, annual mileage and
        average weekly mileage"""
        self.mileage['month'] = self.calc_monthly_mileage(self.month, 
            self.year)
        self.mileage['year'] = self.calc_annual_mileage(self.year)
        self.mileage['week'] = self.calc_weekly_mileage(self.year)

    def calc_monthly_mileage(self, month, year):
        """Returns total mileage for given month and year"""
        runs = self.filter_runs_by_month(month, year)
        return self.calc_mileage(runs)
    
    def calc_annual_mileage(self, year):
        """Returns total mileage for given year"""
        runs = self.filter_runs_by_year(year)
        return self.calc_mileage(runs)

    def calc_weekly_mileage(self, year):
        """Returns weekly mileage for given year"""
        weeks = self.calc_total_weeks(year)
        return self.mileage['year'] / weeks
    
    #Misc Functions
    def filter_runs_by_year(self, year):
        """Returns runs for given year"""
        return self.runs.filter(date__year=year)

    def filter_runs_by_month(self, month, year):
        """Returns runs for given month"""
        return self.runs.filter(date__year=year, date__month=month)

    def calc_mileage(self, runs):
        """Returns total mileage for given runs"""
        sum_dict = runs.aggregate(Sum('distance'))
        return sum_dict['distance__sum']
    
    def calc_total_weeks(self, year):
        """Returns number of weeks passed in given year"""
        cur_year = datetime.today().year
        if not year == cur_year:
            return 52
        time_delta = datetime.today() - datetime(year, 1, 1)
        return math.ceil(time_delta.days / 7)