# coding: utf-8

"""
    splitit-web-api-v3

    Splitit's Web API

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal


class RequiredLinksModel(TypedDict):
    pass

class OptionalLinksModel(TypedDict, total=False):
    PrivacyPolicyUrl: str

    TermsAndConditionsUrl: str

    LearnMoreUrl: str

class LinksModel(RequiredLinksModel, OptionalLinksModel):
    pass