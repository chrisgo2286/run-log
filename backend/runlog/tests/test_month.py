import pytest
from datetime import datetime
from runlog.models import Run
from runlog.misc_scripts.day import Day
from runlog.tests.fixtures import (month1, month2, test1, test2, run1, run2, 
    run3, new_user, run_data1, run_data2, run_data3)

pytestmark = pytest.mark.django_db

def test_calc_dummy_days_prior(month1, month2):
    """Tests that function returns the correct number  of days from 1st of
    month to prior Saturday"""
    assert month1.calc_dummy_days_prior() == test1['days_prior']
    assert month2.calc_dummy_days_prior() == test2['days_prior']

def test_calc_dummy_days_after(month1, month2):
    """Tests that function returns the correct number of days from last day of
    the month to next Sunday"""
    assert month1.calc_dummy_days_after() == test1['days_after']
    assert month2.calc_dummy_days_after() == test2['days_after']

def test_find_days_in_month(month1, month2):
    """Tests that function returns correct number of days in month"""
    assert (month1.find_days_in_month(test1['month'], test1['year']) == 
        test1['days_in_month']) 
    assert (month2.find_days_in_month(test2['month'], test2['year']) == 
        test2['days_in_month'])

def test_create_dummy_days_prior(month1, month2):
    """Tests that function adds dummy days to beginning of days list"""
    month1.days.append(Day(1).__dict__)
    month1.create_dummy_days_prior()
    assert len(month1.days) == test1['days_prior'] + 1
    assert month1.days[-1]['day_num'] == 1

    month2.days.append(Day(1).__dict__)
    month2.create_dummy_days_prior()
    assert len(month2.days) == test2['days_prior'] + 1
    assert month2.days[-1]['day_num'] == 1

def test_create_dummy_days_after(month1, month2):
    """Tests that function adds dummy days to beginning of days list"""
    month1.days.append(Day(1).__dict__)
    month1.create_dummy_days_after()
    assert len(month1.days) == test1['days_after'] + 1
    assert month1.days[0]['day_num'] == 1

    month2.days.append(Day(1).__dict__)
    month2.create_dummy_days_after()
    assert len(month2.days) == test2['days_after'] + 1
    assert month2.days[0]['day_num'] == 1

def test_filter_runs_by_month(month1, month2):
    """Tests that function returns correct runs for month"""
    assert len(month1.runs) == test1['runs']
    assert month1.runs[1].distance == run_data2['distance']
    assert month1.runs[2].time == run_data3['time']

    assert len(month2.runs) == test2['runs']

def test_filter_runs_by_day(month1, month2):
    """Tests that function returns correct run for day"""
    assert month1.filter_runs_by_day(1).distance == 5
    assert month1.filter_runs_by_day(6).time == 45

    assert month2.filter_runs_by_day(1) == None

def test_create_day(month1, month2):
    """Tests that function returns correct day object"""
    run = month1.filter_runs_by_day(1)
    day_obj = month1.create_day(1, run)
    assert day_obj.distance == 5

    run = month2.filter_runs_by_day(1)
    day_obj = month2.create_day(1, run)
    assert day_obj.day_num == 1

def test_compile_days(month1, month2):
    """Tests that function compiles all days correctly in month"""
    month1.compile_days()
    assert len(month1.days) == 30
    assert month1.days[0]['distance'] == 5

    month2.compile_days()
    assert len(month2.days) == 31
    assert month2.days[0]['day_num'] == 1