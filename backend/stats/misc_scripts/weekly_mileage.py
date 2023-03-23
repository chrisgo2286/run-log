from datetime import datetime, timedelta
from .misc_functions import calc_mileage

class WeeklyMileage:
    """Class to compile data for mileage for last eight weeks"""
    def __init__(self, runs):
        self.runs = runs
        self.cur_date = datetime.today()
        self.data = []

    def pull_data(self):
        """Pulls weekly mileage for last eight weeks"""
        start_date = self.find_first_start_date()
        start_date_str = start_date.strftime('%m/%d')
        for _ in range(7):
            print(start_date)
            mileage = self.calc_weekly_total(start_date)
            run_obj = { 'start_date': start_date_str, 'distance': mileage}
            self.data.insert(0,run_obj)
            start_date = start_date - timedelta(weeks=1)
            start_date_str = start_date.strftime('%m/%d')

    def find_first_start_date(self):
        """Returns the date of first day of week"""
        if self.cur_date.weekday() == 6:
            return self.cur_date
        dif = self.cur_date.weekday() + 1
        return self.cur_date - timedelta(days=dif)
    
    def calc_weekly_total(self, start_date):
        """Returns total mileage for the given week"""
        weekly_runs = self.filter_weekly_runs(start_date)
        return calc_mileage(weekly_runs)
    
    def filter_weekly_runs(self, start_date):
        """Returns queryset of runs for week eff start_date"""    
        end_date = start_date + timedelta(days=6)
        return self.runs.filter(date__gte=start_date, date__lte=end_date) 