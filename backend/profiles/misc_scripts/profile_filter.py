from profiles.models import Profile
from django.contrib.auth.models import User

class ProfileFilter:
    """Object to filter all Profile objects based on given paramaters"""
    def __init__(self, **params):
        self.params = params
        self.profiles = Profile.objects.filter(privacy='Public')
        self.filter_dict = {
            'username': self.filter_by_username,
            'age': self.filter_by_age,
            'gender': self.filter_by_gender
        }

    def filter_profiles(self):
        for filter, arg in self.params.items():
            self.filter_dict[filter](arg)
        return self.profiles.objects.values()

    def filter_by_username(self, username):
        """Filters profiles by username"""
        user = User.objects.filter(username=username)
        self.profiles = self.profiles.filter(owner=user)

    def filter_by_age(self, age_tuple):
        """Filters by age_min and age_max"""
        self.profiles = self.profiles.filter(
            age__gte=age_tuple[0], 
            age__lte=age_tuple[1]
        )
    
    def filter_by_gender(self, gender):
        """Filters by gender"""
        self.profiles = self.profiles.filter(gender=gender)