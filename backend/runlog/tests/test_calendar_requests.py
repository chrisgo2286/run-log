import pytest
from django.contrib.auth.models import User
from runlog.models import Run
from rest_framework.test import force_authenticate
from runlog.views import RunView
from runlog.tests.fixtures import (month1, month2, test1, test2, run1, run2, 
    run3, new_user, test_user, run_data1, run_data2, run_data3, run_data4, 
    run_update1, factory)

pytestmark = pytest.mark.django_db

def test_get_calendar(factory, test_user):
    """Tests that get request to '/api/calendar/' endpoint pulls the correct 
    data"""
    request = factory.get('/api/calendar/', {
        'month': test1['month'],
        'year': test2['year'],
    }, format='json')
    force_authenticate(request, user=test_user)
    view = RunView.as_view({'get': 'list'})
    response = view(request)

    assert response.status_code == 200
    assert response.data[0]['time'] == run_data1['time']

def test_post_runs(factory, test_user):
    """Tests that post request to 'api/runs/ endpoint creates a new
    run"""
    request = factory.post('/api/runs/', run_data4, format='json')
    force_authenticate(request, user=test_user)
    view = RunView.as_view({'post': 'create'})
    response = view(request)
    runs = Run.objects.filter(owner=test_user)

    assert response.status_code == 201
    assert runs[3].distance == 10.00
    assert runs[3].time == 60

def test_patch_runs(factory, test_user):
    """Tests that patch requests to 'api/runs/{id}/' endpoint updates
    the run"""

    request = factory.patch('/api/runs/1', run_update1, format='json')
    force_authenticate(request, user=test_user)
    view = RunView.as_view({'patch':'partial_update'})
    response = view(request)
    runs = Run.objects.filter(owner=test_user)

    assert response.status_code == 200
    assert runs[0].distance == 7.00
    assert runs[0].time == 40