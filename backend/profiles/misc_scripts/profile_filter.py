from profiles.models import Profile
from django.contrib.auth.models import User
from django.db.models import Value, CharField

class ProfileFilter:
    """Object to filter all Profile objects based on given paramaters"""
    def __init__(self, **params):
        self.params = params
        self.profiles = Profile.objects.filter(privacy='Public')
        self.filter_dict = {
            'username': self.filter_by_username,
            'age_min': self.filter_by_age_min,
            'age_max': self.filter_by_age_max,
            'gender': self.filter_by_gender
        }

    def filter_profiles(self):
        for filter, arg in self.params.items():
            self.filter_dict[filter](arg)
        return self.profiles.values()

    def filter_by_username(self, username):
        """Filters profiles by username"""
        user = User.objects.filter(username=username[0])[0]
        self.profiles = self.profiles.filter(owner=user)

    def filter_by_age_min(self, age_min):
        """Filters by age_min"""
        self.profiles = self.profiles.filter(age__gte=age_min)
    
    def filter_by_age_max(self, age_max):
        """Filters by age_max"""
        self.profiles = self.profiles.filter(age__lte=age_max)

    def filter_by_gender(self, gender):
        """Filters by gender"""
        self.profiles = self.profiles.filter(gender=gender)