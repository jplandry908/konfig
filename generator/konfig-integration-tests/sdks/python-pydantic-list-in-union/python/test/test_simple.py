# coding: utf-8

"""
    python-pydantic-list-in-union API

    A simple API based for testing python-pydantic-list-in-union.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_list_in_union import PythonPydanticListInUnion

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticlistinunion = PythonPydanticListInUnion(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticlistinunion)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
