from uuid import uuid4

from django.test import TestCase

from wallet.momo_mtn import *


class Mixin:
    collection_apiusers = [
        '10ac74f1-2e4c-47c2-93a7-3b9067a6aff8'
    ]


class TestMomoCollections(Mixin, TestCase):

    def setUp(self) -> None:
        super().setUp()

        self.apiuser_id = 'a7eadcd7-ff5f-4b27-bb97-9ec60b575166'
        self.apikey = '6a5e4d2d9dd044dea7601a8dc8557f52'
        self.subscription_key = 'e50d0fabb3044afdba48f25815415136'
        self.session = create_session(subscription_key=self.subscription_key)

    def test_request_to_pay_collection(self):
        # r = get_collection_token(self.apiuser_id, self.apikey, self.session)
        # collection_token = r.json()['access_token']
        collection_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJjbGllbnRJZCI6ImE3ZWFkY2Q3LWZmNWYtNGIyNy1iYjk3LTllYzYwYjU3NTE2NiIsImV4cGlyZXMiOiIyMDIxLTA3LTIxVDEyOjQ4OjQ4Ljk4OSIsInNlc3Npb25JZCI6IjEzNmU1MzgzLWU3M2QtNDlhOC1hN2QzLWM4ZTdhZWMyODQyMCJ9.T8NrlNkppOmT1U0uJfTpTqwcuNlCgvyUeYqs8xJEGPxQyq8qxENgckN5WI1dwN546sdij9Ao-qVZ2XxWO7KA-E58ac_uU5on4rGVDNwaG13l048OJZia732ZrtzVj1tDZCMmW7y-8mB9dvkY2USRvLQZqt5VC7MCbmKw9_jc-WtVYWQKobD2q-i5WKUtr5MJBi98outEG1RshUbBwIHwFzqzqn3cuxF3FpV07ZpiV4-_3hOxTo0RC_70s-GOYkyns05NU1WDDy-WZt5QCdunry5YWUgfVyKTTklRvHErC255Kp1KXAJnZ7QBUA_OkecWooSLEYQhT-PA_wDwGq83Tg'

        data = {
            "amount": "500",
            "currency": "EUR",
            "externalId": "123456789",
            "payer": {
                "partyIdType": "MSISDN",
                "partyId": "250784803644"
            },
            "payerMessage": "Thank you",
            "payeeNote": "note"
        }

        transaction_id = f'{uuid4()}'

        r = request_to_pay_collection(
            self.apiuser_id, collection_token, data, self.session,
            transaction_id=transaction_id)

        self.assertEqual(r.status_code, 202)
        # data = r.json()

        print(data)

    def test_get_collection_token(self):
        r = get_collection_token(self.apiuser_id, self.apikey, self.session)
        self.assertEqual(r.status_code, 200)
        data = r.json()
        self.assertIn('access_token', data.keys())
        print("access_token", data.get('access_token'))
        print(data)

    def test_create_sb_apiuser_apikey(self):

        r = create_sb_apiuser_apikey(self.apiuser_id, self.session)
        self.assertEqual(r.status_code, 201)
        self.assertIn('apiKey', r.json().keys())
        print("apiKey", r.json().get('apiKey'))

    def test_get_sb_apiuser(self):
        # {'providerCallbackHost': 'string', 'targetEnvironment': 'sandbox'}

        r = get_sb_apiuser(self.apiuser_id, self.session)
        self.assertEqual(r.status_code, 200)

    def test_create_sb_apiuser(self):
        r = create_sb_apiuser(self.session)
        self.assertEqual(r.status_code, 201)
