class Day:
    """Object to store data about single date"""
    def __init__(self, day_num, distance=0, minutes=0, comment=None, run_id=None):
        self.day_num = day_num
        self.distance = distance
        self.minutes = minutes
        self.comment = comment
        self.run_id = run_id
