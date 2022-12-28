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
        self.days_in_month = self.find_days_in_month(self.month, self.year)
        self.runs = self.filter_runs_by_month()
        self.first_day = datetime(self.year, self.month, 1)
        self.last_day = datetime(self.year, self.month, self.days_in_month)
        self.days = []

    def compile(self):
        """Compiles all days along with runs"""
        self.compile_days()
        self.create_dummy_days_prior()
        self.create_dummy_days_after()

    def compile_days(self):
        """Creates and adds day objects to list for month"""
        for day_num in range(1, self.days_in_month + 1):
            run = self.filter_runs_by_day(day_num)
            day_obj = self.create_day(day_num, run)
            self.days.append(day_obj.__dict__)

    def create_day(self, day_num, run=None):
        """Adds a single day to month"""
        if run:
            return Day(day_num, run.distance, run.time, run.id)
        return Day(day_num)

    def filter_runs_by_month(self):
        """Filters runs by month/year"""
        return Run.objects.filter(owner=self.user, date__year=self.year, 
            date__month=self.month)

    def filter_runs_by_day(self, day_num):
        """Filters selected runs for month by specified day"""
        if self.runs:
            try:
                return self.runs.get(date__day=day_num)
            except Run.DoesNotExist:
                return

    def create_dummy_days_prior(self):
        total = self.calc_dummy_days_prior()
        for day in range(total):
            self.days.insert(0, Day('x').__dict__)
    
    def create_dummy_days_after(self):
        total = self.calc_dummy_days_after()
        for day in range(total):
            self.days.append(Day('x').__dict__)

    def calc_dummy_days_prior(self):
        """Takes the first day of month as datetime object and calculates the
        number of days to the previous Saturday"""
        day_of_week = self.first_day.weekday()
        if day_of_week == 6:
            return 0
        return day_of_week + 1

    def calc_dummy_days_after(self):
        """Takes the last day of the month as datetime object and calculates
        the number of days to the next Sunday"""
        day_of_week = self.last_day.weekday()
        if day_of_week == 5:
            return 0
        return 5 - day_of_week
        
    def find_days_in_month(self, month, year):
        """Takes in month and year and returns total days in month"""
        return int(calendar.monthrange(year, month)[1])