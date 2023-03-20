from datetime import datetime
from dateutil.relativedelta import relativedelta
from .misc_functions import calc_monthly_mileage

class MonthlyMileage:
    """Class to compile data for monthly mileage bar chart"""
    def __init__(self, runs, **params):
        self.runs = runs
        self.year = int(params['year'][0])
        self.cur_date = datetime.today()
        self.data = []

    def pull_data(self):
        """Compiles data for mileage for last eight months"""
        for i in range(8):
            new_date = self.cur_date - relativedelta(months=i)
            month = new_date.strftime('%b')
            mileage = calc_monthly_mileage(self.runs, new_date.month, 
                new_date.year)
            run_obj = {
                'month': month,
                'distance': mileage,
            }
            self.data.insert(0, run_obj)
