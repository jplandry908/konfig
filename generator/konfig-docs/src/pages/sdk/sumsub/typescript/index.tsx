import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SumsubTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="sumsub-typescript-sdk"
      metaDescription={`Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.`}
      company="Sumsub"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sumsub/logo.png"
      companyKebabCase="sumsub"
      clientNameCamelCase="sumsub"
      homepage="sumsub.com/"
      lastUpdated={new Date("2024-03-25T22:13:04.183Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sumsub/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sumsub/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["security","identity_and_access_management","fraud_prevention","identity_verification"]}
      methods={[
  {
    "url": "/resources/status/api",
    "method": "statusApiGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "API health",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants",
    "method": "updateTopLevelInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Change top-level information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "externalUserId",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "questionnaires",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/moveToLevel",
    "method": "changeRequiredDocumentSet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Change required document set",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "A [verification level](https://docs.sumsub.com/reference) name. Case-sensitive and has to be created in the same environment. If contains reserved characters (e.g., `@`, `+\"`, white spaces as `%20`), it should be URL-encoded, otherwise you may get signature mismatch.",
        "example": "NAME"
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/requiredIdDocs",
    "method": "getRequiredIdDocs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get required ID documents",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/info/idDoc",
    "method": "addIdDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add ID document",
    "parameters": [
      {
        "name": "xReturnDocWarnings",
        "schema": "boolean",
        "required": true,
        "description": "`true` / `false`",
        "example": true
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "content",
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
    "url": "/resources/applicants/{applicantId}/fixedInfo",
    "method": "updateFixedInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Change provided information",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
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
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstNameEn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastNameEn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleNameEn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dob",
        "schema": "string",
        "description": ""
      },
      {
        "name": "placeOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tin",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/info",
    "method": "changeExtractedInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Change information extracted by Sumsub",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
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
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dob",
        "schema": "string",
        "description": ""
      },
      {
        "name": "placeOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tin",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/-/ingestCompleted?levelName={levelName}",
    "method": "importCompleted",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Import applicants",
    "parameters": [
      {
        "name": "levelName",
        "schema": "string",
        "description": "A [verification level](https://docs.sumsub.com/reference) name. Case-sensitive and has to be created in the same environment. If contains reserved characters (e.g., `@`, `+\"`, white spaces as `%20`), it should be URL-encoded, otherwise you may get signature mismatch."
      },
      {
        "name": "info",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalUserId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "review",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/-/applicantImport",
    "method": "importByArchive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Import applicant with images by archive",
    "parameters": [
      {
        "name": "content",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/status/testCompleted",
    "method": "sandboxVerificationResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Set review for applicant in sandbox",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "reviewAnswer",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REVIEWANSWER"
      },
      {
        "name": "rejectLabels",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "reviewRejectType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientComment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "moderationComment",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/tags/add",
    "method": "addCustomTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add custom applicant tags",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/tags",
    "method": "removeCustomTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Remove custom applicant tags",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/tags",
    "method": "addCustomTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add and overwrite custom applicant tags",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/status/pending?reason={reason}",
    "method": "initiateApplicantCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Request applicant check",
    "parameters": [
      {
        "name": "reason",
        "schema": "string",
        "description": "A note indicating the reason for checking the applicant profile."
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/blacklist?note={note}",
    "method": "addToBlocklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add applicant to blocklist",
    "parameters": [
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "A note indicating the reason for blocklisting the applicant profile.",
        "example": "NOTE"
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/reset",
    "method": "resetProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Reset applicant profile",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/resetStep/{idDocSetType}",
    "method": "resetVerificationStep",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Reset verification step",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "idDocSetType",
        "schema": "string",
        "required": true,
        "description": "A [step name](ref:reset-single-verification-step#available-steps-to-reset) to reset.",
        "example": "IDDOCSETTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/inspections/{inspectionId}/resources/{imageId}",
    "method": "markAsInactive",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Mark image as inactive",
    "parameters": [
      {
        "name": "revert",
        "schema": "boolean",
        "description": "Set `true` to revert inactivity of the image.",
        "default": false
      },
      {
        "name": "inspectionId",
        "schema": "string",
        "required": true,
        "description": "An inspection identifier. You can get this number by using [this API method](ref:get-applicant-data).",
        "example": "INSPECTIONID"
      },
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "An image identifier. You can get this number by using [this API method](ref:get-applicant-verification-steps-status).",
        "example": "IMAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/inspections/{inspectionId}/resources/{imageId}",
    "method": "getDocumentImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Get document images",
    "parameters": [
      {
        "name": "inspectionId",
        "schema": "string",
        "required": true,
        "description": "An inspection identifier. This identifier is returned as a root field upon running [this API method](ref:get-applicant-data).",
        "example": "INSPECTIONID"
      },
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "An image identifier. You can get this number by using [this API method](ref:get-applicant-verification-steps-status).",
        "example": "IMAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/presence/{status}",
    "method": "deactivateProfile",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Deactivate applicant profile",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "Possible values: `deactivated` to deactivate the applicant profile. `activated` to reactivate the applicant profile.",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/agreement",
    "method": "addConsentToProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add applicant consent",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique identifier of an applicant profile to which a consent should be added.",
        "example": "APPLICANTID"
      },
      {
        "name": "records",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "acceptedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "residenceCountry",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/one",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get applicant data",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/-;externalUserId={externalUserId}/one",
    "method": "getDataByExternalUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get applicant data (externalUserId)",
    "parameters": [
      {
        "name": "externalUserId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier in your system.",
        "example": "EXTERNALUSERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/status",
    "method": "getReviewStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get applicant review status",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/requiredIdDocsStatus",
    "method": "getVerificationStepsStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get applicant verification steps status",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/moderationStates/-;applicantId={applicantId}",
    "method": "clarifyRejectionReason",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Clarify rejection reason",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/latest?type=TIN",
    "method": "tinSsnCheckResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Get TIN (SSN) check results",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identification number.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/latest?type=EMAIL_CONFIRMATION",
    "method": "emailConfirmationResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Get email confirmation check results",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/latest?type=PHONE_CONFIRMATION",
    "method": "phoneConfirmationResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Get phone confirmation check results",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/latest?type=IP_CHECK",
    "method": "ipCheckResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Get IP check results",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantFraudNetworks/-/byApplicant/{applicantId}",
    "method": "getFraudNetworksByApplicant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get applicant fraud networks",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantFraudNetworks/{networkId}/one",
    "method": "getFraudNetworkById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get fraud network by ID",
    "parameters": [
      {
        "name": "networkId",
        "schema": "string",
        "required": true,
        "description": "A unique network identifier.",
        "example": "NETWORKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/crossCheck?comparisonMode={comparisonMode}",
    "method": "performNameCrossValidation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Perform name cross validation",
    "parameters": [
      {
        "name": "comparisonMode",
        "schema": "string",
        "required": true,
        "description": "Data comparison mode. See the [possible values](/reference/perform-name-cross-validation#possible-comparisonmode-values).",
        "example": "COMPARISONMODE"
      },
      {
        "name": "idDocs",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/sdkIntegrations/levels/{levelName}/websdkLink",
    "method": "generateExternal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WebSDKLink",
    "typeScriptTag": "webSdkLink",
    "description": "Generate external WebSDK link",
    "parameters": [
      {
        "name": "ttlInSecs",
        "schema": "integer",
        "description": "A lifespan of the link in seconds."
      },
      {
        "name": "externalUserId",
        "schema": "string",
        "description": "An external user ID on your side."
      },
      {
        "name": "lang",
        "schema": "string",
        "description": "The language for WebSDK in ISO 639-1 format."
      },
      {
        "name": "levelName",
        "schema": "string",
        "required": true,
        "description": "A [verification level](https://docs.sumsub.com/reference) name. Case-sensitive and has to be created in the same environment. If contains reserved characters (e.g., `@`, `+\"`, white spaces as `%20`), it should be URL-encoded, otherwise you may get signature mismatch.",
        "example": "LEVELNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/-/levels",
    "method": "getLevels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get available applicant levels",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/latest?type=POA",
    "method": "additionalPoaData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Get additional PoA data",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/accessTokens",
    "method": "createActionToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Generate access token",
    "parameters": [
      {
        "name": "ttlInSecs",
        "schema": "string",
        "description": "A lifespan of a token in seconds. Default value is 10 mins.",
        "default": "600"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "An external user ID which will be bound to the token.",
        "example": "USERID"
      },
      {
        "name": "externalActionId",
        "schema": "string",
        "required": true,
        "description": "An external action ID which will be bound to the token.",
        "example": "EXTERNALACTIONID"
      },
      {
        "name": "levelName",
        "schema": "string",
        "required": true,
        "description": "The name of the [verification level](https://docs.sumsub.com/reference).",
        "example": "LEVELNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/-;applicantId={applicantId}",
    "method": "getActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get applicant actions",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit of applicant actions to be returned.",
        "default": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset of applicant actions to be returned.",
        "default": 0
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/{actionId}/one",
    "method": "getActionOneInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get action information",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant action identifier.",
        "example": "ACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/-/forApplicant/{applicantId}?levelName={levelName}",
    "method": "createAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Create applicant action",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique aplicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "levelName",
        "schema": "string",
        "required": true,
        "description": "A name of the level configured in the dashboard.",
        "example": "LEVELNAME"
      },
      {
        "name": "externalActionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNALACTIONID"
      },
      {
        "name": "paymentMethod",
        "schema": "object",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/-/forApplicant/{applicantId}/?levelName=paymentSource",
    "method": "createPaymentSourceActions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Create payment source actions",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "An unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "levelName",
        "schema": "string",
        "required": true,
        "description": "A verification level name for which you want to create a payment source action.",
        "example": "LEVELNAME"
      },
      {
        "name": "externalActionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentSource",
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
    "url": "/resources/applicantActions/{actionId}/review/status/pending",
    "method": "requestActionCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Request action check",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant action identifier.",
        "example": "ACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/-/forApplicant/{applicantId}/paymentMethod",
    "method": "submitPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Submission",
    "parameters": [
      {
        "name": "xExternalActionId",
        "schema": "string",
        "required": true,
        "description": "Use `externalActionId` if you intend to [initialize SDK](ref:about-applicant-actions) for that particular action.",
        "example": "X-EXTERNAL-ACTION-ID"
      },
      {
        "name": "requireSelfie",
        "schema": "boolean",
        "description": "Sets the video selfie at `requiredIdDocs` for the action.",
        "default": false
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/{actionId}/paymentMethod",
    "method": "addPaymentMethodInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add payment method information",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant action identifier.",
        "example": "ACTIONID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "subType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/{actionId}/images/{imageId}?preview={isPreview}",
    "method": "getBankCardImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get bank card image",
    "parameters": [
      {
        "name": "isPreview",
        "schema": "boolean",
        "description": "Indicates if an image thumbnail should be returned.",
        "default": false
      },
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant action identifier.",
        "example": "ACTIONID"
      },
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "An image identifier taken from `images[].imageId`.",
        "example": "IMAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/{actionId}/images",
    "method": "addImageToPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add image to payment method",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant action identifier.",
        "example": "ACTIONID"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantActions/-/forApplicant/{applicantId}/cryptoSourceOfFunds",
    "method": "createCryptoSourceOfFunds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Submission",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DIRECTION"
      },
      {
        "name": "txn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/standalone/crypto/cryptoSourceOfFunds",
    "method": "standaloneCryptoInitiation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Analysis",
    "typeScriptTag": "analysis",
    "description": "Standalone crypto analysis",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DIRECTION"
      },
      {
        "name": "txn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/standalone/crypto/availableCurrencies",
    "method": "getAvailableCurrencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Get available tokens",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/info/companyInfo/beneficiaries",
    "method": "addBeneficiary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Add applicant as beneficiary",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique company applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "applicant",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICANTID"
      },
      {
        "name": "positions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/info/companyInfo/beneficiaries/{beneficiaryApplicantId}",
    "method": "removeFromBeneficiaryList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Remove applicant from beneficiary list",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique company applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "beneficiaryApplicantId",
        "schema": "string",
        "required": true,
        "description": "Beneficiary applicant identifier.",
        "example": "BENEFICIARYAPPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/info/companyInfo",
    "method": "changeCompanyData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Change company data",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "companyName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYNAME"
      },
      {
        "name": "registrationNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGISTRATIONNUMBER"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "incorporatedOn",
        "schema": "string",
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
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "controlScheme",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "registrationLocation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "beneficiaries",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/latest?type=COMPANY",
    "method": "additionalCompanyData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Get additional company check data",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/inspections/{inspectionId}?fields=videoIdentData",
    "method": "getVideoIdentData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inspection",
    "typeScriptTag": "inspection",
    "description": "Get video call data",
    "parameters": [
      {
        "name": "inspectionId",
        "schema": "string",
        "required": true,
        "description": "A unique inspection identifier.",
        "example": "INSPECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/videoIdent/applicant/{applicantId}/media/{compositionMediaId}",
    "method": "getVideoCallMedia",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get video call media",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "compositionMediaId",
        "schema": "string",
        "required": true,
        "description": "Video call media identifier.",
        "example": "COMPOSITIONMEDIAID"
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
    "url": "/resources/applicants/{applicantId}/ekyc/submit",
    "method": "submitDataNoDocVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Submit applicant data",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "info",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/ekyc/confirm/{confirmationid}",
    "method": "confirmData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Confirm applicant data",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      },
      {
        "name": "confirmationId",
        "schema": "string",
        "required": true,
        "description": "A confirmation identifier from the [submission](ref:submit-applicant-data) response.",
        "example": "CONFIRMATIONID"
      },
      {
        "name": "otp",
        "schema": "object",
        "description": ""
      },
      {
        "name": "oauth",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/checks/latest",
    "method": "getDataLatest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get applicant data",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Check type.",
        "example": "TYPE"
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier.",
        "example": "APPLICANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/{applicantId}/kyt/txns/-/data",
    "method": "submitTransactionData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Submit transaction for existing applicant",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique identification number of the applicant who passed user verification (KYC). If you do no have such an applicant, use [Submit transaction for non-existing applicant](ref:submit-transaction-for-non-existing-applicant) instead.",
        "example": "APPLICANTID"
      },
      {
        "name": "info",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TXNID"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "counterparty",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "finance"
      },
      {
        "name": "sourceKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "props",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicants/-/kyt/txns/-/data",
    "method": "submitTransactionForNonExisting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Submit transaction for non-existing applicant",
    "parameters": [
      {
        "name": "levelName",
        "schema": "string",
        "required": true,
        "description": "A [verification level](https://docs.sumsub.com/reference) name. Case-sensitive and has to be created in the same environment. If contains reserved characters (e.g., `@`, `+\"`, white spaces as `%20`), it should be URL-encoded, otherwise you may get signature mismatch.",
        "example": "LEVELNAME"
      },
      {
        "name": "info",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TXNID"
      },
      {
        "name": "txnDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "props",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "applicant",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "counterparty",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "finance"
      },
      {
        "name": "sourceKey",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/one",
    "method": "informationOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Get transaction information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/-;data.txnId={externalTxnId}/one",
    "method": "getOneData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Get transaction information (externalTxnId)",
    "parameters": [
      {
        "name": "externalTxnId",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier on your side.",
        "example": "EXTERNALTXNID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/misc/txns/import",
    "method": "bulkImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Bulk transaction import",
    "parameters": [
      {
        "name": "ignoreErrors",
        "schema": "boolean",
        "description": "<ul><li><code>true</code> — all valid transactions will be created and returned, errors will be ignored during the processing and listed in the response.</li><li><code>false</code> (default) — valid transactions will be created up to the first detected error. The response will only contain the error on which the processing was interrupted.</li></ul>",
        "default": false
      },
      {
        "name": "scoreSavedTxns",
        "schema": "boolean",
        "description": "Allows you to control whether scoring should be run on imported transactions or not:<ul><li><code>true</code> (default) — start scoring after import.</li><li><code>false</code> — do not start scoring after import.</li></ul>",
        "default": true
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICANTID"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/props",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Change transaction properties",
    "parameters": [
      {
        "name": "unsetKeys",
        "schema": "string",
        "description": "A list of property names separated by commas that should be set to `null`."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identification number.",
        "example": "ID"
      },
      {
        "name": "customProperty",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMPROPERTY",
        "default": "newValue"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/-/score",
    "method": "reScore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Re-score transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identification number.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/review/status/completed",
    "method": "approveReject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Approve and reject transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identification number.",
        "example": "ID"
      },
      {
        "name": "reviewAnswer",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/tags",
    "method": "removeTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Remove tags",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "ID"
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/tags",
    "method": "listTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Get tags",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/tags",
    "method": "addTransactionTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tag",
    "typeScriptTag": "tag",
    "description": "Add tags",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "ID"
      },
      {
        "name": "RAW_BODY",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{id}/notes",
    "method": "getTransactionNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Get notes",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/notes",
    "method": "removeFromTransaction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Remove notes",
    "parameters": [
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TXNID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/notes",
    "method": "updateTransactionNotes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Edit notes",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TXNID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/notes",
    "method": "addToTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Add notes",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TXNID"
      },
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{txnId}/data/info",
    "method": "updateBlockchainInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Patch transaction with chain transaction ID",
    "parameters": [
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "TXNID"
      },
      {
        "name": "fingerprint",
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
    "url": "/resources/kyt/txns/{txnId}/applicantId/{applicantId}",
    "method": "moveTransactionToAnotherApplicant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Move transaction to another applicant",
    "parameters": [
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "TXNID"
      },
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "A unique applicant identifier who should own the transaction.",
        "example": "APPLICANTID"
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
    "url": "/resources/kyt/txns/{txnId}/data/applicant",
    "method": "enrichTransactionWithTravelRuleData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Enriching transaction with Travel Rule",
    "parameters": [
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "TXNID"
      },
      {
        "name": "fullName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FULLNAME"
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
    "url": "/resources/kyt/txns/{txnId}/ownership/confirmed",
    "method": "confirmOwnership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Confirm transaction ownership",
    "parameters": [
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "TXNID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/kyt/txns/{txnId}/ownership/unconfirmed",
    "method": "removeOwnership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Remove transaction ownership",
    "parameters": [
      {
        "name": "txnId",
        "schema": "string",
        "required": true,
        "description": "A unique transaction identifier.",
        "example": "TXNID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/vasps/-",
    "method": "getAvailableVasps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VASP",
    "typeScriptTag": "vasp",
    "description": "Get available VASPs",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of the VASPs to be returned. The maximum recommended value you can set is 100.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset of the VASPs to be returned.",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/resources/auditTrailEvents",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuditTrailEvent",
    "typeScriptTag": "auditTrailEvent",
    "description": "Audit trail events",
    "parameters": [
      {
        "name": "subjectName",
        "schema": "string",
        "description": "The name of the subject for which events are received. If the name is not specified, events are received for all subjects on the key."
      },
      {
        "name": "activity",
        "schema": "string",
        "description": "If specified, only events with this activity will be in the response."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "From the date/time events are received (format yyyy-MM-dd HH:mm:ss, e.g. 2022-10-01 12:05:00). If it's not specified - events are received from yesterday."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "To the date/time events are received (format yyyy-MM-dd HH:mm:ss, e.g. 2022-10-01 12:15:00). If it's not specified - events are received up to now."
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "Max number of events in one request. Can't be more than 20000. By default is 10.",
        "default": "10"
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Allows to skip the offset events before beginning to return the events. By default is 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/resources/applicantFraudNetworks",
    "method": "getFraudNetworks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant",
    "typeScriptTag": "applicant",
    "description": "Get fraud networks",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset of the found networks to be returned.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of the found networks to be returned. The maximum value you can set is 100.",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Sumsub API"
      apiBaseUrl="https://api.sumsub.com"
      apiVersion="1.0"
      endpoints={76}
      sdkMethods={82}
      schemas={76}
      parameters={254}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sumsub/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sumsub/openapi.yaml"
      developerDocumentation="docs.sumsub.com/reference"
    />
  );
}
  