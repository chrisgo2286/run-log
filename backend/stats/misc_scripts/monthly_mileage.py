class MonthlyMileage:
    """Class to compile data for monthly mileage bar chart"""
    def __init__(self, runs, **params):
        self.runs = runs
        self.year = int(params['year'][0])
        self.data = []

    def pull_data(self):
        """Compiles data for monthly mileage chart"""
        pass