from django.urls import re_path as url
from BackendApp import views
from django.conf.urls.static import static
from django.conf import settings
from .views import StatesView

urlpatterns = [
    url(r'^project$',views.projectApi),
    url(r'^project/([0-9]+)$',views.projectApi),

    url(r'^user$',views.userApi),
    url(r'^user/([0-9]+)$',views.userApi),

    url(r'^project/savefile',views.SaveFile),

    url(r'state/(?P<pk>[0-9]+)/$', StatesView.as_view(), name="StatesView"),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)