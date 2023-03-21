from datetime import datetime
from dateutil.relativedelta import relativedelta
from .misc_functions import calc_monthly_mileage

class MonthlyMileage:
    """Class to compile data for monthly mileage bar chart"""
    def __init__(self, runs):
        self.runs = runs
        self.cur_date = datetime.today()
        self.data = []

    def pull_data(self):
        """Compiles data for mileage for last eight months"""
        for i in range(8):
            run_obj = self.get_monthly_mileage(i)
            self.data.insert(0, run_obj)

    def get_monthly_mileage(self, offset):
        """Takes number of months to subtract from current month and returns
        dict with month and and distance"""
        date = self.cur_date - relativedelta(months=offset)        
        month = date.strftime('%b')
        mileage = calc_monthly_mileage(self.runs, date.month, date.year)
        return { 'month': month, 'distance': mileage}