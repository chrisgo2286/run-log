from django.db.models import Sum

def calc_monthly_mileage(runs, month, year):
    """Returns total mileage for given month and year"""
    runs = filter_runs_by_month(runs, month, year)
    return calc_mileage(runs)

def filter_runs_by_year(runs, year):
    """Returns runs for given year"""
    return runs.filter(date__year=year)

def filter_runs_by_month(runs, month, year):
    """Returns runs for given month"""
    return runs.filter(date__year=year, date__month=month)

def calc_mileage(runs):
    """Returns total mileage for given runs"""
    sum_dict = runs.aggregate(Sum('distance'))
    return sum_dict['distance__sum']
    

