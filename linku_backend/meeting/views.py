from rest_framework import viewsets

from .serializer import MeetingSerializer, UserSerializer, SubImageSerializer
from .models import Meeting, User, SubImage


class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SubImageViewSet(viewsets.ModelViewSet):
    queryset = SubImage.objects.all()
    serializer_class = SubImageSerializer
