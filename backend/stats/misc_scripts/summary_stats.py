import math
from datetime import datetime
from .misc_functions import (filter_runs_by_month, filter_runs_by_year,
    calc_monthly_mileage, calc_mileage)

class SummaryStats:
    """Class to compile user run data for Summary Stats section of profile"""
    def __init__(self, runs, **params):
        self.runs = runs
        self.month = int(params['month'][0])
        self.year = int(params['year'][0])
        self.summary = dict()

    def pull_data(self):
        """Populates data list with monthly mileage, annual mileage and
        average weekly mileage"""
        self.summary['month'] = calc_monthly_mileage(self.runs, self.month, 
            self.year)
        self.summary['year'] = self.calc_annual_mileage()
        self.summary['week'] = self.calc_weekly_mileage()
    
    def calc_annual_mileage(self):
        """Returns total mileage for given year"""
        runs = filter_runs_by_year(self.runs, self.year)
        return calc_mileage(runs)

    def calc_weekly_mileage(self):
        """Returns weekly mileage for given year"""
        weeks = self.calc_total_weeks()
        return round(self.summary['year'] / weeks, 2)
    
    #Misc Functions
    def calc_total_weeks(self):
        """Returns number of weeks passed in given year"""
        cur_year = datetime.today().year
        if not self.year == cur_year:
            return 52
        time_delta = datetime.today() - datetime(self.year, 1, 1)
        return math.ceil(time_delta.days / 7)