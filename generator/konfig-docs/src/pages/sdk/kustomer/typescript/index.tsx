import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function KustomerTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="kustomer-typescript-sdk"
      metaDescription={`Kustomer helps businesses grow by delivering exceptional customer service via phone, email, chat, text, social, messaging and more. Kustomer enables fast, personalized, and efficient customer and agent experiences using complete customer visibility, seamless omnichannel conversations, intelligent automation and easy, no-code customization to adapt to change. See why growing brands use Kustomer to build the enduring customer relationships that drive better business results at http://ow.ly/UZ5X50HV0ov`}
      company="Kustomer"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kustomer/logo.png"
      companyKebabCase="kustomer"
      clientNameCamelCase="kustomer"
      homepage="kustomer.com"
      lastUpdated={new Date("2024-03-27T22:24:36.753Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kustomer/favicon.png"
      contactUrl="https://developer.kustomer.com/kustomer-api-docs"
      contactEmail="support@kustomer.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kustomer/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["customer_service","customer_communication","omnichannel","chat","email","messaging"]}
      methods={[
  {
    "url": "/audit-logs",
    "method": "queryEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Logs",
    "typeScriptTag": "auditLogs",
    "description": "Query events associated with your organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/attachments",
    "method": "createAttachmentDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Create attachment",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTTYPE"
      },
      {
        "name": "contentLength",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/attachments/{id}",
    "method": "getByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Get attachments by ID [Outbound Only]",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of attachment to retrieve.\n#### NOTE\n>You can provide a comma-delimited list of IDs to receive an array of attchments matching those IDs.",
        "example": "5a4d1a8a6d92880012ad2923"
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
    "url": "/attachments/{id}",
    "method": "updateOrUpsert",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Update or upsert attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of attachment to update.",
        "example": "5a4d1a8a6d92880012ad2923"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redacted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contentLength",
        "schema": "number",
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
    "url": "/messages/{message_id}/attachments/{id}",
    "method": "getMessageAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Get attachment by message ID and attachment ID (inbound or outbound)",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "ID of message with attachment",
        "example": "5e0e14a7af4e8c001a084dba"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of attachment to retrieve",
        "example": "5e0e14c103a4e80018b374aa"
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
    "url": "/brands",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Get brands",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/brands",
    "method": "createBrandResource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Create brand",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Kustom Socks"
      },
      {
        "name": "iconUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://s29093.pcdn.co/wp-content/uploads/2019/12/Kustomer_Logo-2.svg"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/brands/default",
    "method": "getDefaultBrand",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Get default brand",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/brands/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Get brand by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Brand ID",
        "example": "5dce2a9500520400149dc607"
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
    "url": "/brands/{id}",
    "method": "updateBrandResource",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Brands",
    "typeScriptTag": "brands",
    "description": "Update brand",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Brand ID",
        "example": "5e0f779ed95b430019b57715"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Kustom Socks, VIP"
      },
      {
        "name": "iconUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://s29093.pcdn.co/wp-content/uploads/2019/12/Kustomer_Logo-3.svg"
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
    "url": "/schedules",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Schedules",
    "typeScriptTag": "businessSchedules",
    "description": "Get all business schedules",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/schedules",
    "method": "createSchedule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Business Schedules",
    "typeScriptTag": "businessSchedules",
    "description": "Create a business schedule",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "hours",
        "schema": "object",
        "required": true,
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
        "name": "default",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/schedules/default",
    "method": "getDefault",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Schedules",
    "typeScriptTag": "businessSchedules",
    "description": "Get default business schedule",
    "parameters": [
      {
        "name": "include",
        "schema": "string",
        "description": "Option to include holidays. Accepted values: `holidays`.",
        "example": "holidays"
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
    "url": "/schedules/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Business Schedules",
    "typeScriptTag": "businessSchedules",
    "description": "Delete a business schedule by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Business Schedule ID",
        "example": "5e2210548d9b6e0087fa67f1"
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
    "url": "/schedules/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Schedules",
    "typeScriptTag": "businessSchedules",
    "description": "Get business schedule by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Business Schedule ID",
        "example": "5e21e0f9520ec30019df3dcf"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Option to include holidays. Accepted values: `holidays`.",
        "example": "holidays"
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
    "url": "/schedules/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Business Schedules",
    "typeScriptTag": "businessSchedules",
    "description": "Update business schedule by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Business Schedule ID",
        "example": "5e21e0f9520ec30019df3dcf"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "hours",
        "schema": "object",
        "required": true,
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
        "name": "default",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/companies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get companies",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "description": "Unique external ID of the company",
        "example": "foobar"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Company name to use as a filter",
        "example": "foucault"
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
    "url": "/companies",
    "method": "createNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create company",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
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
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "whatsapps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "socials",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "urls",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeCount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rev",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultLang",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get company by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the company.",
        "example": "58224b3eaa5f92110005d61e"
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
    "url": "/companies/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update company attributes",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the company.",
        "example": "58224b3eaa5f92110005d61e"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "whatsapps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "socials",
        "schema": "array",
        "description": ""
      },
      {
        "name": "urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "employeeCount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "defaultLang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rev",
        "schema": "number",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/companies/{id}/klasses/{name}",
    "method": "getKObjectsByCompanyIdAndKlassName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Find company KObjects (custom Objects)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the company.",
        "example": "57c08ccde595371400462df3"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Unique Klass name.",
        "example": "order"
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
    "url": "/companies/bulk",
    "method": "createBulkCompanies",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies (https://developer.kustomer.com",
    "typeScriptTag": "companiesHttps:DeveloperKustomerCom",
    "description": "Bulk create companies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/bulk",
    "method": "batchUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Companies (https://developer.kustomer.com",
    "typeScriptTag": "companiesHttps:DeveloperKustomerCom",
    "description": "Bulk batch update companies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations",
    "method": "getPaginatedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversations",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Option to sort the results in descending order.",
        "example": "desc"
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
    "url": "/conversations",
    "method": "createNewConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Create conversation",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
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
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyChannel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignedUsers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "assignedTeams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultLang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "queue",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Delete conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58228e05d4e96711004eccb7"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation by ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update conversation attributes",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58228e05d4e96711004eccb7"
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
    "url": "/conversations/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Update conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58228e05d4e96711004eccb7"
      },
      {
        "name": "replace",
        "schema": "boolean",
        "required": false,
        "description": "Set to `true` to update the document. Otherwise, performs the same update as a PATCH request. Default value: `false`.",
        "example": true,
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
    "url": "/conversations/externalId={externalId}",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation by external ID",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "Unique external ID of the conversation",
        "example": "foobar"
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
    "url": "/conversations/{id}/attachments",
    "method": "getAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58228e05d4e96711004eccb7"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/conversations/{id}/events",
    "method": "getEventsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation events",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58228e05d4e96711004eccb7"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Option to sort results in ascending or descending order.",
        "example": "eventName"
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
    "url": "/conversations/bulk",
    "method": "createMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Bulk create conversations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/bulk",
    "method": "batchUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Bulk batch update conversations",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Comma-separated list of unique conversation IDs.",
        "example": "id1,id2"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/{id}/messages",
    "method": "getByConversation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Get messages by conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "57c8d2b01a57ed1400392073"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "List of resources to include in this response. Use a comma to separate resources. Supports the `attachments` resource. ",
        "example": "attachments"
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
    "url": "/conversations/{id}/messages",
    "method": "createNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Create message from conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58288a637c7f551a00b5b716"
      },
      {
        "name": "id",
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
        "name": "customer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "conversation",
        "schema": "string",
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
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "preview",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APP"
      },
      {
        "name": "size",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "related",
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
        "name": "error",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "errorAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sentAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shortcuts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "kbArticles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "undefined",
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
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
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
        "name": "queue",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/conversations/{id}/tags",
    "method": "removeTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Remove tags from conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "5837af59baf9ae1900e82ca7"
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
    "url": "/conversations/{id}/tags",
    "method": "appendTagsToConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Append tags to conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "5837af59baf9ae1900e82ca7"
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
    "url": "/conversations/{id}/forwards",
    "method": "getAllByConversationId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Get all forwards by conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58210c3d728107110018662f"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/conversations/{id}/forwards",
    "method": "createForward",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Create forward by conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "58210c3db0f09110006b7954"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "app",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
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
        "name": "sendAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "to",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payload",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
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
    "url": "/conversations/{id}/times",
    "method": "listByConversation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Get conversation times by conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "5f184e74c61792001af42e49"
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
    "url": "/conversations/times/{ids}",
    "method": "getByUniqueIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Get conversation time by ids",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the `conversation_time`.",
        "example": "5f184e74c61792001af42e49"
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
    "url": "/conversations/{id}/notes",
    "method": "getByConversationId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations (https://developer.kustomer.com",
    "typeScriptTag": "conversationsHttps:DeveloperKustomerCom",
    "description": "Get notes by conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the conversation.",
        "example": "57c8d2b365f7cc14004e674f"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/conversations/{id}/notes",
    "method": "createNoteWithinConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes (https://developer.kustomer.com",
    "typeScriptTag": "notesHttps:DeveloperKustomerCom",
    "description": "Create note within conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the Conversation",
        "example": "<string>"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "conversation",
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
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "userMentions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/bulk",
    "method": "deleteMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Bulk delete customers",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Comma-separated list of unique customer IDs.",
        "example": "id1,id2"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/bulk",
    "method": "createBulkCustomers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Bulk create customers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/bulk",
    "method": "bulkUpdateCustomers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Bulk batch update customers",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Comma-separated list of unique customer IDs.",
        "example": "id1,id2"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}/conversations",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get conversations by customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "`date-time` string in Internet Date/Time format ([ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6)).",
        "example": "2016-11-09T00:00:00.000Z"
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
    "url": "/customers/{id}/conversations",
    "method": "createEmptyConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Create conversation for customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "campaign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyChannel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignedUsers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assignedTeams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "defaultLang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "queue",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}/drafts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get all drafts for customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "List of resources to include in this response. Use a comma to separate resources. Supports the `attachments` resource. ",
        "example": "attachments"
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
    "url": "/customers/{id}/drafts",
    "method": "createDraft",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Create draft for customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
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
    "url": "/customers/{customerId}/events/{id}",
    "method": "getSingleEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get customer event",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the event.",
        "example": "58210c3d7281071100186631"
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
    "url": "/customers/{customerId}/sessions/{sessionId}/events",
    "method": "getAllBySession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get all events by customer for session",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58290b8b7c7f551a00b5b738"
      },
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the session.",
        "example": "58290fb391113b1900bbee4c"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/customers/{id}/events",
    "method": "getSingleEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get all customer events (https://developer.kustomer.com",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Comma-separated list of event names to filter results.",
        "example": "foobar"
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
    "url": "/customers/{id}/sessions",
    "method": "getCustomerSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get all customer sessions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58290b8b7c7f551a00b5b738"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/customers/{id}/klasses/{name}",
    "method": "findByKlass",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Find customer KObjects (custom Objects)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "57c08ccde595371400462df2"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of the Klass.",
        "example": "order"
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
    "url": "/customers/{id}/klasses/{name}",
    "method": "createKObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Create customer KObject (custom Object)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "57c08ccde595371400462df2"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of the Klass.",
        "example": "order"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "string",
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
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "images",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/merges",
    "method": "createMergeRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Create customer merge",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      },
      {
        "name": "target",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/merges/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get customer merge",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer merge.",
        "example": "5822bab2aa5f92110005d6b2"
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
    "url": "/customers/{id}/merges",
    "method": "getByCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get customer merges by customer ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "5822ba88d4e96711004eccd5"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/customers/{id}/messages",
    "method": "getByCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get messages by customer ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer",
        "example": "57c08ccde595371400462df2"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "List of resources to include in this response. Use a comma to separate resources. Supports the `attachments` resource. ",
        "example": "attachments"
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
    "url": "/customers/{id}/messages",
    "method": "createMessageByCustomerId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Create message by customer ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "57c08ccde595371400462df2"
      },
      {
        "name": "id",
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
        "name": "conversation",
        "schema": "string",
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
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "preview",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APP"
      },
      {
        "name": "size",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "related",
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
        "name": "error",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "errorAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sentAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shortcuts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "kbArticles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "undefined",
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
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
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
        "name": "queue",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}/notes",
    "method": "getByCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers (https://developer.kustomer.com",
    "typeScriptTag": "customersHttps:DeveloperKustomerCom",
    "description": "Get notes by customer ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "57c08ccde595371400462df2"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/customers/{id}/unmasking-windows",
    "method": "deleteByCustomerId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers (Unmasking Windows)",
    "typeScriptTag": "customersUnmaskingWindows",
    "description": "Deletes unmasking window by customer ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "57c08ccde595371400462df2"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}/unmasking-windows",
    "method": "createWindowByCustomerId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers (Unmasking Windows)",
    "typeScriptTag": "customersUnmaskingWindows",
    "description": "Create unmasking window by customer ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "57c08ccde595371400462df2"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers",
    "method": "getAllCustomers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers",
    "method": "createNewCustomerRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create customer",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signedUpAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastActivityAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastCustomerActivityAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastSeenAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedExternalIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedEmails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedPhones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "whatsapps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facebookIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "instagramIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "socials",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedSocials",
        "schema": "array",
        "description": ""
      },
      {
        "name": "urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "birthdayAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rev",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultLang",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "deleteRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b795"
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
    "url": "/customers/{id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update customer attributes",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signedUpAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastActivityAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastCustomerActivityAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastSeenAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedExternalIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedEmails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedPhones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "whatsapps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facebookIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "instagramIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "socials",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedSocials",
        "schema": "array",
        "description": ""
      },
      {
        "name": "urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "birthdayAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rev",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultLang",
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
    "url": "/customers/{id}",
    "method": "updateCustomerById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the customer.",
        "example": "58210c3db0f09110006b7953"
      },
      {
        "name": "replace",
        "schema": "boolean",
        "required": false,
        "description": "Set to `true` to update the document. Otherwise, performs the same update as a PATCH request. Default value: `false`.",
        "example": true,
        "default": false
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signedUpAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastActivityAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastCustomerActivityAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastSeenAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedExternalIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedEmails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedPhones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "whatsapps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facebookIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "instagramIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "socials",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sharedSocials",
        "schema": "array",
        "description": ""
      },
      {
        "name": "urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "birthdayAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rev",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultLang",
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
    "url": "/customers/email={email}",
    "method": "getByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer by email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email address of the customer.",
        "example": "customer.name@email.com"
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
    "url": "/customers/externalId={externalId}",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer by external ID",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "External ID of the customer.",
        "example": "my-customer-database-id"
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
    "url": "/customers/phone={phone}",
    "method": "getByPhone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customer by phone number",
    "parameters": [
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "Phone number of the customer (E.164 format).",
        "example": "18005551212"
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
    "url": "/metadata/{resource}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "Get custom attribute metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/metadata/{resource}",
    "method": "updateAttributeMetadata",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Attributes",
    "typeScriptTag": "customAttributes",
    "description": "Update custom attribute metadata",
    "parameters": [
      {
        "name": "standardProperties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "relationships",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "validations",
        "schema": "array",
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
    "url": "/drafts/{id}/attachments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drafts (https://developer.kustomer.com",
    "typeScriptTag": "draftsHttps:DeveloperKustomerCom",
    "description": "Get draft attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique draft ID.",
        "example": "57323b90b7579a2a004f1316"
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
    "url": "/drafts/{id}/attachments",
    "method": "createAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Drafts (https://developer.kustomer.com",
    "typeScriptTag": "draftsHttps:DeveloperKustomerCom",
    "description": "Create draft attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique draft ID.",
        "example": "58c766aadd4b90110053bd81"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTTYPE"
      },
      {
        "name": "contentLength",
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
      }
    ]
  },
  {
    "url": "/drafts/{id}/attachments/{attachmentId}",
    "method": "deleteResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Drafts (https://developer.kustomer.com",
    "typeScriptTag": "draftsHttps:DeveloperKustomerCom",
    "description": "Delete draft attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique draft ID.",
        "example": "57323b90b7579a2a004f1316"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique attachment ID.",
        "example": "58c766aadd4b90110053bd81"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/drafts/{id}/attachments/{attachmentId}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drafts (https://developer.kustomer.com",
    "typeScriptTag": "draftsHttps:DeveloperKustomerCom",
    "description": "Get draft attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique draft ID.",
        "example": "57323b90b7579a2a004f1316"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique attachment ID.",
        "example": "58c766aadd4b90110053bd81"
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
    "url": "/forwards/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Get draft forward by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique draft forward ID.",
        "example": "5823e4d3bff98a100085320e"
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
    "url": "/forwards/{id}",
    "method": "updateDraftForward",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Update draft forward",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique draft forward ID.\n",
        "example": "5823e4d3bff98a100085320e"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "array",
        "description": ""
      },
      {
        "name": "from",
        "schema": "object",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replyTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payload",
        "schema": "object",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/forwards/{id}/attachments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forwards (https://developer.kustomer.com",
    "typeScriptTag": "forwardsHttps:DeveloperKustomerCom",
    "description": "Get forward attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique forward ID.",
        "example": "57323b90b7579a2a004f1316"
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
    "url": "/forwards/{id}/attachments",
    "method": "createAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forwards (https://developer.kustomer.com",
    "typeScriptTag": "forwardsHttps:DeveloperKustomerCom",
    "description": "Create forward attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique forward ID.",
        "example": "57323b90b7579a2a004f1316"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTTYPE"
      },
      {
        "name": "contentLength",
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
      }
    ]
  },
  {
    "url": "/forwards/{id}/attachments/{attachmentId}",
    "method": "deleteResource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forwards (https://developer.kustomer.com",
    "typeScriptTag": "forwardsHttps:DeveloperKustomerCom",
    "description": "Delete Forward Attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique attachment ID.",
        "example": "57323b90b7579a2a004f1316"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique attachment ID.",
        "example": "58c766aadd4b90110053bd81"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/forwards/{id}/attachments/{attachmentId}",
    "method": "getPreSignedUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forwards (https://developer.kustomer.com",
    "typeScriptTag": "forwardsHttps:DeveloperKustomerCom",
    "description": "Get forward attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique forward ID.",
        "example": "57323b90b7579a2a004f1316"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Unique attachment ID.",
        "example": "58c766aadd4b90110053bd81"
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
    "url": "/outboundAccounts",
    "method": "getOutboundAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Get outbound accounts",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
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
    "url": "/drafts/{id}",
    "method": "deleteDraft",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Delete draft",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/drafts/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Drafts",
    "typeScriptTag": "drafts",
    "description": "Update draft",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{name}/bulk",
    "method": "deleteMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "KObjects (Custom Objects) (https://developer.kustomer.com",
    "typeScriptTag": "kObjectsCustomObjectsHttps:DeveloperKustomerCom",
    "description": "Bulk delete KObjects (custom objects)",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Klass name of KObjects (custom objects).",
        "example": "orders"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma-separated list of unique KObject IDs.",
        "example": "id1,id2"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{name}/bulk",
    "method": "createInBulk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KObjects (Custom Objects) (https://developer.kustomer.com",
    "typeScriptTag": "kObjectsCustomObjectsHttps:DeveloperKustomerCom",
    "description": "Bulk create KObjects (custom objects)",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Klass name of KObjects (custom objects).",
        "example": "orders"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{name}/bulk",
    "method": "updateBatch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KObjects (Custom Objects) (https://developer.kustomer.com",
    "typeScriptTag": "kObjectsCustomObjectsHttps:DeveloperKustomerCom",
    "description": "Bulk batch update KObjects (custom objects)",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Klass name of KObjects (custom objects).",
        "example": "orders"
      },
      {
        "name": "ids",
        "schema": "string",
        "description": "Comma-separated list of unique KObject IDs.",
        "example": "id1,id2"
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
    "url": "/klasses/{name}",
    "method": "getByKlassName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KObjects (Custom Objects)",
    "typeScriptTag": "kObjectsCustomObjects",
    "description": "Get KObjects (custom objects)",
    "parameters": [
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "`date-time` string in Internet Date/Time format ([ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6)).",
        "example": "2016-11-09T00:00:00.000Z"
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
    "url": "/klasses/{name}",
    "method": "createNewKObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KObjects (Custom Objects)",
    "typeScriptTag": "kObjectsCustomObjects",
    "description": "Create KObject",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "string",
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
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "images",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{name}/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "KObjects (Custom Objects)",
    "typeScriptTag": "kObjectsCustomObjects",
    "description": "Delete KObject (custom object) by ID",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Klass name of the KObject.",
        "example": "orders"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the KObject.",
        "example": "5826ab180fcc2514008b2a94"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{name}/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KObjects (Custom Objects)",
    "typeScriptTag": "kObjectsCustomObjects",
    "description": "Get KObject (custom object) by ID",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Klass name of the KObject.",
        "example": "orders"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the KObject.",
        "example": "5826ab180fcc2514008b2a94"
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
    "url": "/klasses/{name}/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KObjects (Custom Objects)",
    "typeScriptTag": "kObjectsCustomObjects",
    "description": "Update KObject (custom object) by ID",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Klass name of the KObject.",
        "example": "orders"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the KObject.",
        "example": "5826ab180fcc2514008b2a94"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "images",
        "schema": "array",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rev",
        "schema": "number",
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
    "url": "/klasses",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Klasses",
    "typeScriptTag": "klasses",
    "description": "Get Klasses",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Option to filter Klass based on the status. Default value: `enabled`. ",
        "example": "enabled",
        "default": "enabled"
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
    "url": "/klasses",
    "method": "createNewKlass",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Klasses",
    "typeScriptTag": "klasses",
    "description": "Create Klass",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jsonSchema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
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
    "url": "/klasses/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Klasses",
    "typeScriptTag": "klasses",
    "description": "Delete Klass",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Klasses",
    "typeScriptTag": "klasses",
    "description": "Get Klass by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Klasses",
    "typeScriptTag": "klasses",
    "description": "Update Klass by ID",
    "parameters": [
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jsonSchema",
        "schema": "undefined",
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
    "url": "/media",
    "method": "uploadDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Create media",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTTYPE"
      },
      {
        "name": "contentLength",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/media/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Get media by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique media object ID. Provide a comma-separated list of `id`s to retrieve an array of media objects instead.",
        "example": "5da062fb90897d01573e121f"
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
    "url": "/media/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Update media by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique media object ID.",
        "example": "5da062fb90897d01573e121f"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redacted",
        "schema": "boolean",
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
    "url": "/messages/bulk",
    "method": "createBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages (https://developer.kustomer.com",
    "typeScriptTag": "messagesHttps:DeveloperKustomerCom",
    "description": "Bulk create messages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/bulk",
    "method": "updateBatch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages (https://developer.kustomer.com",
    "typeScriptTag": "messagesHttps:DeveloperKustomerCom",
    "description": "Bulk batch update messages",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Comma-separated list of unique message IDs.",
        "example": "id1,id2"
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
    "url": "/messages/{id}/redactions",
    "method": "redactMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Redact a message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique message object ID.",
        "example": "5da062fb90897d01573e121f"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get messages",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "List of resources to include in this response. Use a comma to separate resources. Supports the `attachments` resource. ",
        "example": "attachments"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Option to sort results in descending order.",
        "example": "desc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages",
    "method": "addInstanceToConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Create message",
    "parameters": [
      {
        "name": "id",
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
        "name": "customer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "conversation",
        "schema": "string",
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
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "preview",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DIRECTION"
      },
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APP"
      },
      {
        "name": "size",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "related",
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
        "name": "error",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "errorAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sentAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shortcuts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "kbArticles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "undefined",
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
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
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
        "name": "queue",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{id}",
    "method": "getMessageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get message by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Update message attributes by ID",
    "parameters": [
      {
        "name": "conversation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preview",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "object",
        "description": ""
      },
      {
        "name": "errorAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "size",
        "schema": "number",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "related",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lang",
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
    "url": "/messages/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Update message by ID",
    "parameters": [
      {
        "name": "replace",
        "schema": "boolean",
        "required": false,
        "description": "Set to `true` to update the document. Otherwise, performs the same update as a PATCH request. Default value: `false`.",
        "example": true,
        "default": false
      },
      {
        "name": "conversation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preview",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "object",
        "description": ""
      },
      {
        "name": "errorAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "size",
        "schema": "number",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "related",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentiment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "spam",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reactions",
        "schema": "array",
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
    "url": "/messages/externalid=:externalId",
    "method": "getMessageByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get a Message by External ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/bulk",
    "method": "createBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes (https://developer.kustomer.com",
    "typeScriptTag": "notesHttps:DeveloperKustomerCom",
    "description": "Bulk create notes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/bulk",
    "method": "batchUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes (https://developer.kustomer.com",
    "typeScriptTag": "notesHttps:DeveloperKustomerCom",
    "description": "Bulk batch update notes",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Comma-separated list of unique note IDs.",
        "example": "id1,id2"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get notes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Create note",
    "parameters": [
      {
        "name": "id",
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
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "userMentions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Delete note by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get note by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Update note attributes by ID",
    "parameters": [
      {
        "name": "conversation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userMentions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lang",
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
    "url": "/notes/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Update note by ID",
    "parameters": [
      {
        "name": "replace",
        "schema": "boolean",
        "required": false,
        "description": "Set to `true` to update the document. Otherwise, performs the same update as a PATCH request. Default value: `false`.",
        "example": true,
        "default": false
      },
      {
        "name": "conversation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONVERSATION"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "userMentions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
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
    "url": "/tracking/event",
    "method": "createEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking Events",
    "typeScriptTag": "trackingEvents",
    "description": "Create tracking event",
    "parameters": [
      {
        "name": "trackingId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sessionId",
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
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracking/identity",
    "method": "identifyUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking Events",
    "typeScriptTag": "trackingEvents",
    "description": "Create tracking identity",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "remember",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "trackingId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sessionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "signedUpAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthdayAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracking/identityEvent",
    "method": "identifyAndTrackEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking Events",
    "typeScriptTag": "trackingEvents",
    "description": "Create tracking identity and track event",
    "parameters": [
      {
        "name": "identity",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "event",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/search",
    "method": "customerCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Create customer search",
    "parameters": [
      {
        "name": "searchHash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "queryContext",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "and",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "or",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "not",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "aggs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
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
    "url": "/satisfaction",
    "method": "getSatisfactionForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Satisfaction",
    "typeScriptTag": "satisfaction",
    "description": "Get Satisfactions",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/slas/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SLAs",
    "typeScriptTag": "slAs",
    "description": "Get SLA by ID",
    "parameters": [
      {
        "name": "versions",
        "schema": "string",
        "description": "Option to include information about SLA versions. Use `all` to retrieve information about all versions. Use `active` to retrieve information about the active version only.",
        "example": "active"
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
    "url": "/spam/senders",
    "method": "getSenders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spam",
    "typeScriptTag": "spam",
    "description": "Get spam senders",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/spam/senders",
    "method": "upsertSender",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Spam",
    "typeScriptTag": "spam",
    "description": "Upsert spam sender",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/spam/senders/{id}",
    "method": "deleteSender",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Spam",
    "typeScriptTag": "spam",
    "description": "Delete a spam sender",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/klasses/{name}/externalId={externalId}",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KObjects (Custom Objects)",
    "typeScriptTag": "kObjectsCustomObjects",
    "description": "Get KObject by external ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/articles/{id}/versions/{lang}",
    "method": "deleteLanguageVersions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Articles (Versioning and Languages)",
    "typeScriptTag": "articlesVersioningAndLanguages",
    "description": "Delete Versions of a Language",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article ID",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "string",
        "required": true,
        "description": "Language",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/articles/{id}/versions/{lang}",
    "method": "getAllVersionsByLanguage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles (Versioning and Languages)",
    "typeScriptTag": "articlesVersioningAndLanguages",
    "description": "Get Article Versions by Language",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article ID",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "string",
        "required": true,
        "description": "Language",
        "example": "<string>"
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
    "url": "/v1/kb/articles/{id}/versions/{lang}",
    "method": "createVersionForGivenArticleInGivenLanguage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Articles (Versioning and Languages)",
    "typeScriptTag": "articlesVersioningAndLanguages",
    "description": "Create a Version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article ID",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "string",
        "required": true,
        "description": "Language",
        "example": "<string>"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advanced",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "htmlBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaKeywords",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/versions/{id}",
    "method": "getVersionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles (Versioning and Languages)",
    "typeScriptTag": "articlesVersioningAndLanguages",
    "description": "Get Article Version by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article Version ID",
        "example": "<string>"
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
    "url": "/v1/kb/articles/{id}/versions/{lang}/latest",
    "method": "updateLatestPublishedVersion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Articles (Versioning and Languages)",
    "typeScriptTag": "articlesVersioningAndLanguages",
    "description": "Update Latest Published Article Version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article ID",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "string",
        "required": true,
        "description": "Language",
        "example": "<string>"
      },
      {
        "name": "outdated",
        "schema": "boolean",
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
    "url": "/v1/kb/articles/{id}/versions/{lang}/draft",
    "method": "deleteDraftVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Articles (Versioning and Languages)",
    "typeScriptTag": "articlesVersioningAndLanguages",
    "description": "Delete a Draft Version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article ID",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "string",
        "required": true,
        "description": "Language",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/articles/{id}/versions/{lang}/draft",
    "method": "updateDraftVersion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Articles (Versioning and Languages)",
    "typeScriptTag": "articlesVersioningAndLanguages",
    "description": "Update a Draft Version",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article ID",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "string",
        "required": true,
        "description": "Language",
        "example": "<string>"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "publishedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "markOthersOutOfDate",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advanced",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "htmlBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metaKeywords",
        "schema": "array",
        "description": ""
      },
      {
        "name": "accessTeams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "accessUsers",
        "schema": "array",
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
    "url": "/v1/kb/articles",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Get Articles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/articles",
    "method": "createNewArticle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Create an Article",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hash",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "advanced",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/articles/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Get Article by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Article ID",
        "example": "<string>"
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
    "url": "/v1/kb/articles/{id}",
    "method": "updateArticleById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Update Article",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of category to update",
        "example": "<string>"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "knowledgeBases",
        "schema": "array",
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/v1/kb/articles/search",
    "method": "searchResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Search Articles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/articles/{id}/schedules",
    "method": "createSchedule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Articles (https://developer.kustomer.com",
    "typeScriptTag": "articlesHttps:DeveloperKustomerCom",
    "description": "Create article schedule",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "article id",
        "example": "<string>"
      },
      {
        "name": "publishAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLISHAT"
      },
      {
        "name": "lang",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LANG"
      },
      {
        "name": "tz",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TZ"
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
    "url": "/v1/kb/articles/{id}/schedules/{type}/{lang}",
    "method": "deleteSchedule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Articles (https://developer.kustomer.com",
    "typeScriptTag": "articlesHttps:DeveloperKustomerCom",
    "description": "Delete Article Schedule",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of article",
        "example": "<string>"
      },
      {
        "name": "type",
        "schema": "undefined",
        "required": true,
        "description": "publish (also unpublish in the future)",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "undefined",
        "required": true,
        "description": "language of article",
        "example": "<string>"
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
    "url": "/v1/kb/articles/{id}/schedules/{type}/{lang}",
    "method": "updateSchedule",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Articles",
    "typeScriptTag": "articles",
    "description": "Update Article Schedule ",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of article",
        "example": "<string>"
      },
      {
        "name": "type",
        "schema": "undefined",
        "required": true,
        "description": "publish (also unpublish in the future)",
        "example": "<string>"
      },
      {
        "name": "lang",
        "schema": "undefined",
        "required": true,
        "description": "language of article",
        "example": "<string>"
      },
      {
        "name": "publishAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLISHAT"
      },
      {
        "name": "tz",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TZ"
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
    "url": "/p/v3/kb/articles",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles (https://developer.kustomer.com",
    "typeScriptTag": "articlesHttps:DeveloperKustomerCom",
    "description": "Get Articles (https://developer.kustomer.com",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/p/v3/kb/articles/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Articles (https://developer.kustomer.com",
    "typeScriptTag": "articlesHttps:DeveloperKustomerCom",
    "description": "Search Articles (https://developer.kustomer.com",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/categories",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get Categories",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number of results to return",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "string",
        "description": "Number of results to return",
        "example": "100"
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
    "url": "/v1/kb/categories",
    "method": "createNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Create a Category",
    "parameters": [
      {
        "name": "parent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "knowledgeBase",
        "schema": "string",
        "description": ""
      },
      {
        "name": "langs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/internal/categories",
    "method": "getAllInternal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get Internal Categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/internal/categories",
    "method": "createNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Categories (https://developer.kustomer.com",
    "typeScriptTag": "categoriesHttps:DeveloperKustomerCom",
    "description": "Create an Internal Category",
    "parameters": [
      {
        "name": "parent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "langs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/categories/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get Category by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Category ID",
        "example": "<string>"
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
    "url": "/v1/kb/categories/{id}",
    "method": "updateRequestedCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Update Category",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Category ID",
        "example": "<string>"
      },
      {
        "name": "parent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "langs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "categoryPositions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "icon",
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
    "url": "/v1/kb/internal/categories/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories (https://developer.kustomer.com",
    "typeScriptTag": "categoriesHttps:DeveloperKustomerCom",
    "description": "Get Internal Category by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Category ID",
        "example": "<string>"
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
    "url": "/p/v3/kb/categories",
    "method": "getAllCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories (https://developer.kustomer.com",
    "typeScriptTag": "categoriesHttps:DeveloperKustomerCom",
    "description": "Get Categories (https://developer.kustomer.com",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/p/v3/kb/categories/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories (https://developer.kustomer.com",
    "typeScriptTag": "categoriesHttps:DeveloperKustomerCom",
    "description": "Get Category by ID (https://developer.kustomer.com",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v1/kb/forms",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get Forms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/forms",
    "method": "createNewFormDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Create a Form",
    "parameters": [
      {
        "name": "components",
        "schema": "object",
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
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hash",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "published",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "snippets",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "layout",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "layoutV2",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "componentsV2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "knowledgeBase",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "advanced",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "recaptcha",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "klass",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deflection",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "formHookEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "replyFrom",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/forms/{id}",
    "method": "deleteRequestedForm",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Delete Form",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of form to delete",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/forms/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get Form by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Form ID",
        "example": "<string>"
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
    "url": "/v1/kb/forms/{id}",
    "method": "updateRequestedForm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Update Form",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Form ID",
        "example": "<string>"
      },
      {
        "name": "components",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "published",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "snippets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "layout",
        "schema": "array",
        "description": ""
      },
      {
        "name": "layoutV2",
        "schema": "array",
        "description": ""
      },
      {
        "name": "componentsV2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "knowledgeBase",
        "schema": "string",
        "description": ""
      },
      {
        "name": "advanced",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "recaptcha",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "klass",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deflection",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "formHookEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "replyFrom",
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
    "url": "/p/v3/kb/forms/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get Form by ID (https://developer.kustomer.com",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Form ID",
        "example": "<string>"
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
    "url": "/v1/kb/knowledge-bases",
    "method": "createNewKnowledgeBase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Create Knowledge Base",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "brand",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAND"
      },
      {
        "name": "noIndex",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "theme",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "baseUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "favicon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "homepageTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeAllData",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultLanguage",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "en_us"
      },
      {
        "name": "languages",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "metaTags",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/knowledge-bases/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Get Knowledge Base by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Knowledge Base ID",
        "example": "<string>"
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
    "url": "/v1/kb/knowledge-bases/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Knowledge Bases",
    "typeScriptTag": "knowledgeBases",
    "description": "Update Knowledge Base",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Knowledge Base ID",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "noIndex",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "logo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "favicon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "theme",
        "schema": "string",
        "description": ""
      },
      {
        "name": "baseUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "homepageTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeAllData",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "defaultLanguage",
        "schema": "string",
        "description": "",
        "default": "en_us"
      },
      {
        "name": "languages",
        "schema": "object",
        "description": ""
      },
      {
        "name": "metaTags",
        "schema": "array",
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
    "url": "/v3/kb/tags",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags (Knowledge Base)",
    "typeScriptTag": "tagsKnowledgeBase",
    "description": "Get tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/tags",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags (Knowledge Base)",
    "typeScriptTag": "tagsKnowledgeBase",
    "description": "Create tag",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/tags/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags (Knowledge Base)",
    "typeScriptTag": "tagsKnowledgeBase",
    "description": "Get Tags by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "the ID of the tag to retrieve",
        "example": ""
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
    "url": "/v3/kb/tags/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags (Knowledge Base)",
    "typeScriptTag": "tagsKnowledgeBase",
    "description": "Update Tag by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "the ID of the tag to update",
        "example": ""
      },
      {
        "name": "name",
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
    "url": "/v3/kb/themes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes",
    "typeScriptTag": "themes",
    "description": "Get Themes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/themes",
    "method": "createKnowledgeBaseTheme",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Themes",
    "typeScriptTag": "themes",
    "description": "Create a Theme",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "duplicateThemeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "duplicateTemplateId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/themes/{themeId}/revisions",
    "method": "getRevisions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes (Drafts and Revisions)",
    "typeScriptTag": "themesDraftsAndRevisions",
    "description": "Get Theme Revisions",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/{id}/revisions",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes (Drafts and Revisions)",
    "typeScriptTag": "themesDraftsAndRevisions",
    "description": "Get Theme Revision by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/{themeId}/revisions/draft",
    "method": "deleteDraft",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Themes (Drafts and Revisions)",
    "typeScriptTag": "themesDraftsAndRevisions",
    "description": "Delete Theme Draft Revision",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/themes/{themeId}/revisions/draft",
    "method": "createDraftRevision",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Themes (Drafts and Revisions)",
    "typeScriptTag": "themesDraftsAndRevisions",
    "description": "Create Theme Draft Revision",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/themes/{themeId}/revisions/draft",
    "method": "updateDraftRevision",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Themes (Drafts and Revisions)",
    "typeScriptTag": "themesDraftsAndRevisions",
    "description": "Update Theme Draft Revision",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes",
    "typeScriptTag": "themes",
    "description": "Get Themes by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/active",
    "method": "getActiveTheme",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes",
    "typeScriptTag": "themes",
    "description": "Get Active Theme (https://developer.kustomer.com",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/p/v3/kb/themes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes",
    "typeScriptTag": "themes",
    "description": "Get Theme by ID (https://developer.kustomer.com",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/{themeId}/revisions/{revisionId}/files",
    "method": "getByRevision",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes (Theme Files)",
    "typeScriptTag": "themesThemeFiles",
    "description": "Get Theme Files by Revision",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "revisionId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/{themeId}/revisions/{revisionId}/files",
    "method": "createThemeFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Themes",
    "typeScriptTag": "themes",
    "description": "Create Revision Theme File",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "revisionId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "snippets",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/p/v3/kb/themes/{id}/files",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes (Theme Files)",
    "typeScriptTag": "themesThemeFiles",
    "description": "Get Theme Files (https://developer.kustomer.com",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/{themeId}/revisions/{revisionId}/files/{id}",
    "method": "deleteFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Themes (Theme Files)",
    "typeScriptTag": "themesThemeFiles",
    "description": "Delete Revision Theme File",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "revisionId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/themes/{themeId}/revisions/{revisionId}/files/{id}",
    "method": "getByRevisionId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Themes (Theme Files)",
    "typeScriptTag": "themesThemeFiles",
    "description": "Get Theme File by Revision",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "revisionId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v3/kb/themes/{themeId}/revisions/{revisionId}/files/{id}",
    "method": "updateBasedOnRevision",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Themes (Theme Files)",
    "typeScriptTag": "themesThemeFiles",
    "description": "Update Revision Theme File",
    "parameters": [
      {
        "name": "themeId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "revisionId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "snippets",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/templates",
    "method": "getKnowledgeBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Get Templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/kb/templates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Get Templates by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v1/kb/route",
    "method": "getRouteByUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Get Route by URL (https://developer.kustomer.com",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "URL path of article or category.",
        "example": "URL"
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
    "url": "/v1/kb/routes",
    "method": "getAllRoutes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Get Routes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/routes",
    "method": "createRouteAlias",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Create a Route",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "routableType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROUTABLETYPE"
      },
      {
        "name": "routableId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROUTABLEID"
      },
      {
        "name": "pattern",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/articles/{id}/routes",
    "method": "getByArticleId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Get Routes by Article ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/v1/kb/categories/{id}/routes",
    "method": "byCategoryId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Get Routes by Category ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Category ID",
        "example": "<string>"
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
    "url": "/v1/kb/categories/{id}/routes",
    "method": "createCategoryRoute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Create a Category Route",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "pattern",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/routes/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Delete Route by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the route",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/kb/routes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Get Route by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the route",
        "example": "<string>"
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
    "url": "/v1/kb/routes/{id}",
    "method": "updateRequestedRoute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Routes",
    "typeScriptTag": "routes",
    "description": "Update Route",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id of route to update",
        "example": "<string>"
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "routableType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "routableId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pattern",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
        "schema": "number",
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
    "url": "/v1/kb/knowledge-bases/{id}/domains/{domainId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases (Custom Domains)",
    "typeScriptTag": "knowledgeBasesCustomDomains",
    "description": "Get Custom Domain By ID",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": "string"
      },
      {
        "name": "domainId",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": "string"
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
    "url": "/v1/kb/knowledge-bases/{id}/domains",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge Bases (Custom Domains)",
    "typeScriptTag": "knowledgeBasesCustomDomains",
    "description": "Get Custom Domains",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "Knowledge Base ID",
        "example": "string"
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
    "url": "/v1/kb/knowledge-bases/{id}/domain/{domainId}",
    "method": "deleteDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Knowledge Bases (Custom Domains)",
    "typeScriptTag": "knowledgeBasesCustomDomains",
    "description": "Delete Custom Domain",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "Knowledge Base ID",
        "example": "string"
      },
      {
        "name": "domainId",
        "schema": "undefined",
        "required": true,
        "description": "domain ID",
        "example": "string"
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
    "url": "/v1/kb/knowledge-bases/{id}/domain/{domainId}",
    "method": "updateDomainCertificate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Knowledge Bases (Custom Domains)",
    "typeScriptTag": "knowledgeBasesCustomDomains",
    "description": "Update Custom Domain",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "Knowledge Base ID",
        "example": "string"
      },
      {
        "name": "domainId",
        "schema": "undefined",
        "required": true,
        "description": "domain ID",
        "example": "string"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
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
    "url": "/v1/kb/knowledge-bases/{id}/domain",
    "method": "createDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Knowledge Bases (Custom Domains)",
    "typeScriptTag": "knowledgeBasesCustomDomains",
    "description": "Create Custom Domain",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": "Knowledge Base ID",
        "example": "string"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
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
    "url": "/routing/conversations/{id}/work-items",
    "method": "getByConversation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Items",
    "typeScriptTag": "workItems",
    "description": "Get work items by conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Conversation ID",
        "example": "<string>"
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
    "url": "/routing/work-sessions/current",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions (https://developer.kustomer.com",
    "typeScriptTag": "workSessionsHttps:DeveloperKustomerCom",
    "description": "Get current work session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/work-sessions/current",
    "method": "updateSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Work Sessions (https://developer.kustomer.com",
    "typeScriptTag": "workSessionsHttps:DeveloperKustomerCom",
    "description": "Update current work session",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
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
    "url": "/routing/work-sessions/current/work-items",
    "method": "getWorkItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions (https://developer.kustomer.com",
    "typeScriptTag": "workSessionsHttps:DeveloperKustomerCom",
    "description": "Get work items in current work session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/work-sessions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions (by Session ID)",
    "typeScriptTag": "workSessionsBySessionId",
    "description": "Get work session by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Work Session ID",
        "example": "<string>"
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
    "url": "/routing/work-sessions/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Work Sessions (by Session ID)",
    "typeScriptTag": "workSessionsBySessionId",
    "description": "Update work session by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Work Session ID",
        "example": "<string>"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rev",
        "schema": "integer",
        "required": false,
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
    "url": "/routing/work-sessions/{id}/work-items",
    "method": "listWorkItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions (by Session ID)",
    "typeScriptTag": "workSessionsBySessionId",
    "description": "Get work items By work session",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Work Session ID",
        "example": "<string>"
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
    "url": "/routing/work-sessions",
    "method": "listFilteredWorkSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions",
    "typeScriptTag": "workSessions",
    "description": "Get work sessions",
    "parameters": [
      {
        "name": "user",
        "schema": "boolean",
        "description": "User work sessions. `true` returns only current users work sessions. `false` returns only all users work sessions.",
        "example": true
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Active work sessions. `true` returns only active work sessions. `false` returns all work sessions.",
        "example": true
      },
      {
        "name": "statusType",
        "schema": "string",
        "description": "Status type. Options: `available` for available users, `unavailable` for a unavailable users, and `busy` for busy users.",
        "example": "busy"
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
    "url": "/routing/users/{id}/work-sessions",
    "method": "getByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions",
    "typeScriptTag": "workSessions",
    "description": "Get work sessions by user ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "<string>"
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
    "url": "/routing/queues/{id}/work-sessions",
    "method": "listByQueueId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions",
    "typeScriptTag": "workSessions",
    "description": "Get work sessions by queue ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Queue ID",
        "example": "<string>"
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
    "url": "/routing/users/{id}/work-sessions/current",
    "method": "getUserWorkSession",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Sessions (https://developer.kustomer.com",
    "typeScriptTag": "workSessionsHttps:DeveloperKustomerCom",
    "description": "Get current work session by user ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "<string>"
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
    "url": "/routing/queues",
    "method": "listQueues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Get queues",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/queues",
    "method": "createNewQueue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Create queue",
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
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "itemSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "restrictTransfersByUsers",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/queues/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Get queue",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Queue ID",
        "example": "<string>"
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
    "url": "/routing/queues/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Queues",
    "typeScriptTag": "queues",
    "description": "Update queue by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Queue ID",
        "example": "<string>"
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
        "name": "key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "itemSize",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "restrictTransfersByUsers",
        "schema": "boolean",
        "required": false,
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
    "url": "/routing/queue-rules",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queue Rules",
    "typeScriptTag": "queueRules",
    "description": "Get queue rules",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/queue-rules",
    "method": "createNewRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Queue Rules",
    "typeScriptTag": "queueRules",
    "description": "Create queue rule",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "queueKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "queue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "criteria",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/queue-rules/{id}",
    "method": "deleteRuleById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Queue Rules",
    "typeScriptTag": "queueRules",
    "description": "Delete queue rule",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/queue-rules/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queue Rules",
    "typeScriptTag": "queueRules",
    "description": "Get queue rule",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Queue Rule ID",
        "example": "<string>"
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
    "url": "/routing/queue-rules/{id}",
    "method": "updateRuleById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Queue Rules",
    "typeScriptTag": "queueRules",
    "description": "Update queue rule",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Queue Rule ID",
        "example": "<string>"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "queueKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "queue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "criteria",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
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
    "url": "/routing/queue-rules-criteria",
    "method": "getCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Queue Rules",
    "typeScriptTag": "queueRules",
    "description": "Get queue criteria",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/queue-rules/order",
    "method": "updateOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Queue Rules",
    "typeScriptTag": "queueRules",
    "description": "Update queue rule order",
    "parameters": [
      {
        "name": "rules",
        "schema": "array",
        "required": true,
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
    "url": "/routing/statuses",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routing User Statuses",
    "typeScriptTag": "routingUserStatuses",
    "description": "Get routing user statuses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/statuses",
    "method": "createNewStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Routing User Statuses",
    "typeScriptTag": "routingUserStatuses",
    "description": "Create routing user status",
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
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "statusType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUSTYPE"
      },
      {
        "name": "selectable",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/statuses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Routing User Statuses",
    "typeScriptTag": "routingUserStatuses",
    "description": "Get routing user status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Routing Status ID",
        "example": "<string>"
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
    "url": "/routing/statuses/{id}",
    "method": "updateBasedOnId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Routing User Statuses",
    "typeScriptTag": "routingUserStatuses",
    "description": "Update routing user status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Status ID",
        "example": "<string>"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
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
    "url": "/routing/settings",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team Routing Settings",
    "typeScriptTag": "teamRoutingSettings",
    "description": "Get all team routing settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/settings/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team Routing Settings",
    "typeScriptTag": "teamRoutingSettings",
    "description": "Get team routing settings",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Team ID",
        "example": "<string>"
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
    "url": "/routing/settings/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Team Routing Settings",
    "typeScriptTag": "teamRoutingSettings",
    "description": "Update team routing settings",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Team ID",
        "example": "<string>"
      },
      {
        "name": "queues",
        "schema": "array",
        "description": ""
      },
      {
        "name": "externalQueues",
        "schema": "array",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workItemCapacity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "capacity",
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
    "url": "/routing/users/current/settings",
    "method": "getCurrentUserSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team Routing Settings",
    "typeScriptTag": "teamRoutingSettings",
    "description": "Get current's user team routing settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/work-items",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Items",
    "typeScriptTag": "workItems",
    "description": "Get work items",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/work-items",
    "method": "createNewWorkItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Work Items",
    "typeScriptTag": "workItems",
    "description": "Create work item",
    "parameters": [
      {
        "name": "resource",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "queue",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "assignedTo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/routing/work-items/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Items",
    "typeScriptTag": "workItems",
    "description": "Get work item",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Work Item ID",
        "example": "<string>"
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
    "url": "/routing/work-items/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Work Items",
    "typeScriptTag": "workItems",
    "description": "Update work item",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Work Item ID",
        "example": "<string>"
      },
      {
        "name": "queue",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "routed",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "accepted",
        "schema": "object",
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
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignedTo",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "rev",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "resource",
        "schema": "object",
        "required": false,
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
    "url": "/routing/queues/{id}/work-items",
    "method": "getQueueWorkItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Items",
    "typeScriptTag": "workItems",
    "description": "Get work items in a queue",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Queue ID",
        "example": "<string>"
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
    "url": "/routing/queues/{id}/work-items/next",
    "method": "getNextInQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Items",
    "typeScriptTag": "workItems",
    "description": "Get next work items in a queue",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Queue ID",
        "example": "<string>"
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
    "url": "/chat/queues/metrics/{ids}",
    "method": "getQueueWaitTimes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Queue metrics",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "Comma seperated list of QueueId's to be included in the response. Limit of 80.",
        "example": "<queueIds> "
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
    "url": "/workflows",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflows",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflows",
    "method": "createNewWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Create a workflow",
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
        "name": "replaces",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "trigger",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "steps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "logging",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflows/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get a workflow based on the ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique Workflow ID",
        "example": "57504f6460da071c000dfaee"
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
    "url": "/workflows/{id}",
    "method": "updateBasedOnId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Update a workflow based on the ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Workflow ID",
        "example": "<string>"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replaces",
        "schema": "string",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
        "description": ""
      },
      {
        "name": "trigger",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "steps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "logging",
        "schema": "boolean",
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
    "url": "/workflows/{id}/variables",
    "method": "getAllVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow Variables",
    "typeScriptTag": "workflowVariables",
    "description": "Get all variables for a workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique Workflow ID",
        "example": "55d7998f2d3f9f8800099aee"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/workflows/{id}/variables",
    "method": "createForWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow Variables",
    "typeScriptTag": "workflowVariables",
    "description": "Create a workflow variable for a workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Workflow ID",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow-variables/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow Variables",
    "typeScriptTag": "workflowVariables",
    "description": "Delete a workflow variable",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Workflow Variable ID",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflow-variables/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow Variables",
    "typeScriptTag": "workflowVariables",
    "description": "Get a workflow variable",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Workflow Variable ID",
        "example": "<string>"
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
    "url": "/workflow-variables/{id}",
    "method": "updateBasedOnId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflow Variables",
    "typeScriptTag": "workflowVariables",
    "description": "Update a workflow variable",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Workflow Variable ID",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/workflows/{id}/processes",
    "method": "getByWorkflowId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow Processes (https://developer.kustomer.com",
    "typeScriptTag": "workflowProcessesHttps:DeveloperKustomerCom",
    "description": "Get processes (https://developer.kustomer.com by workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Workflow ID",
        "example": "<string>"
      },
      {
        "name": "createdAtFrom",
        "schema": "string",
        "required": false,
        "description": "Date to filter results with a createdAt greater than or equal to date time in ISO 8601 format",
        "example": "2023-12-14T00:00:00Z"
      },
      {
        "name": "createdAtTo",
        "schema": "string",
        "required": false,
        "description": "Date to filter results with a createdAt less than date time in ISO 8601 format",
        "example": "2023-12-14T00:00:00Z"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Number of pages to return for results. Default value: 1.",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Number of results to return per page. Default value: 100.",
        "example": 100,
        "default": 100
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
    "url": "/chat/settings",
    "method": "getDisplayOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chat Settings",
    "typeScriptTag": "chatSettings",
    "description": "Get chat settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/chat/settings",
    "method": "updateDisplayOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Chat Settings",
    "typeScriptTag": "chatSettings",
    "description": "Set chat settings",
    "parameters": [
      {
        "name": "teamName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teamIconUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "greeting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "autoreply",
        "schema": "string",
        "description": ""
      },
      {
        "name": "embedIconUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "embedIconColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fallbackFromEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offhoursDisplay",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offhoursMessage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offhoursImageUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "volumeControl",
        "schema": "object",
        "description": ""
      },
      {
        "name": "singleSessionChat",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "closableChat",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "noHistory",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "activeForm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domainCriteria",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showBrandingIdentifier",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showTypingIndicatorWeb",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showTypingIndicatorCustomerWeb",
        "schema": "boolean",
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
    "url": "/notifications/logs/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications (https://developer.kustomer.com",
    "typeScriptTag": "notificationsHttps:DeveloperKustomerCom",
    "description": "Get notifications logs settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/logs/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications (https://developer.kustomer.com",
    "typeScriptTag": "notificationsHttps:DeveloperKustomerCom",
    "description": "Update notifications logs settings",
    "parameters": [
      {
        "name": "emails",
        "schema": "array",
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
    "url": "/notifications/users/current/settings",
    "method": "getCurrentUserSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications (https://developer.kustomer.com",
    "typeScriptTag": "notificationsHttps:DeveloperKustomerCom",
    "description": "Get notification settings for current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/users/current/settings",
    "method": "updateCurrentUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications (https://developer.kustomer.com",
    "typeScriptTag": "notificationsHttps:DeveloperKustomerCom",
    "description": "Update notification settings for current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "deleteAllInApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Delete notifications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "getAllUserInApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get notifications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications",
    "method": "updateAllUserInApp",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Update notifications",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches",
    "method": "getAllSaved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Get all searches",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches",
    "method": "createSavedSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Create Saved Search",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "badgeColor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "showBadge",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "routing",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultVisibility",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userVisibilities",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "teamVisibilities",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "private",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "accessTeams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "accessUsers",
        "schema": "array",
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
        "name": "timeZone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "folderId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Delete search by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Saved Search ID",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Get saved search by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Saved Search ID",
        "example": "<string>"
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
    "url": "/customers/searches/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Update search by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Saved Search ID",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "badgeColor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showBadge",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "position",
        "schema": "number",
        "description": ""
      },
      {
        "name": "routing",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "defaultVisibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userVisibilities",
        "schema": "array",
        "description": ""
      },
      {
        "name": "teamVisibilities",
        "schema": "array",
        "description": ""
      },
      {
        "name": "private",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "accessTeams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "accessUsers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeZone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "folderId",
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
    "url": "/customers/searches/folders",
    "method": "createFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Filters (https://developer.kustomer.com",
    "typeScriptTag": "searchFiltersHttps:DeveloperKustomerCom",
    "description": "Create search folder",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/folders/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Delete search folder by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Search Folder ID",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/folders/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Search Filters (https://developer.kustomer.com",
    "typeScriptTag": "searchFiltersHttps:DeveloperKustomerCom",
    "description": "Update search folder by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Search Folder ID",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/customers/searches/positions",
    "method": "getSearchPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Get search positions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/positions",
    "method": "updateSearchPositions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Update search positions",
    "parameters": [
      {
        "name": "positions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "rev",
        "schema": "number",
        "required": false,
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
    "url": "/customers/searches/schema",
    "method": "getSchemaForSearches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Filters",
    "typeScriptTag": "searchFilters",
    "description": "Get schema for searches",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/pinned",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Filters (https://developer.kustomer.com",
    "typeScriptTag": "searchFiltersHttps:DeveloperKustomerCom",
    "description": "Get all pinned searches",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/pinned",
    "method": "updatePinnedSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search Filters (https://developer.kustomer.com",
    "typeScriptTag": "searchFiltersHttps:DeveloperKustomerCom",
    "description": "Pin search",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEARCH"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/searches/pinned/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Search Filters (https://developer.kustomer.com",
    "typeScriptTag": "searchFiltersHttps:DeveloperKustomerCom",
    "description": "Delete pinned search by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Pinned Search Resource ID. Note it is not the same as the ID of the search.",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings",
    "method": "getSearchSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/settings",
    "method": "getUserSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get user settings",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": ""
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
    "url": "/users/current/settings",
    "method": "getCurrentUserSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get user settings for current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/settings/{app}/{category}/{name}",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings (Specific User)",
    "typeScriptTag": "settingsSpecificUser",
    "description": "Get specific user setting",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": ""
      },
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App",
        "example": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "Category",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name",
        "example": ""
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
    "url": "/users/{id}/settings/{app}/{category}/{name}",
    "method": "updateSpecificUserSetting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings (Specific User)",
    "typeScriptTag": "settingsSpecificUser",
    "description": "Update specific user setting",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": ""
      },
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App",
        "example": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "Category",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name",
        "example": ""
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
    "url": "/users/current/settings/{app}/{category}/{name}",
    "method": "getUserSetting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings (Specific User)",
    "typeScriptTag": "settingsSpecificUser",
    "description": "Get specific user setting for current user",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App",
        "example": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "Category",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name",
        "example": ""
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
    "url": "/users/current/settings/{app}/{category}/{name}",
    "method": "updateUserSetting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings (Specific User)",
    "typeScriptTag": "settingsSpecificUser",
    "description": "Update specific user setting for current user",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App",
        "example": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "Category",
        "example": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name",
        "example": ""
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
    "url": "/settings/{app}/{category}/{name}",
    "method": "getSingleSetting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get a setting",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
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
    "url": "/settings/{app}/{category}/{name}",
    "method": "updateSingleSetting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update a setting",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
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
    "url": "/shortcuts/categories",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shortcuts (https://developer.kustomer.com",
    "typeScriptTag": "shortcutsHttps:DeveloperKustomerCom",
    "description": "Get shortcut categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shortcuts/categories",
    "method": "createNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shortcuts (https://developer.kustomer.com",
    "typeScriptTag": "shortcutsHttps:DeveloperKustomerCom",
    "description": "Create a shortcut category",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parent",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/shortcuts/categories/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shortcuts (https://developer.kustomer.com",
    "typeScriptTag": "shortcutsHttps:DeveloperKustomerCom",
    "description": "Delete a shortcut category",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the shortcut category",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/shortcuts/categories/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shortcuts (https://developer.kustomer.com",
    "typeScriptTag": "shortcutsHttps:DeveloperKustomerCom",
    "description": "Get a shortcut category",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the shortcut category",
        "example": "<string>"
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
    "url": "/shortcuts/categories/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shortcuts (https://developer.kustomer.com",
    "typeScriptTag": "shortcutsHttps:DeveloperKustomerCom",
    "description": "Update a shortcut category",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the shortcut category",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent",
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
    "url": "/shortcuts",
    "method": "getAllStartingWithText",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shortcuts",
    "typeScriptTag": "shortcuts",
    "description": "Get all shortcuts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/shortcuts",
    "method": "createNewShortcut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shortcuts",
    "typeScriptTag": "shortcuts",
    "description": "Create a shortcut",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payload",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "accessTeams",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "accessUsers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "conversation",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/shortcuts/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shortcuts",
    "typeScriptTag": "shortcuts",
    "description": "Delete a shortcut",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the shortcut",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/shortcuts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shortcuts",
    "typeScriptTag": "shortcuts",
    "description": "Get a shortcut",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the shortcut",
        "example": "<string>"
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
    "url": "/shortcuts/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shortcuts",
    "typeScriptTag": "shortcuts",
    "description": "Update a shortcut",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the shortcut",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "object",
        "description": ""
      },
      {
        "name": "payload",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accessTeams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "accessUsers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "conversation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/snippets",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get snippets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/snippets",
    "method": "createDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Create snippet",
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
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "langs",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/snippets/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Get snippets by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Snippet ID",
        "example": "<string>"
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
    "url": "/snippets/{id}",
    "method": "updateRequestedSnippet",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Patch snippet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Snippet ID to retrieve.",
        "example": "<string>"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "app",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "langs",
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
    "url": "/snippets/{id}",
    "method": "updateRequestedSnippet",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Update snippet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Snippet ID",
        "example": "<string>"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "app",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "langs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/snoozes",
    "method": "getAllSnoozes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snoozes",
    "typeScriptTag": "snoozes",
    "description": "Get all snoozes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/snoozes",
    "method": "createSnooze",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snoozes",
    "typeScriptTag": "snoozes",
    "description": "Create a snooze",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "object",
        "required": true,
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
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/snoozes/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snoozes",
    "typeScriptTag": "snoozes",
    "description": "Delete snooze",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/snoozes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snoozes",
    "typeScriptTag": "snoozes",
    "description": "Get snooze by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Snooze ID",
        "example": "<string>"
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
    "url": "/snoozes/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Snoozes",
    "typeScriptTag": "snoozes",
    "description": "Update snooze by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Snooze ID",
        "example": "<string>"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
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
    "url": "/apps",
    "method": "getInstalledApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get Installed Apps",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/apps/{appVersion}",
    "method": "getInstalledByVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get Installed Apps (By Specific Version)",
    "parameters": [
      {
        "name": "appVersion",
        "schema": "string",
        "required": true,
        "description": "App name & version",
        "example": "<string>"
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
    "url": "/apps/available",
    "method": "listAvailableApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get Available Apps",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/apps/available/{appVersion}",
    "method": "getAvailableApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get Available App",
    "parameters": [
      {
        "name": "appVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<string>"
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
    "url": "/cards",
    "method": "getAllInstalled",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Get Cards",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/cards/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Delete a Card",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the Card",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/cards/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Get Card",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the Card",
        "example": "<string>"
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
    "url": "/cards/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Update a Card",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the Card",
        "example": "<string>"
      },
      {
        "name": "contexts",
        "schema": "array",
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
    "url": "/cards/available",
    "method": "addCustomAvailableCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Create a Card",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "app",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "contexts",
        "schema": "array",
        "required": true,
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
    "url": "/cards/available/{id}/install",
    "method": "installById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Install a Card",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of Available Card to Install",
        "example": "<string>"
      },
      {
        "name": "contexts",
        "schema": "array",
        "required": true,
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
    "url": "/hooks/email",
    "method": "getExistingEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Email Hooks)",
    "typeScriptTag": "hooksEmailHooks",
    "description": "Get Email Hooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/hooks/email",
    "method": "createEmailHook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks (Email Hooks)",
    "typeScriptTag": "hooksEmailHooks",
    "description": "Create Email Hook",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "eventName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "outputTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "outputSchema",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/hooks/email/{id}",
    "method": "getEmailHookById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Email Hooks)",
    "typeScriptTag": "hooksEmailHooks",
    "description": "Get an Email Hook by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "email hook ID",
        "example": "<string>"
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
    "url": "/hooks/email/{id}",
    "method": "updateEmailHook",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Hooks (Email Hooks)",
    "typeScriptTag": "hooksEmailHooks",
    "description": "Update Email Hook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Email Hook ID",
        "example": "<string>"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "debug",
        "schema": "boolean",
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
    "url": "/hooks/email/{id}/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Email Hooks)",
    "typeScriptTag": "hooksEmailHooks",
    "description": "Get Email Hook Transactions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Email Hook ID",
        "example": "<string>"
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
    "url": "/hooks/form",
    "method": "getAllEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Form Hooks)",
    "typeScriptTag": "hooksFormHooks",
    "description": "Get Form Hooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/hooks/form",
    "method": "createNewEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks (Form Hooks)",
    "typeScriptTag": "hooksFormHooks",
    "description": "Create Form Hook",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "eventName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "outputTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "outputSchema",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/hooks/form/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Form Hooks)",
    "typeScriptTag": "hooksFormHooks",
    "description": "Get a Form Hook by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "form hook ID",
        "example": "<string>"
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
    "url": "/hooks/form/{id}",
    "method": "updateForm",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Hooks (Form Hooks)",
    "typeScriptTag": "hooksFormHooks",
    "description": "Update Form Hook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "form hook ID",
        "example": "<string>"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "debug",
        "schema": "boolean",
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
    "url": "/hooks/form/{hash}",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks (Form Hooks)",
    "typeScriptTag": "hooksFormHooks",
    "description": "Create Form Hook Transaction",
    "parameters": [
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "*required* form hook hash",
        "example": "<string>"
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
    "url": "/hooks/form/{id}/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Form Hooks)",
    "typeScriptTag": "hooksFormHooks",
    "description": "GET Form Hook Transactions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Form Hook ID",
        "example": "<string>"
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
    "url": "/hooks/form/{org}/{hash}",
    "method": "createFormHookOrgTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks (Form Hooks)",
    "typeScriptTag": "hooksFormHooks",
    "description": "Create Form Hook Org Transaction ",
    "parameters": [
      {
        "name": "org",
        "schema": "string",
        "required": true,
        "description": "Organization ID",
        "example": "<string>"
      },
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "Hash ID",
        "example": "<string>"
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
    "url": "/hooks/web",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Web Hooks)",
    "typeScriptTag": "hooksWebHooks",
    "description": "Get Web Hooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/hooks/web",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks (Web Hooks)",
    "typeScriptTag": "hooksWebHooks",
    "description": "Create Web Hook",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "eventName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "outputTemplate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "outputSchema",
        "schema": "object",
        "required": false,
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
    "url": "/hooks/web/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Web Hooks)",
    "typeScriptTag": "hooksWebHooks",
    "description": "Get a Web Hook by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "web hook ID",
        "example": "<string>"
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
    "url": "/hooks/web/{id}",
    "method": "updateWebHook",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Hooks (Web Hooks)",
    "typeScriptTag": "hooksWebHooks",
    "description": "Update Web Hook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "web hook ID",
        "example": "<string>"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "debug",
        "schema": "boolean",
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
    "url": "/hooks/web/{hash}",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hooks (Web Hooks)",
    "typeScriptTag": "hooksWebHooks",
    "description": "Create Web Hook Transaction",
    "parameters": [
      {
        "name": "hash",
        "schema": "string",
        "required": true,
        "description": "form hook hash",
        "example": "<string>"
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
    "url": "/hooks/web/{id}/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hooks (Web Hooks)",
    "typeScriptTag": "hooksWebHooks",
    "description": "Get Web Hook Transactions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Web Hook ID",
        "example": "<string>"
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
    "url": "/kviews",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KViews (Klass Views)",
    "typeScriptTag": "kViewsKlassViews",
    "description": "Get KViews",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/kviews/{resource}",
    "method": "getByResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KViews (Klass Views)",
    "typeScriptTag": "kViewsKlassViews",
    "description": "Get KViews by Resource",
    "parameters": [
      {
        "name": "resource",
        "schema": "string",
        "required": true,
        "description": "The resource of the KView. e.g conversation, company, kobject.shopify-order",
        "example": "<string> (conversation|company|customer|kobject)"
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
    "url": "/kviews/{resource}/{context}/order",
    "method": "updateOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KViews (Klass Views)",
    "typeScriptTag": "kViewsKlassViews",
    "description": "Update KViews Order",
    "parameters": [
      {
        "name": "resource",
        "schema": "string",
        "required": true,
        "description": "The resource of the KView. e.g conversation, company, kobject-order",
        "example": "<string> (conversation|company|customer|kobject)"
      },
      {
        "name": "context",
        "schema": "string",
        "required": true,
        "description": "Context of the resource. e.g smartbar-card, smartbar-details, expanded-timeline",
        "example": "<string> (smartbar-card|smartbar-details|expanded-timeline)"
      },
      {
        "name": "kviews",
        "schema": "array",
        "required": true,
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
    "url": "/kviews/{resource}/{id}",
    "method": "updateKViewById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KViews (Klass Views)",
    "typeScriptTag": "kViewsKlassViews",
    "description": "Update KView",
    "parameters": [
      {
        "name": "resource",
        "schema": "string",
        "required": true,
        "description": "The resource of the KView. e.g conversation, company, kobject.shopify-order",
        "example": "<string> (conversation|company|customer|kobject)"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the KView",
        "example": "<string>"
      },
      {
        "name": "components",
        "schema": "object",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "context",
        "schema": "string",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "advanced",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "layout",
        "schema": "array",
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
    "url": "/outbound-webhooks/transactions",
    "method": "listMostRecentDeliveryAttempts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Web Hooks (https://developer.kustomer.com",
    "typeScriptTag": "outboundWebHooksHttps:DeveloperKustomerCom",
    "description": "List Transactions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/outbound-webhooks/{webhookId}/transactions",
    "method": "listDeliveryAttempts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Web Hooks (https://developer.kustomer.com",
    "typeScriptTag": "outboundWebHooksHttps:DeveloperKustomerCom",
    "description": "List Transactions For Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/outbound-webhooks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Web Hooks",
    "typeScriptTag": "outboundWebHooks",
    "description": "List Outbound Webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/outbound-webhooks",
    "method": "createWebHook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Outbound Web Hooks",
    "typeScriptTag": "outboundWebHooks",
    "description": "Create Outbound Webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/outbound-webhooks/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Web Hooks",
    "typeScriptTag": "outboundWebHooks",
    "description": "List Subscribable Events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/outbound-webhooks/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Outbound Web Hooks",
    "typeScriptTag": "outboundWebHooks",
    "description": "Delete Outbound Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/outbound-webhooks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Outbound Web Hooks",
    "typeScriptTag": "outboundWebHooks",
    "description": "Get Outbound Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/outbound-webhooks/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Outbound Web Hooks",
    "typeScriptTag": "outboundWebHooks",
    "description": "Update Outbound Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
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
    "url": "/auth/settings",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth Settings",
    "typeScriptTag": "authSettings",
    "description": "Get Auth Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/settings",
    "method": "updateOrganizationAuth",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Auth Settings",
    "typeScriptTag": "authSettings",
    "description": "Update Auth Settings",
    "parameters": [
      {
        "name": "kustomer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "google",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "saml",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "app",
        "schema": "object",
        "required": false,
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
    "url": "/auth/customer/settings",
    "method": "getCustomerSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth Settings",
    "typeScriptTag": "authSettings",
    "description": "Get Auth Customer Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/p/auth/settings",
    "method": "getPublicSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth Settings",
    "typeScriptTag": "authSettings",
    "description": "Get Public Auth Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/tokens",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth Tokens",
    "typeScriptTag": "authTokens",
    "description": "Get Auth Tokens",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/tokens",
    "method": "createToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth Tokens",
    "typeScriptTag": "authTokens",
    "description": "Create Token",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "singleAccessToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "googleAuthToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "samlAuthToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "remember",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/tokens/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Auth Tokens",
    "typeScriptTag": "authTokens",
    "description": "Delete Auth Token by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique token id",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/tokens/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth Tokens",
    "typeScriptTag": "authTokens",
    "description": "Get Auth Token by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "*required* unique token id",
        "example": "<string>"
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
    "url": "/auth/tokens/current",
    "method": "deleteCurrent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Auth Tokens",
    "typeScriptTag": "authTokens",
    "description": "Delete Current Auth Token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/tokens/current",
    "method": "getCurrentAuthTokenData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth Tokens",
    "typeScriptTag": "authTokens",
    "description": "Get Current Auth Token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/roles",
    "method": "getAvailableRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Role Groups",
    "typeScriptTag": "roleGroups",
    "description": "Get Auth Roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/role-groups",
    "method": "getAllRoleGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Role Groups",
    "typeScriptTag": "roleGroups",
    "description": "Get All Role Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/role-groups",
    "method": "createCustomRoleGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Role Groups",
    "typeScriptTag": "roleGroups",
    "description": "Create a Role Group",
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
        "name": "display",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "required": false,
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
    "url": "/role-groups/{id}",
    "method": "deleteRoleGroupById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Role Groups",
    "typeScriptTag": "roleGroups",
    "description": "Delete a Role Group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Role Group ID",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/role-groups/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Role Groups",
    "typeScriptTag": "roleGroups",
    "description": "Get A Role Group By ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Role Group ID",
        "example": "<string>"
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
    "url": "/role-groups/{id}",
    "method": "updateRoleGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Role Groups",
    "typeScriptTag": "roleGroups",
    "description": "Update a Role Group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Role Group ID",
        "example": "<string>"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
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
    "url": "/teams",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get Teams",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams",
    "method": "createTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create Team",
    "parameters": [
      {
        "name": "icon",
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
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "importedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/teams",
    "method": "getUserTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get a User's Teams",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User ID",
        "example": "<string>"
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
    "url": "/teams/{id}",
    "method": "deleteTeamById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams (By ID)",
    "typeScriptTag": "teamsById",
    "description": "Delete Team",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Team ID",
        "example": "<string>"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/teams/{id}",
    "method": "getTeamById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams (By ID)",
    "typeScriptTag": "teamsById",
    "description": "Get Team by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Team ID",
        "example": "<string>"
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
    "url": "/teams/{id}",
    "method": "updateAttributesById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Update Team Attributes",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Team ID",
        "example": "<string>"
      },
      {
        "name": "icon",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/teams/{id}",
    "method": "updateDocumentById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams (By ID)",
    "typeScriptTag": "teamsById",
    "description": "Update Team by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Team ID",
        "example": "<string>"
      },
      {
        "name": "icon",
        "schema": "undefined",
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
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "members",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/teams/{id}/members",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Remove Team Member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "members",
        "schema": "array",
        "required": true,
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
    "url": "/teams/{id}/members",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Add Team Member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": ""
      },
      {
        "name": "members",
        "schema": "array",
        "required": true,
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
    "url": "/users",
    "method": "getFilteredUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get Users",
    "parameters": [
      {
        "name": "pending",
        "schema": "boolean",
        "description": "Invitation status of user. `true` returns only users with a pending invitation. `false` returns only active users.",
        "example": true
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": "Activation status of user. `true` returns only deactivated users. `false` returns only active users.",
        "example": false
      },
      {
        "name": "userType",
        "schema": "string",
        "description": "User type. Options: `user` for full users, `machine` for a machine user or API user, and `limited` for collaborator user.",
        "example": "user"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "User email address. ",
        "example": "franz.kafka@kustomer.com"
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
    "url": "/users",
    "method": "createNewUserAndSendInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create / Invite New User",
    "parameters": [
      {
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "avatarUrl",
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
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "mobile",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSignature",
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
        "name": "roleGroups",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/current",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get Current User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/current",
    "method": "updateCurrentUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update Current User",
    "parameters": [
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSignature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentPassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "roleGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
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
    "url": "/users/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users (By ID)",
    "typeScriptTag": "usersById",
    "description": "Get User by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the User",
        "example": "<string>"
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
    "url": "/users/{id}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users (By ID)",
    "typeScriptTag": "usersById",
    "description": "Update User by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the authorized user.",
        "example": "<string>"
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "avatarUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailSignature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentPassword",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "roleGroups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{ids}",
    "method": "getMultipleByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users (By ID)",
    "typeScriptTag": "usersById",
    "description": "Get Multiple Users by IDs",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "IDs of users separated by a comma.",
        "example": "<string>"
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
    "url": "/users/passwordreset",
    "method": "resetPasswordRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Reset User's Password",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Access Management"
      apiBaseUrl="https://api.kustomerapp.com/v1"
      apiVersion="1.0"
      endpoints={225}
      sdkMethods={396}
      schemas={543}
      parameters={1284}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kustomer/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kustomer/openapi.yaml"
      developerDocumentation="developer.kustomer.com"
    />
  );
}
  