from datetime import datetime, timedelta

class WeeklyMileage:
    """Class to compile data for mileage for last eight weeks"""
    def __init__(self, runs):
        self.runs = runs
        self.cur_date = datetime.today()
        self.data = []

    def pull_data(self):
        """Pulls weekly mileage for last eight weeks"""
        start_date = self.find_first_start_date(i)
        start_date_str = start_date.strftime('%m/%d')
        for i in range(1,8):
            mileage = self.find_weekly_total()
            run_obj = { 'start_date': start_date_str, 'distance': mileage}
            self.data.append(run_obj)
            start_date = start_date - timedelta(days=(i * 7))
            start_date_str = start_date.strftime('%m/%d')

    def find_first_start_date(self, offset):
        """Returns the date of first day of week"""
        if self.cur_date.weekday() == 6:
            return self.cur_date
        dif = self.cur_date.weekday() + 1
        return self.cur_date - timedelta(days=dif)
        