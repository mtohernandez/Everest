from django.contrib import admin
from django.urls import path
from django.urls import re_path as url
from django.conf.urls import include

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^',include('BackendApp.urls'))
]
