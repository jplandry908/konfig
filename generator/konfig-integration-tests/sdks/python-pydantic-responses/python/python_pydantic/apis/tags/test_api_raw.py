# coding: utf-8

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from python_pydantic.paths.simple_endpoint.get import FetchRaw
from python_pydantic.paths.reserved_word.get import ReservedWordRaw


class TestApiRaw(
    FetchRaw,
    ReservedWordRaw,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    pass