from stats.misc_scripts.summary_stats import SummaryStats

class Stats:
    """Class to compile summary stats and charts into dict"""
    def __init__(self, user_id, **params):
        self.user_id = user_id
        self.params = params
        self.data = dict()

    def compile(self):
        """Compiles all stats and charts into dict"""
        self.compile_summary()
        self.compile_chartA()
        self.compile_chartB()
        self.compile_chartC()

    def compile_summary(self):
        """Compile summary stats"""
        summary_stats = SummaryStats(self.user_id, **self.params)
        summary_stats.pull_data()
        self.data['summary'] = summary_stats.summary

    def compile_chartA(self):
        """Compiles Rechart data"""
        pass

    def compile_chartB(self):
        """Compiles Rechart data"""
        pass

    def compile_chartC(self):
        """Compiles Rechart data"""
        pass

    