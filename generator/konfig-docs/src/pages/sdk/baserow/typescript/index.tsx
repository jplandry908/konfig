import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BaserowTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="baserow-typescript-sdk"
      metaDescription={`Baserow is the most flexible platform for creating databases and applications—without coding.

Get all the power of a database with the familiarity of a spreadsheet. Organize your data and build applications faster, with greater security and at any scale. Only Baserow has self-hosting, real-time collaboration, APIs, plugins, and no vendor lock-in. 

Create Kanban boards, calendars, forms, integrate with other tools, and more to provide the best representation of your data. Today, thousands of customers around the world use our powerful and easy-to-use tools as their CRM, project management systems, or to power websites.

We live by open source principles: our code, product, and community are all open for everyone to join and contribute to. We're looking for passionate individuals to join us: baserow.io/jobs`}
      company="Baserow"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baserow/logo.png"
      companyKebabCase="baserow"
      clientNameCamelCase="baserow"
      homepage="baserow.io"
      lastUpdated={new Date("2024-03-29T20:52:35.791Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baserow/favicon.png"
      contactUrl="https://baserow.io/contact"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baserow/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["database","no_code"]}
      methods={[
  {
    "url": "/api/database/view/{view_id}/premium",
    "method": "setPremiumAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Sets view attributes only available for premium users.",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Sets show_logo of this view.",
        "example": 0
      },
      {
        "name": "show_logo",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user-source/{user_source_id}/force-token-auth",
    "method": "forceTokenAuth",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Force authenticates an existing user based on their ID. If successful, an access token and a refresh token will be returned.",
    "parameters": [
      {
        "name": "userSourceId",
        "schema": "integer",
        "required": true,
        "description": "The user source to use to authenticate the user.",
        "example": 0
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
    "url": "/api/user-source/{user_source_id}/token-auth",
    "method": "authenticateUserWithToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Authenticates an existing user against a user source based on their credentials. If successful, an access token and a refresh token will be returned.",
    "parameters": [
      {
        "name": "userSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user_source to move",
        "example": 0
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "access",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESS"
      },
      {
        "name": "refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH"
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
    "url": "/api/_health/email",
    "method": "tester",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Sends a test email to the provided email address. Useful for testing Baserow's email configuration as errors are clearly returned.",
    "parameters": [
      {
        "name": "target_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_EMAIL"
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
    "url": "/api/_health/full",
    "method": "runFullCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Runs a full health check testing as many services and systems as possible. These health checks can be expensive operations such as writing files to storage etc.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/admin/audit-log",
    "method": "listEntriesForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "Lists all audit log entries for the given workspace id.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "actionType",
        "schema": "string",
        "description": "Filter the audit log entries by action type."
      },
      {
        "name": "fromTimestamp",
        "schema": "string",
        "description": "The ISO timestamp to filter the audit log entries from."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many audit log entries should be returned per page."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `user, workspace, type, timestamp, ip_address`. For example `sorts=-user,-workspace` will sort the audit log entries first by descending user and then ascending workspace. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error."
      },
      {
        "name": "toTimestamp",
        "schema": "string",
        "description": "The ISO timestamp to filter the audit log entries to."
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "Filter the audit log entries by user id."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "description": "Filter the audit log entries by workspace id. This filter works only for the admin audit log."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/audit-log/action-types",
    "method": "listActionTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "List all distinct action types related to an audit log entry.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only action_types with name that match the query will be returned."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "description": "Return action types related to the workspace."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/audit-log/export",
    "method": "createExportJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "Creates a job to export the filtered audit log to a CSV file.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "export_charset",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "csv_column_separator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "csv_first_row_header",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "filter_user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_workspace_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_action_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_from_timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_to_timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exclude_columns",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "When mixed in to a model serializer for an ExportJob this will add an url field\nwith the actual usable url of the export job's file (if it has one)."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/admin/audit-log/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "List all users that have performed an action in the audit log.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only users with email that match the query will be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many users should be returned per page."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "description": "Return users belonging to the given workspace_id."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/audit-log/workspaces",
    "method": "listDistinctWorkspaceNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "List all distinct workspace names related to an audit log entry.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only workspaces with name that match the query will be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many workspaces should be returned per page."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/auth-provider",
    "method": "listProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "List all the available authentication providers.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/admin/auth-provider",
    "method": "registerAuthProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Creates a new authentication provider. This can be used to enable authentication with a third party service like Google or Facebook.",
    "parameters": [],
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
    "url": "/api/admin/auth-provider/{auth_provider_id}",
    "method": "deleteAuthProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Delete an authentication provider.",
    "parameters": [
      {
        "name": "authProviderId",
        "schema": "integer",
        "required": true,
        "description": "The authentication provider id to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/admin/auth-provider/{auth_provider_id}",
    "method": "getAuthProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Get an authentication provider.",
    "parameters": [
      {
        "name": "authProviderId",
        "schema": "integer",
        "required": true,
        "description": "The authentication provider id to fetch.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/admin/auth-provider/{auth_provider_id}",
    "method": "updateAuthProvider",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Updates a new authentication provider. This can be used to enable authentication with a third party service like Google or Facebook.",
    "parameters": [
      {
        "name": "authProviderId",
        "schema": "integer",
        "required": true,
        "description": "The authentication provider id to update.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/admin/dashboard",
    "method": "dashboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Returns the new and active users for the last 24 hours, 7 days and 30 days. The `previous_` values are the values of the period before, so for example `previous_new_users_last_24_hours` are the new users that signed up from 48 to 24 hours ago. It can be used to calculate an increase or decrease in the amount of signups. A list of the new and active users for every day for the last 30 days is also included.\n\nThis is a **premium** feature.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/groups",
    "method": "getAllGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [admin_list_workspaces](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Returns all groups with detailed information on each group, if the requesting user is staff.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only groups with id or name that match the query will be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many groups should be returned per page."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `id, name, application_count, created_on, row_count, storage_usage`. For example `sorts=-id,-name` will sort the groups first by descending id and then ascending name. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/groups/{group_id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [admin_delete_workspace](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Deletes the specified group and the applications inside that group, if the requesting user is staff. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The id of the group to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/users",
    "method": "getUsersDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Returns all users with detailed information on each user, if the requesting user is staff. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only users with username that match the query will be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many users should be returned per page."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `id, is_active, name, username, date_joined, last_login`. For example `sorts=-id,-is_active` will sort the users first by descending id and then ascending is_active. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Creates and returns a new user if the requesting user is staff. This works even if new signups are disabled. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_staff",
        "schema": "boolean",
        "required": false,
        "description": ""
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
        "description": "Serializes the safe user attributes to expose for a response back to the user."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/admin/users/{user_id}",
    "method": "deleteUserPremium",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Deletes the specified user, if the requesting user has admin permissions. You cannot delete yourself. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/users/{user_id}",
    "method": "updateUserAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Updates specified user attributes and returns the updated user if the requesting user is staff. You cannot update yourself to no longer be an admin or active. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user to edit",
        "example": 0
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_staff",
        "schema": "boolean",
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
        "description": "Serializes the safe user attributes to expose for a response back to the user."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/users/impersonate",
    "method": "impersonateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "This endpoint allows staff to impersonate another user by requesting a JWT token and user object. The requesting user must have staff access in order to do this. It's not possible to impersonate a superuser or staff.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "user",
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
      }
    ]
  },
  {
    "url": "/api/admin/workspaces",
    "method": "getWorkspaceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Returns all workspaces with detailed information on each workspace, if the requesting user is staff.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only workspaces with id or name that match the query will be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many workspaces should be returned per page."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `id, name, application_count, created_on, row_count, storage_usage`. For example `sorts=-id,-name` will sort the workspaces first by descending id and then ascending name. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/admin/workspaces/{workspace_id}",
    "method": "deleteWorkspaceAndApplications",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Deletes the specified workspace and the applications inside that workspace, if the requesting user is staff. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the workspace to delete",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/application/{application_id}/integrations",
    "method": "listApplicationIntegrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Lists all the integrations of the application related to the provided parameter if the user has access to the related application's workspace. If the workspace is related to a template, then this endpoint will be publicly accessible.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the integrations of the application related to the provided Id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{application_id}/integrations",
    "method": "createNewIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Creates a new integration",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Creates an integration for the application related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{application_id}/list-user-source-users",
    "method": "listAvailableUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "List per user sources the first 5 users available.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "The application we want the users for.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response of the list user source users endpoint."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{application_id}/user-sources",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Lists all the user_sources of the application related to the provided parameter if the user has access to the related application's workspace. If the workspace is related to a template, then this endpoint will be publicly accessible.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the user_sources of the application related to the provided Id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/application/{application_id}/user-sources",
    "method": "createNewUserSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Creates a new user_source",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Creates an user_source for the application related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications",
    "method": "listUserApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Lists all the applications that the authorized user has access to. The properties that belong to the application can differ per type. An application always belongs to a single workspace. All the applications of the workspaces that the user has access to are going to be listed here.",
    "parameters": [],
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
    "url": "/api/applications/{application_id}",
    "method": "application",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Deletes an application if the authorized user is in the application's workspace. All the related children are also going to be deleted. For example in case of a database application all the underlying tables, fields, views and rows are going to be deleted.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the application related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/{application_id}",
    "method": "getApplicationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Returns the requested application if the authorized user is in the application's workspace. The properties that belong to the application can differ per type.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Returns the application related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/{application_id}",
    "method": "application",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Updates the existing application related to the provided `application_id` param if the authorized user is in the application's workspace. It is not possible to change the type, but properties like the name can be changed.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Updates the application related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/{application_id}/duplicate/async",
    "method": "duplicateAsync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Duplicate an application if the authorized user is in the application's workspace. All the related children are also going to be duplicated. For example in case of a database application all the underlying tables, fields, views and rows are going to be duplicated.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "The id of the application to duplicate.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/group/{group_id}",
    "method": "listGroupApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_list_applications](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Lists all the applications of the group related to the provided `group_id` parameter if the authorized user is in that group. If the group is related to a template, then this endpoint will be publicly accessible. The properties that belong to the application can differ per type. An application always belongs to a single group.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Returns only applications that are in the group related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/group/{group_id}",
    "method": "createGroupApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_create_application](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Creates a new application based on the provided type. The newly created application is going to be added to the group related to the provided `group_id` parameter. If the authorized user does not belong to the group an error will be returned.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Creates an application for the group related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/group/{group_id}/order",
    "method": "changeOrderOfGroupApplications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_order_applications](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Changes the order of the provided application ids to the matching position that the id has in the list. If the authorized user does not belong to the group it will be ignored. The order of the not provided tables will be set to `0`.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Updates the order of the applications in the group related to the provided value.",
        "example": 0
      },
      {
        "name": "application_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/workspace/{workspace_id}",
    "method": "listUserApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Lists all the applications of the workspace related to the provided `workspace_id` parameter if the authorized user is in that workspace. If theworkspace is related to a template, then this endpoint will be publicly accessible. The properties that belong to the application can differ per type. An application always belongs to a single workspace.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Returns only applications that are in the workspace related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/workspace/{workspace_id}",
    "method": "createApplicationInWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Creates a new application based on the provided type. The newly created application is going to be added to the workspace related to the provided `workspace_id` parameter. If the authorized user does not belong to the workspace an error will be returned.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Creates an application for the workspace related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/applications/workspace/{workspace_id}/order",
    "method": "changeApplicationOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Changes the order of the provided application ids to the matching position that the id has in the list. If the authorized user does not belong to the workspace it will be ignored. The order of the not provided tables will be set to `0`.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Updates the order of the applications in the workspace related to the provided value.",
        "example": 0
      },
      {
        "name": "application_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/audit-log",
    "method": "listEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "Lists all audit log entries for the given workspace id.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "actionType",
        "schema": "string",
        "description": "Filter the audit log entries by action type."
      },
      {
        "name": "fromTimestamp",
        "schema": "string",
        "description": "The ISO timestamp to filter the audit log entries from."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many audit log entries should be returned per page."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `user, workspace, type, timestamp, ip_address`. For example `sorts=-user,-workspace` will sort the audit log entries first by descending user and then ascending workspace. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error."
      },
      {
        "name": "toTimestamp",
        "schema": "string",
        "description": "The ISO timestamp to filter the audit log entries to."
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "Filter the audit log entries by user id."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "description": "Filter the audit log entries by workspace id. This filter works only for the admin audit log."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/audit-log/action-types",
    "method": "listActionTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "List all distinct action types related to an audit log entry.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only action_types with name that match the query will be returned."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "description": "Return action types related to the workspace."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/audit-log/export",
    "method": "exportJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "Creates a job to export the filtered audit log to a CSV file.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "export_charset",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "csv_column_separator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "csv_first_row_header",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "filter_user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_workspace_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_action_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_from_timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter_to_timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exclude_columns",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "When mixed in to a model serializer for an ExportJob this will add an url field\nwith the actual usable url of the export job's file (if it has one)."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/audit-log/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "List all users that have performed an action in the audit log.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only users with email that match the query will be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many users should be returned per page."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "description": "Return users belonging to the given workspace_id."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/audit-log/workspaces",
    "method": "listDistinctWorkspaceNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "List all distinct workspace names related to an audit log entry.\n\nThis is a **enterprise** feature.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only workspaces with name that match the query will be returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many workspaces should be returned per page."
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
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/auth-provider/login-options",
    "method": "listLoginOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Lists the available login options for the configured authentication providers.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Unspecified response body"
      }
    ]
  },
  {
    "url": "/api/builder/{builder_id}/domains",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder domains",
    "typeScriptTag": "builderDomains",
    "description": "Gets all the domains of a builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "builderId",
        "schema": "integer",
        "required": true,
        "description": "Gets all the domains for the specified builder",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/{builder_id}/domains",
    "method": "createNewDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder domains",
    "typeScriptTag": "builderDomains",
    "description": "Creates a new domain for an application builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "builderId",
        "schema": "integer",
        "required": true,
        "description": "Creates a domain for the application builder related tothe provided value",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/{builder_id}/domains/order",
    "method": "applyOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder domains",
    "typeScriptTag": "builderDomains",
    "description": "Apply a new order to the domains of a builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "builderId",
        "schema": "integer",
        "required": true,
        "description": "The builder the domain belongs to",
        "example": 0
      },
      {
        "name": "domain_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/{builder_id}/pages",
    "method": "createNewPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder pages",
    "typeScriptTag": "builderPages",
    "description": "Creates a new page for an application builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "builderId",
        "schema": "integer",
        "required": true,
        "description": "Creates a page for the application builder related to the provided value.",
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
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      },
      {
        "name": "path_params",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "👉 Mind to update the\nbaserow.contrib.builder.api.domains.serializer.PublicPageSerializer\nwhen you update this one."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/{builder_id}/pages/order",
    "method": "applyOrderToPages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder pages",
    "typeScriptTag": "builderPages",
    "description": "Apply a new order to the pages of a builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "builderId",
        "schema": "integer",
        "required": true,
        "description": "The builder the page belongs to",
        "example": 0
      },
      {
        "name": "page_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/{builder_id}/theme",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder theme",
    "typeScriptTag": "builderTheme",
    "description": "Updates the theme properties for the provided id.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "builderId",
        "schema": "integer",
        "required": true,
        "description": "Updates the theme for the application builder related to the provided value.",
        "example": 0
      },
      {
        "name": "primary_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secondary_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "border_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "heading_1_font_size",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "heading_1_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "heading_2_font_size",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "heading_2_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "heading_3_font_size",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "heading_3_color",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/data-source/{data_source_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Deletes the data_source related by the given id.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "dataSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the data_source",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/data-source/{data_source_id}",
    "method": "updateExistingDataSource",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Updates an existing builder data_source.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "dataSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the data_source",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/data-source/{data_source_id}/dispatch",
    "method": "dispatchServiceResult",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Dispatches the service of the related data_source and returns the result.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "dataSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the data_source you want to call the dispatch for",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/data_source/{data_source_id}/move",
    "method": "moveDataSource",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Moves the data_source in the page before another data_source or at the end of the page if no before data_source is given. The data_sources must belong to the same page.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "dataSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the data_source to move",
        "example": 0
      },
      {
        "name": "before_id",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/{domain_id}",
    "method": "removeExistingDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Builder domains",
    "typeScriptTag": "builderDomains",
    "description": "Deletes an existing domain of an application builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The id of the domain",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/{domain_id}",
    "method": "updateExistingDomain",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder domains",
    "typeScriptTag": "builderDomains",
    "description": "Updates an existing domain of an application builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The id of the domain",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain_name",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/{domain_id}/publish/async",
    "method": "startPublishJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder domains",
    "typeScriptTag": "builderDomains",
    "description": "This endpoint starts an asynchronous job to publish the builder. The job clones the current version of the given builder and publish it for the given domain.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "domainId",
        "schema": "integer",
        "required": true,
        "description": "The builder application id the user wants to publish.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/ask-public-domain-exists",
    "method": "checkDomainExists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder domains",
    "typeScriptTag": "builderDomains",
    "description": "This endpoint can be used to check whether a domain exists for SSL certificate purposes. It's compatible with the Caddy on_demand TLS as described here: https://caddyserver.com/docs/json/apps/tls/automation/on_demand/ask/. It will respond with a 200 status code if it exists or a 404 if it doesn't exist.",
    "parameters": [
      {
        "name": "domain",
        "schema": "integer",
        "description": "The domain name for which"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      },
      {
        "statusCode": "404",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/builder/domains/published/by_id/{builder_id}",
    "method": "serializedVersionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder public",
    "typeScriptTag": "builderPublic",
    "description": "Returns the public serialized version of the builder and its pages for the given builder id.",
    "parameters": [
      {
        "name": "builderId",
        "schema": "integer",
        "required": true,
        "description": "Returns the builder related to the provided Id and its pages.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A public version of the builder serializer with less data to prevent data leaks."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/published/by_name/{domain_name}",
    "method": "serializedVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder public",
    "typeScriptTag": "builderPublic",
    "description": "Returns the public serialized version of the builder for the given domain name and its pages .",
    "parameters": [
      {
        "name": "domainName",
        "schema": "string",
        "required": true,
        "description": "Returns the builder published for the given domain name.",
        "example": "DOMAIN_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A public version of the builder serializer with less data to prevent data leaks."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/published/page/{page_id}/data_sources",
    "method": "listPageDataSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Lists all the data_sources of the page related to the provided parameter if the builder is public.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the data_sources of the page related to the provided Id if the related builder is public.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/published/page/{page_id}/elements",
    "method": "getPageElements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder elements",
    "typeScriptTag": "builderElements",
    "description": "Lists all the elements of the page related to the provided parameter. If the user is Anonymous, the page must belong to a published builder instance to being accessible.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Returns the elements of the page related to the provided Id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/domains/published/page/{page_id}/workflow_actions",
    "method": "listPageWorkflowActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder workflow actions",
    "typeScriptTag": "builderWorkflowActions",
    "description": "Lists all the workflow actions with their public accessible data. Some configuration might be omitted for security reasons such as passwords or PII.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the public workflow actions of the page related to the provided Id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/element/{element_id}",
    "method": "removeElementById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Builder elements",
    "typeScriptTag": "builderElements",
    "description": "Deletes the element related by the given id.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "The id of the element",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/element/{element_id}",
    "method": "updateExistingElement",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder elements",
    "typeScriptTag": "builderElements",
    "description": "Updates an existing builder element.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "The id of the element",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/element/{element_id}/duplicate",
    "method": "duplicateElementChildren",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder elements",
    "typeScriptTag": "builderElements",
    "description": "Duplicates an element and all of the elements children and the associated workflow actions as well.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "The id of the element to duplicate",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/element/{element_id}/move",
    "method": "moveElement",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder elements",
    "typeScriptTag": "builderElements",
    "description": "Moves the element in the page before another element or at the end of the page if no before element is given. The elements must belong to the same page.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "elementId",
        "schema": "integer",
        "required": true,
        "description": "The id of the element to move",
        "example": 0
      },
      {
        "name": "before_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parent_element_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "place_in_container",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/data-sources",
    "method": "listPageDataSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Lists all the data_sources of the page related to the provided parameter if the user has access to the related builder's workspace. If the workspace is related to a template, then this endpoint will be publicly accessible.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the data_sources of the page related to the provided Id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/data-sources",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Creates a new builder data_source",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Creates a data_source for the builder page related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/dispatch-data-sources",
    "method": "dispatchPageDataSources",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder data sources",
    "typeScriptTag": "builderDataSources",
    "description": "Dispatches the service of the related page data_sources",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "The page we want to dispatch the data source for.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/elements",
    "method": "getPageElements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder elements",
    "typeScriptTag": "builderElements",
    "description": "Lists all the elements of the page related to the provided parameter if the user has access to the related builder's workspace. If the workspace is related to a template, then this endpoint will be publicly accessible.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the elements of the page related to the provided Id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/elements",
    "method": "createNewElement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder elements",
    "typeScriptTag": "builderElements",
    "description": "Creates a new builder element",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Creates an element for the builder page related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/workflow_actions",
    "method": "listPageWorkflowActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Builder workflow actions",
    "typeScriptTag": "builderWorkflowActions",
    "description": "Lists all the workflow actions of the page related to the provided parameter if the user has access to the related builder's workspace. If the workspace is related to a template, then this endpoint will be publicly accessible.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the workflow actions of the page related to the provided Id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/workflow_actions",
    "method": "createNewAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder workflow actions",
    "typeScriptTag": "builderWorkflowActions",
    "description": "Creates a new builder workflow action",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "Creates a workflow action for the builder page related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/page/{page_id}/workflow_actions/order",
    "method": "applyNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder workflow actions",
    "typeScriptTag": "builderWorkflowActions",
    "description": "Apply a new order to the workflow actions of a page",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "The page the workflow actions belong to",
        "example": 0
      },
      {
        "name": "workflow_action_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "element_id",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/pages/{page_id}",
    "method": "deletePage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Builder pages",
    "typeScriptTag": "builderPages",
    "description": "Deletes an existing page of an application builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "The id of the page",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/pages/{page_id}",
    "method": "updateExistingPage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder pages",
    "typeScriptTag": "builderPages",
    "description": "Updates an existing page of an application builder",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "The id of the page",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "path",
        "schema": "string",
        "description": ""
      },
      {
        "name": "path_params",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "👉 Mind to update the\nbaserow.contrib.builder.api.domains.serializer.PublicPageSerializer\nwhen you update this one."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/pages/{page_id}/duplicate/async",
    "method": "startDuplicationJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder pages",
    "typeScriptTag": "builderPages",
    "description": "Start a job to duplicate the page with the provided `page_id` parameter if the authorized user has access to the builder's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "pageId",
        "schema": "integer",
        "required": true,
        "description": "The page to duplicate.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/workflow_action/{workflow_action_id}",
    "method": "deleteWorkflowActionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Builder workflow actions",
    "typeScriptTag": "builderWorkflowActions",
    "description": "Deletes the workflow action related by the given id.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "workflowActionId",
        "schema": "integer",
        "required": true,
        "description": "The id of the workflow action",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/workflow_action/{workflow_action_id}",
    "method": "updateExistingAction",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Builder workflow actions",
    "typeScriptTag": "builderWorkflowActions",
    "description": "Updates an existing builder workflow action.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "workflowActionId",
        "schema": "integer",
        "required": true,
        "description": "The id of the workflow action",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/builder/workflow_action/{workflow_action_id}/dispatch",
    "method": "dispatchServiceResult",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Builder workflow actions",
    "typeScriptTag": "builderWorkflowActions",
    "description": "Dispatches the service of the related workflow_action and returns the result.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "workflowActionId",
        "schema": "integer",
        "required": true,
        "description": "The id of the workflow_action you want to call the dispatch for.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/export/{job_id}",
    "method": "exportJobDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table export",
    "typeScriptTag": "databaseTableExport",
    "description": "Returns information such as export progress and state or the url of the exported file for the specified export job, only if the requesting user has access.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "The job id to lookup information about.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "When mixed in to a model serializer for an ExportJob this will add an url field\nwith the actual usable url of the export job's file (if it has one)."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/export/table/{table_id}",
    "method": "table",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table export",
    "typeScriptTag": "databaseTableExport",
    "description": "Creates and starts a new export job for a table given some exporter options. Returns an error if the requesting user does not have permissionsto view the table.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table id to create and start an export job for",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "When mixed in to a model serializer for an ExportJob this will add an url field\nwith the actual usable url of the export job's file (if it has one)."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/fields/{field_id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Deletes the existing field if the authorized user has access to the related database's workspace. Note that all the related data to that field is also deleted. Primary fields cannot be deleted because their value represents the row. If deleting the field causes other fields to change then the specificinstances of those fields will be included in the related fields response key.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the field related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/fields/{field_id}",
    "method": "getFieldProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Returns the existing field if the authorized user has access to the related database's workspace. Depending on the type different properties could be returned.",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "Returns the field related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/fields/{field_id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Updates the existing field if the authorized user has access to the related database's workspace. The type can also be changed and depending on that type, different additional properties can optionally be set. If you change the field type it could happen that the data conversion fails, in that case the `ERROR_CANNOT_CHANGE_FIELD_TYPE` is returned, but this rarely happens. If a data value cannot be converted it is set to `null` so data might go lost.If updated the field causes other fields to change then the specificinstances of those fields will be included in the related fields response key.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "Updates the field related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/fields/{field_id}/duplicate/async",
    "method": "duplicateAsync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Duplicates the table with the provided `table_id` parameter if the authorized user has access to the database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "The field to duplicate.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/fields/{field_id}/unique_row_values",
    "method": "getUniqueRowValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Returns a list of all the unique row values for an existing field, sorted in order of frequency.",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "Returns the values related to the provided field.",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many values should be returned."
      },
      {
        "name": "splitCommaSeparated",
        "schema": "boolean",
        "description": "Indicates whether the original column values must be splitted by comma."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/fields/table/{table_id}",
    "method": "getTableFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Lists all the fields of the table related to the provided parameter if the user has access to the related database's workspace. If the workspace is related to a template, then this endpoint will be publicly accessible. A table consists of fields and each field can have a different type. Each type can have different properties. A field is comparable with a regular table's column.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Returns only the fields of the table related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/fields/table/{table_id}",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Creates a new field for the table related to the provided `table_id` parameter if the authorized user has access to the related database's workspace. Depending on the type, different properties can optionally be set.If creating the field causes other fields to change then the specificinstances of those fields will be included in the related fields response key.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Creates a new field for the provided table related to the value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/formula/{table_id}/type",
    "method": "calculateFormulaType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table fields",
    "typeScriptTag": "databaseTableFields",
    "description": "Calculates and returns the type of the specified formula value. Does not change the state of the field in any way.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table id of the formula field to type.",
        "example": 0
      },
      {
        "name": "formula",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORMULA"
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
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/names",
    "method": "getNamesOfRow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Returns the names of the given row of the given tables. The nameof a row is the primary field value for this row. The result can be usedfor example, when you want to display the name of a linked row from another table.",
    "parameters": [
      {
        "name": "table_{id}",
        "schema": "string",
        "description": "A list of comma separated row ids to query from the table with id {id}. For example, if you want the name of row `42` and `43` from table `28` this parameter will be `table__28=42,43`. You can specify multiple rows for different tables but every tables must be in the same database. You need at least read permission on all specified tables."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}",
    "method": "listTableRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Lists all the rows of the table related to the provided parameter if the user has access to the related database's workspace. The response is paginated by a page/size style. It is also possible to provide an optional search query, only rows where the data matches the search query are going to be returned then. The properties of the returned rows depends on which fields the table has. For a complete overview of fields use the **list_database_table_fields** endpoint to list them all. In the example all field types are listed, but normally the number in field_{id} key is going to be the id of the field. Or if the GET parameter `user_field_names` is provided then the keys will be the name of the field. The value is what the user has provided and the format of it depends on the fields type.",
    "parameters": [
      {
        "name": "exclude",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the exclude query parameter. If you for example provide the following GET parameter `exclude=field_1,field_2` then the fields with id `1` and id `2` are going to be excluded from the selection and response. If the `user_field_names` parameter is provided then instead exclude should be a comma separated list of the actual field names. For field names with commas you should surround the name with quotes like so: `exclude=My Field,\"Field With , \"`. A backslash can be used to escape field names which contain double quotes like so: `exclude=My Field,Field with \\\"`."
      },
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the rows must match all the provided filters.\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nPlease note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`. The `field` value must be the ID of the field to filter on, or the name of the field if `user_field_names` is true.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the include query parameter. If you for example provide the following GET parameter `include=field_1,field_2` then only the fields withid `1` and id `2` are going to be selected and included in the response. If the `user_field_names` parameter is provided then instead include should be a comma separated list of the actual field names. For field names with commas you should surround the name with quotes like so: `include=My Field,\"Field With , \"`. A backslash can be used to escape field names which contain double quotes like so: `include=My Field,Field with \\\"`."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Optionally the rows can be ordered by provided field ids separated by comma. By default a field is ordered in ascending (https://baserow.io/docs/index order, but by prepending the field with a '-' it can be ordered descending (https://baserow.io/docs/index. If the `user_field_names` parameter is provided then instead order_by should be a comma separated list of the actual field names. For field names with commas you should surround the name with quotes like so: `order_by=My Field,\"Field With , \"`. A backslash can be used to escape field names which contain double quotes like so: `order_by=My Field,Field with \\\"`."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page of rows should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only rows with data that matches the search query are going to be returned."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many rows should be returned per page."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Returns the rows of the table related to the provided value.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided the returned json will use the user specified field names instead of internal Baserow field names (field_123 etc). "
      },
      {
        "name": "viewId",
        "schema": "integer",
        "description": "Includes all the filters and sorts of the provided view."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}",
    "method": "createRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Creates a new row in the table if the user has access to the related table's workspace. The accepted body fields are depending on the fields that the table has. For a complete overview of fields use the **list_database_table_fields** to list them all. None of the fields are required, if they are not provided the value is going to be `null` or `false` or some default value is that is set. If you want to add a value for the field with for example id `10`, the key must be named `field_10`. Or instead if the `user_field_names` GET param is provided the key must be the name of the field. Of course multiple fields can be provided in one request. In the examples below you will find all the different field types, the numbers/ids in the example are just there for example purposes, the field_ID must be replaced with the actual id of the field or the name of the field if `user_field_names` is provided.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "before",
        "schema": "integer",
        "description": "If provided then the newly created row will be positioned before the row with the provided id."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Creates a row in the table related to the provided value.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided this endpoint will expect and return the user specified field names instead of internal Baserow field names (field_123 etc)."
      },
      {
        "name": "field_1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_6",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "field_7",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "field_8",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_13",
        "schema": "number",
        "description": ""
      },
      {
        "name": "field_14",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_15",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_16",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "field_17",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_18",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_23",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_26",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}/{row_id}",
    "method": "deleteRow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Deletes an existing row in the table if the user has access to the table's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the row related to the value.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the row in the table related to the value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}/{row_id}",
    "method": "getRowByTableIdAndRowId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Fetches an existing row from the table if the user has access to the related table's workspace. The properties of the returned row depend on which fields the table has. For a complete overview of fields use the **list_database_table_fields** endpoint to list them all. In the example all field types are listed, but normally the number in field_{id} key is going to be the id of the field of the field. Or if the GET parameter `user_field_names` is provided then the keys will be the name of the field. The value is what the user has provided and the format of it depends on the fields type.",
    "parameters": [
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "Returns the row related the provided value.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Returns the row of the table related to the provided value.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided the returned json will use the user specified field names instead of internal Baserow field names (field_123 etc). "
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}/{row_id}",
    "method": "updateRow",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Updates an existing row in the table if the user has access to the related table's workspace. The accepted body fields are depending on the fields that the table has. For a complete overview of fields use the **list_database_table_fields** endpoint to list them all. None of the fields are required, if they are not provided the value is not going to be updated. When you want to update a value for the field with id `10`, the key must be named `field_10`. Or if the GET parameter `user_field_names` is provided the key of the field to update must be the name of the field. Multiple different fields to update can be provided in one request. In the examples below you will find all the different field types, the numbers/ids in the example are just there for example purposes, the field_ID must be replaced with the actual id of the field or the name of the field if `user_field_names` is provided.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "Updates the row related to the value.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Updates the row in the table related to the value.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided this endpoint will expect and return the user specified field names instead of internal Baserow field names (field_123 etc)."
      },
      {
        "name": "field_1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_6",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "field_7",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "field_8",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_13",
        "schema": "number",
        "description": ""
      },
      {
        "name": "field_14",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_15",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_16",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "field_17",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_18",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_23",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_26",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}/{row_id}/adjacent",
    "method": "getAdjacentRow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Fetches the adjacent row to a given row_id in the table with the given table_id. If the previous flag is set it will return the previous row, otherwise it will return the next row. You can specifya view_id and it will apply the filters and sorts of the provided view.",
    "parameters": [
      {
        "name": "previous",
        "schema": "boolean",
        "description": "A flag query parameter which if provided returns theprevious row to the specified row_id. If it's not setit will return the next row."
      },
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "Returns the row adjacent the provided value.",
        "example": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided, the adjacent row will be one that matchesthe search query."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Returns the row of the table related to the provided value.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided the returned json will use the user specified field names instead of internal Baserow field names (field_123 etc). "
      },
      {
        "name": "viewId",
        "schema": "integer",
        "description": "Applies the filters and sorts of the provided view."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}/{row_id}/history",
    "method": "getRowChangeHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Fetches the row change history of a given row_id in the table with the given table_id. The row change history is paginated and can be limited with the limit and offset query parameters.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of row change history entries to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset of the row change history entries to return."
      },
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "The id of the row to fetch the change history from.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The id of the table to fetch the row change history from.",
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
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}/{row_id}/move",
    "method": "moveRowTo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Moves the row related to given `row_id` parameter to another position. It is only possible to move the row before another existing row or to the end. If the `before_id` is provided then the row related to the `row_id` parameter is moved before that row. If the `before_id` parameter is not provided, then the row will be moved to the end.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "beforeId",
        "schema": "integer",
        "description": "Moves the row related to the given `row_id` before the row related to the provided value. If not provided, then the row will be moved to the end."
      },
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "Moves the row related to the value.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Moves the row in the table related to the value.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided the returned json will use the user specified field names instead of internal Baserow field names (field_123 etc). "
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/rows/table/{table_id}/batch",
    "method": "updateBatchRows",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Updates existing rows in the table if the user has access to the related table's workspace. The accepted body fields are depending on the fields that the table has. For a complete overview of fields use the **list_database_table_fields** endpoint to list them all. None of the fields are required, if they are not provided the value is not going to be updated. When you want to update a value for the field with id `10`, the key must be named `field_10`. Or if the GET parameter `user_field_names` is provided the key of the field to update must be the name of the field. Multiple different fields to update can be provided for each row. In the examples below you will find all the different field types, the numbers/ids in the example are just there for example purposes, the field_ID must be replaced with the actual id of the field or the name of the field if `user_field_names` is provided.\n\n **WARNING:** This endpoint doesn't yet work with row updated webhooks.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Updates the rows in the table.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided this endpoint will expect and return the user specified field names instead of internal Baserow field names (field_123 etc)."
      },
      {
        "name": "items",
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
    "url": "/api/database/rows/table/{table_id}/batch",
    "method": "createBatchRows",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Creates new rows in the table if the user has access to the related table's workspace. The accepted body fields are depending on the fields that the table has. For a complete overview of fields use the **list_database_table_fields** to list them all. None of the fields are required, if they are not provided the value is going to be `null` or `false` or some default value is that is set. If you want to add a value for the field with for example id `10`, the key must be named `field_10`. Or instead if the `user_field_names` GET param is provided the key must be the name of the field. Of course multiple fields can be provided in one request. In the examples below you will find all the different field types, the numbers/ids in the example are just there for example purposes, the field_ID must be replaced with the actual id of the field or the name of the field if `user_field_names` is provided.\n\n **WARNING:** This endpoint doesn't yet work with row created webhooks.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "before",
        "schema": "integer",
        "description": "If provided then the newly created rows will be positioned before the row with the provided id."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Creates the rows in the table.",
        "example": 0
      },
      {
        "name": "userFieldNames",
        "schema": "boolean",
        "description": "A flag query parameter which if provided this endpoint will expect and return the user specified field names instead of internal Baserow field names (field_123 etc)."
      },
      {
        "name": "items",
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
    "url": "/api/database/rows/table/{table_id}/batch-delete",
    "method": "batchDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Deletes existing rows in the table if the user has access to the table's workspace.\n\n **WARNING:**  This endpoint doesn't yet work with row deleted webhooks.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the rows in the table related to the value.",
        "example": 0
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/{table_id}",
    "method": "deleteTable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Deletes the existing table if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the table related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/{table_id}",
    "method": "getTable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Returns the requested table if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Returns the table related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/{table_id}",
    "method": "updateTable",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Updates the existing table if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Updates the table related to the provided value.",
        "example": 0
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
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/{table_id}/duplicate/async",
    "method": "duplicateAsyncJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Start a job to duplicate the table with the provided `table_id` parameter if the authorized user has access to the database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table to duplicate.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/{table_id}/import/async",
    "method": "importAsyncJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Import data in the specified table if the authorized user has access to the related database's workspace. This endpoint is asynchronous and return the created job to track the progress of the task.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Import data into the table related to the provided value.",
        "example": 0
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/database/{database_id}",
    "method": "listByDatabaseId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Lists all the tables that are in the database related to the `database_id` parameter if the user has access to the database's workspace. A table is exactly as the name suggests. It can hold multiple fields, each having their own type and multiple rows. They can be added via the **create_database_table_field** and **create_database_table_row** endpoints.",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "integer",
        "required": true,
        "description": "Returns only tables that are related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/database/{database_id}",
    "method": "createTable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Creates synchronously a new table for the database related to the provided `database_id` parameter if the authorized user has access to the database's workspace.\n\nAs an alternative you can use the `create_async_database_table` for better performances and importing bigger files.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "databaseId",
        "schema": "integer",
        "required": true,
        "description": "Creates a table for the database related to the provided value.",
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
        "name": "data",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "first_row_header",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/database/{database_id}/async",
    "method": "createTableJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Creates a job that creates a new table for the database related to the provided `database_id` parameter if the authorized user has access to the database's workspace. This endpoint is asynchronous and return the created job to track the progress of the task.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "databaseId",
        "schema": "integer",
        "required": true,
        "description": "Creates a table for the database related to the provided value.",
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
        "name": "data",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "first_row_header",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tables/database/{database_id}/order",
    "method": "updateTableOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database tables",
    "typeScriptTag": "databaseTables",
    "description": "Changes the order of the provided table ids to the matching position that the id has in the list. If the authorized user does not belong to the workspace it will be ignored. The order of the not provided tables will be set to `0`.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "databaseId",
        "schema": "integer",
        "required": true,
        "description": "Updates the order of the tables in the database related to the provided value.",
        "example": 0
      },
      {
        "name": "table_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tokens",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database tokens",
    "typeScriptTag": "databaseTokens",
    "description": "Lists all the database tokens that belong to the authorized user. A token can be used to create, read, update and delete rows in the tables of the token's workspace. It only works on the tables if the token has the correct permissions. The **Database table rows** endpoints can be used for these operations.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tokens",
    "method": "createNewToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database tokens",
    "typeScriptTag": "databaseTokens",
    "description": "Creates a new database token for a given workspace and for the authorized user.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "group",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUP"
      },
      {
        "name": "workspace",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A mixin that allows us to rename the `group` field to `workspace` when serializing."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tokens/{token_id}",
    "method": "deleteToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database tokens",
    "typeScriptTag": "databaseTokens",
    "description": "Deletes the existing database token if it is owned by the authorized user and ifthe user has access to the related workspace.",
    "parameters": [
      {
        "name": "tokenId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the database token related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tokens/{token_id}",
    "method": "getToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database tokens",
    "typeScriptTag": "databaseTokens",
    "description": "Returns the requested database token if it is owned by the authorized user andif the user has access to the related workspace.",
    "parameters": [
      {
        "name": "tokenId",
        "schema": "integer",
        "required": true,
        "description": "Returns the database token related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A mixin that allows us to rename the `group` field to `workspace` when serializing."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tokens/{token_id}",
    "method": "updateTokenOwnership",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database tokens",
    "typeScriptTag": "databaseTokens",
    "description": "Updates the existing database token if it is owned by the authorized user and ifthe user has access to the related workspace.",
    "parameters": [
      {
        "name": "tokenId",
        "schema": "integer",
        "required": true,
        "description": "Updates the database token related to the provided value.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rotate_key",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A mixin that allows us to rename the `group` field to `workspace` when serializing."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/tokens/check",
    "method": "verifyTokenValidity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database tokens",
    "typeScriptTag": "databaseTokens",
    "description": "This endpoint check be used to check if the provided personal API token is valid. If returns a `200` response if so and a `403` is not. This can be used by integrations like Zapier or n8n to test if a token is valid.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{slug}/link-row-field-lookup/{field_id}",
    "method": "getLinkRowFieldValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "If the view is publicly shared or if an authenticated user has access to the related workspace, then this endpoint can be used to do a value lookup of the link row fields that are included in the view. Normally it is not possible for a not authenticated visitor to fetch the rows of a table. This endpoint makes it possible to fetch the id and primary field value of the related table of a link row included in the view.",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "The field id of the link row field.",
        "example": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only rows with data that matches the search query are going to be returned."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug related to the view.",
        "example": "SLUG"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{slug}/public/auth",
    "method": "generateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Returns a valid never-expiring JWT token for this public shared view if the password provided matches with the one saved by the view's owner.",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the grid view to get public information about.",
        "example": "SLUG"
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
    "url": "/api/database/views/{slug}/public/info",
    "method": "getPublicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Returns the required public information to display a single shared view.",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug of the view to get public information about.",
        "example": "SLUG"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}",
    "method": "deleteView",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Deletes the existing view. Note that all the related settings of the view are going to be deleted also. The data stays intact after deleting the view because this is related to the table and not the view.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the view related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}",
    "method": "getViewById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Returns the existing view. Depending on the type different propertiescould be returned.",
    "parameters": [
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list of extra attributes to include on the returned view. The supported attributes are `filters`, `sortings` and `decorations`. For example `include=filters,sortings` will add the attributes `filters` and `sortings` to every returned view, containing a list of the views filters and sortings respectively."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns the view related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}",
    "method": "updateView",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Updates the existing view. The type cannot be changed. It depends on the existing type which properties can be changed.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list of extra attributes to include on the returned view. The supported attributes are `filters`, `sortings` and `decorations`. For example `include=filters,sortings` will add the attributes `filters` and `sortings` to every returned view, containing a list of the views filters and sortings respectively."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Updates the view related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/decorations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view decorations",
    "typeScriptTag": "databaseTableViewDecorations",
    "description": "Lists all decorations of the view related to the provided `view_id` if the user has access to the related database's workspace. A view can have multiple decorations. View decorators can be used to decorate rows. This can, for example, be used to change the border or background color of a row if it matches certain conditions.",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only decoration of the view given to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/decorations",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table view decorations",
    "typeScriptTag": "databaseTableViewDecorations",
    "description": "Creates a new decoration for the view related to the provided `view_id` parameter if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Creates a decoration for the view related to the given value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/duplicate",
    "method": "duplicateView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Duplicates an existing view if the user has access to it. When a view is duplicated everything is copied except:\n- The name is appended with the copy number. Ex: `ViewName`->`ViewName(https://baserow.io/docs/index` and `View(https://baserow.io/docs/index`->`View(https://baserow.io/docs/index`\n- If the original view is publicly shared, the new view will not be shared anymore",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Duplicates the view related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/field-options",
    "method": "getFieldOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Responds with the fields options of the provided view if the authenticated user has access to the related workspace.",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Responds with field options related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/field-options",
    "method": "updateFieldOptions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Updates the field options of a view. The field options differ per field type  This could for example be used to update the field width of a `grid` view if the user changes it.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Updates the field options related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/filter-groups",
    "method": "createNewFilterGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Creates a new filter group for the view related to the provided `view_id` parameter.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view where create the new filter group.",
        "example": 0
      },
      {
        "name": "filter_type",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/filters",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Lists all filters of the view related to the provided `view_id`. A view can have multiple filters. When all the rows are requested for the view only those that apply to the filters are returned.",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only filters of the view related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/filters",
    "method": "createNewFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Creates a new filter for the view related to the provided `view_id` parameter. When the rows of a view are requested, for example via the `list_database_table_grid_view_rows` endpoint, then only the rows that apply to all the filters are going to be returned. A filter compares the value of a field to the value of a filter. It depends on the type how values are going to be compared.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Creates a filter for the view related to the provided value.",
        "example": 0
      },
      {
        "name": "field",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "group",
        "schema": "integer",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/group_bys",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view groupings",
    "typeScriptTag": "databaseTableViewGroupings",
    "description": "Lists all groupings of the view related to the provided `view_id` if the user has access to the related database's workspace. A view can have multiple groupings.",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only groupings of the view related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/group_bys",
    "method": "createNewGrouping",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table view groupings",
    "typeScriptTag": "databaseTableViewGroupings",
    "description": "Creates a new group by for the view related to the provided `view_id` parameter if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Creates a group by for the view related to the provided value.",
        "example": 0
      },
      {
        "name": "field",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 200
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/rotate-slug",
    "method": "rotateSlug",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Rotates the unique slug of the view by replacing it with a new value. This would mean that the publicly shared URL of the view will change. Anyone with the old URL won't be able to access the viewanymore. Only view types which are sharable can have their slugs rotated.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Rotates the slug of the view related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/sortings",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view sortings",
    "typeScriptTag": "databaseTableViewSortings",
    "description": "Lists all sortings of the view related to the provided `view_id` if the user has access to the related database's workspace. A view can have multiple sortings. When all the rows are requested they will be in the desired order.",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only sortings of the view related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/{view_id}/sortings",
    "method": "createNewSort",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table view sortings",
    "typeScriptTag": "databaseTableViewSortings",
    "description": "Creates a new sort for the view related to the provided `view_id` parameter if the authorized user has access to the related database's workspace. When the rows of a view are requested, for example via the `list_database_table_grid_view_rows` endpoint, they will be returned in the respected order defined by all the sortings.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Creates a sort for the view related to the provided value.",
        "example": 0
      },
      {
        "name": "field",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "order",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/calendar/{slug}/public/rows",
    "method": "getPublicRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table calendar view",
    "typeScriptTag": "databaseTableCalendarView",
    "description": "Responds with serialized rows grouped by the view's date field options related to the `slug` if the calendar view is publicly shared. Additional query parameters can be provided to control the `limit` and `offset` per select option. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "fromTimestamp",
        "schema": "string",
        "required": true,
        "description": "Restricts results based on the calendar date field.",
        "example": "FROM_TIMESTAMP"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned by default. This value can be overwritten per select option."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Defines from which offset the rows should be returned.This value can be overwritten per select option."
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Returns only rows that belong to the related view.",
        "example": "SLUG"
      },
      {
        "name": "toTimestamp",
        "schema": "string",
        "required": true,
        "description": "Restricts results based on the calendar date field.",
        "example": "TO_TIMESTAMP"
      },
      {
        "name": "userTimezone",
        "schema": "string",
        "description": "User's timezone will be taken into account for date fieldtypes that have a time and don't enforce a timezone. The timezone will be used for aggregating the dates. For date fields without a time this will be ignored and UTC will be forced. ",
        "default": "UTC"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/calendar/{view_id}",
    "method": "getGroupedRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table calendar view",
    "typeScriptTag": "databaseTableCalendarView",
    "description": "Responds with serialized rows grouped by date regarding view's date fieldif the user is authenticated and has access to the related workspace.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "fromTimestamp",
        "schema": "string",
        "required": true,
        "description": "Restricts results based on the calendar date field.",
        "example": "FROM_TIMESTAMP"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list allowing the values of `field_options` and `row_metadata` which will add the object/objects with the same name to the response if included. The `field_options` object contains user defined view settings for each field. For example the field's width is included in here. The `row_metadata` object includes extra row specific data on a per row basis."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned by default."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Defines from which offset the rows should be returned.",
        "default": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only rows with data that matches the search query are going to be returned."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "toTimestamp",
        "schema": "string",
        "required": true,
        "description": "Restricts results based on the calendar date field.",
        "example": "TO_TIMESTAMP"
      },
      {
        "name": "userTimezone",
        "schema": "string",
        "description": "User's timezone will be taken into account for date fieldtypes that have a time and don't enforce a timezone. The timezone will be used for aggregating the dates. For date fields without a time this will be ignored and UTC will be forced. ",
        "default": "UTC"
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only rows that belong to the related view's table.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/decoration/{view_decoration_id}",
    "method": "deleteExistingDecoration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table view decorations",
    "typeScriptTag": "databaseTableViewDecorations",
    "description": "Deletes the existing decoration if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewDecorationId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the decoration related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/decoration/{view_decoration_id}",
    "method": "getViewDecoration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view decorations",
    "typeScriptTag": "databaseTableViewDecorations",
    "description": "Returns the existing view decoration if the current user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "viewDecorationId",
        "schema": "integer",
        "required": true,
        "description": "Returns the view decoration related to the provided id.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/decoration/{view_decoration_id}",
    "method": "updateDecoration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table view decorations",
    "typeScriptTag": "databaseTableViewDecorations",
    "description": "Updates the existing decoration if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewDecorationId",
        "schema": "integer",
        "required": true,
        "description": "Updates the view decoration related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/filter-group/{filter_group_id}",
    "method": "deleteFilterGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Deletes the existing filter group with the given `view_filter_group_id`.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "filterGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTER_GROUP_ID"
      },
      {
        "name": "viewFilterGroupId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view filter group to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/filter-group/{filter_group_id}",
    "method": "getFilterGroupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Returns the existing view filter group with the given `view_filter_group_id`.",
    "parameters": [
      {
        "name": "filterGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTER_GROUP_ID"
      },
      {
        "name": "viewFilterGroupId",
        "schema": "integer",
        "required": true,
        "description": "Teh ID of the view filter group to return.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/filter-group/{filter_group_id}",
    "method": "updateFilterGroup",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Updates the existing filter group with the given `view_filter_group_id`.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "filterGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTER_GROUP_ID"
      },
      {
        "name": "viewFilterGroupId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view filter group to update.",
        "example": 0
      },
      {
        "name": "filter_type",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/filter/{view_filter_id}",
    "method": "deleteFilter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Deletes the existing filter if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewFilterId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view filter to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/filter/{view_filter_id}",
    "method": "getViewFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Returns the existing view filter.",
    "parameters": [
      {
        "name": "viewFilterId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view filter to return.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/filter/{view_filter_id}",
    "method": "updateExistingFilter",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table view filters",
    "typeScriptTag": "databaseTableViewFilters",
    "description": "Updates the existing filter.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewFilterId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the view filter to update.",
        "example": 0
      },
      {
        "name": "field",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/form/{slug}/submit",
    "method": "getFormMetadataBySlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table form view",
    "typeScriptTag": "databaseTableFormView",
    "description": "Returns the metadata related to the form view if the form is publicly shared or if the user has access to the related workspace. This data can be used to construct a form with the right fields.",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug related to the form form.",
        "example": "SLUG"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/form/{slug}/submit",
    "method": "submitForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table form view",
    "typeScriptTag": "databaseTableFormView",
    "description": "Submits the form if the form is publicly shared or if the user has access to the related workspace. The provided data will be validated based on the fields that are in the form and the rules per field. If valid, a new row will be created in the table.",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "The slug related to the form.",
        "example": "SLUG"
      },
      {
        "name": "field_1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_6",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "field_7",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "field_8",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_13",
        "schema": "number",
        "description": ""
      },
      {
        "name": "field_14",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_15",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_16",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "field_17",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_18",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field_23",
        "schema": "array",
        "description": ""
      },
      {
        "name": "field_26",
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
    "url": "/api/database/views/form/{slug}/upload-file",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table form view",
    "typeScriptTag": "databaseTableFormView",
    "description": "Uploads a file anonymously to Baserow by uploading the file contents directly. A `file` multipart is expected containing the file contents.",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Submits files only if the view with the provided slughas a public file field.",
        "example": "SLUG"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/gallery/{slug}/public/rows",
    "method": "listPublicRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table gallery view",
    "typeScriptTag": "databaseTableGalleryView",
    "description": "Lists the requested rows of the view's table related to the provided `slug` if the gallery view is public.The response is paginated either by a limit/offset or page/size style. The style depends on the provided GET parameters. The properties of the returned rows depends on which fields the table has. For a complete overview of fields use the **list_database_table_fields** endpoint to list them all. In the example all field types are listed, but normally the number in field_{id} key is going to be the id of the field. The value is what the user has provided and the format of it depends on the fields type.\n\n",
    "parameters": [
      {
        "name": "count",
        "schema": "boolean",
        "description": "If provided only the count will be returned."
      },
      {
        "name": "excludeFields",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the exclude_fields query parameter. If you for example provide the following GET parameter `exclude_fields=field_1,field_2` then the fields with id `1` and id `2` are going to be excluded from the selection and response. "
      },
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the rows must match all the provided filters.\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nPlease note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list allowing the values of `field_options` which will add the object/objects with the same name to the response if included. The `field_options` object contains user defined view settings for each field. For example the field's width is included in here."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the fields query parameter. If you for example provide the following GET parameter `include_fields=field_1,field_2` then only the fields with id `1` and id `2` are going to be selected and included in the response."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Can only be used in combination with the `limit` parameter and defines from which offset the rows should be returned."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Optionally the rows can be ordered by provided field ids separated by comma. By default a field is ordered in ascending (https://baserow.io/docs/index order, but by prepending the field with a '-' it can be ordered descending (https://baserow.io/docs/index."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page of rows should be returned. Either the `page` or `limit` can be provided, not both."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only rows with data that matches the search query are going to be returned."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Can only be used in combination with the `page` parameter and defines how many rows should be returned."
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Returns only rows that belong to the related view.",
        "example": "SLUG"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/gallery/{view_id}",
    "method": "listRowsByViewId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table gallery view",
    "typeScriptTag": "databaseTableGalleryView",
    "description": "Lists the requested rows of the view's table related to the provided `view_id` if the authorized user has access to the database's workspace. The response is paginated by a limit/offset style.",
    "parameters": [
      {
        "name": "count",
        "schema": "boolean",
        "description": "If provided only the count will be returned."
      },
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filter parameters the view filters saved for the view itself will be ignored."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the rows must match all the provided filters.\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filters parameter the view filters saved for the view itself will be ignored."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list allowing the values of `field_options` and `row_metadata` which will add the object/objects with the same name to the response if included. The `field_options` object contains user defined view settings for each field. For example the field's width is included in here. The `row_metadata` object includes extra row specific data on a per row basis."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Can only be used in combination with the `limit` parameter and defines from which offset the rows should be returned."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Optionally the rows can be ordered by provided field ids separated by comma. By default a field is ordered in ascending (https://baserow.io/docs/index order, but by prepending the field with a '-' it can be ordered descending (https://baserow.io/docs/index."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only rows with data that matches the search query are going to be returned."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only rows that belong to the related view's table.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/grid/{slug}/public/rows",
    "method": "listPublicRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table grid view",
    "typeScriptTag": "databaseTableGridView",
    "description": "Lists the requested rows of the view's table related to the provided `slug` if the grid view is public.The response is paginated either by a limit/offset or page/size style. The style depends on the provided GET parameters. The properties of the returned rows depends on which fields the table has. For a complete overview of fields use the **list_database_table_fields** endpoint to list them all. In the example all field types are listed, but normally the number in field_{id} key is going to be the id of the field. The value is what the user has provided and the format of it depends on the fields type.\n\n",
    "parameters": [
      {
        "name": "count",
        "schema": "boolean",
        "description": "If provided only the count will be returned."
      },
      {
        "name": "excludeFields",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the exclude_fields query parameter. If you for example provide the following GET parameter `exclude_fields=field_1,field_2` then the fields with id `1` and id `2` are going to be excluded from the selection and response. "
      },
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the rows must match all the provided filters.\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nPlease note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "Optionally the rows can be grouped by provided field ids separated by comma. By default no groups are applied. This doesn't actually responds with the rows groups, this is just what's needed for the Baserow group by feature."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list allowing the values of `field_options` which will add the object/objects with the same name to the response if included. The `field_options` object contains user defined view settings for each field. For example the field's width is included in here."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the fields query parameter. If you for example provide the following GET parameter `include_fields=field_1,field_2` then only the fields with id `1` and id `2` are going to be selected and included in the response."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Can only be used in combination with the `limit` parameter and defines from which offset the rows should be returned."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Optionally the rows can be ordered by provided field ids separated by comma. By default a field is ordered in ascending (https://baserow.io/docs/index order, but by prepending the field with a '-' it can be ordered descending (https://baserow.io/docs/index."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page of rows should be returned. Either the `page` or `limit` can be provided, not both."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only rows with data that matches the search query are going to be returned."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Can only be used in combination with the `page` parameter and defines how many rows should be returned."
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Returns only rows that belong to the related view.",
        "example": "SLUG"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/grid/{view_id}",
    "method": "getViewRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table grid view",
    "typeScriptTag": "databaseTableGridView",
    "description": "Lists the requested rows of the view's table related to the provided `view_id` if the authorized user has access to the database's workspace. The response is paginated either by a limit/offset or page/size style. The style depends on the provided GET parameters. The properties of the returned rows depends on which fields the table has. For a complete overview of fields use the **list_database_table_fields** endpoint to list them all. In the example all field types are listed, but normally the number in field_{id} key is going to be the id of the field. The value is what the user has provided and the format of it depends on the fields type.\n\nThe filters and sortings are automatically applied. To get a full overview of the applied filters and sortings you can use the `list_database_table_view_filters` and `list_database_table_view_sortings` endpoints.",
    "parameters": [
      {
        "name": "count",
        "schema": "boolean",
        "description": "If provided only the count will be returned."
      },
      {
        "name": "excludeFields",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the exclude_fields query parameter. If you for example provide the following GET parameter `exclude_fields=field_1,field_2` then the fields with id `1` and id `2` are going to be excluded from the selection and response. "
      },
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filter parameters the view filters saved for the view itself will be ignored."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the rows must match all the provided filters.\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filters parameter the view filters saved for the view itself will be ignored."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list allowing the values of `field_options` and `row_metadata` which will add the object/objects with the same name to the response if included. The `field_options` object contains user defined view settings for each field. For example the field's width is included in here. The `row_metadata` object includes extra row specific data on a per row basis."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "All the fields are included in the response by default. You can select a subset of fields by providing the fields query parameter. If you for example provide the following GET parameter `include_fields=field_1,field_2` then only the fields with id `1` and id `2` are going to be selected and included in the response."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Can only be used in combination with the `limit` parameter and defines from which offset the rows should be returned."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Optionally the rows can be ordered by provided field ids separated by comma. By default a field is ordered in ascending (https://baserow.io/docs/index order, but by prepending the field with a '-' it can be ordered descending (https://baserow.io/docs/index."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page of rows should be returned. Either the `page` or `limit` can be provided, not both."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided only rows with data that matches the search query are going to be returned."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Can only be used in combination with the `page` parameter and defines how many rows should be returned."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only rows that belong to the related view's table.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/grid/{view_id}",
    "method": "getFilteredData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table grid view",
    "typeScriptTag": "databaseTableGridView",
    "description": "Lists only the rows and fields that match the request. Only the rows with the ids that are in the `row_ids` list are going to be returned. Same goes for the fields, only the fields with the ids in the `field_ids` are going to be returned. This endpoint could be used to refresh data after changes something. For example in the web frontend after changing a field type, the data of the related cells will be refreshed using this endpoint. In the example all field types are listed, but normally  the number in field_{id} key is going to be the id of the field. The value is what the user has provided and the format of it depends on the fields type.",
    "parameters": [
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only rows that belong to the related view's table.",
        "example": 0
      },
      {
        "name": "field_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "row_ids",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/grid/{view_id}/aggregation/{field_id}",
    "method": "computeAggregation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table grid view",
    "typeScriptTag": "databaseTableGridView",
    "description": "Computes the aggregation of all the values for a specified field from the selected grid view. You must select the aggregation type by setting the `type` GET parameter. If filters are configured for the selected view, the aggregation is calculated only on filtered rows. You need to have read permissions on the view to request an aggregation.",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "The field id you want to aggregate",
        "example": 0
      },
      {
        "name": "include",
        "schema": "string",
        "description": "if `include` is set to `total`, the total row count will be returned with the result."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "The aggregation type you want. Available aggregation types: empty_count, not_empty_count, unique_count, min, max, sum, average, median, decile, variance, std_dev"
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Select the view you want the aggregation for.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/grid/{view_id}/aggregations",
    "method": "getFieldAggregations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table grid view",
    "typeScriptTag": "databaseTableGridView",
    "description": "Returns all field aggregations values previously defined for this grid view. If filters exist for this view, the aggregations are computed only on filtered rows.You need to have read permissions on the view to request aggregations.",
    "parameters": [
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The aggregation can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filter parameters the view filters saved for the view itself will be ignored."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the aggregated rows must match all the provided filters.\n`OR`: Indicates that the aggregated rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply for the aggregation. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filters parameter the view filters saved for the view itself will be ignored."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "if `include` is set to `total`, the total row count will be returned with the result."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided the aggregations are calculated only for matching rows."
      },
      {
        "name": "searchMode",
        "schema": "string",
        "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `full-text-with-count` is used, then Postgres full-text search is used. If `compat` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Select the view you want the aggregations for.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/group_by/{view_group_by_id}",
    "method": "deleteGroupBy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table view groupings",
    "typeScriptTag": "databaseTableViewGroupings",
    "description": "Deletes the existing group by if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewGroupById",
        "schema": "integer",
        "required": true,
        "description": "Deletes the group by related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/group_by/{view_group_by_id}",
    "method": "getViewGroupBy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view groupings",
    "typeScriptTag": "databaseTableViewGroupings",
    "description": "Returns the existing view group by if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "viewGroupById",
        "schema": "integer",
        "required": true,
        "description": "Returns the view group by related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/group_by/{view_group_by_id}",
    "method": "updateGroupBy",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table view groupings",
    "typeScriptTag": "databaseTableViewGroupings",
    "description": "Updates the existing group by if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewGroupById",
        "schema": "integer",
        "required": true,
        "description": "Updates the view group by related to the provided value.",
        "example": 0
      },
      {
        "name": "field",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "width",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/kanban/{slug}/public/rows",
    "method": "getPublicRowsBySlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table kanban view",
    "typeScriptTag": "databaseTableKanbanView",
    "description": "Responds with serialized rows grouped by the view's single select field options related to the `slug` if the kanban view is publicly shared. Additional query parameters can be provided to control the `limit` and `offset` per select option. \n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the rows must match all the provided filters.\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nPlease note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned by default. This value can be overwritten per select option."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Defines from which offset the rows should be returned.This value can be overwritten per select option."
      },
      {
        "name": "selectOption",
        "schema": "string",
        "description": "Accepts multiple `select_option` parameters. If not provided, the rows of all select options will be returned. If one or more `select_option` parameters are provided, then only the rows of those will be included in the response. `?select_option=1&select_option=null` will only include the rows for both select option with id `1` and `null`. `?select_option=1,10,20` will only include the rows of select option id `1` with a limit of `10` and and offset of `20`."
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Returns only rows that belong to the related view.",
        "example": "SLUG"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/kanban/{view_id}",
    "method": "getSerializedRowsByViewId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table kanban view",
    "typeScriptTag": "databaseTableKanbanView",
    "description": "Responds with serialized rows grouped by the view's single select field options if the user is authenticated and has access to the related workspace. Additional query parameters can be provided to control the `limit` and `offset` per select option.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "filter_{field}_{filter}",
        "schema": "string",
        "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nPlease note that if the `filters` parameter is provided, this parameter will be ignored. \n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filter parameters the view filters saved for the view itself will be ignored."
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "`AND`: Indicates that the rows must match all the provided filters.\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.Please note that if the `filters` parameter is provided, this parameter will be ignored. \n\n"
      },
      {
        "name": "filters",
        "schema": "string",
        "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, length_is_lower_than, higher_than, lower_than, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, single_select_equal, single_select_not_equal, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not.Please note that by passing the filters parameter the view filters saved for the view itself will be ignored."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list allowing the values of `field_options` and `row_metadata` which will add the object/objects with the same name to the response if included. The `field_options` object contains user defined view settings for each field. For example the field's width is included in here. The `row_metadata` object includes extra row specific data on a per row basis."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned by default. This value can be overwritten per select option."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Defines from which offset the rows should be returned.This value can be overwritten per select option."
      },
      {
        "name": "selectOption",
        "schema": "string",
        "description": "Accepts multiple `select_option` parameters. If not provided, the rows of all select options will be returned. If one or more `select_option` parameters are provided, then only the rows of those will be included in the response. `?select_option=1&select_option=null` will only include the rows for both select option with id `1` and `null`. `?select_option=1,10,20` will only include the rows of select option id `1` with a limit of `10` and and offset of `20`."
      },
      {
        "name": "viewId",
        "schema": "integer",
        "required": true,
        "description": "Returns only rows that belong to the related view's table.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/sort/{view_sort_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table view sortings",
    "typeScriptTag": "databaseTableViewSortings",
    "description": "Deletes the existing sort if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewSortId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the sort related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/sort/{view_sort_id}",
    "method": "getSortById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table view sortings",
    "typeScriptTag": "databaseTableViewSortings",
    "description": "Returns the existing view sort if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "viewSortId",
        "schema": "integer",
        "required": true,
        "description": "Returns the view sort related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/sort/{view_sort_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table view sortings",
    "typeScriptTag": "databaseTableViewSortings",
    "description": "Updates the existing sort if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "viewSortId",
        "schema": "integer",
        "required": true,
        "description": "Updates the view sort related to the provided value.",
        "example": 0
      },
      {
        "name": "field",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "order",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/table/{table_id}",
    "method": "listTableViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Lists all views of the table related to the provided `table_id`. If the workspace is related to a template, then this endpoint will be publicly accessible. A table can have multiple views. Each view can display the data in a different way. For example the `grid` view shows the in a spreadsheet like way. That type has custom endpoints for data retrieval and manipulation. In the future other views types like a calendar or Kanban are going to be added. Each type can have different properties.",
    "parameters": [
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list of extra attributes to include on each view in the response. The supported attributes are `filters`, `sortings` and `decorations`. For example `include=filters,sortings` will add the attributes `filters` and `sortings` to every returned view, containing a list of the views filters and sortings respectively."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum amount of views that must be returned. This endpoint doesn't support pagination, but if you for example just need to fetch the first view, you can do that by setting a limit. There isn't a limit by default."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Returns only views of the table related to the provided value.",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Optionally filter on the view type. If provided, only views of that type will be returned."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/table/{table_id}",
    "method": "createNewView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Creates a new view for the table related to the provided `table_id` parameter. Depending on the type, different properties can optionally be set.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "include",
        "schema": "string",
        "description": "A comma separated list of extra attributes to include on each view in the response. The supported attributes are `filters`, `sortings` and `decorations`. For example `include=filters,sortings` will add the attributes `filters` and `sortings` to every returned view, containing a list of the views filters and sortings respectively."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Creates a view for the table related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/views/table/{table_id}/order",
    "method": "reorderTableOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table views",
    "typeScriptTag": "databaseTableViews",
    "description": "Changes the order of the provided view ids to the matching position that the id has in the list. The order of the not provided views will be set to `0`.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Updates the order of the views in the table related to the provided value.",
        "example": 0
      },
      {
        "name": "view_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/webhooks/{webhook_id}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table webhooks",
    "typeScriptTag": "databaseTableWebhooks",
    "description": "Deletes the existing webhook if the authorized user has access to the related database's workspace.",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the webhook related to the provided value.",
        "example": 0
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/webhooks/{webhook_id}",
    "method": "getExistingWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table webhooks",
    "typeScriptTag": "databaseTableWebhooks",
    "description": "Returns the existing webhook if the authorized user has access to the related database workspace.",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Returns the webhook related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/webhooks/{webhook_id}",
    "method": "updateView",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table webhooks",
    "typeScriptTag": "databaseTableWebhooks",
    "description": "Updates the existing view if the authorized user has access to the related database workspace.",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Updates the webhook related to the provided value.",
        "example": 0
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "include_all_events",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "request_method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_user_field_names",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/webhooks/table/{table_id}",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table webhooks",
    "typeScriptTag": "databaseTableWebhooks",
    "description": "Lists all webhooks of the table related to the provided `table_id` if the user has access to the related database workspace.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Returns only webhooks of the table related to this value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/webhooks/table/{table_id}",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table webhooks",
    "typeScriptTag": "databaseTableWebhooks",
    "description": "Creates a new webhook for the table related to the provided `table_id` parameter if the authorized user has access to the related database workspace.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "Creates a webhook for the table related to the provided value.",
        "example": 0
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "include_all_events",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "request_method",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "headers",
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
        "name": "use_user_field_names",
        "schema": "boolean",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/database/webhooks/table/{table_id}/test-call",
    "method": "triggerTestCall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table webhooks",
    "typeScriptTag": "databaseTableWebhooks",
    "description": "This endpoint triggers a test call based on the provided data if the user has access to the workspace related to the table. The test call will be made immediately and a copy of the request, response and status will be included in the response.",
    "parameters": [
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The id of the table that must be tested.",
        "example": 0
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "event_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_TYPE"
      },
      {
        "name": "request_method",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "headers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "use_user_field_names",
        "schema": "boolean",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups",
    "method": "groups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [list_workspaces](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Lists all the groups of the authorized user. A group can contain multiple applications like a database. Multiple users can have access to a group. For example each company could have their own group containing databases related to that company. The order of the groups are custom for each user. The order is configurable via the **order_groups** endpoint.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups",
    "method": "group",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [create_workspace](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Creates a new group where only the authorized user has access to. No initial data like database applications are added, they have to be created via other endpoints.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This serializers includes relevant fields of the Workspace model, but also\nsome WorkspaceUser specific fields related to the workspace user relation.\n\nAdditionally, the list of users are included for each workspace."
      }
    ]
  },
  {
    "url": "/api/groups/{group_id}",
    "method": "group",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [delete_workspace](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Deletes an existing group if the authorized user belongs to the group. All the applications, databases, tables etc that were in the group are going to be deleted also.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the group related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/{group_id}",
    "method": "group",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [update_workspace](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Updates the existing group related to the provided `group_id` parameter if the authorized user belongs to the group. It is not yet possible to add additional users to a group.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Updates the group related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/{group_id}/leave",
    "method": "group",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [leave_workspace](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Makes the authenticated user leave the group related to the provided `group_id` if the user is in that group. If the user is the last admin in the group, they will not be able to leave it. There must always be one admin in the group, otherwise it will be left without control. If that is the case, they must either delete the group or give another member admin permissions first.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Leaves the group related to the value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/{group_id}/permissions",
    "method": "permissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_permissions](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Returns a the permission data necessary to determine the permissions of a specific user over a specific group.\n See `core.handler.CoreHandler.get_permissions()` for more details.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The group id we want the permission object for.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/{group_invitation_id}",
    "method": "deleteInvitation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [delete_workspace_invitation](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Deletes a group invitation if the authorized user has admin rights to the related group.",
    "parameters": [
      {
        "name": "groupInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the group invitation related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/{group_invitation_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [get_workspace_invitation](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Returns the requested group invitation if the authorized user has admin right to the related group",
    "parameters": [
      {
        "name": "groupInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Returns the group invitation related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/{group_invitation_id}",
    "method": "updateRelatedInvitation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [update_workspace_invitation](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Updates the existing group invitation related to the provided `group_invitation_id` param if the authorized user has admin rights to the related group.",
    "parameters": [
      {
        "name": "groupInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Updates the group invitation related to the provided value.",
        "example": 0
      },
      {
        "name": "permissions",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/{group_invitation_id}/accept",
    "method": "acceptGroupInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [accept_workspace_invitation](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Accepts a group invitation with the given id if the email address of the user matches that of the invitation.",
    "parameters": [
      {
        "name": "groupInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Accepts the group invitation related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This serializers includes relevant fields of the Workspace model, but also\nsome WorkspaceUser specific fields related to the workspace user relation.\n\nAdditionally, the list of users are included for each workspace."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/{group_invitation_id}/reject",
    "method": "rejectGroupInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [reject_workspace_invitation](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Rejects a group invitation with the given id if the email address of the user matches that of the invitation.",
    "parameters": [
      {
        "name": "groupInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Rejects the group invitation related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/group/{group_id}",
    "method": "listForGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [list_workspace_invitations](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Lists all the group invitations of the group related to the provided `group_id` parameter if the authorized user has admin rights to that group.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Returns only invitations that are in the group related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/group/{group_id}",
    "method": "createNewInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [create_workspace_invitation](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Creates a new group invitations for an email address if the authorized user has admin rights to the related group. An email containing a sign up link will be send to the user.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Creates a group invitation to the group related to the provided value.",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "permissions",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "base_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BASE_URL"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/invitations/token/{token}",
    "method": "findByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group invitations",
    "typeScriptTag": "groupInvitations",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [get_workspace_invitation_by_token](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Responds with the serialized group invitation if an invitation with the provided token is found.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Returns the group invitation related to the provided token.",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This serializer is used for displaying the invitation to the user that doesn't\nhave access to the workspace yet, so not for invitation management purposes."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/order",
    "method": "groups",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [order_workspaces](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Changes the order of the provided group ids to the matching position that the id has in the list. If the authorized user does not belong to the group it will be ignored. The order will be custom for each user.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "workspaces",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/groups/users/{group_user_id}",
    "method": "deleteGroupUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [delete_workspace_user](https://api.baserow.io).**\n\n Deletes a group user if the authorized user has admin rights to the related group.",
    "parameters": [
      {
        "name": "groupUserId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the group user related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/users/{group_user_id}",
    "method": "updateGroupUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [update_workspace_user](https://api.baserow.io).**\n\n Updates the existing group user related to the provided `group_user_id` param if the authorized user has admin rights to the related group.",
    "parameters": [
      {
        "name": "groupUserId",
        "schema": "integer",
        "required": true,
        "description": "Updates the group user related to the provided value.",
        "example": 0
      },
      {
        "name": "permissions",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/groups/users/group/{group_id}",
    "method": "listGroupUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [list_workspace_users](https://api.baserow.io).**\n\n Lists all the users that are in a group if the authorized user has admin permissions to the related group. To add a user to a group an invitation must be sent first.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Lists group users related to the provided group value.",
        "example": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Search for group users by username, or email."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "Sort group users by name, email or role."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/integration/{integration_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Deletes the integration related by the given id.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "integrationId",
        "schema": "integer",
        "required": true,
        "description": "The id of the integration",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/integration/{integration_id}",
    "method": "updateExistingIntegration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Updates an existing integration.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "integrationId",
        "schema": "integer",
        "required": true,
        "description": "The id of the integration",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/integration/{integration_id}/move",
    "method": "moveIntegration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Moves the integration in the application before another integration or at the end of the application if no before integration is given. The integrations must belong to the same application.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "integrationId",
        "schema": "integer",
        "required": true,
        "description": "The id of the integration to move",
        "example": 0
      },
      {
        "name": "before_id",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/jobs",
    "method": "job",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "List all existing jobs. Jobs are task executed asynchronously in the background. You can use the `get_job` endpoint to read the currentprogress of a the job.",
    "parameters": [
      {
        "name": "jobIds",
        "schema": "string",
        "description": "A comma separated list of job ids in the desired order.The jobs will be returned in the same order as the ids.If a job id is not found it will be ignored."
      },
      {
        "name": "states",
        "schema": "string",
        "description": "A comma separated list of jobs state to look for. The only possible values are: `pending`, `finished` and `failed`. It's possible to exclude a state by prefixing it with a `!`. "
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/jobs",
    "method": "job",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Creates a new job. This job runs asynchronously in the background and execute the task specific to the provided typeparameters. The `get_job` can be used to get the current state of the job.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/jobs/{job_id}",
    "method": "job",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Returns the information related to the provided job id. This endpoint can for example be polled to get the state and progress of the job in real time.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "The job id to lookup information about.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses",
    "method": "licenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Lists all the valid licenses that are registered to this instance. A premium license can be used to unlock the premium features for a fixed amount of users. An enterprise license can similarly be used to unlock enterpise features. More information about self hosted licenses can be found on our pricing page https://baserow.io/pricing.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses",
    "method": "registerLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Registers a new license. After registering you can assign users to the license that will be able to use the license's features while the license is active. If an existing license with the same `license_id` already exists and the provided license has been issued later than that one, the existing one will be upgraded.",
    "parameters": [
      {
        "name": "license",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LICENSE"
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
    "url": "/api/licenses/{id}",
    "method": "removeLicense",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Removes the existing license related to the provided parameter. If the license is active, then all the users that are using the license will lose access to the features granted by that license.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license, this is `id` and not `license_id`.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses/{id}",
    "method": "getLicenseDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Responds with detailed information about the license related to the provided parameter.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses/{id}/{user_id}",
    "method": "removeUserFromLicense",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Removes the user related to the provided parameter and to the license related to the parameter. This only happens if the user is on the license, otherwise nothing will happen.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license, this is `id` and not `license_id`.",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user that must be removed from the license.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses/{id}/{user_id}",
    "method": "addUserToLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Adds the user related to the provided parameter and to the license related to the parameter. This only happens if there are enough seats left on the license and if the user is not already on the license.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license, this is `id` and not `license_id`.",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user that must be added to the license.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses/{id}/check",
    "method": "checkLicenseStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "This endpoint checks with the authority if the license needs to be updated. It also checks if the license is operating within its limits and might take action on that. It could also happen that the license has been deleted because there is an instance id mismatch or because it's invalid. In that case a `204` status code is returned.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license, this is `id` and not `license_id`.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses/{id}/fill-seats",
    "method": "fillSeatsLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Fills the remaining empty seats of the license with the first users that are found.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license, this is `id` and not `license_id`.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses/{id}/lookup-users",
    "method": "lookupUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "This endpoint can be used to lookup users that can be added to a  license. Users that are already in the license are not returned here. Optionally a `search` query parameter can be provided to filter the results.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license, this is `id` and not `license_id`.",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page of users should be returned."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "If provided, only users where the name or email contains the value are returned."
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Defines how many users should be returned per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/licenses/{id}/remove-all-users",
    "method": "removeAllUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Admin",
    "typeScriptTag": "admin",
    "description": "Removes all the users that are on the license. This will empty all the seats.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The internal identifier of the license, this is `id` and not `license_id`.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/{workspace_id}",
    "method": "clearWorkspaceNotifications",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Clear all the notifications for the given workspace and user.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace the notifications are in.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/{workspace_id}",
    "method": "listForWorkspaceAndUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Lists the notifications for the given workspace and the current user. The response is paginated and the limit and offset parameters can be controlled using the query parameters.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many notifications should be returned."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Defines the offset of the notifications that should be returned."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace id that the notifications belong to.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/{workspace_id}/{notification_id}",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Marks a notification as read.",
    "parameters": [
      {
        "name": "notificationId",
        "schema": "integer",
        "required": true,
        "description": "The notification id to update.",
        "example": 0
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace the notification is in.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serialize notification data along with the recipient information about the\nread status for the given user."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/{workspace_id}/mark-all-as-read",
    "method": "markAllAsRead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Mark as read all the notifications for the given workspace and user.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace the notifications are in.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/role/{group_id}",
    "method": "listWithinGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Role assignments",
    "typeScriptTag": "roleAssignments",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_assign_role](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n You can list the role assignments within a group, optionally filtered down to a specific scope inside of that group. If the scope isn't specified,the group will be considered the scope.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The group in which the role assignments are related to.",
        "example": 0
      },
      {
        "name": "scopeId",
        "schema": "integer",
        "description": "The id of the scope you are trying to get all roleassignments for."
      },
      {
        "name": "scopeType",
        "schema": "string",
        "description": "The type of scope you are trying to get all roleassignments for."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/role/{group_id}",
    "method": "assignRoleToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Role assignments",
    "typeScriptTag": "roleAssignments",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_assign_role](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n You can assign a role to a subject into the given group for the given scope with this endpoint. If you want to remove the role you can omit the role property.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The group in which the role assignment takes place.",
        "example": 0
      },
      {
        "name": "subject_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subject_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT_TYPE"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
      },
      {
        "name": "scope_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "scope_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for RoleAssignment used for the Open API spec"
      },
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/role/{group_id}/batch",
    "method": "assignMultipleSubjectsToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Role assignments",
    "typeScriptTag": "roleAssignments",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_batch_assign_role](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n You can assign a role to a multiple subjects into the given group for the given scope with this endpoint. If you want to remove the role you can omit the role property.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The group in which the role assignment takes place.",
        "example": 0
      },
      {
        "name": "items",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/role/{workspace_id}",
    "method": "listWithinWorkspaceScope",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Role assignments",
    "typeScriptTag": "roleAssignments",
    "description": "You can list the role assignments within a workspace, optionally filtered downto a specific scope inside of that workspace. If the scope isn't specified,the workspace will be considered the scope.",
    "parameters": [
      {
        "name": "scopeId",
        "schema": "integer",
        "description": "The id of the scope you are trying to get all roleassignments for."
      },
      {
        "name": "scopeType",
        "schema": "string",
        "description": "The type of scope you are trying to get all roleassignments for."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace in which the role assignments are related to.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/role/{workspace_id}",
    "method": "role",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Role assignments",
    "typeScriptTag": "roleAssignments",
    "description": "You can assign a role to a subject into the given workspace for the given scope with this endpoint. If you want to remove the role you can omit the role property.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace in which the role assignment takes place.",
        "example": 0
      },
      {
        "name": "subject_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subject_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT_TYPE"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE"
      },
      {
        "name": "scope_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "scope_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for RoleAssignment used for the Open API spec"
      },
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/role/{workspace_id}/batch",
    "method": "assignRoleToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Role assignments",
    "typeScriptTag": "roleAssignments",
    "description": "You can assign a role to a multiple subjects into the given workspace for the given scopes with this endpoint. If you want to remove the role you can omit the role property.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace in which the role assignment takes place.",
        "example": 0
      },
      {
        "name": "items",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/row_comments/{table_id}/{row_id}",
    "method": "getAllComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Returns all row comments for the specified table and row.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Defines how many rows should be returned."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Can only be used in combination with the `limit` parameter and defines from which offset the rows should be returned."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Defines which page of rows should be returned. Either the `page` or `limit` can be provided, not both."
      },
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "The row to get row comments for.",
        "example": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "Can only be used in combination with the `page` parameter and defines how many rows should be returned."
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table the row is in.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/row_comments/{table_id}/{row_id}",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Creates a comment on the specified row.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "The row to create a comment for.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table to find the row to comment on in.",
        "example": 0
      },
      {
        "name": "message",
        "schema": "object",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/row_comments/{table_id}/{row_id}/notification-mode",
    "method": "updateNotificationMode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Updates the user's notification preferences for comments made on a specified table row.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "rowId",
        "schema": "integer",
        "required": true,
        "description": "The row on which to manage the comment subscription.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table id where the row is in.",
        "example": 0
      },
      {
        "name": "mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/row_comments/{table_id}/comment/{comment_id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Delete a row comment.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "commentId",
        "schema": "integer",
        "required": true,
        "description": "The row comment to delete.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table the row is in.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/row_comments/{table_id}/comment/{comment_id}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database table rows",
    "typeScriptTag": "databaseTableRows",
    "description": "Update a row comment.\n\nThis is a **premium** feature.",
    "parameters": [
      {
        "name": "commentId",
        "schema": "integer",
        "required": true,
        "description": "The row comment to update.",
        "example": 0
      },
      {
        "name": "tableId",
        "schema": "integer",
        "required": true,
        "description": "The table the row is in.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/settings",
    "method": "settings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Responds with all the admin configured settings.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/settings/instance-id",
    "method": "getInstanceId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Responds with the self hosted instance id. Only a user with staff permissions can request it.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/settings/update",
    "method": "settings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Updates the admin configured settings if the user has admin permissions.",
    "parameters": [
      {
        "name": "allow_new_signups",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allow_signups_via_workspace_invitations",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allow_signups_via_group_invitations",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allow_reset_password",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allow_global_workspace_creation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "allow_global_group_creation",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "account_deletion_grace_delay",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "show_admin_signup_page",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "track_workspace_usage",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "show_baserow_help_request",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "co_branding_logo",
        "schema": "undefined",
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
    "url": "/api/snapshots/{snapshot_id}",
    "method": "snapshot",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Deletes a snapshot. Deleting a snapshot doesn't affect the application that the snapshot is made from and doesn't affect any applications that were created by restoring it. Snapshot deletion is permanent and can't be undone.",
    "parameters": [
      {
        "name": "snapshotId",
        "schema": "integer",
        "required": true,
        "description": "Id of the snapshot to delete.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/snapshots/{snapshot_id}/restore",
    "method": "snapshot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Restores a snapshot. When an application snapshot is restored, a new application will be created in the same workspace that the original application was placed in with the name of the snapshot and data that were in the original application at the time the snapshot was taken. The original application that the snapshot was taken from is unaffected. Snapshots can be restored multiple times and a number suffix is added to the new application name in the case of a collision.",
    "parameters": [
      {
        "name": "snapshotId",
        "schema": "integer",
        "required": true,
        "description": "Id of the snapshot to restore.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/snapshots/application/{application_id}",
    "method": "snapshots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Lists snapshots that were created for a given application.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application ID for which to list snapshots.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/snapshots/application/{application_id}",
    "method": "snapshot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Creates a new application snapshot. Snapshots represent a state of an application at a specific point in time and can be restored later, making it easy to create backups of entire applications.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application ID for which to list snapshots.",
        "example": 0
      },
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
        "name": "snapshot_from_application",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/sso/oauth2/callback/{provider_id}",
    "method": "completeProviderCallback",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Processes callback from OAuth2 provider and logs the user in if successful.",
    "parameters": [
      {
        "name": "code",
        "schema": "integer",
        "description": "The id of the provider for which to process the callback."
      },
      {
        "name": "providerId",
        "schema": "integer",
        "required": true,
        "description": "The id of the provider for which to process the callback.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/sso/oauth2/login/{provider_id}",
    "method": "redirectToProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Redirects to the OAuth2 provider's authentication URL based on the provided auth provider's id.",
    "parameters": [
      {
        "name": "groupInvitationToken",
        "schema": "string",
        "description": "Please use the functionally identical `workspace_invitation_token` instead as this querystring is being removed in the future."
      },
      {
        "name": "original",
        "schema": "integer",
        "description": "The relative part of URL that the user wanted to access."
      },
      {
        "name": "providerId",
        "schema": "integer",
        "required": true,
        "description": "The id of the provider for redirect.",
        "example": 0
      },
      {
        "name": "workspaceInvitationToken",
        "schema": "string",
        "description": "The invitation token sent to the user to join a specific workspace."
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/sso/saml/acs",
    "method": "completeSamlAuthenticationFlow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Complete the SAML authentication flow by validating the SAML response. Sign in the user if already exists in Baserow or create a new one otherwise. Once authenticated, the user will be redirected to the original URL they were trying to access. If the response is invalid, the user will be redirected to an error page with a specific error message.It accepts the language code and the workspace invitation token as query parameters if provided.",
    "parameters": [
      {
        "name": "SAMLResponse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAMLRESPONSE"
      },
      {
        "name": "RelayState",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELAYSTATE"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/sso/saml/login",
    "method": "initiateSsoSamlLogin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "This is the endpoint that is called when the user wants to initiate a SSO SAML login from Baserow (the service provider). The user will be redirected to the SAML identity provider (https://baserow.io/docs/index where the user can authenticate. Once logged in in the IdP, the user will be redirected back to the assertion consumer service endpoint (https://baserow.io/docs/index where the SAML response will be validated and a new JWT session token will be provided to work with Baserow APIs.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "The email address of the user that want to sign in using SAML."
      },
      {
        "name": "groupInvitationToken",
        "schema": "string",
        "description": "Please use the functionally identical `workspace_invitation_token` instead as this querystring is being removed in the future"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "An ISO 639 language code (with optional variant) selected by the user. Ex: en-GB."
      },
      {
        "name": "original",
        "schema": "string",
        "description": "The url to which the user should be redirected after a successful login or sign up."
      },
      {
        "name": "workspaceInvitationToken",
        "schema": "string",
        "description": "If provided and valid, the user accepts the workspace invitation and will have access to the workspace after login or signing up."
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/sso/saml/login-url",
    "method": "getSamlLoginUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Return the correct redirect_url to initiate the SSO SAML login. It needs an email address if multiple SAML providers are configured otherwise the only configured SAML provider signup URL will be returned.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "The email address of the user that want to sign in using SAML."
      },
      {
        "name": "groupInvitationToken",
        "schema": "string",
        "description": "Please use the functionally identical `workspace_invitation_token` instead as this querystring is being removed in the future."
      },
      {
        "name": "language",
        "schema": "string",
        "description": "An ISO 639 language code (with optional variant) selected by the user. Ex: en-GB."
      },
      {
        "name": "original",
        "schema": "string",
        "description": "The url to which the user should be redirected after a successful login."
      },
      {
        "name": "workspaceInvitationToken",
        "schema": "string",
        "description": "If provided and valid, the user accepts the workspace invitation and will have access to the workspace after login or signing up."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Unspecified response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/{team_id}",
    "method": "team",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Deletes a team if the authorized user is in the team's workspace. All the related children (e.g. subjects) are also going to be deleted.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "teamId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the team related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/{team_id}",
    "method": "team",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Returns the information related to the provided team id.",
    "parameters": [
      {
        "name": "teamId",
        "schema": "integer",
        "required": true,
        "description": "Returns the team related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/{team_id}",
    "method": "team",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Updates an existing team with a new name.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default_role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subjects",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/{team_id}/subjects",
    "method": "listSubjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Lists all team subjects in a given team.",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
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
    "url": "/api/teams/{team_id}/subjects",
    "method": "subject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Creates a new team subject.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subject_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subject_user_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT_TYPE"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/{team_id}/subjects/{subject_id}",
    "method": "subject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Deletes a subject if the authorized user is in the team's workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "subjectId",
        "schema": "integer",
        "required": true,
        "description": "The subject id to remove from the team.",
        "example": 0
      },
      {
        "name": "teamId",
        "schema": "integer",
        "required": true,
        "description": "The team id which the subject will be removed from.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/{team_id}/subjects/{subject_id}",
    "method": "subject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Returns the information related to the provided subject id",
    "parameters": [
      {
        "name": "subjectId",
        "schema": "integer",
        "required": true,
        "description": "Returns the subject related to the provided value.",
        "example": 0
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/group/{group_id}",
    "method": "getAllInGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_list_teams](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Lists all teams in a given group.",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Lists all teams in a given group.",
        "example": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Search for teams by their name."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "Sort teams by name or subjects."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/group/{group_id}",
    "method": "createInGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_create_team](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Creates a new team in a given group.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUP_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default_role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subjects",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/workspace/{workspace_id}",
    "method": "listInWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Lists all teams in a given workspace.",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "Search for teams by their name."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "Sort teams by name or subjects."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Lists all teams in a given workspace.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/teams/workspace/{workspace_id}",
    "method": "createNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Creates a new team.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "workspaceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default_role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subjects",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/templates",
    "method": "templates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Lists all the template categories and the related templates that are in that category. The template's `workspace_id` can be used for previewing purposes because that workspace contains the applications that are in the template. All the `get` and `list` endpoints related to that workspace are publicly accessible.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/templates/install/{group_id}/{template_id}",
    "method": "installApplications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_install_template](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Installs the applications of the given template into the given group if the user has access to that group. The response contains those newly created applications.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the group where the template applications must be installed into.",
        "example": 0
      },
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the template that must be installed.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/templates/install/{group_id}/{template_id}/async",
    "method": "startAsyncJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_install_template_async](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Start an async job to install the applications of the given template into the given group if the user has access to that group. The response contains those newly created applications.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the group where the template applications must be installed into.",
        "example": 0
      },
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the template that must be installed.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/templates/install/{workspace_id}/{template_id}",
    "method": "template",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "(https://baserow.io/docs/index Installs the applications of the given template into the given workspace if the user has access to that workspace. The response contains those newly created applications.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the template that must be installed.",
        "example": 0
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the workspace where the template applications must be installed into.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/templates/install/{workspace_id}/{template_id}/async",
    "method": "startAsyncJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Start an async job to install the applications of the given template into the given workspace if the user has access to that workspace. The response contains those newly created applications.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "templateId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the template that must be installed.",
        "example": 0
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The id related to the workspace where the template applications must be installed into.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/trash",
    "method": "inspectTrashContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trash",
    "typeScriptTag": "trash",
    "description": "Responds with the workspaces and applications available for the requesting user to inspect the trash contents of.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/trash/group/{group_id}",
    "method": "emptyGroupContents",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trash",
    "typeScriptTag": "trash",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_empty_contents](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Empties the specified group and/or application of trash, including the group and application themselves if they are trashed also.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "description": "Optionally filters down the trash to delete to only items for this application in the group."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "The group whose trash contents to empty, including the group itself if it is also trashed.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/trash/group/{group_id}",
    "method": "getGroupContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trash",
    "typeScriptTag": "trash",
    "description": "**This endpoint has been deprecated and replaced with a new endpoint, [workspace_get_contents](https://api.baserow.io).**\n\n**Support for this endpoint will end in 2024.**\n\n Responds with trash contents for a group optionally filtered to a specific application.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "description": "Optionally filters down the trash to only items for this application in the group."
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Returns the trash for the group with this id.",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Selects which page of trash contents should be returned."
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
    "url": "/api/trash/restore",
    "method": "restoreItem",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Trash",
    "typeScriptTag": "trash",
    "description": "Restores the specified trashed item back into baserow.",
    "parameters": [
      {
        "name": "trash_item_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parent_trash_item_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "trash_item_type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/trash/workspace/{workspace_id}",
    "method": "emptyWorkspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trash",
    "typeScriptTag": "trash",
    "description": "Empties the specified workspace and/or application of trash, including the workspace and application themselves if they are trashed also.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "description": "Optionally filters down the trash to delete to only items for this application in the workspace."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace whose trash contents to empty, including the workspace itself if it is also trashed.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/trash/workspace/{workspace_id}",
    "method": "getWorkspaceTrashContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trash",
    "typeScriptTag": "trash",
    "description": "Responds with trash contents for a workspace optionally filtered to a specific application.",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "description": "Optionally filters down the trash to only items for this application in the workspace."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Selects which page of trash contents should be returned."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Returns the trash for the workspace with this id.",
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
      }
    ]
  },
  {
    "url": "/api/user",
    "method": "user",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Creates a new user based on the provided values. If desired an authentication JWT can be generated right away. After creating an account the initial workspace containing a database is created.",
    "parameters": [
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
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "en"
      },
      {
        "name": "authenticate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "group_invitation_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace_invitation_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_id",
        "schema": "integer",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user-files/upload-file",
    "method": "file",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User files",
    "typeScriptTag": "userFiles",
    "description": "Uploads a file to Baserow by uploading the file contents directly. A `file` multipart is expected containing the file contents.",
    "parameters": [],
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
    "url": "/api/user-files/upload-via-url",
    "method": "uploadViaUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User files",
    "typeScriptTag": "userFiles",
    "description": "Uploads a file to Baserow by downloading it from the provided URL.",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
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
    "url": "/api/user-source-auth-refresh",
    "method": "refreshAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Generate a new access_token that can be used to continue operating on Baserow with a user source user starting from a valid refresh token.",
    "parameters": [],
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
    "url": "/api/user-source-token-blacklist",
    "method": "blacklistToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Blacklists the provided user source token. This can be used the sign the user off.",
    "parameters": [
      {
        "name": "refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user-source/{user_source_id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Deletes the user_source related by the given id.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "userSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user_source",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user-source/{user_source_id}",
    "method": "updateExistingUserSource",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Updates an existing user_source.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "userSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user_source",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user-source/{user_source_id}/move",
    "method": "rearrangeUserSource",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User sources",
    "typeScriptTag": "userSources",
    "description": "Moves the user_source in the application before another user_source or at the end of the application if no before user_source is given. The user_sources must belong to the same application.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "userSourceId",
        "schema": "integer",
        "required": true,
        "description": "The id of the user_source to move",
        "example": 0
      },
      {
        "name": "before_id",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/account",
    "method": "account",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Updates the account information of the authenticated user.",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_notification_frequency",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This serializer must be kept in sync with `UserSerializer`."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/change-password",
    "method": "password",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Changes the password of an authenticated user, but only if the old password matches.",
    "parameters": [
      {
        "name": "old_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OLD_PASSWORD"
      },
      {
        "name": "new_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/dashboard",
    "method": "viewPendingWorkspaceInvitations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Lists all the relevant user information that for example could be shown on a dashboard. It will contain all the pending workspace invitations for that user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/redo",
    "method": "redoAction",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Redoes the latest redoable action performed by the user making the request. a ClientSessionId header must be provided and only actions which were performed the same user with the same ClientSessionId value set on the api request that performed the action will be redone.Additionally the ClientSessionId header must be between 1 and 256 characters long and must only contain alphanumeric or the - characters.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "required": true,
        "description": "The particular client session to redo actions for. The actions must have been performed with this same header set with the same value for them to be redoable by this endpoint.",
        "example": "CLIENTSESSIONID"
      },
      {
        "name": "scopes",
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
    "url": "/api/user/reset-password",
    "method": "password",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Changes the password of a user if the reset token is valid. The **send_password_reset_email** endpoint sends an email to the user containing the token. That token can be used to change the password here without providing the old password.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
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
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/schedule-account-deletion",
    "method": "scheduleAccountDeletion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Schedules the account deletion of the authenticated user. The user will be permanently deleted after the grace delay defined by the instance administrator.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/send-reset-password-email",
    "method": "sendResetPasswordEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Sends an email containing the password reset link to the email address of the user. This will only be done if a user is found with the given email address. The endpoint will not fail if the email address is not found. The link is going to the valid for 48 hours.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "base_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BASE_URL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/token-auth",
    "method": "auth",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Authenticates an existing user based on their email and their password. If successful, an access token and a refresh token will be returned.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/token-blacklist",
    "method": "blacklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Blacklists the provided token. This can be used the sign the user off.",
    "parameters": [
      {
        "name": "refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/token-refresh",
    "method": "refresh",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Generate a new access_token that can be used to continue operating on Baserow starting from a valid refresh token.",
    "parameters": [
      {
        "name": "access",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESS"
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "token",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user/token-verify",
    "method": "verify",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Verifies if the refresh token is valid and can be used to generate a new access_token.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH_TOKEN"
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
    "url": "/api/user/undo",
    "method": "undoLatestUndoableAction",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "undoes the latest undoable action performed by the user making the request. a ClientSessionId header must be provided and only actions which were performed the same user with the same ClientSessionId value set on the api request that performed the action will be undone.Additionally the ClientSessionId header must be between 1 and 256 characters long and must only contain alphanumeric or the - characters.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "required": true,
        "description": "The particular client session to undo actions for. The actions must have been performed with this same header set with the same value for them to be undoable by this endpoint.",
        "example": "CLIENTSESSIONID"
      },
      {
        "name": "scopes",
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
    "url": "/api/workspaces",
    "method": "workspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Lists all the workspaces of the authorized user. A workspace can contain multiple applications like a database. Multiple users can have access to a workspace. For example each company could have their own workspace containing databases related to that company. The order of the workspaces are custom for each user. The order is configurable via the **order_workspaces** endpoint.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces",
    "method": "workspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Creates a new workspace where only the authorized user has access to. No initial data like database applications are added, they have to be created via other endpoints.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This serializers includes relevant fields of the Workspace model, but also\nsome WorkspaceUser specific fields related to the workspace user relation.\n\nAdditionally, the list of users are included for each workspace."
      }
    ]
  },
  {
    "url": "/api/workspaces/{workspace_id}",
    "method": "workspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Deletes an existing workspace if the authorized user belongs to the workspace. All the applications, databases, tables etc that were in the workspace are going to be deleted also.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the workspace related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/{workspace_id}",
    "method": "workspace",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Updates the existing workspace related to the provided `workspace_id` parameter if the authorized user belongs to the workspace. It is not yet possible to add additional users to a workspace.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Updates the workspace related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/{workspace_id}/leave",
    "method": "workspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Makes the authenticated user leave the workspace related to the provided `workspace_id` if the user is in that workspace. If the user is the last admin in the workspace, they will not be able to leave it. There must always be one admin in the workspace, otherwise it will be left without control. If that is the case, they must either delete the workspace or give another member admin permissions first.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Leaves the workspace related to the value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/{workspace_id}/permissions",
    "method": "permissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Returns a the permission data necessary to determine the permissions of a specific user over a specific workspace. \nSee `core.handler.CoreHandler.get_permissions()` for more details.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "The workspace id we want the permission object for.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/{workspace_invitation_id}",
    "method": "deleteInvitation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Deletes a workspace invitation if the authorized user has admin rights to the related workspace.",
    "parameters": [
      {
        "name": "workspaceInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the workspace invitation related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/{workspace_invitation_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Returns the requested workspace invitation if the authorized user has admin right to the related workspace",
    "parameters": [
      {
        "name": "workspaceInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Returns the workspace invitation related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/{workspace_invitation_id}",
    "method": "updateExistingInvitation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Updates the existing workspace invitation related to the provided `workspace_invitation_id` param if the authorized user has admin rights to the related workspace.",
    "parameters": [
      {
        "name": "workspaceInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Updates the workspace invitation related to the provided value.",
        "example": 0
      },
      {
        "name": "permissions",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/{workspace_invitation_id}/accept",
    "method": "acceptInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Accepts a workspace invitation with the given id if the email address of the user matches that of the invitation.",
    "parameters": [
      {
        "name": "workspaceInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Accepts the workspace invitation related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This serializers includes relevant fields of the Workspace model, but also\nsome WorkspaceUser specific fields related to the workspace user relation.\n\nAdditionally, the list of users are included for each workspace."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/{workspace_invitation_id}/reject",
    "method": "rejectInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Rejects a workspace invitation with the given id if the email address of the user matches that of the invitation.",
    "parameters": [
      {
        "name": "workspaceInvitationId",
        "schema": "integer",
        "required": true,
        "description": "Rejects the workspace invitation related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/token/{token}",
    "method": "getByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Responds with the serialized workspace invitation if an invitation with the provided token is found.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Returns the workspace invitation related to the provided token.",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This serializer is used for displaying the invitation to the user that doesn't\nhave access to the workspace yet, so not for invitation management purposes."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/workspace/{workspace_id}",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Lists all the workspace invitations of the workspace related to the provided `workspace_id` parameter if the authorized user has admin rights to that workspace.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Returns only invitations that are in the workspace related to the provided value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/invitations/workspace/{workspace_id}",
    "method": "createInvite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspace invitations",
    "typeScriptTag": "workspaceInvitations",
    "description": "Creates a new workspace invitations for an email address if the authorized user has admin rights to the related workspace. An email containing a sign up link will be send to the user.",
    "parameters": [
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Creates a workspace invitation to the workspace related to the provided value.",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "permissions",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "base_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BASE_URL"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/order",
    "method": "workspaces",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Changes the order of the provided workspace ids to the matching position that the id has in the list. If the authorized user does not belong to the workspace it will be ignored. The order will be custom for each user.",
    "parameters": [
      {
        "name": "clientSessionId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone."
      },
      {
        "name": "clientUndoRedoActionGroupId",
        "schema": "string",
        "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call."
      },
      {
        "name": "workspaces",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/workspaces/users/{workspace_user_id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Deletes a workspace user if the authorized user has admin rights to the related workspace.",
    "parameters": [
      {
        "name": "workspaceUserId",
        "schema": "integer",
        "required": true,
        "description": "Deletes the workspace user related to the provided value.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/users/{workspace_user_id}",
    "method": "updateWorkspaceUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Updates the existing workspace user related to the provided `workspace_user_id` param if the authorized user has admin rights to the related workspace.",
    "parameters": [
      {
        "name": "workspaceUserId",
        "schema": "integer",
        "required": true,
        "description": "Updates the workspace user related to the provided value.",
        "example": 0
      },
      {
        "name": "permissions",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/workspaces/users/workspace/{workspace_id}",
    "method": "listUsersInWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Lists all the users that are in a workspace if the authorized user has admin permissions to the related workspace. To add a user to a workspace an invitation must be sent first.",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": "Search for workspace users by username, or email."
      },
      {
        "name": "sorts",
        "schema": "string",
        "description": "Sort workspace users by name, email or role."
      },
      {
        "name": "workspaceId",
        "schema": "integer",
        "required": true,
        "description": "Lists workspace users related to the provided workspace value.",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Baserow API spec"
      apiBaseUrl="api.baserow.io"
      apiVersion="1.23.2"
      endpoints={211}
      sdkMethods={299}
      schemas={1137}
      parameters={914}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baserow/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baserow/openapi.yaml"
      developerDocumentation="baserow.io/docs/index"
    />
  );
}
  