import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CornerstoneOnDemandTalentLinkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="cornerstone-on-demand-typescript-sdk"
      metaDescription={`Cornerstone OnDemand provides comprehensive talent management solutions to help organizations recruit, develop, and retain top talent. Their cloud-based platform offers tools for learning, performance, and HR management, empowering businesses to drive employee engagement and success.`}
      company="Cornerstone OnDemand"
      serviceName="TalentLink"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cornerstone-ondemand/talent-link/logo.png"
      companyKebabCase="cornerstone-on-demand"
      clientNameCamelCase="cornerstoneOnDemand"
      homepage="www.cornerstoneondemand.com"
      lastUpdated={new Date("2024-03-27T23:11:26.311Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cornerstone-ondemand/talent-link/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cornerstone-ondemand/talent-link/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","talent_management"]}
      methods={[
  {
    "url": "/advertisement/generate-token",
    "method": "generateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Advertisements API",
    "typeScriptTag": "advertisementsApi",
    "description": "Allows to generate token to preview the advert which is not yet published",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/advertisement/postings/{jobNumber}",
    "method": "getAdvertsForRequisition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Advertisements API",
    "typeScriptTag": "advertisementsApi",
    "description": "Allows to fetch details of adverts created for a given requisition",
    "parameters": [
      {
        "name": "jobNumber",
        "schema": "string",
        "required": true,
        "description": "jobNumber",
        "example": "JOBNUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of postings"
      }
    ]
  },
  {
    "url": "/agency",
    "method": "listAgencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "List of agencies",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ agencies(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {agencyId_gt: 0}) { agencyId } }"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/application",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application API",
    "typeScriptTag": "applicationApi",
    "description": "List of applications",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ applications(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/application/available-statuses",
    "method": "getStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application API",
    "typeScriptTag": "applicationApi",
    "description": "retrieves application statuses",
    "parameters": [
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to retrieve application statuses"
      }
    ]
  },
  {
    "url": "/application/status",
    "method": "updateStatusById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application API",
    "typeScriptTag": "applicationApi",
    "description": "Updates application status",
    "parameters": [
      {
        "name": "newStatuses",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to change application status"
      }
    ]
  },
  {
    "url": "/application/{applicationId}/update-application-context",
    "method": "generateJwtToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application API",
    "typeScriptTag": "applicationApi",
    "description": "Generates JWT token to be used in Apply API for updating an existing general application in TLK",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/assessment-provider/results-template/{systemName}",
    "method": "getResultsTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assessment Provider API",
    "typeScriptTag": "assessmentProviderApi",
    "description": "Method returns the structure of a form to be used for uploading results",
    "parameters": [
      {
        "name": "systemName",
        "schema": "string",
        "required": true,
        "description": "systemName",
        "example": "SYSTEMNAME"
      },
      {
        "name": "showLocalizedValue",
        "schema": "boolean",
        "required": false,
        "description": "showLocalizedValue"
      },
      {
        "name": "localizedValueLangCode",
        "schema": "string",
        "required": false,
        "description": "localizedValueLangCode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment-provider/submit-report",
    "method": "submitReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment Provider API",
    "typeScriptTag": "assessmentProviderApi",
    "description": "Allows an assessment provider to submit a physical file containing a report of the candidate's assessment.",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "report",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "Report submitted"
      }
    ]
  },
  {
    "url": "/assessment-provider/submit-resource",
    "method": "submitResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment Provider API",
    "typeScriptTag": "assessmentProviderApi",
    "description": "Allows to pass the assessment URL to TalentLink",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendCandidateEmailWithoutUrl",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment-provider/submit-results",
    "method": "submitResultsForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment Provider API",
    "typeScriptTag": "assessmentProviderApi",
    "description": "Allows an assessment provider to submit a structured document (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference containing results.",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "results",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment-provider/submit-status",
    "method": "updateAssessmentStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment Provider API",
    "typeScriptTag": "assessmentProviderApi",
    "description": "Allows an assessment provider to update the status of a candidate's assessment & selection step.",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaign/type",
    "method": "assignCampaignTypesToCandidates",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Campaign API",
    "typeScriptTag": "campaignApi",
    "description": "Assign campaign types to candidates",
    "parameters": [
      {
        "name": "candidateIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "campaignTypeIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Campaign types successfully assigned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      }
    ]
  },
  {
    "url": "/candidate",
    "method": "listCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "List of candidates",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ candidates(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidate",
    "method": "createCandidateRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Creates Candidate",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractor",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "initialType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "middlename",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "academicTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "srcChannelName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "origin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creation",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "update",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "socialSecurityNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymous",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "formOfAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "personalData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creationUser",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "updateUser",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceChannelType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sourcingMedium",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "uiLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataPrivacyStatement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expectedArchiving",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "linkedInId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partiallyDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "internalCandidateId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "candidateConsents",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "openingId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "poolId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "campaignTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "referrer",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Candidate successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/candidate/application/score",
    "method": "updateApplicationScore",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Update Candidate Application Score",
    "parameters": [
      {
        "name": "info",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "system",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SYSTEM"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "populateScoreToChildApplications",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Candidate application score successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/candidate/archive/mark",
    "method": "markForArchiving",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Mark candidates for archiving",
    "parameters": [
      {
        "name": "candidatesIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/candidate/archive/unmark",
    "method": "unmarkFromArchiving",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Unmark candidates from archiving",
    "parameters": [
      {
        "name": "candidatesIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/candidate/attachment/{documentId}",
    "method": "downloadAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Download candidate attachment file",
    "parameters": [
      {
        "name": "documentId",
        "schema": "integer",
        "required": true,
        "description": "Id of attachment document",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to this document"
      }
    ]
  },
  {
    "url": "/candidate/consent",
    "method": "getConsents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "List of consents",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ consents (first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to candidate consent"
      }
    ]
  },
  {
    "url": "/candidate/document/{documentId}",
    "method": "downloadDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Download candidate document",
    "parameters": [
      {
        "name": "documentId",
        "schema": "integer",
        "required": true,
        "description": "Id of attachment document",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to this document"
      }
    ]
  },
  {
    "url": "/candidate/email-document/attachment/{attachmentId}",
    "method": "getCompleteEmailDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Fetch complete email documents (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "parameters": [
      {
        "name": "attachmentId",
        "schema": "integer",
        "required": true,
        "description": "Id of attachment",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Attachment found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to this attachment"
      }
    ]
  },
  {
    "url": "/candidate/email-document/{documentId}",
    "method": "getEmailDocumentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Get details about candidate email document for provided ID",
    "parameters": [
      {
        "name": "documentId",
        "schema": "integer",
        "required": true,
        "description": "Id of email document",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to this document"
      }
    ]
  },
  {
    "url": "/candidate/form-document/{documentId}",
    "method": "getDocumentAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Get answers from candidate documents",
    "parameters": [
      {
        "name": "documentId",
        "schema": "integer",
        "required": true,
        "description": "Id of document",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to this document"
      }
    ]
  },
  {
    "url": "/candidate/structured-document/{documentId}",
    "method": "getDocumentAnswerById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Get document with answer for specified id",
    "parameters": [
      {
        "name": "documentId",
        "schema": "integer",
        "required": true,
        "description": "Id of document",
        "example": 0
      },
      {
        "name": "showLocalizedValues",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have access to this document"
      }
    ]
  },
  {
    "url": "/candidate/summary/{templateType}",
    "method": "getSummaryStructure",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Fetch Candidate summary structure for a given template type or candidate type",
    "parameters": [
      {
        "name": "templateType",
        "schema": "string",
        "required": true,
        "description": " it can accept following values: candidate, employee, externalContractor, internalContractor.",
        "example": "TEMPLATETYPE"
      },
      {
        "name": "localizedValueLangCode",
        "schema": "string",
        "required": false,
        "description": " language parameter"
      },
      {
        "name": "showLocalizedValue",
        "schema": "boolean",
        "required": false,
        "description": " this parameters controls whether the field values display localized or unlocalized values. Possible values: true, false."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate summary definition successfully returned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to Candidate Summary"
      },
      {
        "statusCode": "404",
        "description": "Template not found"
      }
    ]
  },
  {
    "url": "/candidate/{candidateId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Delete candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Id of the candidate",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/candidate/{candidateId}/consent",
    "method": "updateConsent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Update the candidate consent",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Id of the candidate",
        "example": 0
      },
      {
        "name": "consentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Consent updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update consent"
      }
    ]
  },
  {
    "url": "/candidate/{candidateId}/linktojob",
    "method": "linkToJob",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Link candidate to one or more jobs",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Id of candidate which will be linked to job/s",
        "example": 0
      },
      {
        "name": "requisitionIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copyAllDocuments",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "documentsIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate linked"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to link candidate"
      }
    ]
  },
  {
    "url": "/candidate/{candidateId}/referral/{referralId}",
    "method": "updateReferralInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Update Referral Info",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Id of candidate whom Referrer data will be updated",
        "example": 0
      },
      {
        "name": "referralId",
        "schema": "integer",
        "required": true,
        "description": "Id of Referral to be updated",
        "example": 0
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeCompany",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Referral data successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update candidate summary"
      }
    ]
  },
  {
    "url": "/candidate/{candidateId}/summary",
    "method": "getSummaryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Fetch candidate summary for a given Candidate.",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Id of candidate whom candidate summary is requested",
        "example": 0
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": "Language of localized values"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate summary successfully returned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to candidate summary of candidate"
      }
    ]
  },
  {
    "url": "/candidate/{candidateId}/summary",
    "method": "updateSummary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Update Candidate Summary",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Id of candidate whom candidate summary will be updated",
        "example": 0
      },
      {
        "name": "questionsAnswered",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Candidate summary successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update candidate summary"
      }
    ]
  },
  {
    "url": "/candidate/{candidateId}/summary/definition",
    "method": "getEmptySummaryDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Fetch empty Candidate Summary structure for existing candidate. Useful for updating candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Id of candidate whom candidate summary is requested",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate summary definition successfully returned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to Candidate Summary Definition"
      }
    ]
  },
  {
    "url": "/candidate/{id}/tag",
    "method": "addTagToCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Add tag to candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "candidate id",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "description": ""
      },
      {
        "name": "department",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Tag added to candidate."
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/candidate/{id}/tag/{tagId}",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Remove tag from candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "candidate id",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "document",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Tag removed from candidate."
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/candidate/{id}/upload/document",
    "method": "uploadDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API",
    "typeScriptTag": "candidateApi",
    "description": "Upload candidate document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "candidate id",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME"
      },
      {
        "name": "docType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCTYPE"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "base64File",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BASE64FILE"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File uploaded."
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to perform this operation"
      }
    ]
  },
  {
    "url": "/candidatepool",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate Pools",
    "typeScriptTag": "candidatePools",
    "description": "Returns the list of shared candidate pools available to the user",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ candidatePools(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidatepool",
    "method": "createNewShared",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate Pools",
    "typeScriptTag": "candidatePools",
    "description": "Method to create a new, shared Candidate Pool",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "outOfMatching",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Candidate Pool was successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User has no right Can Manage Candidate Pools via Rest API (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference for the given department"
      }
    ]
  },
  {
    "url": "/candidatepool/{poolId}",
    "method": "updateExistingPool",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate Pools",
    "typeScriptTag": "candidatePools",
    "description": "allows to update or delete existing pool",
    "parameters": [
      {
        "name": "poolId",
        "schema": "integer",
        "required": true,
        "description": "candidatepool id",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "outOfMatching",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Candidate Pool was successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User has no right Can Manage Candidate Pools via Rest API (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference for the given department"
      },
      {
        "statusCode": "404",
        "description": "Candidate Pool not found"
      }
    ]
  },
  {
    "url": "/contract",
    "method": "listContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "List of contracts",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ contracts(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contract",
    "method": "createNewContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Creates a new contract",
    "parameters": [
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "acceptApproved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "administrativeComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plannedStartDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plannedEndDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "workPeriod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bonusCondition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "length",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lengthUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractorDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConcurrentContracts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allowHeadCountSkip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "freeFormFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalProcess",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "midPeriodsConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "409",
        "description": "Contract for given application already exists"
      },
      {
        "statusCode": "412",
        "description": "Contract for given application cannot be created"
      }
    ]
  },
  {
    "url": "/contract/rateset",
    "method": "listRateSets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "List of rate formula set",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ ratesFormulas(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contract/{contractId}",
    "method": "deleteContractExtension",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Delete a Contract Extension",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "Id of the contract's extension to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Contract extension successfully deleted"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Contract with given id does not exist"
      }
    ]
  },
  {
    "url": "/contract/{contractId}/extension",
    "method": "createExtension",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Create a new Contract Extension based on contract values, using PATCH logic (provide only elements that are changing)",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "Id of the contract's current version",
        "example": 0
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "acceptApproved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "administrativeComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plannedStartDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plannedEndDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "workPeriod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bonusCondition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "length",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lengthUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractorDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConcurrentContracts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allowHeadCountSkip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "freeFormFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalProcess",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "midPeriodsConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Contract with given id does not exist"
      },
      {
        "statusCode": "412",
        "description": "Contract for given application cannot be extended"
      }
    ]
  },
  {
    "url": "/contract/{contractId}/extension",
    "method": "createExtension",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Create a new Contract Extension",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "Id of the contract's current version",
        "example": 0
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "acceptApproved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "administrativeComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plannedStartDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plannedEndDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "workPeriod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bonusCondition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "length",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lengthUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractorDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConcurrentContracts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allowHeadCountSkip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "freeFormFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalProcess",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "midPeriodsConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Contract with given id does not exist"
      },
      {
        "statusCode": "412",
        "description": "Contract for given application cannot be extended"
      }
    ]
  },
  {
    "url": "/contract/{contractId}/update",
    "method": "updateContractUsingPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Update contract using PATCH logic (provide only elements that are changing)",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "Id of the contract's current version",
        "example": 0
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "acceptApproved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "administrativeComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plannedStartDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plannedEndDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "workPeriod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bonusCondition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "length",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lengthUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractorDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConcurrentContracts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allowHeadCountSkip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "freeFormFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalProcess",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "midPeriodsConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Contract with given id does not exist"
      },
      {
        "statusCode": "409",
        "description": "Contract for given id is not the current version"
      },
      {
        "statusCode": "412",
        "description": "Contract for given application cannot be updated"
      }
    ]
  },
  {
    "url": "/contract/{contractId}/update",
    "method": "updateContractEntireStructure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Update existing contract (creates new contract version) - entire structure is required",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "Id of the contract's current version",
        "example": 0
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "acceptApproved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "administrativeComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plannedStartDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plannedEndDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "workPeriod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bonusCondition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "length",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lengthUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractorDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConcurrentContracts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allowHeadCountSkip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "freeFormFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalProcess",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "midPeriodsConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Contract with given id does not exist"
      },
      {
        "statusCode": "409",
        "description": "Contract for given id is not the current version"
      },
      {
        "statusCode": "412",
        "description": "Contract for given application cannot be updated"
      }
    ]
  },
  {
    "url": "/contract/{extensionId}/extension/update",
    "method": "updateExtensionUsingPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Update extension using PATCH logic (provide only elements that are changing)",
    "parameters": [
      {
        "name": "extensionId",
        "schema": "integer",
        "required": true,
        "description": "Id of the contract's extension",
        "example": 0
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "acceptApproved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "administrativeComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plannedStartDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plannedEndDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "workPeriod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bonusCondition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "length",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lengthUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractorDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConcurrentContracts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allowHeadCountSkip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "freeFormFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalProcess",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "midPeriodsConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Contract with given id does not exist"
      },
      {
        "statusCode": "412",
        "description": "Contract for given application cannot be extended"
      }
    ]
  },
  {
    "url": "/contract/{extensionId}/extension/update",
    "method": "updateExtension",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Update existing extension (creates new extension version) - entire structure is required",
    "parameters": [
      {
        "name": "extensionId",
        "schema": "integer",
        "required": true,
        "description": "Id of the contract's extension",
        "example": 0
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "acceptApproved",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "administrativeComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plannedStartDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plannedEndDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workAmount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "workPeriod",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bonusCondition",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "length",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lengthUnit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "permanentDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractorDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "allowConcurrentContracts",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "allowHeadCountSkip",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "freeFormFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalProcess",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "timesheetConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "midPeriodsConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contract successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Contract with given id does not exist"
      },
      {
        "statusCode": "412",
        "description": "Contract for given application cannot be extended"
      }
    ]
  },
  {
    "url": "/department",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Department API",
    "typeScriptTag": "departmentApi",
    "description": "List of departments",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ departments(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/department",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Department API",
    "typeScriptTag": "departmentApi",
    "description": "Creates a new department",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "documentSecurityRule",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "dataPrivacyStatement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataPrivacyStatementForHires",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitationValidity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "currencyCost",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hideDateOfBirth",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "searchByAgeEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "parentId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "translations",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "keyNameId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ofccpMaxCandidates",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "enforceInviteToExpressInterest",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "activateSearchRecording",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ofccpLinkToJobShowJobs",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "enforceSalaryRangeCheck",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "mobileAccess",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "themes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSignatureID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "letterSignatureID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "awdOwner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "awdReminderID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "awdReminderPeriod",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "awdQualifyExpiresReminderID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "calendarEventWsIntegrationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useAccountCalendarEventWsIntegrationURL",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "enforceSalaryRangeCheckApproval",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ratingScaleId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "impJobDescAvailable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "encryptApplicants",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "rejectionReasonRequired",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobileMDMAccess",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "departmentConfig",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Department successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/department/{departmentId}",
    "method": "deleteDepartmentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Department API",
    "typeScriptTag": "departmentApi",
    "description": "Deletes a department with the given id",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "department id to be deleted",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Entity not found"
      }
    ]
  },
  {
    "url": "/department/{departmentId}",
    "method": "updateDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Department API",
    "typeScriptTag": "departmentApi",
    "description": "Updates an existing department",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "department id to be updated",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "documentSecurityRule",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "dataPrivacyStatement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataPrivacyStatementForHires",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invitationValidity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "currencyCost",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hideDateOfBirth",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "searchByAgeEnabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "parentId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "translations",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "keyNameId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ofccpMaxCandidates",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "enforceInviteToExpressInterest",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "activateSearchRecording",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ofccpLinkToJobShowJobs",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "enforceSalaryRangeCheck",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "mobileAccess",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "themes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSignatureID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "letterSignatureID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "awdOwner",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "awdReminderID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "awdReminderPeriod",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "awdQualifyExpiresReminderID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "calendarEventWsIntegrationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useAccountCalendarEventWsIntegrationURL",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "enforceSalaryRangeCheckApproval",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ratingScaleId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "impJobDescAvailable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "encryptApplicants",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "rejectionReasonRequired",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobileMDMAccess",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "departmentConfig",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Department successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Department with a given id does not exists"
      }
    ]
  },
  {
    "url": "/department/{departmentId}/activate",
    "method": "activateDepartmentById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Department API",
    "typeScriptTag": "departmentApi",
    "description": "Activates a department with the given id",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "department to be activated with a given id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Entity not found"
      }
    ]
  },
  {
    "url": "/department/{departmentId}/contractorcontract/config",
    "method": "getTemporaryContractConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Fetch configuration of the Temporary contract",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "userType",
        "example": "USERTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/department/{departmentId}/deactivate",
    "method": "deactivateDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Department API",
    "typeScriptTag": "departmentApi",
    "description": "Deactivates a department with the given id",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "department to be deactivated with a given id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Entity not found"
      }
    ]
  },
  {
    "url": "/department/{departmentId}/job-template/config",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Personal job template API",
    "typeScriptTag": "personalJobTemplateApi",
    "description": "Fetch Job template configuration for a given Department.",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department id",
        "example": 0
      },
      {
        "name": "recruitmentContext",
        "schema": "string",
        "required": false,
        "description": "Recruitment context"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": false,
        "description": "User type: ADVANCED, MSS"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "Language"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Personal job template configuration successfully returned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Job template not found"
      }
    ]
  },
  {
    "url": "/department/{departmentId}/move",
    "method": "moveDepartmentToNewParent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Department API",
    "typeScriptTag": "departmentApi",
    "description": "Moves a department with the given id to another parent with a destination id",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "department to be moved with a given id",
        "example": 0
      },
      {
        "name": "newParentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Entity not found"
      }
    ]
  },
  {
    "url": "/department/{departmentId}/permanentcontract/config",
    "method": "getPermanentContractConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract API",
    "typeScriptTag": "contractApi",
    "description": "Fetch configuration of the Permanent contract",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "userType",
        "example": "USERTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/department/{userId}/job-template",
    "method": "assignOrUpdateJobTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Personal job template API",
    "typeScriptTag": "personalJobTemplateApi",
    "description": "Assign or Update a job template for a given User.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User id",
        "example": 0
      },
      {
        "name": "creationDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "lastUpdate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "requisitionNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "headCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "renewal",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "contractComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recruitmentContext",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECRUITMENTCONTEXT"
      },
      {
        "name": "workTime",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "authorizedRecruitment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "configurableFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "team",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Personal job template successfully updated"
      },
      {
        "statusCode": "201",
        "description": "Personal job template successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Job template not found"
      }
    ]
  },
  {
    "url": "/internal-message",
    "method": "getMessageList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Internal Message API",
    "typeScriptTag": "internalMessageApi",
    "description": "List of internal messages",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ internalMessages(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {receiverUser_eq: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/internal-message",
    "method": "sendNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Internal Message API",
    "typeScriptTag": "internalMessageApi",
    "description": "Send new message",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "receiverUserId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "senderUserId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sendAsSystem",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Internal message successfully sent"
      },
      {
        "statusCode": "400",
        "description": "Internal message parameters are invalid"
      }
    ]
  },
  {
    "url": "/internal-message/archive",
    "method": "archiveMessageById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Internal Message API",
    "typeScriptTag": "internalMessageApi",
    "description": "Archive internal message",
    "parameters": [
      {
        "name": "internalMessageIds",
        "schema": "array",
        "required": true,
        "description": "archiveInternalMessage"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Internal message successfully archived"
      },
      {
        "statusCode": "400",
        "description": "Internal message parameters are invalid"
      }
    ]
  },
  {
    "url": "/interview/location",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interview Location API",
    "typeScriptTag": "interviewLocationApi",
    "description": "List of interview locations",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ locations(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/interview/location",
    "method": "createNewLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Location API",
    "typeScriptTag": "interviewLocationApi",
    "description": "Creates Location",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "address1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS1"
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "zipcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY"
      },
      {
        "name": "room",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "local",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "standard",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Location successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "Credentials not provided"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create a interview location"
      }
    ]
  },
  {
    "url": "/interview/location/timezones",
    "method": "listTimezones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interview Location API",
    "typeScriptTag": "interviewLocationApi",
    "description": "List of available timezones",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ timezones (where: { name_like: \"Europe\", name_notLike: \"Europe/Warsaw\" }) { name } }"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/interview/location/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Interview Location API",
    "typeScriptTag": "interviewLocationApi",
    "description": "Delete location",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "location successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/interview/location/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Interview Location API",
    "typeScriptTag": "interviewLocationApi",
    "description": "Update Location",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "address1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS1"
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "zipcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY"
      },
      {
        "name": "room",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "local",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "standard",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "departments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Location successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "Credentials not provided"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update a interview location"
      }
    ]
  },
  {
    "url": "/location",
    "method": "listLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location API",
    "typeScriptTag": "locationApi",
    "description": "List of Locations",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ locations(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/location",
    "method": "createLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Location API",
    "typeScriptTag": "locationApi",
    "description": "Creates Location",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCodeAlpha2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCodeAlpha3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "regionName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "remote",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Location successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "Credentials not provided"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create a job location"
      },
      {
        "statusCode": "409",
        "description": "Location with provided name already exists"
      }
    ]
  },
  {
    "url": "/location/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Location API",
    "typeScriptTag": "locationApi",
    "description": "Delete location",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "location successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/location/{id}",
    "method": "updateLocationRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Location API",
    "typeScriptTag": "locationApi",
    "description": "Updates Location",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCodeAlpha2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCodeAlpha3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "regionName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "longitude",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "remote",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "countryTranslations",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "regionTranslations",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Location successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "Credentials not provided"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update a job location"
      },
      {
        "statusCode": "409",
        "description": "Another location with provided name already exists"
      }
    ]
  },
  {
    "url": "/lov",
    "method": "getStandardFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LOV API",
    "typeScriptTag": "lovApi",
    "description": "List of standard fields",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ lovs(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/lov/configurable",
    "method": "createConfigurableFieldWithEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LOV API - Configurable LOV",
    "typeScriptTag": "lovApiConfigurableLov",
    "description": "Allows to create a new Configurable Fields with entries",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dataType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create LOV"
      }
    ]
  },
  {
    "url": "/lov/configurable/{lovId}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - Configurable LOV",
    "typeScriptTag": "lovApiConfigurableLov",
    "description": "Allows to update a Configurable Field.",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "nameLovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "valueLovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/configurable/{lovId}/deactivate",
    "method": "deactivateConfigField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LOV API - Configurable LOV",
    "typeScriptTag": "lovApiConfigurableLov",
    "description": "Allows to deactivate entire Configurable Field (with entries).",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Config LOV successfully deactivated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update LOV properties"
      }
    ]
  },
  {
    "url": "/lov/configurable/{lovId}/entry",
    "method": "deleteEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LOV API - Configurable LOV",
    "typeScriptTag": "lovApiConfigurableLov",
    "description": "Allows to delete one or more entries from an existing Configurable Field.",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entriesIds",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entries successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to delete entry from LOV"
      }
    ]
  },
  {
    "url": "/lov/configurable/{lovId}/properties",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - Configurable LOV",
    "typeScriptTag": "lovApiConfigurableLov",
    "description": "Allows to update properties of the Configurable Field",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "requisitionSections",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "updatable",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInPostingExtract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInApplicationExtract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "fieldType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useInOpeningPermanent",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInOpeningContractor",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInPermanentContract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInTemporaryContract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "imageLibrary",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "searchable",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "filterable",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibleInReports",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV properties successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update LOV properties"
      }
    ]
  },
  {
    "url": "/lov/configurable/{parentId}/entry",
    "method": "updateEntries",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - Configurable LOV",
    "typeScriptTag": "lovApiConfigurableLov",
    "description": "Allows to update one or more entries in an Configurable LOV",
    "parameters": [
      {
        "name": "parentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entries successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/configurable/{parentId}/entry",
    "method": "createEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LOV API - Configurable LOV",
    "typeScriptTag": "lovApiConfigurableLov",
    "description": "Allows to create a new Configurable Field entries",
    "parameters": [
      {
        "name": "parentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entry successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/free-form-field",
    "method": "createNewLovWithEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LOV API - Free Form Field LOV",
    "typeScriptTag": "lovApiFreeFormFieldLov",
    "description": "Allows to create a new Free Form Field with entries",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create LOV"
      }
    ]
  },
  {
    "url": "/lov/free-form-field/{lovId}",
    "method": "updateEntry",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - Free Form Field LOV",
    "typeScriptTag": "lovApiFreeFormFieldLov",
    "description": "Allows to update a Free Form Field LOV",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "nameLovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "valueLovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update LOV"
      }
    ]
  },
  {
    "url": "/lov/free-form-field/{lovId}/deactivate",
    "method": "deactivateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LOV API - Free Form Field LOV",
    "typeScriptTag": "lovApiFreeFormFieldLov",
    "description": "Allows to deactivate Free Form Field",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Free Form Field LOV successfully deactivated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update LOV properties"
      }
    ]
  },
  {
    "url": "/lov/free-form-field/{lovId}/entry",
    "method": "deleteEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LOV API - Free Form Field LOV",
    "typeScriptTag": "lovApiFreeFormFieldLov",
    "description": "Allows to delete one or more entries from an existing Free Form Field LOV",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entriesIds",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "FreeFormField LOV entries successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to delete entry from FreeFormField LOV"
      }
    ]
  },
  {
    "url": "/lov/free-form-field/{lovId}/properties",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - Free Form Field LOV",
    "typeScriptTag": "lovApiFreeFormFieldLov",
    "description": "Allows to update properties of the Free Form Field",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "requisitionSections",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "updatable",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInPostingExtract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInApplicationExtract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "fieldType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useInOpeningPermanent",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInOpeningContractor",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInPermanentContract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "useInTemporaryContract",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "imageLibrary",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "searchable",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "filterable",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accessibleInReports",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV properties successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to update LOV properties"
      }
    ]
  },
  {
    "url": "/lov/free-form-field/{parentId}/entry",
    "method": "updateEntries",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - Free Form Field LOV",
    "typeScriptTag": "lovApiFreeFormFieldLov",
    "description": "Allows to update one or more entries in an Free Form Field",
    "parameters": [
      {
        "name": "parentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entries successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/free-form-field/{parentId}/entry",
    "method": "createNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LOV API - Free Form Field LOV",
    "typeScriptTag": "lovApiFreeFormFieldLov",
    "description": "Allows to create a new Free Form Field entries.",
    "parameters": [
      {
        "name": "parentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entry successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/standard-fields",
    "method": "updateEntry",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - Standard Fields",
    "typeScriptTag": "lovApiStandardFields",
    "description": "Allows to update an entry within a Standard Field using PATCH logic.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "labels",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Lov labels successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to deactivate LOV entry"
      }
    ]
  },
  {
    "url": "/lov/standard-fields",
    "method": "createNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LOV API - Standard Fields",
    "typeScriptTag": "lovApiStandardFields",
    "description": "Allows to create a new entry within an existing Standard Field",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Lov entry successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/standard-fields/deactivate",
    "method": "deactivateEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LOV API - Standard Fields",
    "typeScriptTag": "lovApiStandardFields",
    "description": "Method to deactivate an existing entry in the Standard Field.",
    "parameters": [
      {
        "name": "lovsIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Lov entry successfully deactivated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to deactivate LOV entry"
      }
    ]
  },
  {
    "url": "/lov/user-data",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LOV API - User data",
    "typeScriptTag": "lovApiUserData",
    "description": "Allows to create a new User Data LOV with entries",
    "parameters": [
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/user-data/{lovId}",
    "method": "deleteEntireField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LOV API - User data",
    "typeScriptTag": "lovApiUserData",
    "description": "Allows to delete entire User Data LOV field and its entries",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV and its entries successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/user-data/{lovId}",
    "method": "updateUserDataLov",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - User data",
    "typeScriptTag": "lovApiUserData",
    "description": "Allows to update an User Data LOV",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "nameLovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "valueLovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/user-data/{lovId}/entry",
    "method": "deleteEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LOV API - User data",
    "typeScriptTag": "lovApiUserData",
    "description": "Allows to delete one or more entries from an existing User Data LOV.",
    "parameters": [
      {
        "name": "lovId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entriesIds",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entries successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to delete entry from LOV"
      }
    ]
  },
  {
    "url": "/lov/user-data/{parentId}/entry",
    "method": "updateUserEntries",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LOV API - User data",
    "typeScriptTag": "lovApiUserData",
    "description": "Allows to update one or more entries in an User Data LOV.",
    "parameters": [
      {
        "name": "parentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entries successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/lov/user-data/{parentId}/entry",
    "method": "createNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LOV API - User data",
    "typeScriptTag": "lovApiUserData",
    "description": "Allows to create a new User Data LOV entries",
    "parameters": [
      {
        "name": "parentId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "LOV entry successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create entry in LOV"
      }
    ]
  },
  {
    "url": "/passwordRule",
    "method": "listPasswordRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Password Rule API",
    "typeScriptTag": "passwordRuleApi",
    "description": "List of password rules",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ passwordRule(first: 7, after: 1) { backOffice{userHasToChangePassword} } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/position",
    "method": "listPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Position API",
    "typeScriptTag": "positionApi",
    "description": "List of positions",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ positions(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/position",
    "method": "createPositionRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Position API",
    "typeScriptTag": "positionApi",
    "description": "Creates Position",
    "parameters": [
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "headCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "workTime",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "requisitionNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expectedContractDates",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "renewal",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authorizedRecruitment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "standardRate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "totalCost",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "generalApplication",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "teamComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "budgeted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "encryptApplicants",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "areaOfResponsibility",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "positionType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plainText",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "configurableFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "team",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "descriptionTemplateId",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultJobLocationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobLocationIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFieldSkills",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "removedSkills",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "manuallyAddedSkills",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Position successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to user preferences"
      }
    ]
  },
  {
    "url": "/position/structure/{departmentId}",
    "method": "getStructureForDepartment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Position API",
    "typeScriptTag": "positionApi",
    "description": "Position structure for a given department",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department id",
        "example": 0
      },
      {
        "name": "recruitmentContext",
        "schema": "string",
        "required": false,
        "description": "Recruitment context"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": false,
        "description": "User type: ADVANCED, MSS"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "Language"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Position structure successfully returned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Position structure not found"
      }
    ]
  },
  {
    "url": "/position/{openingId}",
    "method": "updateData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Position API",
    "typeScriptTag": "positionApi",
    "description": "Update opening data",
    "parameters": [
      {
        "name": "openingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Position you wish to update",
        "example": 0
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "headCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACTTYPE"
      },
      {
        "name": "workTime",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "requisitionNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expectedContractDates",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "renewal",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "scheduleType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authorizedRecruitment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "standardRate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "totalCost",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "generalApplication",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "teamComments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "budgeted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "encryptApplicants",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "areaOfResponsibility",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "positionType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plainText",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "configurableFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "team",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "descriptionTemplateId",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultJobLocationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobLocationIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFieldSkills",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "removedSkills",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "manuallyAddedSkills",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Update existing Position data"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to opening"
      },
      {
        "statusCode": "404",
        "description": "Opening with a given id does not exists"
      }
    ]
  },
  {
    "url": "/position/{positionId}/attachDocument",
    "method": "attachDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Position API",
    "typeScriptTag": "positionApi",
    "description": " Attach a file to the existing Position",
    "parameters": [
      {
        "name": "positionId",
        "schema": "integer",
        "required": true,
        "description": "id of the opening",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME"
      },
      {
        "name": "docLanguage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCLANGUAGE"
      },
      {
        "name": "publishable",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATA"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File successfully attached"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to attach files"
      }
    ]
  },
  {
    "url": "/position/{positionId}/copy",
    "method": "copyPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Position API",
    "typeScriptTag": "positionApi",
    "description": "Copy Position",
    "parameters": [
      {
        "name": "positionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the position you wish to copy",
        "example": 0
      },
      {
        "name": "newOpeningName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Position successfully copied"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to copy Position"
      }
    ]
  },
  {
    "url": "/publishedadvert",
    "method": "listPostingTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "List of posting targets",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ publishedAdverts(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/publishedadvert/activechannel",
    "method": "listActiveChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "List of active posting channels",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ sourcingChannels(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/publishedadvert/attachment/{documentId}",
    "method": "downloadAdvertAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "Download advert attachment file",
    "parameters": [
      {
        "name": "documentId",
        "schema": "integer",
        "required": true,
        "description": "Id of attachment document",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Document found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Document with a given id does not exists"
      }
    ]
  },
  {
    "url": "/publishedadvert/criteria",
    "method": "getCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "Search criteria",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ publishedAdvertsCriteria{ categories{ label value } } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/publishedadvert/multiPoster/updateStatus",
    "method": "submitJobStatusUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "Allow Multi-posters to submit Client User selected end job boards and its up-to-date status update for a specific posting id",
    "parameters": [
      {
        "name": "adverts",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "PublishedAdvert status successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "PostingTarget with a given id does not exists"
      }
    ]
  },
  {
    "url": "/publishedadvert/preview",
    "method": "getAdvertByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "Fetch advert by token",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Token of advertisement draft",
        "example": "TOKEN"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": "\tLanguage code - used for translation of labels and error messages If not provided then site master language is used"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/publishedadvert/sorting-columns",
    "method": "getColumnNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "list of String column names.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sorting columns found"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/publishedadvert/unpost",
    "method": "unpostAdverts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "Unpost one or more adverts",
    "parameters": [
      {
        "name": "postingTargets",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "PublishedAdvert unposted successfully"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "PostingTarget with a given id does not exists"
      }
    ]
  },
  {
    "url": "/publishedadvert/{publishedAdvertId}/updateJobDescriptionUrl",
    "method": "setJobDescriptionUrl",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Published Advert API",
    "typeScriptTag": "publishedAdvertApi",
    "description": "Sets external job description url on published advert",
    "parameters": [
      {
        "name": "publishedAdvertId",
        "schema": "integer",
        "required": true,
        "description": "published advert id to update job description url",
        "example": 0
      },
      {
        "name": "jobDescriptionUrl",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "PublishedAdvert successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "PostingTarget with a given id does not exists"
      }
    ]
  },
  {
    "url": "/queues",
    "method": "getQueueList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API",
    "typeScriptTag": "queuesApi",
    "description": "Retrieve list of all queues available for the user ",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "NO queues are present"
      },
      {
        "statusCode": "400",
        "description": "Queue not found"
      }
    ]
  },
  {
    "url": "/queues/application/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Application",
    "typeScriptTag": "queuesApiApplication",
    "description": "Retrieves the oldest element from the Application queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "showCandidateData",
        "schema": "boolean",
        "required": false,
        "description": "showCandidateData"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Application found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Application found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/application/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Application",
    "typeScriptTag": "queuesApiApplication",
    "description": "Retrieves any element from the Application queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      },
      {
        "name": "showCandidateData",
        "schema": "boolean",
        "required": false,
        "description": "showCandidateData"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Application found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Application found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/archived-candidate/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Archived Candidate",
    "typeScriptTag": "queuesApiArchivedCandidate",
    "description": "Retrieves the oldest element from the Archived Candidates queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Archived candidate found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Archived candidate found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/archived-candidate/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Archived Candidate",
    "typeScriptTag": "queuesApiArchivedCandidate",
    "description": "Retrieves any element from the Archived Candidates queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Archived candidate found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Archived candidate found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/candidate/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Candidates",
    "typeScriptTag": "queuesApiCandidates",
    "description": "Retrieve oldest element of the  Candidate queue.",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Candidate found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Candidate found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/candidate/{queueName}/{elementId}",
    "method": "getElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Candidates",
    "typeScriptTag": "queuesApiCandidates",
    "description": "Retrieves any element from the Candidate queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Candidate found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Candidate found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/contract/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Contract",
    "typeScriptTag": "queuesApiContract",
    "description": "Retrieves the oldest element from the Contract queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Contract found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Contract found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/contract/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Contract",
    "typeScriptTag": "queuesApiContract",
    "description": "Retrieves any Contract element from the queue based on the elementID.",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Contract found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Contract found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/element/oldest-element",
    "method": "removeOldestElement",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Queues API",
    "typeScriptTag": "queuesApi",
    "description": "Global method allowing to remove oldest element from any queue type.",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Element successfully removed from queue"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "404",
        "description": "There are no elements in queue"
      }
    ]
  },
  {
    "url": "/queues/element/{idInQueue}",
    "method": "removeElementById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Queues API",
    "typeScriptTag": "queuesApi",
    "description": "Global method allowing to remove any element from any queue type, out of sequence.",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "idInQueue",
        "schema": "integer",
        "required": true,
        "description": "idInQueue",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Element successfully removed from queue"
      },
      {
        "statusCode": "400",
        "description": "Element's in queue id is invalid (blank or missing)"
      },
      {
        "statusCode": "404",
        "description": "There is no such element in queue"
      }
    ]
  },
  {
    "url": "/queues/export",
    "method": "exportQueueSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API",
    "typeScriptTag": "queuesApi",
    "description": "Method to export the Queue settings into a file",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Queue successfully exported"
      },
      {
        "statusCode": "400",
        "description": "Queue could not be exported"
      }
    ]
  },
  {
    "url": "/queues/externalsystemrequest/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - External System Request",
    "typeScriptTag": "queuesApiExternalSystemRequest",
    "description": "Retrieves the oldest element from the External Systems Request queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": "langCode"
      },
      {
        "name": "showBaseValue",
        "schema": "boolean",
        "required": false,
        "description": "showBaseValue"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "External System Request found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "External System Request found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/externalsystemrequest/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - External System Request",
    "typeScriptTag": "queuesApiExternalSystemRequest",
    "description": "Retrieves any External System Request element from the queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": false,
        "description": "langCode"
      },
      {
        "name": "showBaseValue",
        "schema": "boolean",
        "required": false,
        "description": "showBaseValue"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "External System Request found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "External System Request found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/import",
    "method": "importQueueSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Queues API",
    "typeScriptTag": "queuesApi",
    "description": "Allows to import Queue settings from the file",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Queue successfully imported"
      },
      {
        "statusCode": "400",
        "description": "Queue could not be imported"
      }
    ]
  },
  {
    "url": "/queues/position/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Position (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "typeScriptTag": "queuesApiPositionHttps:DeveloperLumesseTalenthubComRestApiDevelopersGuide12133IndexHtml?page=restApi&subpage=developerReference",
    "description": "Retrieves the oldest element from the Position queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Position found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Position found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/position/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Position (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "typeScriptTag": "queuesApiPositionHttps:DeveloperLumesseTalenthubComRestApiDevelopersGuide12133IndexHtml?page=restApi&subpage=developerReference",
    "description": "Retrieves any element from the Position / Requisition queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Position found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Position found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/posting-target/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Posting (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "typeScriptTag": "queuesApiPostingHttps:DeveloperLumesseTalenthubComRestApiDevelopersGuide12133IndexHtml?page=restApi&subpage=developerReference",
    "description": "Retrieves the oldest element from the Advert queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Posting target found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Posting target found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/posting-target/{queueName}/{elementId}",
    "method": "getElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Posting (https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "typeScriptTag": "queuesApiPostingHttps:DeveloperLumesseTalenthubComRestApiDevelopersGuide12133IndexHtml?page=restApi&subpage=developerReference",
    "description": "Retrieves any element from the Advert based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Posting target found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Posting target found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/selectionstep/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Selection Step",
    "typeScriptTag": "queuesApiSelectionStep",
    "description": "Retrieves the oldest element from the Selection Step queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Selection step found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Selection step found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/selectionstep/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Selection Step",
    "typeScriptTag": "queuesApiSelectionStep",
    "description": "Retrieves any element from the Selection Step queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Selection step found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Selection step found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/timesheet/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Timesheets",
    "typeScriptTag": "queuesApiTimesheets",
    "description": "Retrieves the oldest element from the Timesheets queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Timesheet found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Timesheet step found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/timesheet/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Timesheets",
    "typeScriptTag": "queuesApiTimesheets",
    "description": "Retrieves any element from the Timesheet queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "Timesheet found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "Timesheet found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/user/{queueName}/oldest-element",
    "method": "getOldestElement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Users",
    "typeScriptTag": "queuesApiUsers",
    "description": "Retrieves the oldest element from the Users queue",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "User found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "User found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/user/{queueName}/{elementId}",
    "method": "getElementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues API - Users",
    "typeScriptTag": "queuesApiUsers",
    "description": "retrieves any element from the Users queue based on the elementID",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "elementId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Queue is empty"
      },
      {
        "statusCode": "400",
        "description": "Queue not found or queue name is invalid (blank or missing)"
      },
      {
        "statusCode": "403",
        "description": "User found but is not accessible by queue owner"
      },
      {
        "statusCode": "404",
        "description": "User found in queue but not in database set"
      }
    ]
  },
  {
    "url": "/queues/{queueName}",
    "method": "deleteQueue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Queues API",
    "typeScriptTag": "queuesApi",
    "description": "Allows to delete any queue which is available for the user",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "queueName",
        "example": "QUEUENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Queue successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Queue could not been removed"
      },
      {
        "statusCode": "404",
        "description": "Queue not found"
      },
      {
        "statusCode": "409",
        "description": "Queue could not been removed because is used in the Selection Process configuration"
      }
    ]
  },
  {
    "url": "/role",
    "method": "listRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Role API",
    "typeScriptTag": "roleApi",
    "description": "List of roles",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ roles(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/role/{roleId}/tags",
    "method": "removeTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Role API",
    "typeScriptTag": "roleApi",
    "description": "Remove tags from a role",
    "parameters": [
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Role id to be updated.",
        "example": 0
      },
      {
        "name": "roleTags",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "tags successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Role with a given id does not exists"
      }
    ]
  },
  {
    "url": "/role/{roleId}/tags",
    "method": "addRoleTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Role API",
    "typeScriptTag": "roleApi",
    "description": "Add tags to a role",
    "parameters": [
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Role id to be updated.",
        "example": 0
      },
      {
        "name": "roleTags",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "tags successfully added"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Role with a given id does not exists"
      }
    ]
  },
  {
    "url": "/searchagent",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Agent API",
    "typeScriptTag": "searchAgentApi",
    "description": "List of Search Agent",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ searchAgents(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/searchagent",
    "method": "createAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Agent API",
    "typeScriptTag": "searchAgentApi",
    "description": "Creates Search Agent",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "searchCriteria",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deliveryFrequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERYFREQUENCY"
      },
      {
        "name": "expirationDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LANGCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Search agent successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to create a search agent"
      }
    ]
  },
  {
    "url": "/searchagent/{token}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Search Agent API",
    "typeScriptTag": "searchAgentApi",
    "description": "Delete search agent",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Search agent id to be deleted.",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "search agent successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Search agent with a given id does not exists"
      }
    ]
  },
  {
    "url": "/searchagent/{token}",
    "method": "updateAgent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Search Agent API",
    "typeScriptTag": "searchAgentApi",
    "description": "Updates an existing search agent",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "search agent id to be updated",
        "example": "TOKEN"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "searchCriteria",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deliveryFrequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERYFREQUENCY"
      },
      {
        "name": "expirationDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "langCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LANGCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Search agent successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Search agent with a given id does not exists"
      }
    ]
  },
  {
    "url": "/selection-process/application/{applicationId}/completePrescreening",
    "method": "completePrescreening",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Completes prescreening step",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Prescreening step successfully processed"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "Application doesn't exist"
      }
    ]
  },
  {
    "url": "/selection-process/proceed",
    "method": "proceedCandidate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Proceed candidate",
    "parameters": [
      {
        "name": "stepId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful request"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      }
    ]
  },
  {
    "url": "/selection-process/reject",
    "method": "rejectCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Reject candidate",
    "parameters": [
      {
        "name": "stepId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sendCommunication",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "reasonOfRejection",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delayForTheEmail",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "successful operation"
      }
    ]
  },
  {
    "url": "/selection-process/rejection-reasons",
    "method": "getRejectionReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Allows to fetch the list of 'Reason of rejection' values",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      }
    ]
  },
  {
    "url": "/selection-process/selection-tasks",
    "method": "getSelectionTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Retrieve list & details of selection steps for a given candidate or application",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ selectionTasks(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/selection-process/step/{stepId}/document",
    "method": "uploadAttachmentToStep",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Upload attachment to a step in the selection process",
    "parameters": [
      {
        "name": "stepId",
        "schema": "integer",
        "required": true,
        "description": "step id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful request"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      }
    ]
  },
  {
    "url": "/selection-process/step/{stepId}/documents",
    "method": "getStepDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Retrieve all documents attached to step in selection process",
    "parameters": [
      {
        "name": "stepId",
        "schema": "integer",
        "required": true,
        "description": "step id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful request"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      }
    ]
  },
  {
    "url": "/selection-process/step/{stepId}/status",
    "method": "updateStepStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Selection Process API",
    "typeScriptTag": "selectionProcessApi",
    "description": "Update the status of a step in selection process",
    "parameters": [
      {
        "name": "stepId",
        "schema": "integer",
        "required": true,
        "description": "step id",
        "example": 0
      },
      {
        "name": "stepStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STEPSTATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful request"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      }
    ]
  },
  {
    "url": "/timesheet",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheet API",
    "typeScriptTag": "timesheetApi",
    "description": "List of timesheet",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ timeSheets(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/timesheet/adjustment-reasons",
    "method": "getAdjustmentReasonsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheet API",
    "typeScriptTag": "timesheetApi",
    "description": "Retrieve the list of \"Reasons for adjustment\" (required when rejecting the Timesheet)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/timesheet/{timesheetId}/approve",
    "method": "approveTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheet API",
    "typeScriptTag": "timesheetApi",
    "description": "Allows to approve a specific Timesheet",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": true,
        "description": "Id of timesheet",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Timesheet approved"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/timesheet/{timesheetId}/reject",
    "method": "rejectTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheet API",
    "typeScriptTag": "timesheetApi",
    "description": "Allows to reject a specific Timesheet",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": true,
        "description": "Id of timesheet",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Timesheet rejected"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/timesheet/{timesheetId}/submit",
    "method": "submitTimesheet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Timesheet API",
    "typeScriptTag": "timesheetApi",
    "description": "Allows to submit a Timesheet for the candidate",
    "parameters": [
      {
        "name": "timesheetId",
        "schema": "integer",
        "required": true,
        "description": "Id of timesheet",
        "example": 0
      },
      {
        "name": "rate",
        "schema": "array",
        "description": ""
      },
      {
        "name": "approversList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Timesheet submitted"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      }
    ]
  },
  {
    "url": "/user",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "List of users",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "This is a GraphQL query parameter. You can find more about GraphlQL [here](https://graphql.org/learn/ \"Go to the GraphQL official documentation\").",
        "example": "QUERY",
        "default": "{ users(first: 10, after: 0, sortBy: id, orderBy: ASC, where: {id_gt: 0}) { id } }"
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "Enables streaming mode"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Creates User",
    "parameters": [
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOGIN"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LANGUAGE"
      },
      {
        "name": "mss",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "disabledLoginPage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "dateFormat",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timeFormat",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userActivation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERACTIVATION"
      },
      {
        "name": "userPreferences",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User successfully created"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to user preferences"
      }
    ]
  },
  {
    "url": "/user/{userId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Delete user",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "user with a given id to be deleted",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully deleted"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}",
    "method": "updateBasicData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Update basic user data",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user to be updated",
        "example": 0
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mss",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "disabledLoginPage",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "mustChangePassword",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "userPreferences",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User data successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right to perform this operation"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right to user preferences"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/activate",
    "method": "activateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Activates user",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "user with a given id to be activated",
        "example": 0
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "activationType",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully activated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/assignDashboard",
    "method": "assignDashboardToUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Assign dashboards to user",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user",
        "example": 0
      },
      {
        "name": "genericDashboard",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "hiringManagerDashboard",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "recruiterDashboards",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dashboard assigned successfully"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      }
    ]
  },
  {
    "url": "/user/{userId}/assignNamedAccessRoles",
    "method": "assignNamedAccessRoles",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Named Access Roles configuration",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user to be updated",
        "example": 0
      },
      {
        "name": "roleInRequisitionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "roleToReceiveCandidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Access roles successfully assigned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/availableDashboards",
    "method": "listAvailableDashboards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "List of available dashboards for given userId",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of available dashboards successfully returned"
      },
      {
        "statusCode": "400",
        "description": "User not exist for given user Id"
      }
    ]
  },
  {
    "url": "/user/{userId}/availableThemes",
    "method": "getUserAvailableThemes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "List of available themes for given userId",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "array",
        "required": false,
        "description": "Optional filter - department ID/IDs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Given userId is not correct"
      }
    ]
  },
  {
    "url": "/user/{userId}/changePassword",
    "method": "updatePassword",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Change user password",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Change user password with a given id",
        "example": 0
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User password successfully changed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/copyRolesFromAnotherProfile",
    "method": "copyRolesToTargetUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Copy user roles to target user",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of target user. This user will have roles copied from source user",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User profile successfully copied to target user"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/deactivate",
    "method": "deactivateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Deactivates user",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "user with a given id to be deactivated",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully deactivated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/documentSecurity",
    "method": "removeDocumentSecurity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Document Security removal",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user to be updated",
        "example": 0
      },
      {
        "name": "groupId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Document security successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/documentSecurity",
    "method": "configureDocumentSecurity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Document Security configuration",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user to be updated",
        "example": 0
      },
      {
        "name": "documentSecurityGroups",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Document security successfully added"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "403",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/eventNotification",
    "method": "configureEventNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Event notification configuration",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user to be updated",
        "example": 0
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "activated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "alertCandidate",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "alertMessage",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "alertNewTimesheets",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "plainTextAlerts",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "taskNotificationActive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "taskNotifications",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Event notification configuration successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/mailGateway",
    "method": "configureMailGateway",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Mail Gateway configuration",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user to be updated",
        "example": 0
      },
      {
        "name": "activated",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "authorizedEmail1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHORIZEDEMAIL1"
      },
      {
        "name": "authorizedEmail2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authorizedEmail3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useSequentialCreation1",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "useSequentialCreation2",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "useSequentialCreation3",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "srcChannelName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SRCCHANNELNAME"
      },
      {
        "name": "srcChannelType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SRCCHANNELTYPE"
      },
      {
        "name": "privacy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "folder",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Mail Gateway successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/roles",
    "method": "removeRoles",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Remove roles",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of User to be modified",
        "example": 0
      },
      {
        "name": "roleAssignments",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User roles successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/roles",
    "method": "updateUserRoles",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "Roles",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Assign role to user with a given id",
        "example": 0
      },
      {
        "name": "roleAssignments",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User role successfully assigned"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/roles/bulk",
    "method": "removeUserRolesBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "This method allows to remove all or groups of roles from the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of User to be modified",
        "example": 0
      },
      {
        "name": "accountRoles",
        "schema": "object",
        "description": ""
      },
      {
        "name": "departmentRoles",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User roles successfully removed"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  },
  {
    "url": "/user/{userId}/userData",
    "method": "updateUserData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User API",
    "typeScriptTag": "userApi",
    "description": "User Data configuration",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of a user to be updated",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lovs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fffs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "User Data successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid parameters provided"
      },
      {
        "statusCode": "401",
        "description": "User does not have the right"
      },
      {
        "statusCode": "404",
        "description": "User with a given id does not exists"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Talentlink REST API Documentation"
      apiBaseUrl="https://apiproxy.shared.lumessetalentlink.com/tlk/rest"
      apiVersion="23.5-SNAPSHOT"
      endpoints={151}
      sdkMethods={178}
      schemas={419}
      parameters={845}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cornerstone-ondemand/talent-link/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cornerstone-ondemand/talent-link/openapi.yaml"
      developerDocumentation="developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference"
    />
  );
}
  