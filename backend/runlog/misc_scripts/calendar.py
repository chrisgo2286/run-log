import calendar
from datetime import datetime
from dateutil.relativedelta import relativedelta
from .month import Month

class Calendar:
    """Object to store data about all months in database"""
    def __init__(self):
        self.data = dict()

    def compile_months(self):
        """Compiles all months into dictionary of 'mmmm YYYY: data' """
        current_month = datetime.today().month
        current_year = datetime.today().year
        for i in range(1, 12):
            month = Month(current_month, current_year)
            month.compile()
            key = f'{calendar.month_name[current_month]} {current_year}'
            self.data[key] = month.days
            current_date = datetime(current_year, current_month, 1)
            new_date = current_date - relativedelta(months=i)
            current_month = new_date.month
            current_year = new_date.year