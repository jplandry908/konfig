# coding: utf-8

"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from pydantic import RootModel
from carbon.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from carbon.api_response import AsyncGeneratorResponse
from carbon import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from carbon import schemas  # noqa: F401

from carbon.model.http_validation_error import HTTPValidationError as HTTPValidationErrorSchema
from carbon.model.get_embedding_documents_body_parent_file_ids import GetEmbeddingDocumentsBodyParentFileIds as GetEmbeddingDocumentsBodyParentFileIdsSchema
from carbon.model.hybrid_search_tuning_params_nullable import HybridSearchTuningParamsNullable as HybridSearchTuningParamsNullableSchema
from carbon.model.embedding_generators_nullable import EmbeddingGeneratorsNullable as EmbeddingGeneratorsNullableSchema
from carbon.model.file_content_types_nullable import FileContentTypesNullable as FileContentTypesNullableSchema
from carbon.model.get_embedding_documents_body_query_vector import GetEmbeddingDocumentsBodyQueryVector as GetEmbeddingDocumentsBodyQueryVectorSchema
from carbon.model.get_embedding_documents_body_tags import GetEmbeddingDocumentsBodyTags as GetEmbeddingDocumentsBodyTagsSchema
from carbon.model.document_response_list import DocumentResponseList as DocumentResponseListSchema
from carbon.model.get_embedding_documents_body_file_ids import GetEmbeddingDocumentsBodyFileIds as GetEmbeddingDocumentsBodyFileIdsSchema
from carbon.model.get_embedding_documents_body import GetEmbeddingDocumentsBody as GetEmbeddingDocumentsBodySchema

from carbon.type.hybrid_search_tuning_params_nullable import HybridSearchTuningParamsNullable
from carbon.type.http_validation_error import HTTPValidationError
from carbon.type.file_content_types_nullable import FileContentTypesNullable
from carbon.type.document_response_list import DocumentResponseList
from carbon.type.get_embedding_documents_body_parent_file_ids import GetEmbeddingDocumentsBodyParentFileIds
from carbon.type.get_embedding_documents_body_file_ids import GetEmbeddingDocumentsBodyFileIds
from carbon.type.get_embedding_documents_body_tags import GetEmbeddingDocumentsBodyTags
from carbon.type.get_embedding_documents_body import GetEmbeddingDocumentsBody
from carbon.type.get_embedding_documents_body_query_vector import GetEmbeddingDocumentsBodyQueryVector
from carbon.type.embedding_generators_nullable import EmbeddingGeneratorsNullable

from ...api_client import Dictionary
from carbon.pydantic.file_content_types_nullable import FileContentTypesNullable as FileContentTypesNullablePydantic
from carbon.pydantic.hybrid_search_tuning_params_nullable import HybridSearchTuningParamsNullable as HybridSearchTuningParamsNullablePydantic
from carbon.pydantic.embedding_generators_nullable import EmbeddingGeneratorsNullable as EmbeddingGeneratorsNullablePydantic
from carbon.pydantic.get_embedding_documents_body_file_ids import GetEmbeddingDocumentsBodyFileIds as GetEmbeddingDocumentsBodyFileIdsPydantic
from carbon.pydantic.http_validation_error import HTTPValidationError as HTTPValidationErrorPydantic
from carbon.pydantic.get_embedding_documents_body_query_vector import GetEmbeddingDocumentsBodyQueryVector as GetEmbeddingDocumentsBodyQueryVectorPydantic
from carbon.pydantic.get_embedding_documents_body import GetEmbeddingDocumentsBody as GetEmbeddingDocumentsBodyPydantic
from carbon.pydantic.get_embedding_documents_body_parent_file_ids import GetEmbeddingDocumentsBodyParentFileIds as GetEmbeddingDocumentsBodyParentFileIdsPydantic
from carbon.pydantic.document_response_list import DocumentResponseList as DocumentResponseListPydantic
from carbon.pydantic.get_embedding_documents_body_tags import GetEmbeddingDocumentsBodyTags as GetEmbeddingDocumentsBodyTagsPydantic

# body param
SchemaForRequestBodyApplicationJson = GetEmbeddingDocumentsBodySchema


request_body_get_embedding_documents_body = api_client.RequestBody(
    content={
        'application/json': api_client.MediaType(
            schema=SchemaForRequestBodyApplicationJson),
    },
    required=True,
)
SchemaFor200ResponseBodyApplicationJson = DocumentResponseListSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: DocumentResponseList


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: DocumentResponseList


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
SchemaFor422ResponseBodyApplicationJson = HTTPValidationErrorSchema


@dataclass
class ApiResponseFor422(api_client.ApiResponse):
    body: HTTPValidationError


@dataclass
class ApiResponseFor422Async(api_client.AsyncApiResponse):
    body: HTTPValidationError


_response_for_422 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor422,
    response_cls_async=ApiResponseFor422Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor422ResponseBodyApplicationJson),
    },
)
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _get_documents_mapped_args(
        self,
        query: str,
        k: int,
        tags: typing.Optional[GetEmbeddingDocumentsBodyTags] = None,
        query_vector: typing.Optional[GetEmbeddingDocumentsBodyQueryVector] = None,
        file_ids: typing.Optional[GetEmbeddingDocumentsBodyFileIds] = None,
        parent_file_ids: typing.Optional[GetEmbeddingDocumentsBodyParentFileIds] = None,
        tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = None,
        include_tags: typing.Optional[typing.Optional[bool]] = None,
        include_vectors: typing.Optional[typing.Optional[bool]] = None,
        include_raw_file: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search_tuning_parameters: typing.Optional[HybridSearchTuningParamsNullable] = None,
        media_type: typing.Optional[FileContentTypesNullable] = None,
        embedding_model: typing.Optional[EmbeddingGeneratorsNullable] = None,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _body = {}
        if tags is not None:
            _body["tags"] = tags
        if query is not None:
            _body["query"] = query
        if query_vector is not None:
            _body["query_vector"] = query_vector
        if k is not None:
            _body["k"] = k
        if file_ids is not None:
            _body["file_ids"] = file_ids
        if parent_file_ids is not None:
            _body["parent_file_ids"] = parent_file_ids
        if tags_v2 is not None:
            _body["tags_v2"] = tags_v2
        if include_tags is not None:
            _body["include_tags"] = include_tags
        if include_vectors is not None:
            _body["include_vectors"] = include_vectors
        if include_raw_file is not None:
            _body["include_raw_file"] = include_raw_file
        if hybrid_search is not None:
            _body["hybrid_search"] = hybrid_search
        if hybrid_search_tuning_parameters is not None:
            _body["hybrid_search_tuning_parameters"] = hybrid_search_tuning_parameters
        if media_type is not None:
            _body["media_type"] = media_type
        if embedding_model is not None:
            _body["embedding_model"] = embedding_model
        args.body = _body
        return args

    async def _aget_documents_oapg(
        self,
        body: typing.Any = None,
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        content_type: str = 'application/json',
        stream: bool = False,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        """
        Embeddings
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        used_path = path.value
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'post'.upper()
        _headers.add('Content-Type', content_type)
    
        if body is schemas.unset:
            raise exceptions.ApiValueError(
                'The required body parameter has an invalid value of: unset. Set a valid value instead')
        _fields = None
        _body = None
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_get_embedding_documents_body.serialize(body, content_type)
        if 'fields' in serialized_data:
            _fields = serialized_data['fields']
        elif 'body' in serialized_data:
            _body = serialized_data['body']
    
        response = await self.api_client.async_call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            fields=_fields,
            serialized_body=_body,
            body=body,
            auth_settings=_auth,
            timeout=timeout,
            **kwargs
        )
    
        if stream:
            if not 200 <= response.http_response.status <= 299:
                body = (await response.http_response.content.read()).decode("utf-8")
                raise exceptions.ApiStreamingException(
                    status=response.http_response.status,
                    reason=response.http_response.reason,
                    body=body,
                )
    
            async def stream_iterator():
                """
                iterates over response.http_response.content and closes connection once iteration has finished
                """
                async for line in response.http_response.content:
                    if line == b'\r\n':
                        continue
                    yield line
                response.http_response.close()
                await response.session.close()
            return AsyncGeneratorResponse(
                content=stream_iterator(),
                headers=response.http_response.headers,
                status=response.http_response.status,
                response=response.http_response
            )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = await response_for_status.deserialize_async(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserializationAsync(
                body=await response.http_response.json() if is_json else await response.http_response.text(),
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        # cleanup session / response
        response.http_response.close()
        await response.session.close()
    
        return api_response


    def _get_documents_oapg(
        self,
        body: typing.Any = None,
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        content_type: str = 'application/json',
        stream: bool = False,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """
        Embeddings
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        used_path = path.value
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'post'.upper()
        _headers.add('Content-Type', content_type)
    
        if body is schemas.unset:
            raise exceptions.ApiValueError(
                'The required body parameter has an invalid value of: unset. Set a valid value instead')
        _fields = None
        _body = None
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_get_embedding_documents_body.serialize(body, content_type)
        if 'fields' in serialized_data:
            _fields = serialized_data['fields']
        elif 'body' in serialized_data:
            _body = serialized_data['body']
    
        response = self.api_client.call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            fields=_fields,
            serialized_body=_body,
            body=body,
            auth_settings=_auth,
            timeout=timeout,
        )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = response_for_status.deserialize(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserialization(
                body=json.loads(response.http_response.data) if is_json else response.http_response.data,
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        return api_response


class GetDocumentsRaw(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def aget_documents(
        self,
        query: str,
        k: int,
        tags: typing.Optional[GetEmbeddingDocumentsBodyTags] = None,
        query_vector: typing.Optional[GetEmbeddingDocumentsBodyQueryVector] = None,
        file_ids: typing.Optional[GetEmbeddingDocumentsBodyFileIds] = None,
        parent_file_ids: typing.Optional[GetEmbeddingDocumentsBodyParentFileIds] = None,
        tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = None,
        include_tags: typing.Optional[typing.Optional[bool]] = None,
        include_vectors: typing.Optional[typing.Optional[bool]] = None,
        include_raw_file: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search_tuning_parameters: typing.Optional[HybridSearchTuningParamsNullable] = None,
        media_type: typing.Optional[FileContentTypesNullable] = None,
        embedding_model: typing.Optional[EmbeddingGeneratorsNullable] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_documents_mapped_args(
            query=query,
            k=k,
            tags=tags,
            query_vector=query_vector,
            file_ids=file_ids,
            parent_file_ids=parent_file_ids,
            tags_v2=tags_v2,
            include_tags=include_tags,
            include_vectors=include_vectors,
            include_raw_file=include_raw_file,
            hybrid_search=hybrid_search,
            hybrid_search_tuning_parameters=hybrid_search_tuning_parameters,
            media_type=media_type,
            embedding_model=embedding_model,
        )
        return await self._aget_documents_oapg(
            body=args.body,
            **kwargs,
        )
    
    def get_documents(
        self,
        query: str,
        k: int,
        tags: typing.Optional[GetEmbeddingDocumentsBodyTags] = None,
        query_vector: typing.Optional[GetEmbeddingDocumentsBodyQueryVector] = None,
        file_ids: typing.Optional[GetEmbeddingDocumentsBodyFileIds] = None,
        parent_file_ids: typing.Optional[GetEmbeddingDocumentsBodyParentFileIds] = None,
        tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = None,
        include_tags: typing.Optional[typing.Optional[bool]] = None,
        include_vectors: typing.Optional[typing.Optional[bool]] = None,
        include_raw_file: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search_tuning_parameters: typing.Optional[HybridSearchTuningParamsNullable] = None,
        media_type: typing.Optional[FileContentTypesNullable] = None,
        embedding_model: typing.Optional[EmbeddingGeneratorsNullable] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._get_documents_mapped_args(
            query=query,
            k=k,
            tags=tags,
            query_vector=query_vector,
            file_ids=file_ids,
            parent_file_ids=parent_file_ids,
            tags_v2=tags_v2,
            include_tags=include_tags,
            include_vectors=include_vectors,
            include_raw_file=include_raw_file,
            hybrid_search=hybrid_search,
            hybrid_search_tuning_parameters=hybrid_search_tuning_parameters,
            media_type=media_type,
            embedding_model=embedding_model,
        )
        return self._get_documents_oapg(
            body=args.body,
        )

class GetDocuments(BaseApi):

    async def aget_documents(
        self,
        query: str,
        k: int,
        tags: typing.Optional[GetEmbeddingDocumentsBodyTags] = None,
        query_vector: typing.Optional[GetEmbeddingDocumentsBodyQueryVector] = None,
        file_ids: typing.Optional[GetEmbeddingDocumentsBodyFileIds] = None,
        parent_file_ids: typing.Optional[GetEmbeddingDocumentsBodyParentFileIds] = None,
        tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = None,
        include_tags: typing.Optional[typing.Optional[bool]] = None,
        include_vectors: typing.Optional[typing.Optional[bool]] = None,
        include_raw_file: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search_tuning_parameters: typing.Optional[HybridSearchTuningParamsNullable] = None,
        media_type: typing.Optional[FileContentTypesNullable] = None,
        embedding_model: typing.Optional[EmbeddingGeneratorsNullable] = None,
        validate: bool = False,
        **kwargs,
    ) -> DocumentResponseListPydantic:
        raw_response = await self.raw.aget_documents(
            query=query,
            k=k,
            tags=tags,
            query_vector=query_vector,
            file_ids=file_ids,
            parent_file_ids=parent_file_ids,
            tags_v2=tags_v2,
            include_tags=include_tags,
            include_vectors=include_vectors,
            include_raw_file=include_raw_file,
            hybrid_search=hybrid_search,
            hybrid_search_tuning_parameters=hybrid_search_tuning_parameters,
            media_type=media_type,
            embedding_model=embedding_model,
            **kwargs,
        )
        if validate:
            return DocumentResponseListPydantic(**raw_response.body)
        return api_client.construct_model_instance(DocumentResponseListPydantic, raw_response.body)
    
    
    def get_documents(
        self,
        query: str,
        k: int,
        tags: typing.Optional[GetEmbeddingDocumentsBodyTags] = None,
        query_vector: typing.Optional[GetEmbeddingDocumentsBodyQueryVector] = None,
        file_ids: typing.Optional[GetEmbeddingDocumentsBodyFileIds] = None,
        parent_file_ids: typing.Optional[GetEmbeddingDocumentsBodyParentFileIds] = None,
        tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = None,
        include_tags: typing.Optional[typing.Optional[bool]] = None,
        include_vectors: typing.Optional[typing.Optional[bool]] = None,
        include_raw_file: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search_tuning_parameters: typing.Optional[HybridSearchTuningParamsNullable] = None,
        media_type: typing.Optional[FileContentTypesNullable] = None,
        embedding_model: typing.Optional[EmbeddingGeneratorsNullable] = None,
        validate: bool = False,
    ) -> DocumentResponseListPydantic:
        raw_response = self.raw.get_documents(
            query=query,
            k=k,
            tags=tags,
            query_vector=query_vector,
            file_ids=file_ids,
            parent_file_ids=parent_file_ids,
            tags_v2=tags_v2,
            include_tags=include_tags,
            include_vectors=include_vectors,
            include_raw_file=include_raw_file,
            hybrid_search=hybrid_search,
            hybrid_search_tuning_parameters=hybrid_search_tuning_parameters,
            media_type=media_type,
            embedding_model=embedding_model,
        )
        if validate:
            return DocumentResponseListPydantic(**raw_response.body)
        return api_client.construct_model_instance(DocumentResponseListPydantic, raw_response.body)


class ApiForpost(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def apost(
        self,
        query: str,
        k: int,
        tags: typing.Optional[GetEmbeddingDocumentsBodyTags] = None,
        query_vector: typing.Optional[GetEmbeddingDocumentsBodyQueryVector] = None,
        file_ids: typing.Optional[GetEmbeddingDocumentsBodyFileIds] = None,
        parent_file_ids: typing.Optional[GetEmbeddingDocumentsBodyParentFileIds] = None,
        tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = None,
        include_tags: typing.Optional[typing.Optional[bool]] = None,
        include_vectors: typing.Optional[typing.Optional[bool]] = None,
        include_raw_file: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search_tuning_parameters: typing.Optional[HybridSearchTuningParamsNullable] = None,
        media_type: typing.Optional[FileContentTypesNullable] = None,
        embedding_model: typing.Optional[EmbeddingGeneratorsNullable] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_documents_mapped_args(
            query=query,
            k=k,
            tags=tags,
            query_vector=query_vector,
            file_ids=file_ids,
            parent_file_ids=parent_file_ids,
            tags_v2=tags_v2,
            include_tags=include_tags,
            include_vectors=include_vectors,
            include_raw_file=include_raw_file,
            hybrid_search=hybrid_search,
            hybrid_search_tuning_parameters=hybrid_search_tuning_parameters,
            media_type=media_type,
            embedding_model=embedding_model,
        )
        return await self._aget_documents_oapg(
            body=args.body,
            **kwargs,
        )
    
    def post(
        self,
        query: str,
        k: int,
        tags: typing.Optional[GetEmbeddingDocumentsBodyTags] = None,
        query_vector: typing.Optional[GetEmbeddingDocumentsBodyQueryVector] = None,
        file_ids: typing.Optional[GetEmbeddingDocumentsBodyFileIds] = None,
        parent_file_ids: typing.Optional[GetEmbeddingDocumentsBodyParentFileIds] = None,
        tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = None,
        include_tags: typing.Optional[typing.Optional[bool]] = None,
        include_vectors: typing.Optional[typing.Optional[bool]] = None,
        include_raw_file: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search: typing.Optional[typing.Optional[bool]] = None,
        hybrid_search_tuning_parameters: typing.Optional[HybridSearchTuningParamsNullable] = None,
        media_type: typing.Optional[FileContentTypesNullable] = None,
        embedding_model: typing.Optional[EmbeddingGeneratorsNullable] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._get_documents_mapped_args(
            query=query,
            k=k,
            tags=tags,
            query_vector=query_vector,
            file_ids=file_ids,
            parent_file_ids=parent_file_ids,
            tags_v2=tags_v2,
            include_tags=include_tags,
            include_vectors=include_vectors,
            include_raw_file=include_raw_file,
            hybrid_search=hybrid_search,
            hybrid_search_tuning_parameters=hybrid_search_tuning_parameters,
            media_type=media_type,
            embedding_model=embedding_model,
        )
        return self._get_documents_oapg(
            body=args.body,
        )
