import pytest
from runlog.tests.fixtures import (new_user, run1, run2, run3) 

pytestmark = pytest.mark.django_db

def test_run_string(run1):
    """Tests that __str__ method functions correctly"""
    assert run1.__str__() == '11-01-2022 - 5KM'
