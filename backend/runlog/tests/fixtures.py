import pytest
from datetime import datetime
from django.contrib.auth.models import User
from rest_framework.test import APIRequestFactory
from runlog.models import Run
from runlog.misc_scripts.month import Month

pytestmark = pytest.mark.django_db

@pytest.fixture
def new_user():
    """Returns a new owner"""
    return User.objects.create_user(
        username='tester',
        password='test123'
    )

@pytest.fixture
def test_user(new_user):
    """Returns model instance of tester user"""
    return User.objects.get(username='tester')

@pytest.fixture
def run1(new_user):
    """Returns a new instance of Run"""
    return Run.objects.create(
        owner=new_user,
        date=run_data1['date'],
        distance=run_data1['distance'],
        time=run_data1['time'],
        comment=run_data1['comment']
    )

@pytest.fixture
def run2(new_user):
    """Returns a new instance of Run"""
    return Run.objects.create(
        owner=new_user,
        date=run_data2['date'],
        distance=run_data2['distance'],
        time=run_data2['time'],
        comment=run_data2['comment']
    )

@pytest.fixture
def run3(new_user):
    """Returns a new instance of Run"""
    return Run.objects.create(
        owner=new_user,
        date=run_data3['date'],
        distance=run_data3['distance'],
        time=run_data3['time'],
        comment=run_data3['comment']
    )

@pytest.fixture
def month1(new_user, run1, run2, run3):
    """Returns instance of Month"""
    return Month(new_user, test1['month'], test1['year'])

@pytest.fixture
def month2(new_user, run1, run2, run3):
    """Returns instance of Month"""
    return Month(new_user, test2['month'], test2['year'])

@pytest.fixture
def factory(month1, month2):
    """Returns object to test API responses"""
    return APIRequestFactory()

run_data1 = {
    'date': datetime(2022, 11, 1),
    'distance': 5,
    'time': 30,
    'comment': 'First Run'
}

run_data2 = {
    'date': datetime(2022, 11, 3),
    'distance': 6,
    'time': 35,
    'comment': 'Second Run'
}

run_data3 = {
    'date': datetime(2022, 11, 6),
    'distance': 8,
    'time': 45,
    'comment': 'Third Run'
}

run_data4 = {
    'owner': '1',
    'date': '2022-11-07',
    'distance': 10,
    'time': 60,
    'comment': 'Fourth Run'
}

run_update1 = {
    'distance': 7.00,
    'time': 40,
    'comment': 'First Run updated'
}

test1 = {
    'user': 1,
    'month': 11,
    'year': 2022,
    'days_in_month': 30,
    'days_prior': 2,
    'days_after': 3,
    'runs': 3,
    'total_days': 35,
}

test2 = {
    'user': 1,
    'month': 1,
    'year': 2023,
    'days_in_month': 31,
    'days_prior': 0,
    'days_after': 4,
    'runs': 0,
    'total_days': 35,
}