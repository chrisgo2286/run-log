from runlog.models import Run
from stats.misc_scripts.summary_stats import SummaryStats
from stats.misc_scripts.monthly_mileage import MonthlyMileage

class Stats:
    """Class to compile summary stats and charts into dict"""
    def __init__(self, user_id, **params):
        self.user_id = user_id
        self.params = params
        self.runs = Run.objects.filter(owner=self.user_id)
        self.data = dict()

    def compile(self):
        """Compiles all stats and charts into dict"""
        self.compile_summary()
        self.compile_monthly_mileage_chart()
        self.compile_chartB()
        self.compile_chartC()

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

    def compile_chartB(self):
        """Compiles Rechart data"""
        pass

    def compile_chartC(self):
        """Compiles Rechart data"""
        pass

    