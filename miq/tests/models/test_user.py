from django.contrib.auth import get_user_model

from django.test import TransactionTestCase

User = get_user_model()


class UserMixin:
    def create_user(self, username, password):
        user = User.objects.create_user(username=username)
        user.set_password(password)
        user.save()
        return user


class TestPage(UserMixin, TransactionTestCase):
    def setUp(self) -> None:
        super().setUp()

    def test_create(self):
        usr = 'usr'
        user = self.create_user(usr, 'pwd')
        self.assertEqual(usr, f'{user}')
