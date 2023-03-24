from stats.misc_scripts.misc_functions import calc_mileage

class RunTypes:
    """Class to provide data for run type composition"""
    RUN_TYPES = ['Easy Run', 'Long Run', 'Intervals', 'Tempo Run']
    def __init__(self, runs):
        self.runs = runs
        self.data = []

    def pull_data(self):
        """Populates data list with run type and corresponding mileage total"""
        for run_type in self.RUN_TYPES:
            runs = self.filter_runs_by_type(run_type)
            mileage = calc_mileage(runs)
            self.data.append({'run_type': run_type, 'distance': mileage})

    def filter_runs_by_type(self, run_type):
        """Returns queryset of runs for given run_type"""
        return self.runs.filter(run_type=run_type)