from rest_framework.response import Response
from rest_framework.decorators import api_view
from .misc_scripts.stats import Stats

# Create your views here.
@api_view(('GET',))
def stats_view(request):
    stats = Stats(request.user.id, **request.query_params)
    stats.compile()
    return Response(stats.data)