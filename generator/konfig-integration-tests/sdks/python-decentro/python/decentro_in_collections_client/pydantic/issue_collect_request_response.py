# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict

from decentro_in_collections_client.pydantic.issue_collect_request_response_data import IssueCollectRequestResponseData

class IssueCollectRequestResponse(BaseModel):
    decentro_txn_id: typing.Optional[str] = Field(None, alias='decentroTxnId')

    status: typing.Optional[str] = Field(None, alias='status')

    response_code: typing.Optional[str] = Field(None, alias='responseCode')

    message: typing.Optional[str] = Field(None, alias='message')

    data: typing.Optional[IssueCollectRequestResponseData] = Field(None, alias='data')

    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
