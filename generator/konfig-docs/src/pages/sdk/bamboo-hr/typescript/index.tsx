import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BambooHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="bamboo-hr-typescript-sdk"
      metaDescription={`Serving more than 34,000 customers and 3 million employees, BambooHR is the leading software provider powering the strategic evolution of HR in small and medium businesses.

BambooHR's cloud-based system is an intuitive, affordable way for growing companies to manage essential employee information in a personalized Human Resources Information System (HRIS). Its software sets HR free to do great work and be more strategic, which helps the entire organization do the same. BambooHR's clients include innovators like SoundCloud, Foursquare, Freshbooks, Stance, Reddit, Magnolia Homes, and others in more than 100 countries and 8 languages worldwide. To find out more, visit bamboohr.com or follow on Twitter at @bamboohr.`}
      company="BambooHR"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bamboohr/logo.png"
      companyKebabCase="bamboo-hr"
      clientNameCamelCase="bambooHr"
      homepage="bamboohr.com"
      lastUpdated={new Date("2024-03-25T22:02:57.266Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bamboohr/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bamboohr/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_dashboard","hr_reporting","human_resources","hr_analytics","hr_metrics","workforce_planning","human_capital_management","workforce_solutions","talent_management","employee_engagement","hr_platform","personnel_management","hris","hr_software","human_resource_information_system","human_resource_management_system","employee_selfservice","manager_selfservice","payroll"]}
      methods={[
  {
    "url": "/{companyDomain}/v1/employees/directory",
    "method": "getDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get Employee Directory",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "if the directory has not been shared company-wide."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/files/categories",
    "method": "addCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Files",
    "typeScriptTag": "employeeFiles",
    "description": "Add Employee File Category",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The category was created"
      },
      {
        "statusCode": "400",
        "description": "if the posted XML is invalid or there was no category name given."
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to create employee categories."
      },
      {
        "statusCode": "500",
        "description": "there was an unknown server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/files/{fileId}",
    "method": "removeFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Files",
    "typeScriptTag": "employeeFiles",
    "description": "Delete Employee File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).",
        "example": "ID",
        "default": 0
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "{fileId} is the ID of the employee file being deleted.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employee file was deleted"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the requested employee or the employee's files."
      },
      {
        "statusCode": "404",
        "description": "if the employee file was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/files/{fileId}",
    "method": "getEmployeeFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Files",
    "typeScriptTag": "employeeFiles",
    "description": "Get an Employee File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).",
        "example": "ID",
        "default": 0
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "{fileId} is the ID of the employee file being retrieved.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employee file was successfully retrieved"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the requested employee or the employee's files."
      },
      {
        "statusCode": "404",
        "description": "if the employee file was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/files/{fileId}",
    "method": "updateEmployeeFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Files",
    "typeScriptTag": "employeeFiles",
    "description": "Update Employee File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).",
        "example": "ID",
        "default": 0
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "{fileId} is the ID of the employee file being updated.",
        "example": "FILEID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareWithEmployee",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The employee file was updated"
      },
      {
        "statusCode": "400",
        "description": "Invalid JSON"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the requested employee or the employee's files."
      },
      {
        "statusCode": "404",
        "description": "if the employee file or category was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/files",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Files",
    "typeScriptTag": "employeeFiles",
    "description": "Upload Employee File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).",
        "example": "ID",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The employee file was successfully uploaded"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the requested employee or the employee's files."
      },
      {
        "statusCode": "404",
        "description": "if the category ID was not found."
      },
      {
        "statusCode": "413",
        "description": "if the file size exceeds 20MB or the storage limit for the company."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/files/categories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Files",
    "typeScriptTag": "companyFiles",
    "description": "Add Company File Category",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The category was created"
      },
      {
        "statusCode": "400",
        "description": "if the posted JSON is invalid or there was no category name given."
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the company files."
      },
      {
        "statusCode": "500",
        "description": "there was an unknown server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/files/{fileId}",
    "method": "removeFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company Files",
    "typeScriptTag": "companyFiles",
    "description": "Delete Company File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "{fileId} is the ID of the company file being deleted.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company file was deleted"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the requested file."
      },
      {
        "statusCode": "404",
        "description": "if the file was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/files/{fileId}",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Files",
    "typeScriptTag": "companyFiles",
    "description": "Get an Company File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "{fileId} is the ID of the company file being retrieved.",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company file was successfully retrieved"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the company files."
      },
      {
        "statusCode": "404",
        "description": "if the file was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/files/{fileId}",
    "method": "updateFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Files",
    "typeScriptTag": "companyFiles",
    "description": "Update Company File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "{fileId} is the ID of the employee file being updated.",
        "example": "FILEID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareWithEmployee",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The employee file was updated"
      },
      {
        "statusCode": "400",
        "description": "if the posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the company files."
      },
      {
        "statusCode": "404",
        "description": "if the file or category was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/files",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Files",
    "typeScriptTag": "companyFiles",
    "description": "Upload Company File",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The company file was successfully uploaded"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the company files."
      },
      {
        "statusCode": "404",
        "description": "if the category ID was not found."
      },
      {
        "statusCode": "413",
        "description": "if the file size exceeds 20MB or the storage limit for the company."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/reports/{id}",
    "method": "companyReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get company report",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is a report ID.",
        "example": "ID"
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON",
        "example": "FORMAT"
      },
      {
        "name": "fd",
        "schema": "string",
        "required": false,
        "description": "yes=apply standard duplicate field filtering, no=return the raw results with no duplicate filtering. Default value is \"yes\""
      },
      {
        "name": "onlyCurrent",
        "schema": "boolean",
        "required": false,
        "description": "Setting to false will return future dated values from history table fields.",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "All fields available in BambooHR."
      },
      {
        "statusCode": "404",
        "description": "if you request a nonexistent report number."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/reports/custom",
    "method": "requestCustomReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Request a custom report",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON",
        "example": "FORMAT"
      },
      {
        "name": "onlyCurrent",
        "schema": "boolean",
        "required": false,
        "description": "Limits the report to only current employees. Setting to false will include future-dated employees in the report.",
        "default": true
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filters",
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
        "description": "Custom report successfully requested"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/tables/{table}",
    "method": "getEmployeeTableRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tabular Data",
    "typeScriptTag": "tabularData",
    "description": "Gets table rows for a given employee and table combination",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
      },
      {
        "name": "table",
        "schema": "string",
        "required": true,
        "description": "Table name",
        "example": "TABLE"
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
    "url": "/{companyDomain}/v1/employees/{id}/tables/{table}",
    "method": "addTableRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tabular Data",
    "typeScriptTag": "tabularData",
    "description": "Adds a table row",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
      },
      {
        "name": "table",
        "schema": "string",
        "required": true,
        "description": "Table name",
        "example": "TABLE"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "division",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportsTo",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Row added successfully."
      },
      {
        "statusCode": "400",
        "description": "Invalid or missing required fields."
      },
      {
        "statusCode": "403",
        "description": "Permission denied."
      },
      {
        "statusCode": "406",
        "description": "An error with one or more of the fields."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}",
    "method": "deleteRow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tabular Data",
    "typeScriptTag": "tabularData",
    "description": "Deletes a table row",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
      },
      {
        "name": "table",
        "schema": "string",
        "required": true,
        "description": "Table name",
        "example": "TABLE"
      },
      {
        "name": "rowId",
        "schema": "string",
        "required": true,
        "description": "Row ID",
        "example": "ROWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request. Invalid employee ID or table name."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized."
      },
      {
        "statusCode": "403",
        "description": "Permission denied."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}",
    "method": "updateRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tabular Data",
    "typeScriptTag": "tabularData",
    "description": "Updates a table row.",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
      },
      {
        "name": "table",
        "schema": "string",
        "required": true,
        "description": "Table name",
        "example": "TABLE"
      },
      {
        "name": "rowId",
        "schema": "string",
        "required": true,
        "description": "Row ID",
        "example": "ROWID"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "division",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportsTo",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful response is possible even if one or more updates were dis-allowed because of permissions. As long as a single field is updated a 200 response will be returned."
      },
      {
        "statusCode": "400",
        "description": "Invalid or missing required fields."
      },
      {
        "statusCode": "403",
        "description": "Permission denied."
      },
      {
        "statusCode": "406",
        "description": "An error with one or more of the fields."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1_1/employees/{id}/tables/{table}/{rowId}",
    "method": "updateRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tabular Data",
    "typeScriptTag": "tabularData",
    "description": "Updates a table row.",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
      },
      {
        "name": "table",
        "schema": "string",
        "required": true,
        "description": "Table name",
        "example": "TABLE"
      },
      {
        "name": "rowId",
        "schema": "string",
        "required": true,
        "description": "Row ID",
        "example": "ROWID"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "division",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportsTo",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful response is possible even if one or more updates were dis-allowed because of permissions. As long as a single field is updated a 200 response will be returned."
      },
      {
        "statusCode": "400",
        "description": "Invalid or missing required fields."
      },
      {
        "statusCode": "403",
        "description": "Permission denied."
      },
      {
        "statusCode": "406",
        "description": "An error with one or more of the fields."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1_1/employees/{id}/tables/{table}",
    "method": "addRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tabular Data",
    "typeScriptTag": "tabularData",
    "description": "Adds a table row",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
      },
      {
        "name": "table",
        "schema": "string",
        "required": true,
        "description": "Table name",
        "example": "TABLE"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "division",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportsTo",
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
    "url": "/{companyDomain}/v1/employees/changed/tables/{table}",
    "method": "getChangedTableRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tabular Data",
    "typeScriptTag": "tabularData",
    "description": "Gets all updated employee table data",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "table",
        "schema": "string",
        "required": true,
        "description": "Table name",
        "example": "TABLE"
      },
      {
        "name": "since",
        "schema": "string",
        "required": true,
        "description": "URL encoded iso8601 timestamp",
        "example": "SINCE"
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
    "url": "/{companyDomain}/v1/meta/lists/{listFieldId}",
    "method": "updateListFieldValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Information",
    "typeScriptTag": "accountInformation",
    "description": "Add or Update Values for List Fields",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "listFieldId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LISTFIELDID"
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful response indicates that all the requested changes were made. The content of the response will be the full list of options for the specified listId."
      },
      {
        "statusCode": "400",
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "List is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "A non-existant list value or option ID is specified."
      },
      {
        "statusCode": "409",
        "description": "A duplicate list value conflicted with the value specified."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{employeeId}/time_off/request",
    "method": "requestCreation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Add a Time Off Request",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timeOffTypeId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "previousRequest",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Request created."
      },
      {
        "statusCode": "400",
        "description": "Malformed request."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Cannot change past approved requests."
      },
      {
        "statusCode": "404",
        "description": "Employee not found"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_off/requests/{requestId}/status",
    "method": "changeRequestStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Change a Request Status",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The status has been updated."
      },
      {
        "statusCode": "400",
        "description": "If the posted XML is invalid or the status is not \"approved\", \"denied\", \"canceled\", or \"declined\"."
      },
      {
        "statusCode": "403",
        "description": "If the current user doesn't have access to change the status in this way."
      },
      {
        "statusCode": "404",
        "description": "If the time off request ID doesn't exist."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{employeeId}/time_off/policies",
    "method": "listEmployeeTimeOffPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List Time Off Policies for Employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1/employees/{employeeId}/time_off/policies",
    "method": "assignEmployeePolicies",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Assign Time Off Policies for an Employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies",
    "method": "listEmployeePolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List Time Off Policies for Employee, Version 1.1",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies",
    "method": "assignEmployeePoliciesV11",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Assign Time Off Policies for an Employee, Version 1.1",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1/employees/{employeeId}/time_off/calculator",
    "method": "estimateFutureTimeOffBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Estimate Future Time Off Balances",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1/employees/{employeeId}/photo/{size}",
    "method": "getEmployeePhoto",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Photos",
    "typeScriptTag": "photos",
    "description": "Get an employee photo",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The ID for the employee you are getting the photo for.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "size",
        "schema": "string",
        "required": true,
        "description": "Photo size",
        "example": "SIZE"
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
    "url": "/{companyDomain}/v1/employees/{employeeId}/photo",
    "method": "storeNewEmployeePhoto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Photos",
    "typeScriptTag": "photos",
    "description": "Store a new employee photo",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The ID for the employee you are setting the photo for.",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The file was successfully uploaded"
      },
      {
        "statusCode": "404",
        "description": "if the employee doesn't exist"
      },
      {
        "statusCode": "413",
        "description": "if the file is too big."
      },
      {
        "statusCode": "415",
        "description": "if the file is not in a supported file format or if the width doesn't match the height."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/changed",
    "method": "getChangedEmployeeIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Last Change Information",
    "typeScriptTag": "lastChangeInformation",
    "description": "Gets all updated employee IDs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "since",
        "schema": "string",
        "required": true,
        "description": "URL encoded iso8601 timestamp",
        "example": "SINCE"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Use one of these in the {type} variable in the URL: \"inserted\", \"updated\", \"deleted\""
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
    "url": "/{companyDomain}/v1/login",
    "method": "userCredentials",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Login",
    "typeScriptTag": "login",
    "description": "User Login",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
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
    "url": "/{companyDomain}/v1/benefits/settings/deduction_types/all",
    "method": "getDeductionTypesAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit deduction types",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefit/company_benefit",
    "method": "listCompanyBenefits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get a list of company benefits",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefit/company_benefit",
    "method": "addNewCompanyBenefit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Add a new company benefit",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefit/company_benefit/{id}",
    "method": "deleteCompanyBenefit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Delete a company benefit",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the company benefit ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully deleted company benefit."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/benefit/company_benefit/{id}",
    "method": "getCompanyBenefit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get a company benefit",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the company benefit ID.",
        "example": "ID"
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
    "url": "/{companyDomain}/v1/benefit/company_benefit/{id}",
    "method": "updateCompanyBenefit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Update a company benefit",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the company benefit ID.",
        "example": "ID"
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
    "url": "/{companyDomain}/v1/benefit/company_benefit/type",
    "method": "listCompanyBenefitTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get a list of company benefit types",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefit/employee_benefit",
    "method": "listEmployeeBenefits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get a list of employee benefits",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "filters",
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
    "url": "/{companyDomain}/v1/benefit/employee_benefit",
    "method": "addEmployeeBenefit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Add an employee benefit",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employee benefit created"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/benefitcoverages",
    "method": "getCoverages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit coverages",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/employeedependents/{id}",
    "method": "getEmployeeDependent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get employee dependent",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee dependent ID.",
        "example": "ID"
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
    "url": "/{companyDomain}/v1/employeedependents/{id}",
    "method": "updateDependentInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Update an employee dependent",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee dependent ID.",
        "example": "ID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "relationship",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "homePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isUsCitizen",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isStudent",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Dependent updated"
      },
      {
        "statusCode": "400",
        "description": "if the posted JSON is invalid"
      },
      {
        "statusCode": "403",
        "description": "if the current user doesn't have access to change the dependent in this way."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employeedependents",
    "method": "listEmployeeDependents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get all employee dependents",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeid",
        "schema": "string",
        "required": true,
        "description": "{employeeid} is the employee ID. Supplying this ID limits the response to the specific employee.",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1/employeedependents",
    "method": "createEmployeeDependent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Add an employee dependent",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "relationship",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zipCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "homePhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isUsCitizen",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isStudent",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dependent added"
      },
      {
        "statusCode": "400",
        "description": "if the posted JSON is invalid"
      },
      {
        "statusCode": "403",
        "description": "if the current user doesn't have access to add the dependent."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/benefitplans",
    "method": "getBenefitPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit plans",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefitplancoverages",
    "method": "listBenefitPlanCoverages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit plan coverages",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefitgroups",
    "method": "getBenefitGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit groups",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefitgroupemployees",
    "method": "getBenefitGroupEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit group employees",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefitgroupemployees",
    "method": "addBenefitGroupEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Add a benefit group employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "benefitGroupId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Benefit group employee added"
      },
      {
        "statusCode": "400",
        "description": "if the posted JSON is invalid"
      },
      {
        "statusCode": "403",
        "description": "if the current user doesn't have access to add the benefit group employee."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/benefitgroupplans",
    "method": "getGroupPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit group plans",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/benefitgroupplancosts",
    "method": "getGroupPlanCosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit group plan costs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/employee/deductions/{id}",
    "method": "getDeductionsByPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get employee deductions by benefit plan",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the benefit plan ID.",
        "example": "ID"
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
    "url": "/{companyDomain}/v1/employee/plans/{id}",
    "method": "getBenefitPlanDeductionsByEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit plan deductions by employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
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
    "url": "/{companyDomain}/v1/payroll/deductions/{id}",
    "method": "getEmployeeBenefitDeductions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Get benefit deductions for employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
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
    "url": "/{companyDomain}/v1/employee_withholding/{id}",
    "method": "clearEmployeeWithholdings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Clear an employee's default withholdings",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee id.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON success document."
      },
      {
        "statusCode": "400",
        "description": "Invalid employee ID is provided"
      },
      {
        "statusCode": "403",
        "description": "if the API user doesn't have access to edit the employee withholdings information."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_withholding/{id}",
    "method": "getDefaultWithholdings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Get an employee's default withholdings",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with the requested information."
      },
      {
        "statusCode": "400",
        "description": "Invalid employee ID is provided"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_withholding/{id}",
    "method": "addEmployeeWithholdings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Add an employee's default withholdings",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee id.",
        "example": "ID"
      },
      {
        "name": "fedWithholding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stateWithholding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "localWithholding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalFed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalLocal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxLocal",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Withholding added"
      },
      {
        "statusCode": "400",
        "description": "if an invalid employee ID is provided, or the posted JSON is not valid."
      },
      {
        "statusCode": "403",
        "description": "if the current user doesn't have access to add employee withholdings information."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_direct_deposit_accounts/{id}",
    "method": "clearEmployeeDirectDeposit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Clear an employee's direct deposit information",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON success document."
      },
      {
        "statusCode": "400",
        "description": "Invalid employee ID is provided"
      },
      {
        "statusCode": "403",
        "description": "if the API user doesn't have access to edit the employee's direct deposit declarations."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_direct_deposit_accounts/{id}",
    "method": "employeeDirectDepositInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Get an employee's direct deposit information",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with the requested information."
      },
      {
        "statusCode": "400",
        "description": "Invalid employee ID is provided"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_direct_deposit_accounts/{id}",
    "method": "addEmployeeDirectDepositInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Add an employee's direct deposit information",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee id.",
        "example": "ID"
      },
      {
        "name": "accounts",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The saved values for the employee's direct deposit declarations will be returned in JSON."
      },
      {
        "statusCode": "400",
        "description": "if an invalid employee ID is provided, or the posted JSON is not valid."
      },
      {
        "statusCode": "403",
        "description": "if the current user doesn't have access to update the employee's direct deposit declarations."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}",
    "method": "clearEmployeeUnpaidPaystubs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Clear an employee's unpaid paystubs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee id.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Unpaid paystub cleared"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}",
    "method": "getUnpaidPaystubs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Get an employee's unpaid paystubs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the employee.",
        "example": "ID"
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
    "url": "/{companyDomain}/v1/employee_unpaid_pay_stubs",
    "method": "addEmployeeUnpaidPaystubs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Add an employee's unpaid paystubs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unpaidPeriods",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Additionally, the saved values for the employee's unpaid pay stubs will be returned in JSON."
      },
      {
        "statusCode": "400",
        "description": "if an invalid employee ID is provided, or the posted JSON is not valid."
      },
      {
        "statusCode": "403",
        "description": "if the current user doesn't have access to add employee unpaid pay stub information."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_pay_stub/{id}",
    "method": "deleteEmployeePaystub",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Delete an employee's paystub",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the paystub (record) ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON success document."
      },
      {
        "statusCode": "400",
        "description": "Invalid employee ID is provided"
      },
      {
        "statusCode": "403",
        "description": "if the API user doesn't have access to edit the employee unpaid paystub information."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_pay_stub/{id}",
    "method": "getPaystub",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Get an employee's paystub",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the paystub (record) ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with the requested information."
      },
      {
        "statusCode": "400",
        "description": "Invalid employee ID is provided"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employee_pay_stub",
    "method": "addEmployeePaystub",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Add an employee's paystub",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalRecordId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payPeriodFrom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payPeriodTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payorName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payorAdd1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payorAdd2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payorCity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payorState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payorZip",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payeeName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "net",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gross",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalTaxes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "totalDeductions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ytdNet",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ytdGross",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ytdTaxes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ytdDeductions",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fedWitholding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "federalType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twoJobs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dependentsAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otherIncome",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deductionsAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stateWithholding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "localWithholding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalFed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "additionalLocal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxLocal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "taxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deductions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deposits",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Additionally, the saved values for the employee's paystub record will be returned in JSON along with its record ID."
      },
      {
        "statusCode": "400",
        "description": "if an invalid employee ID is provided, or the posted JSON is not valid."
      },
      {
        "statusCode": "403",
        "description": "if the current user doesn't have access to add an employee pay stub."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/timetracking/record/{id}",
    "method": "getHourRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hours",
    "typeScriptTag": "hours",
    "description": "Get an hour record",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is the time tracking ID used to originally create the record.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with the requested information."
      },
      {
        "statusCode": "400",
        "description": "Invalid or missing argument."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/timetracking/add",
    "method": "recordAddition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hours",
    "typeScriptTag": "hours",
    "description": "Add an hour record",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "timeTrackingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMETRACKINGID"
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "divisionId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitleId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateHoursWorked",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATEHOURSWORKED"
      },
      {
        "name": "payRate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rateType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RATETYPE"
      },
      {
        "name": "hoursWorked",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "jobCode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobData",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The time tracking ID will be returned in JSON."
      },
      {
        "statusCode": "400",
        "description": "If any required field is missing, any of the IDs are invalid, or the posted JSON is not valid."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/timetracking/adjust",
    "method": "editHourRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Hours",
    "typeScriptTag": "hours",
    "description": "Edit an hour record",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "timeTrackingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMETRACKINGID"
      },
      {
        "name": "hoursWorked",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The time tracking ID will be returned in JSON."
      },
      {
        "statusCode": "400",
        "description": "if any required field is missing, any of the IDs are invalid, or the posted JSON is not valid"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/timetracking/delete/{id}",
    "method": "deleteHourRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Hours",
    "typeScriptTag": "hours",
    "description": "Delete an hour record",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Record removed."
      },
      {
        "statusCode": "400",
        "description": "If the time tracking ID cannot be found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/timetracking/record",
    "method": "bulkRecordEdit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hours",
    "typeScriptTag": "hours",
    "description": "Bulk add/edit hour records",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An array of objects with success as true or false depending on the success of each time tracking object in the request along with the successful IDs or the reason of the error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/timesheets/approve",
    "method": "approveEmployeeTimesheets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Approve employee timesheets",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "lastChanged",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1624485787
      },
      {
        "name": "timesheets",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful approval will return a 204 - No content response."
      },
      {
        "statusCode": "403",
        "description": "Missing time tracking tool or permissions to approve."
      },
      {
        "statusCode": "404",
        "description": "Invalid timesheet id."
      },
      {
        "statusCode": "409",
        "description": "Stale data or employee clocked in."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/timesheets/clock_out_and_approve",
    "method": "approveEmployeeTimesheets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Approve timesheets for employees that are currently clocked in",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "clockOuts",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful approval will return a 204 - No content response."
      },
      {
        "statusCode": "400",
        "description": "Invalid or missing argument"
      },
      {
        "statusCode": "403",
        "description": "Missing time tracking tool or permissions to approve."
      },
      {
        "statusCode": "404",
        "description": "Invalid timesheet id."
      },
      {
        "statusCode": "409",
        "description": "Stale data or employee clocked in."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/timesheets",
    "method": "getTimesheetsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get timesheets by ids",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "timesheets",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10, 11, 12"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the requested information."
      },
      {
        "statusCode": "400",
        "description": "No timesheet ids given."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions to view all or some of the timesheets."
      },
      {
        "statusCode": "404",
        "description": "Timesheet not found."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/clock_in/{employeeId}",
    "method": "clockInEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Clock in (employee id optional)",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "{employeeId} is id of the employee clocking out",
        "example": "EMPLOYEEID"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "",
        "example": "13:00"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Denver"
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "Back from lunch."
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "clockInLocation",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the clock in information."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Most likely because of missing permissions to clock in."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "409",
        "description": "Employee already clocked in or invalid timesheet type."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/clock_out/{employeeId}",
    "method": "clockOutEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Clock out (employee id optional)",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "{employeeId} is id of the employee clocking out",
        "example": "EMPLOYEEID"
      },
      {
        "name": "clockOutLocation",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the clock out information."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Most likely because of missing permissions to clock out."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "409",
        "description": "Employee already clocked in or invalid timesheet type."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/daily_entries",
    "method": "storeDailyEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Store daily entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "entries",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "409",
        "description": "Invalid timesheet type."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/clock_entries",
    "method": "deleteClockEntries",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Delete clock entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "clockEntryIds",
        "schema": "array",
        "description": "",
        "example": [
          10,
          11,
          12
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful deletion will return a 204 - No content response."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions or timesheet already approved."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "409",
        "description": "If clock timesheet, may still be clocked in. Have to clock out first."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/clock_entries",
    "method": "storeClockEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Store clock entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "entries",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "409",
        "description": "Invalid timesheet type or overlapping time entries."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/timesheet/{timesheetId}",
    "method": "employeeTimesheetGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get a timesheet for an employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of employee to whom the timesheet belongs.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "timesheetId",
        "schema": "string",
        "required": true,
        "description": "timesheetId is the id to whom the timesheet belongs.",
        "example": "TIMESHEETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the timesheet information."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/daily_entries/{id}",
    "method": "getDailyEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get a daily entry",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of employee to whom the daily entry belongs.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "the id to whom the daily entry belongs.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_entries/{id}",
    "method": "getClockEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get a clock entry",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of employee to whom the clock entry belongs.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "the id to whom the clock entry belongs.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/is_clocked_in",
    "method": "employeeClockedIn",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Is employee clocked in?",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of employee to whom the clock entry belongs.",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_out/datetime",
    "method": "clockOutEmployeeAtSpecificTime",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Clock out an employee at a specific time",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of the employee to whom the projects belong.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "datetime",
        "schema": "string",
        "description": "",
        "example": "2020-12-16T17:28:00-05:00"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Denver"
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "description": "",
        "example": 40342
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "400",
        "description": "Invalid information passed in."
      },
      {
        "statusCode": "403",
        "description": "Missing permissions."
      },
      {
        "statusCode": "404",
        "description": "Id not found."
      },
      {
        "statusCode": "412",
        "description": "Invalid company configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_in/data",
    "method": "editClockedInEntryData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Edit information on the currently clocked in entry",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of the employee to whom the projects belong.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "start",
        "schema": "string",
        "description": "",
        "example": "13:00"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Denver"
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "Back from lunch."
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "clockInLocation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "clockOutLocation",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "400",
        "description": "Invalid or missing argument."
      },
      {
        "statusCode": "403",
        "description": "Invalid permissions."
      },
      {
        "statusCode": "404",
        "description": "Not found."
      },
      {
        "statusCode": "409",
        "description": "Conflict found."
      },
      {
        "statusCode": "412",
        "description": "Precondition failed."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects",
    "method": "listEmployeeProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get projects an employee can log time to",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of the employee to whom the projects belong.",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the daily entry information."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects/{projectId}/tasks",
    "method": "getProjectTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get tasks for a project",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of the employee to whom the projects belong.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "id of the project to which the tasks belong.",
        "example": "PROJECTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be JSON with the task information."
      },
      {
        "statusCode": "403",
        "description": "Invalid permissions."
      },
      {
        "statusCode": "500",
        "description": "Server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/timesheet_entries",
    "method": "listTimesheetEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Get Timesheet Entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD. Only show timesheet entries on/after the specified start date. Must be within the last 365 days.",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD. Only show timesheet entries on/before the specified end date. Must be within the last 365 days.",
        "example": "END"
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "description": "A comma separated list of employee IDs. When specified, only entries that match these employee IDs are returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/clock_entries/store",
    "method": "addEditClockEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Add/Edit Timesheet Clock Entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "406",
        "description": "Request not acceptable."
      },
      {
        "statusCode": "409",
        "description": "There was a conflict with the request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/clock_entries/delete",
    "method": "deleteTimeSheetEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Delete Timesheet Clock Entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "clockEntryIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success. No content returned."
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "406",
        "description": "Request not acceptable."
      },
      {
        "statusCode": "409",
        "description": "There was a conflict with the request."
      },
      {
        "statusCode": "412",
        "description": "Invalid time tracking configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/hour_entries/store",
    "method": "addEditHourEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Add/Edit Timesheet Hour Entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "hours",
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
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "406",
        "description": "Request not acceptable."
      },
      {
        "statusCode": "409",
        "description": "There was a conflict with the request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/hour_entries/delete",
    "method": "deleteHourEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Delete Timesheet Hour Entries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "hourEntryIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success. No content returned."
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "406",
        "description": "Request not acceptable."
      },
      {
        "statusCode": "409",
        "description": "There was a conflict with the request."
      },
      {
        "statusCode": "412",
        "description": "Invalid time tracking configuration or timezone."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_in",
    "method": "addTimesheetClockIn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Add Timesheet Clock-In Entry",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of the employee to clock in.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "",
        "example": 25
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "Back from lunch."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "406",
        "description": "Request not acceptable."
      },
      {
        "statusCode": "409",
        "description": "There was a conflict with the request."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_out",
    "method": "addClockOut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Add Timesheet Clock-Out Entry",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of the employee to clock out.",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "406",
        "description": "Request not acceptable."
      },
      {
        "statusCode": "409",
        "description": "There was a conflict with the request."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/employees/{employeeId}/projects",
    "method": "listEmployeeProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Get Employee Projects",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "id of the employee to retrieve projects for.",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_tracking/projects",
    "method": "createProjectTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking - Private Beta",
    "typeScriptTag": "timeTrackingPrivateBeta",
    "description": "Create a Time Tracking Project",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Project A"
      },
      {
        "name": "billable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allowAllEmployees",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "hasTasks",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "tasks",
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
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Forbidden. Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "406",
        "description": "Request not acceptable."
      },
      {
        "statusCode": "409",
        "description": "There was a conflict with the request."
      },
      {
        "statusCode": "500",
        "description": "Internal server error."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/aggregate",
    "method": "getAllAggregateInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get All Aggregate Goal Info",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID used to generate the aggregate information.",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/aggregate",
    "method": "getAllAggregateInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get All Aggregate Goal Info, Version 1.1",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID used to generate the aggregate information.",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1_2/performance/employees/{employeeId}/goals/aggregate",
    "method": "getAllAggregateInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get All Aggregate Goal Info, Version 1.2",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID used to generate the aggregate information.",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/aggregate",
    "method": "getGoalAggregateInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get Aggregate Goal Info",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the Goal ID used to generate the aggregate information.",
        "example": "GOALID"
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
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/sharedWith",
    "method": "updateGoalSharing",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update Goal Sharing",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      },
      {
        "name": "sharedWithEmployeeIds",
        "schema": "array",
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
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "No goal found for the given goalId."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update Goal Progress",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": 0
      },
      {
        "name": "goalId",
        "schema": "integer",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
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
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "No goal found for the given goalId."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/filters",
    "method": "statusCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get Goal Status Counts",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID to whom the goals are assigned.",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/filters",
    "method": "countPerStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get Goal Status Counts, Version 1.1",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID to whom the goals are assigned.",
        "example": "EMPLOYEEID"
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
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/canCreateGoals",
    "method": "determinePermission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Can Create a Goal",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with the requested information."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals",
    "method": "getEmployeeGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get Goals",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID to whom the goals are assigned.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "A filter that can be applied to only show the goals that are in a certain state."
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
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals",
    "method": "createEmployeeGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Create Goal",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
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
        "name": "percentComplete",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "alignsWithOptionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharedWithEmployeeIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DUEDATE"
      },
      {
        "name": "completionDate",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "milestones",
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
        "statusCode": "400",
        "description": "If the posted XML or JSON is invalid or the minimum fields are not provided."
      },
      {
        "statusCode": "403",
        "description": "If the API user does not have permission to create a goal for this employee."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Delete Goal",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful deletion will return a 204 - No content response."
      },
      {
        "statusCode": "400",
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "The goal specified by the given goalId was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}",
    "method": "updateEmployeeGoal",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update Goal",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "percentComplete",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "alignsWithOptionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharedWithEmployeeIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "completionDate",
        "schema": "number",
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
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "The goal specified by the given goalId was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/{goalId}",
    "method": "updateEmployeeGoalV11",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update Goal, V1.1",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
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
        "name": "alignsWithOptionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharedWithEmployeeIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DUEDATE"
      },
      {
        "name": "milestonesEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "deletedMilestoneIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "milestones",
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
        "statusCode": "400",
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "The goal specified by the given goalId was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/close",
    "method": "closeGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Close Goal",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "The goal specified by the given goalId was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/reopen",
    "method": "reopenGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Reopen a Goal",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "The goal specified by the given goalId was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/shareOptions",
    "method": "shareOptionsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Available Goal Sharing Options",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID to get sharing options for.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "The search term used to filter employees returned. Will search name, employee ID and email."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limit will restrict results to specified number."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with a list of available employees with whom the goals can be shared."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/alignmentOptions",
    "method": "getAlignableOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Alignable Goal Options",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID to get alignable goal options for.",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with a list of goals that are available alignment options."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get Goal Comments",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response content will be a JSON document with a list of comments for the specified goal."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Create Goal Comment",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A goal comment object with the new goal comment ID."
      },
      {
        "statusCode": "400",
        "description": "If the posted XML or JSON is invalid or the minimum fields are not provided."
      },
      {
        "statusCode": "403",
        "description": "If the API user does not have permission to add a comment to the specified goal."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Delete Goal Comment",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "commentId is the ID of a specific comment for the specified goal.",
        "example": "COMMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful deletion will return a 204 - No content response."
      },
      {
        "statusCode": "400",
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "The goal specified by the given goalId was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update Goal Comment",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "employeeId is the employee ID with whom the goal is associated.",
        "example": "EMPLOYEEID"
      },
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "goalId is the goal ID for the specified employee.",
        "example": "GOALID"
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "commentId is the comment ID for the specified goal.",
        "example": "COMMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful response indicates that all the requested changes were made. The content of the response will be the goal comment response object for the specified commentId."
      },
      {
        "statusCode": "400",
        "description": "The posted JSON is invalid."
      },
      {
        "statusCode": "403",
        "description": "Goal is not editable or insufficient permissions."
      },
      {
        "statusCode": "404",
        "description": "The goal specified by the given goalId was not found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/jobs",
    "method": "getJobSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Get Job Summaries",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "statusGroups",
        "schema": "string",
        "description": "A list of status groups to filter positions by."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "A specific field to sort the results by."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which to sort results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/applications",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Get Applications",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page number"
      },
      {
        "name": "jobId",
        "schema": "integer",
        "description": "A Job Id to limit results to"
      },
      {
        "name": "applicationStatusId",
        "schema": "integer",
        "description": "Application status id to filter by."
      },
      {
        "name": "applicationStatus",
        "schema": "string",
        "description": "A list of application status groups to filter by."
      },
      {
        "name": "jobStatusGroups",
        "schema": "string",
        "description": "A list of position status groups to filter by."
      },
      {
        "name": "searchString",
        "schema": "string",
        "description": "A general search criteria by which to find applications."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "A specific field to sort the results by."
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Order by which to sort results."
      },
      {
        "name": "newSince",
        "schema": "string",
        "description": "Only get applications newer than a given UTC timestamp, for example 2024-01-01 13:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/applications/{applicationId}",
    "method": "getApplicationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Get Application Details",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the application to look up details.",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/comments",
    "method": "addApplicationComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Add Application Comment",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the application to add a comment to.",
        "example": 0,
        "default": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE",
        "default": "comment"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success."
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/statuses",
    "method": "listStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Get Statuses",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/status",
    "method": "changeApplicantStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Change Applicant's Status",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the application to add a comment to.",
        "example": 0,
        "default": 0
      },
      {
        "name": "status",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/locations",
    "method": "getCompanyLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Get Company Locations",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/hiring_leads",
    "method": "getHiringLeads",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Get Hiring Leads",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/application",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Add New Candidate",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
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
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "address",
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
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "linkedinUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateAvailable",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "desiredSalary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "referredBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "websiteUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "highestEducation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "collegeName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "references",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resume",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "coverLetter",
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
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity. One or more parameters failed validation."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/applicant_tracking/job_opening",
    "method": "createNewJobOpening",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicant Tracking",
    "typeScriptTag": "applicantTracking",
    "description": "Add New Job Opening",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "postingTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTINGTITLE"
      },
      {
        "name": "jobStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBSTATUS"
      },
      {
        "name": "hiringLead",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "department",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employmentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYMENTTYPE"
      },
      {
        "name": "minimumExperience",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobLocation",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobDescription",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBDESCRIPTION"
      },
      {
        "name": "applicationQuestionResume",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionLinkedinUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionDateAvailable",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionDesiredSalary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionCoverLetter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionReferredBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionWebsiteUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionHighestEducation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionCollege",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationQuestionReferences",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "internalJobCode",
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
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      },
      {
        "statusCode": "422",
        "description": "Unprocessable entity. One or more parameters failed validation."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/type",
    "method": "getTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "List Training Types",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/type",
    "method": "typeAddition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Add Training Type",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
        "name": "frequency",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "12"
      },
      {
        "name": "renewable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "dueFromHireDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "30"
      },
      {
        "name": "linkUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowEmployeesToMarkComplete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/type/{trainingTypeId}",
    "method": "removeType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Delete Training Type",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "trainingTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the training type to delete.",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url or training type does not exist."
      },
      {
        "statusCode": "405",
        "description": "Training type was unable to be deleted."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/type/{trainingTypeId}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Update Training Type",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "trainingTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the training type to update.",
        "example": 0,
        "default": 0
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
        "name": "frequency",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "12"
      },
      {
        "name": "renewable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "dueFromHireDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "30"
      },
      {
        "name": "linkUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowEmployeesToMarkComplete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/category",
    "method": "categoryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "List Training Categories",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/category",
    "method": "addCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Add Training Category",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
        "statusCode": "201",
        "description": "The category ID and name"
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/category/{trainingCategoryId}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Delete Training Category",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "trainingCategoryId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the training category to delete.",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url or training category does not exist."
      },
      {
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/category/{trainingCategoryId}",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Update Training Category",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "trainingCategoryId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the training category to update.",
        "example": 0,
        "default": 0
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
        "description": "The category ID and name"
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/record/employee/{employeeId}",
    "method": "listEmployeeTrainings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "List Employee Trainings",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the employee to get a list of trainings for.",
        "example": 0,
        "default": 0
      },
      {
        "name": "trainingTypeId",
        "schema": "integer",
        "required": false,
        "description": "The training type id is optional. Not supplying a training type id will return the collection of all training records for the employee.",
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
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/record/employee/{employeeId}",
    "method": "addEmployeeTrainingRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Add New Employee Training Record",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the employee to add a training record to.",
        "example": 0,
        "default": 0
      },
      {
        "name": "completed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPLETED"
      },
      {
        "name": "cost",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "instructor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "credits",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/record/{employeeTrainingRecordId}",
    "method": "deleteEmployeeRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Delete Employee Training Record",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeTrainingRecordId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the training record to delete.",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url or training record does not exist."
      },
      {
        "statusCode": "405",
        "description": "Unable to delete training record."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/training/record/{employeeTrainingRecordId}",
    "method": "updateEmployeeTrainingRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Training",
    "typeScriptTag": "training",
    "description": "Update Employee Training Record",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeTrainingRecordId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the training record to update.",
        "example": 0,
        "default": 0
      },
      {
        "name": "completed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPLETED"
      },
      {
        "name": "cost",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "instructor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "credits",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "number",
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
        "description": "Bad request parameters."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized. Invalid API credentials."
      },
      {
        "statusCode": "403",
        "description": "Insufficient user permissions or API access is not turned on."
      },
      {
        "statusCode": "404",
        "description": "Bad request url."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/webhooks/monitor_fields",
    "method": "listMonitorFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get monitor fields",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "The user API key is invalid."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/webhooks/{id}/log",
    "method": "getWebhookLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get Webhook Logs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The webhook ID to get logs about.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}",
    "method": "getEmployeeData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get Employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "{fields} is a comma separated list of values taken from the official list of field names. ",
        "example": "FIELDS",
        "default": "firstName,lastName"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).",
        "example": "ID",
        "default": 0
      },
      {
        "name": "onlyCurrent",
        "schema": "boolean",
        "required": false,
        "description": "Setting to false will return future dated values from history table fields.",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the requested employee."
      },
      {
        "statusCode": "404",
        "description": "if the employee does not exist."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}",
    "method": "updateEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update Employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an employee ID.",
        "example": "ID"
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employee updated successfully."
      },
      {
        "statusCode": "400",
        "description": "Provided JSON is bad or user is missing required fields."
      },
      {
        "statusCode": "403",
        "description": "If the user doesn't have perms to see the employee or the user doesn't have perms to update ANY of the requested fields."
      },
      {
        "statusCode": "404",
        "description": "If the employee to be updated doesn't exist."
      },
      {
        "statusCode": "409",
        "description": "If an employee field was given an invalid value"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees",
    "method": "createNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Add Employee",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Additionally, an HTTP Location: header that points to the new API URL for the new employee will be returned."
      },
      {
        "statusCode": "400",
        "description": "If the posted XML or JSON is invalid or the minimum fields are not provided."
      },
      {
        "statusCode": "403",
        "description": "If the API user does not have permission to add an employee."
      },
      {
        "statusCode": "409",
        "description": "If an employee field was given an invalid value."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{id}/files/view",
    "method": "listFilesAndCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Files",
    "typeScriptTag": "employeeFiles",
    "description": "List employee files and categories",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).",
        "example": "ID",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employee file and category list"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the requested employee or the employee's files."
      },
      {
        "statusCode": "404",
        "description": "if no files are found for this employee."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/files/view",
    "method": "listFilesAndCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Files",
    "typeScriptTag": "companyFiles",
    "description": "List company files and categories",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company files and category list"
      },
      {
        "statusCode": "403",
        "description": "if the API user does not have permission to see the company files."
      },
      {
        "statusCode": "404",
        "description": "if no files or categories are found."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/meta/fields",
    "method": "getFieldList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Information",
    "typeScriptTag": "accountInformation",
    "description": "Get a list of fields",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "All fields available in BambooHR."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/meta/tables",
    "method": "discoverTableFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Information",
    "typeScriptTag": "accountInformation",
    "description": "Get a list of tabular fields",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "All table fields available in BambooHR"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/meta/lists",
    "method": "getListFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Information",
    "typeScriptTag": "accountInformation",
    "description": "Get details for list fields",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "All details for list fields available in BambooHR"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/meta/users",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Information",
    "typeScriptTag": "accountInformation",
    "description": "Get a List of Users",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/meta/time_off/types",
    "method": "getTimeOffTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Get Time Off Types",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "mode",
        "schema": "string",
        "required": false,
        "description": "set to 'request' to get a list of all time off types with which this user can create a time off request. The default is to return the list of time off types the user has permissions on. This distinction is important, as employees can request time off for types that they don't have permission to view balances and requests for."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Time off types"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/meta/time_off/policies",
    "method": "getPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Get Time Off Policies",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/v1/time_off/requests",
    "method": "getTimeOffRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Get Time Off Requests",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "A particular request ID to limit the response to."
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "Limit to requests that the user has a particular level of access to. Legal values are: \"view\" or \"approve\". Defaults to view."
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": "A particular employee ID to limit the response to."
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD. Only show time off that occurs on/after the specified start date.",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "YYYY-MM-DD. Only show time off that occurs on/before the specified end date.",
        "example": "END"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of time off types IDs to include limit the response to. If omitted, requests of all types are included."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of request status values to include. If omitted, requests of all status values are included. Legal values are \"approved\", \"denied\", \"superceded\", \"requested\", \"canceled\"."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Malformed request"
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{employeeId}/time_off/history",
    "method": "addTimeOffHistoryItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Add a Time Off History Item For Time Off Request",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the employee.",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "timeOffRequestId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The history item has been created."
      },
      {
        "statusCode": "400",
        "description": "For empty or malformed JSON, an invalid date format, or an invalid time off request."
      },
      {
        "statusCode": "403",
        "description": "Invalid permissions to perform this action."
      },
      {
        "statusCode": "409",
        "description": "If the time off request already has a history item."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/employees/{employeeId}/time_off/balance_adjustment",
    "method": "balanceAdjustmentPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Adjust Time Off Balance",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "employeeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the employee.",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "timeOffTypeId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The balance adjustment has been created."
      },
      {
        "statusCode": "400",
        "description": "For empty or malformed JSON, an invalid date format, or an invalid time off type."
      },
      {
        "statusCode": "403",
        "description": "Invalid permissions to perform this action."
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/time_off/whos_out",
    "method": "getWhosOutList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Get a list of Who's Out",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "A date in the form YYYY-MM-DD - defaults to the current date."
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "A date in the form YYYY-MM-DD - defaults to 14 days from the start date."
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
    "url": "/{companyDomain}/v1/webhooks",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Gets as list of webhooks for the user API key.",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "The user API key is invalid."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/webhooks",
    "method": "addNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Add Webhook",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My new webhook"
      },
      {
        "name": "monitorFields",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "firstName",
          "lastName"
        ]
      },
      {
        "name": "postFields",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "firstName": "Name",
          "lastName": "Surname",
          "dateOfBirth": "DOB"
        }
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCompanyDomain",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
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
        "description": "The user API key is invalid."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/webhooks/{id}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is an webhook ID that is associated with the User API key.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhook was deleted"
      },
      {
        "statusCode": "401",
        "description": "The user API key is invalid."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/webhooks/{id}",
    "method": "getUserWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get Webhook",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The webhook ID to display details about.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "The user API key is invalid."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/{companyDomain}/v1/webhooks/{id}",
    "method": "updateWebhookById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update Webhook",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "{id} is a webhook ID.",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My new webhook"
      },
      {
        "name": "monitorFields",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "firstName",
          "lastName"
        ]
      },
      {
        "name": "postFields",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "firstName": "Name",
          "lastName": "Surname",
          "dateOfBirth": "DOB"
        }
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCompanyDomain",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
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
        "description": "The user API key is invalid."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="BambooHR API"
      apiBaseUrl="https://api.bamboohr.com/api/gateway.php"
      apiVersion="v1"
      endpoints={128}
      sdkMethods={164}
      schemas={135}
      parameters={679}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bamboohr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bamboohr/openapi.yaml"
      developerDocumentation="documentation.bamboohr.com/"
    />
  );
}
  