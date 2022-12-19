import calendar
from datetime import datetime
from runlog.models import Run
from .day import Day

class Month:
    """Object to store data about single month"""
    def __init__(self, user, month, year):
        self.user = user
        self.month = month
        self.year = year
        self.days = []

    def compile(self):
        """Compiles all days along with runs"""
        runs = self.filter_runs_in_month(self.month, self.year)
        days_in_month = self.find_days_in_month(self.month, self.year)
        for day_num in range(1, days_in_month + 1):
            run = self.filter_runs_by_day(runs, day_num)
            day_obj = self.create_day(day_num, run)
            self.days.append(day_obj.__dict__)
        self.create_dummy_days(days_in_month)

    def create_day(self, day_num, run=None):
        """Adds a single day to month"""
        if run:
            distance = run[0].distance
            minutes = run[0].time
            run_id = run[0].id
            return Day(day_num, distance, minutes, run_id)
        return Day(day_num)

    def find_days_in_month(self, month, year):
        """Takes in month and year and returns total days in month"""
        return int(calendar.monthrange(year, month)[1])

    def filter_runs_in_month(self, month, year):
        """Filters runs by month/year"""
        return Run.objects.filter(owner=self.user, date__year=self.year, 
            date__month=self.month)

    def filter_runs_by_day(self, runs, day_num):
        """Filters selected runs for month by specified day"""
        if runs:
            return runs.filter(date__day=day_num)

    def create_dummy_days(self, days_in_month):
        """Adds days with 'x' as number depending on when the first and last
        day of the month is"""
        self.create_dummy_days_prior()
        self.create_dummy_days_after(days_in_month)

    def create_dummy_days_prior(self):
        total = self.calc_dummy_days_prior(self.year, self.month, 1)
        print(total)
        for day in range(total):
            self.days.insert(0, Day('x').__dict__)
    
    def create_dummy_days_after(self, days_in_month):
        total = self.calc_dummy_days_after(self.year, self.month, days_in_month)
        for day in range(total):
            self.days.append(Day('x').__dict__)

    def calc_dummy_days_prior(self, year, month, day):
        """Calculates the number of days from the 1st of the month to the 
        previous Saturday"""
        cur_date = datetime(year, month, day)
        day_of_week = cur_date.weekday()
        if day_of_week == 6:
            return 0
        return day_of_week + 1

    def calc_dummy_days_after(self, year, month, day):
        """Calculates the number of days from the last of the month to the 
        next Sunday"""
        cur_date = datetime(year, month, day)
        day_of_week = cur_date.weekday()
        if day_of_week == 5:
            return 0
        return 5 - day_of_week
        