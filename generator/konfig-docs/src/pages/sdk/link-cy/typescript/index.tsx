import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LinkCyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="link-cy-typescript-sdk"
      metaDescription={`LinkCy is the White Label Banking solution (via App or API) for Global Market in Europe.

Its Plug And Play service enables all Companies to offer accounts (IBANS) and payment cards (Visa / Mastercard) to their users without any regulatory burden, in just a few minutes, compared to 9 to 12 months of technical and regulatory development with other Banking As A Service (BAAS) platforms.

LinkCy is a French fintech start-up incubated at Sation F with BNP Paribas & Plug And Play.`}
      company="LinkCy"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/linkcy/logo.png"
      companyKebabCase="link-cy"
      clientNameCamelCase="linkCy"
      homepage="linkcy.io"
      lastUpdated={new Date("2024-03-29T19:35:23.354Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/linkcy/favicon.png"
      contactUrl="https://linkcy.io/#contact"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/linkcy/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","banking","financial_technology","banking_as_a_service","white_label_banking"]}
      methods={[
  {
    "url": "/api/partner/cards/{cardId}/rules",
    "method": "updateRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Update a rule from card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      },
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "value",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/card-profiles/{cardProfileId}/rules",
    "method": "createDefaultRule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Create a default card profile rule",
    "parameters": [
      {
        "name": "cardProfileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDPROFILEID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "value",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/verifications/phone/verify",
    "method": "verifyPhoneVerificationCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYC",
    "typeScriptTag": "kyc",
    "description": "Verify phone verification code",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Phone was successfully verified"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/verifications/phone/send",
    "method": "sendPhoneVerificationSms",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYC",
    "typeScriptTag": "kyc",
    "description": "Send phone verification code by sms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/verifications/email/send",
    "method": "sendEmailVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYC",
    "typeScriptTag": "kyc",
    "description": "Send an email verification link by email",
    "parameters": [
      {
        "name": "emailSubject",
        "schema": "string",
        "description": "",
        "example": "[{partnerName}] Please verify your email"
      },
      {
        "name": "urlOnSuccess",
        "schema": "string",
        "description": "",
        "example": "https://google.com"
      },
      {
        "name": "urlOnFailure",
        "schema": "string",
        "description": "",
        "example": "https://google.com"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/verifications/address",
    "method": "verifyAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYC",
    "typeScriptTag": "kyc",
    "description": "Verify the address of an end-user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/transactions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "List transactions",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": "The id of the end user who is transaction actor (sender / receiver)"
      },
      {
        "name": "ledgerId",
        "schema": "string",
        "required": false,
        "description": "Get transactions made from or to this ledger (ledgerFrom / ledgerTo)"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": false,
        "description": "Get transactions made from this card"
      },
      {
        "name": "transactionTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "showReleasedTransaction",
        "schema": "boolean",
        "required": false,
        "description": "Get transactions in RELEASED status (card authorization), by default is true"
      },
      {
        "name": "showDeclinedTransaction",
        "schema": "boolean",
        "required": false,
        "description": "Get transactions in DECLINED and ABORTED status, by default is true"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Get transactions from this date, example: 2022-05-16T10:30"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Get transactions until this date, example: 2022-05-16T10:30"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/transactions",
    "method": "createBeneficiaryTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Create a transaction to a beneficiary",
    "parameters": [
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "beneficiaryId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BENEFICIARYID"
      },
      {
        "name": "ledgerFromId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERFROMID"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowFastPayment",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "allowInterLedger",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/transactions/inter-ledger",
    "method": "createInterLedgerTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Create an inter-ledger transaction",
    "parameters": [
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "ledgerFromId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERFROMID"
      },
      {
        "name": "ledgerToId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERTOID"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/transactions/direct-debit",
    "method": "createDirectDebit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Create a direct debit transaction",
    "parameters": [
      {
        "name": "mandateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MANDATEID"
      },
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/sms",
    "method": "sendSms",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Additional",
    "typeScriptTag": "additional",
    "description": "Send SMS",
    "parameters": [
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/shares",
    "method": "createShare",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Create a share",
    "parameters": [
      {
        "name": "percentage",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "corporateRelatedId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATERELATEDID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/sca",
    "method": "onboardDeviceSca",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Strong Authentication",
    "typeScriptTag": "strongAuthentication",
    "description": "Onboard a known mobile.",
    "parameters": [
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDPOINTID"
      },
      {
        "name": "factor",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "BIOMETRY"
      },
      {
        "name": "strategy",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/sca/qr-codes",
    "method": "generateQrCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Strong Authentication",
    "typeScriptTag": "strongAuthentication",
    "description": "Onboard an unknown mobile with QR code",
    "parameters": [
      {
        "name": "endUserId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/refresh",
    "method": "refreshLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Log with refresh token",
    "parameters": [
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "refreshToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESHTOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/passwords/reset",
    "method": "initializePasswordReset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Initialize or reset a password",
    "parameters": [
      {
        "name": "partnerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERNAME"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/passwords/reset/sandbox",
    "method": "initializePasswordWithSecretInResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Initialize or reset a password with secret in response",
    "parameters": [
      {
        "name": "partnerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERNAME"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/passwords/change",
    "method": "changeUserPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Change user password",
    "parameters": [
      {
        "name": "newPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPASSWORD"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/mandates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Debit Mandate",
    "typeScriptTag": "directDebitMandate",
    "description": "List direct debit mandates",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": "The ID of the end user. If empty, the query will return results for all end-users."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/mandates",
    "method": "createNewMandate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Direct Debit Mandate",
    "typeScriptTag": "directDebitMandate",
    "description": "Create a new direct debit mandate",
    "parameters": [
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "friendlyName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtor",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/mandates/{mandateId}/cancel",
    "method": "cancelMandate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Direct Debit Mandate",
    "typeScriptTag": "directDebitMandate",
    "description": "Cancel a direct debit mandate",
    "parameters": [
      {
        "name": "mandateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MANDATEID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/mandates/{mandateId}/activate",
    "method": "activateMandate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Direct Debit Mandate",
    "typeScriptTag": "directDebitMandate",
    "description": "Activate a direct debit mandate",
    "parameters": [
      {
        "name": "mandateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MANDATEID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/login",
    "method": "userLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Log into the application",
    "parameters": [
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "List ledgers",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": "The ID of the end user. If empty, the query will return results for all end-users."
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": "The ID of the parent ledger you want to retrieve virtual ledgers from. If empty, the query will return ledgers regardless of parent."
      },
      {
        "name": "iban",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers",
    "method": "createIban",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Create a ledger",
    "parameters": [
      {
        "name": "friendlyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limits",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers/{ledgerId}/upgrade",
    "method": "upgradeLedger",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Upgrade a ledger",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers/{ledgerId}/suspensions",
    "method": "suspendLedgerAndCards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Suspend a ledger",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      },
      {
        "name": "operator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers/{ledgerId}/close",
    "method": "closeLedgerAndCards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Close a ledger",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      },
      {
        "name": "operator",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR",
        "default": "END_USER"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers/credit",
    "method": "simulateLedgerCredit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Credit a ledger",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/kyc",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KYC",
    "typeScriptTag": "kyc",
    "description": "List KYC applications",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personType",
        "schema": "string",
        "required": false,
        "description": "Type of person. If empty, the query will return KYC applications of all people types."
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": "The ID of the person. If empty, the query will return everyone KYC applications."
      },
      {
        "name": "kycStatus",
        "schema": "string",
        "required": false,
        "description": "Search KYCs by status. If empty, the query will return KYC applications with any status."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/kyc",
    "method": "requestValidationLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYC",
    "typeScriptTag": "kyc",
    "description": "Create a KYC for a consumer or a corporate-related person",
    "parameters": [
      {
        "name": "kycConfiguration",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/kyc/simulate",
    "method": "simulateKyc",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Simulate a KYC result for a consumer or a corporate-related person",
    "parameters": [
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "kycStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KYCSTATUS"
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthCity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthIsoCountryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationalityCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/end-users/{endUserId}/suspensions",
    "method": "suspendCardRuleLinkcy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "End-user",
    "typeScriptTag": "endUser",
    "description": "Suspend an end-user",
    "parameters": [
      {
        "name": "endUserId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDUSERID"
      },
      {
        "name": "operator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/documents",
    "method": "listForEndUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "List documents",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserId",
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
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/documents",
    "method": "uploadForEndUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Upload a document",
    "parameters": [
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "friendlyName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates",
    "method": "listCorporates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Corporate",
    "typeScriptTag": "corporate",
    "description": "List your corporates",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "registeredName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "kybStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bankingStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "suspensionStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "linkcyStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "complianceStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "overallStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates",
    "method": "createEndUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Corporate",
    "typeScriptTag": "corporate",
    "description": "Create a corporate",
    "parameters": [
      {
        "name": "partnerName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "registeredName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGISTEREDNAME"
      },
      {
        "name": "tradeName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "incorporationCountry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRA"
      },
      {
        "name": "incorporationCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345678900013"
      },
      {
        "name": "incorporationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "legalType",
        "schema": "object",
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
        "name": "industry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INDUSTRY"
      },
      {
        "name": "vatNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "registeredAddress",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "businessAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expectedMonthlyExpenses",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "employeesRange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountPurposes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "lastTermsAccepted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1.0"
      },
      {
        "name": "accountOwnerInfo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}/related",
    "method": "getCorporateRelated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Get corporate-related entities list",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      },
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ownedCorporateId",
        "schema": "string",
        "required": false,
        "description": "Parameter to get only the shareholders of this specified corporate-related corporate."
      },
      {
        "name": "layer",
        "schema": "integer",
        "required": false,
        "description": "Parameter allowing to obtain the associated entities on a specific layer of the corporate."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}/related",
    "method": "declareCorporateRelatedEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Declare a corporate-related entity (person or corporate)",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      },
      {
        "name": "info",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "isDirector",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "directorAppointmentDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharesInfo",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}/kyb/verification/ask",
    "method": "requestVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Ask a KYB verification",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The KYB verification request was sent successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/consumers",
    "method": "listEndUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer",
    "typeScriptTag": "consumer",
    "description": "List consumers",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
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
        "name": "kycStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bankingStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "suspensionStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "linkcyStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "complianceStatus",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "overallStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/consumers",
    "method": "createIndividualConsumer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Consumer",
    "typeScriptTag": "consumer",
    "description": "Create a consumer",
    "parameters": [
      {
        "name": "partnerName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceOfFunds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "otherSourceOfFunds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "occupation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "otherOccupation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastTermsAccepted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1.0"
      },
      {
        "name": "taxIdentificationNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountPurposes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "expectedMonthlyExpenses",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards",
    "method": "listCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "List cards",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": "The ID of the end user. If empty, the query will return results for all end-users."
      },
      {
        "name": "ledgerId",
        "schema": "string",
        "required": false,
        "description": "The ID of the card ledger. If empty, the query will return cards for all ledgers."
      },
      {
        "name": "profileId",
        "schema": "string",
        "required": false,
        "description": "The ID of the card profile. If empty, the query will return cards for all profiles."
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards",
    "method": "createForLedger",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Create a card",
    "parameters": [
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      },
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILEID"
      },
      {
        "name": "nameOnCard",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "FIRSTNAME LASTNAME"
      },
      {
        "name": "friendlyName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/suspend",
    "method": "suspendCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Suspend a card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "The card id",
        "example": "CARDID"
      },
      {
        "name": "operator",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR",
        "default": "END_USER"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "otherReason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Card is being suspended"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/pin/reset",
    "method": "resetPinAttempts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Reset physical card's PIN attempts",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      },
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Card PIN attempts are being reset"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/close",
    "method": "closeCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Close a card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "The card id",
        "example": "CARDID"
      },
      {
        "name": "operator",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR",
        "default": "END_USER"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      },
      {
        "name": "otherReason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Card is being closed"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/activate",
    "method": "activateCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Activate a card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "The card id",
        "example": "CARDID"
      },
      {
        "name": "truncatedPan",
        "schema": "string",
        "description": "",
        "example": "1111"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Card is being activated"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/card-profiles",
    "method": "getProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "List card profiles",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ledgerTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cardTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/card-profiles",
    "method": "createProfileBasedOnDesign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Create a card profile",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "cardDesignId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDDESIGNID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/beneficiaries",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiary",
    "typeScriptTag": "beneficiary",
    "description": "List Beneficiaries",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "Show results with only active status or non active status. Both statuses are shown by default."
      },
      {
        "name": "display",
        "schema": "boolean",
        "required": false,
        "description": "Show only display or non display beneficiaries. Both statuses are shown by default."
      },
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": "The ID of the end user. If empty, the query will return results for all end-users."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/beneficiaries",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beneficiary",
    "typeScriptTag": "beneficiary",
    "description": "Add a new beneficiary",
    "parameters": [
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "fullName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John Michael Doe"
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bankingDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "display",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/acquiring/payment",
    "method": "initiateTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Acquiring",
    "typeScriptTag": "acquiring",
    "description": "Start an acquiring for a payment",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "endUserId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REDIRECTURL"
      },
      {
        "name": "reference",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/acquiring/account-load",
    "method": "initiateTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Acquiring",
    "typeScriptTag": "acquiring",
    "description": "Start an acquiring for a top-up",
    "parameters": [
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "targetLedgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETLEDGERID"
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserId",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/accounts",
    "method": "listUserAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner",
    "typeScriptTag": "partner",
    "description": "List user accounts",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/accounts",
    "method": "createUserAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner",
    "typeScriptTag": "partner",
    "description": "Create user account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner",
    "typeScriptTag": "partner",
    "description": "Get your information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Your information as Partner."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Partner",
    "typeScriptTag": "partner",
    "description": "Update your information",
    "parameters": [
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "consumerOtpMessage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "corporateOtpMessage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logoUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactInformation",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/shares/{shareId}",
    "method": "deleteShare",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Delete a share",
    "parameters": [
      {
        "name": "shareId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHAREID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/shares/{shareId}",
    "method": "getShareInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Get share's information",
    "parameters": [
      {
        "name": "shareId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHAREID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/shares/{shareId}",
    "method": "updateShareInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Update a share",
    "parameters": [
      {
        "name": "shareId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHAREID"
      },
      {
        "name": "percentage",
        "schema": "number",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/sca/{scaDeviceId}",
    "method": "resetUserDeviceSca",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Strong Authentication",
    "typeScriptTag": "strongAuthentication",
    "description": "Reset the SCA device of a user",
    "parameters": [
      {
        "name": "scaDeviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCADEVICEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/sca/{scaDeviceId}",
    "method": "updateFactor",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Strong Authentication",
    "typeScriptTag": "strongAuthentication",
    "description": "Add an authentication Factor",
    "parameters": [
      {
        "name": "scaDeviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCADEVICEID"
      },
      {
        "name": "factor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACTOR"
      },
      {
        "name": "strategy",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "PUSH_NOTIFICATION"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/mandates/{mandateId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Debit Mandate",
    "typeScriptTag": "directDebitMandate",
    "description": "Get a direct debit mandate information",
    "parameters": [
      {
        "name": "mandateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MANDATEID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/mandates/{mandateId}",
    "method": "updateMandate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Direct Debit Mandate",
    "typeScriptTag": "directDebitMandate",
    "description": "Update a direct debit mandate",
    "parameters": [
      {
        "name": "mandateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MANDATEID"
      },
      {
        "name": "friendlyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "debtor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers/{ledgerId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Get information on a ledger",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers/{ledgerId}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Update a ledger",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      },
      {
        "name": "friendlyName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parentLedgerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limits",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}",
    "method": "deleteCorporateById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Delete a corporate",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Corporate",
    "typeScriptTag": "corporate",
    "description": "Get corporate's information",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The complete corporate information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Corporate",
    "typeScriptTag": "corporate",
    "description": "Update a corporate",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "registeredName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tradeName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "incorporationCountry",
        "schema": "string",
        "description": "",
        "example": "FRA"
      },
      {
        "name": "incorporationCode",
        "schema": "string",
        "description": "",
        "example": "12345678900013"
      },
      {
        "name": "incorporationDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalType",
        "schema": "object",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vatNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "registeredAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "businessAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expectedMonthlyExpenses",
        "schema": "object",
        "description": ""
      },
      {
        "name": "employeesRange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountPurposes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lastTermsAccepted",
        "schema": "string",
        "description": "",
        "example": "1.0"
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "partnerMetadata",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}/related/{corporateRelatedId}",
    "method": "getCorporateRelatedInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Get corporate-related entity's information",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      },
      {
        "name": "corporateRelatedId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATERELATEDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about this corporate-related entity."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}/related/{corporateRelatedId}",
    "method": "updateCorporateRelatedEntity",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Update a corporate-related entity (person or corporate)",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      },
      {
        "name": "corporateRelatedId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATERELATEDID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDirector",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "directorAppointmentDate",
        "schema": "string",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/corporates/{corporateId}/kyb",
    "method": "bypassKycStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Manually bypass a corporate's KYB status",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      },
      {
        "name": "kybStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KYBSTATUS"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/consumers/{consumerId}",
    "method": "deleteConsumerById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Delete a consumer",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONSUMERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/consumers/{consumerId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumer",
    "typeScriptTag": "consumer",
    "description": "Get consumer's information",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONSUMERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The complete consumer information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/consumers/{consumerId}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Consumer",
    "typeScriptTag": "consumer",
    "description": "Update a consumer",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONSUMERID"
      },
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceOfFunds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otherSourceOfFunds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "occupation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otherOccupation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastTermsAccepted",
        "schema": "string",
        "description": "",
        "example": "1.0"
      },
      {
        "name": "taxIdentificationNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxCountry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountPurposes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expectedMonthlyExpenses",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "object",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userMetadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "partnerMetadata",
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
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Get card's information",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The complete card information"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}",
    "method": "updateInformation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Update a card",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      },
      {
        "name": "friendlyName",
        "schema": "string",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/card-profiles/{cardProfileId}",
    "method": "updateProfile",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Update a card profile",
    "parameters": [
      {
        "name": "cardProfileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDPROFILEID"
      },
      {
        "name": "active",
        "schema": "boolean",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/beneficiaries/{beneficiaryId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiary",
    "typeScriptTag": "beneficiary",
    "description": "Get beneficiary's information",
    "parameters": [
      {
        "name": "beneficiaryId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BENEFICIARYID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/beneficiaries/{beneficiaryId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Beneficiary",
    "typeScriptTag": "beneficiary",
    "description": "Patch a beneficiary",
    "parameters": [
      {
        "name": "beneficiaryId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BENEFICIARYID"
      },
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "display",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/beneficiaries/{beneficiaryId}/status",
    "method": "bypassBeneficiaryStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Bypass a beneficiary's status",
    "parameters": [
      {
        "name": "beneficiaryId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BENEFICIARYID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/accounts/{accountId}",
    "method": "updateUserAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Partner",
    "typeScriptTag": "partner",
    "description": "Update user account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/webhooks",
    "method": "portalUrlGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Get your webhook portal url",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/web-page/{pageId}",
    "method": "getHtmlPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Web Pages",
    "typeScriptTag": "webPages",
    "description": "Retrieve the web html page corresponding to a previous operation.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAGEID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/transactions/{transactionId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transaction",
    "typeScriptTag": "transaction",
    "description": "Get transaction's information",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/kyc/{kycId}",
    "method": "getApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KYC",
    "typeScriptTag": "kyc",
    "description": "Get kyc application",
    "parameters": [
      {
        "name": "kycId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KYCID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/documents/{documentId}",
    "method": "getDownloadLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get a document",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/documents/ledger-statement/{ledgerId}",
    "method": "getStatementById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Get a ledger statement",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response including url link and time to leave Duration."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/documents/diligence-review/{corporateId}",
    "method": "getDiligenceReview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KYB",
    "typeScriptTag": "kyb",
    "description": "Get diligence review of a corporate",
    "parameters": [
      {
        "name": "corporateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CORPORATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response including url link and time to leave Duration."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/documents/bank-details/{ledgerId}",
    "method": "getBankingDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Get banking details from ledger",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response including url link and time to leave Duration."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/docs/terms",
    "method": "getTermsAndConditions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Additional",
    "typeScriptTag": "additional",
    "description": "Get terms and conditions",
    "parameters": [
      {
        "name": "termsAndConditionsInfoRequestDto",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Terms and conditions information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/pin",
    "method": "getPin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Get a physical card's PIN",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      },
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/pan",
    "method": "getTruncatedPan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sandbox",
    "typeScriptTag": "sandbox",
    "description": "Get a card truncated PAN",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/pan/credentials",
    "method": "getPanCredentials",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Get PAN credentials",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      },
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/card-designs",
    "method": "getDesigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "List card designs",
    "parameters": [
      {
        "name": "sortAttribute",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheme",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ledgerType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cardType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number."
      },
      {
        "name": "sortDirection",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/acquiring/transactions/{transactionId}",
    "method": "transactionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Acquiring",
    "typeScriptTag": "acquiring",
    "description": "Get acquiring transaction information",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONID"
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/acquiring-configuration",
    "method": "acquiringConfigurationGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner",
    "typeScriptTag": "partner",
    "description": "Get your acquiring configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/ledgers/{ledgerId}/suspensions/{operator}",
    "method": "unsuspendLedger",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ledger",
    "typeScriptTag": "ledger",
    "description": "Unsuspend a ledger",
    "parameters": [
      {
        "name": "ledgerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEDGERID"
      },
      {
        "name": "operator",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/end-users/{endUserId}/suspensions/{operator}",
    "method": "unsuspendById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "End-user",
    "typeScriptTag": "endUser",
    "description": "Unsuspend an end-user",
    "parameters": [
      {
        "name": "endUserId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDUSERID"
      },
      {
        "name": "operator",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATOR"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/cards/{cardId}/rules/{ruleType}",
    "method": "removeRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Remove card rule",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      },
      {
        "name": "ruleType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULETYPE"
      },
      {
        "name": "linkcyScaStrategy",
        "schema": "string",
        "required": false,
        "description": "The strategy to use when a SCA is required:\n<details>\n<summary>More information:</summary>\n\n- `PUSH_NOTIFICATION`: will send a notification if the SCA is required.\n- `JOIN_CODE`: will return a join code if SCA is required.\n- `FAIL`: will fail if SCA is required.\n- `BY_PASS`: Sandbox only - will ignore any SCA if used.\n</details>\n\n\n<details>\n<summary>ErrorCode</summary>\n\n- 409 Conflict\n    - `SCA_REQUIRED`: The operation requires SCA. Can be returned if you try to use BY_PASS while not allowed. Will be returned if strategy is FAIL.\n    - `SCA_DEVICE_NOT_SET`: The operation requires SCA and strategy allows it, but the user has no sca device set up. You need to enroll one first. \n</details>",
        "default": "PUSH_NOTIFICATION"
      },
      {
        "name": "linkcyScaFactor",
        "schema": "string",
        "required": false,
        "description": "The factor type required for the operation :\n<details>\n<summary>More information:</summary>\n\n- `BIOMETRY`: will require fingerprint or face recognition depending on device.\n- `PIN`: will require the endpoint pin. When using this factor, a pin must have been registered through the SDK first. Sca pin and end user password can differ.\n</details>\n\n<details>\n<summary>ErrorCode</summary>\n\n- 400 Bad Request\n    - `SCA_FACTOR_NOT_SET`: The user has a sca device set up, but the factor requested is not enrolled yet. You must either enroll it or change the factor.\n</details>\n",
        "default": "BIOMETRY"
      },
      {
        "name": "linkcyScaId",
        "schema": "string",
        "required": false,
        "description": "The id of the completed SCA operation.\n\n<details>\n<summary>ErrorCode</summary>\n\n- 404 Not Found\n    - `SCA_INTERACTION_NOT_FOUND`: The specified id could not be found.\n- 409 Conflict\n    - `SCA_INTERACTION_NOT_COMPLETED`: The SCA interaction is not completed (https://docs.sandbox.linkcy.io/.\n    - `SCA_INTERACTION_DECLINED`: The SCA interaction was declined by user or expired. \n    - `SCA_INTERACTION_ALREADY_CONSUMED`: The SCA interaction has already been used, you need to create a new one.\n    - `SCA_INTERACTION_DOES_NOT_MATCH`: The SCA interaction does not match the one you are trying to make. Body or url is different.\n</details>"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/partner/card-profiles/{cardProfileId}/rules/{ruleType}",
    "method": "removeDefaultRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Card",
    "typeScriptTag": "card",
    "description": "Remove default card profile rule",
    "parameters": [
      {
        "name": "cardProfileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDPROFILEID"
      },
      {
        "name": "ruleType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RULETYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Linkcy Api"
      apiBaseUrl="https://api.sandbox.linkcy.cloud"
      apiVersion="1.78.0"
      endpoints={125}
      sdkMethods={102}
      schemas={699}
      parameters={410}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/linkcy/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/linkcy/openapi.yaml"
      developerDocumentation="docs.sandbox.linkcy.io/"
    />
  );
}
  