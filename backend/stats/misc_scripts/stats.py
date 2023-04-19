from datetime import datetime
from runlog.models import Run
from stats.misc_scripts.summary_stats import SummaryStats
from stats.misc_scripts.monthly_mileage import MonthlyMileage
from stats.misc_scripts.weekly_mileage import WeeklyMileage
from stats.misc_scripts.run_types import RunTypes

class Stats:
    """Class to compile summary stats and charts into dict"""
    def __init__(self, user_id, **params):
        self.user_id = user_id
        self.params = params
        self.runs = self.compile_runs(user_id)
        self.data = dict()

    def compile(self):
        """Compiles all stats and charts into dict"""
        self.compile_summary()
        self.compile_monthly_mileage_chart()
        self.compile_weekly_mileage_chart()
        self.compile_run_type_chart()

    def compile_summary(self):
        """Compile summary stats"""
        summary_stats = SummaryStats(self.runs, **self.params)
        summary_stats.pull_data()
        self.data['summary'] = summary_stats.summary

    def compile_monthly_mileage_chart(self):
        """Compiles Rechart data"""
        monthly_mileage = MonthlyMileage(self.runs)
        monthly_mileage.pull_data()
        self.data['monthly_chart'] = monthly_mileage.data

    def compile_weekly_mileage_chart(self):
        """Compiles Rechart data"""
        weekly_mileage = WeeklyMileage(self.runs)
        weekly_mileage.pull_data()
        self.data['weekly_chart'] = weekly_mileage.data

    def compile_run_type_chart(self):
        """Compiles Rechart data"""
        run_types = RunTypes(self.runs)
        run_types.pull_data()
        self.data['run_types_chart'] = run_types.data

    def compile_runs(self, user_id):
        """Returns queryset of completed runs for owner"""
        today = datetime.today()
        return Run.objects.filter(owner=user_id, date__lte=today)
