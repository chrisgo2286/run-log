from rest_framework.response import Response
from rest_framework.decorators import api_view
from .misc_scripts.summary_stats import SummaryStats

# Create your views here.
@api_view(('GET',))
def stats_view(request):
    stats = SummaryStats(request.user.id, **request.query_params)
    stats.pull_data()
    return Response(stats.mileage)