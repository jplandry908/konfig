import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BoxTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="box-typescript-sdk"
      metaDescription={`Box (NYSE:BOX) is the Cloud Content Management company that empowers enterprises to revolutionize how they work by securely connecting their people, information and applications. Founded in 2005, Box powers more than 87,000 businesses globally, including AstraZeneca, General Electric, P&G, and The GAP. Box is headquartered in Redwood City, CA, with offices across the United States, Europe and Asia. To learn more about Box, visit http://www.box.com/.`}
      company="Box"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/box/logo.png"
      companyKebabCase="box"
      clientNameCamelCase="box"
      homepage="box.com"
      lastUpdated={new Date("2024-03-17T23:48:01.149Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/box/favicon.png"
      contactUrl="https://box.dev"
      contactEmail="devrel@box.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/box/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["collaboration","storage","cloud_content_management","file_sharing","ftp_replacement","enterprise_content_management","content_management","esignature","esign"]}
      methods={[
  {
    "url": "/authorize",
    "method": "authorize",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Authorize user",
    "parameters": [
      {
        "name": "responseType",
        "schema": "string",
        "required": true,
        "description": "The type of response we'd like to receive.",
        "example": "code"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The Client ID of the application that is requesting to authenticate\nthe user. To get the Client ID for your application, log in to your\nBox developer console and click the **Edit Application** link for\nthe application you're working with. In the OAuth 2.0 Parameters section\nof the configuration page, find the item labelled `client_id`. The\ntext of that item is your application's Client ID.",
        "example": "ly1nj6n11vionaie65emwzk575hnnmrk"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "The URI to which Box redirects the browser after the user has granted\nor denied the application permission. This URI match one of the redirect\nURIs in the configuration of your application. It must be a\nvalid HTTPS URI and it needs to be able to handle the redirection to\ncomplete the next step in the OAuth 2.0 flow.\nAlthough this parameter is optional, it must be a part of the\nauthorization URL if you configured multiple redirect URIs\nfor the application in the developer console. A missing parameter causes\na `redirect_uri_missing` error after the user grants application access.",
        "example": "http://example.com/auth/callback"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "A custom string of your choice. Box will pass the same string to\nthe redirect URL when authentication is complete. This parameter\ncan be used to identify a user on redirect, as well as protect\nagainst hijacked sessions and other exploits.",
        "example": "my_state"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "A space-separated list of application scopes you'd like to\nauthenticate the user for. This defaults to all the scopes configured\nfor the application in its configuration page.",
        "example": "admin_readwrite"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth2/token",
    "method": "requestAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Request access token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "authorization_code"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ly1nj6n11vionaie65emwzk575hnnmrk"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "hOzsTeFlT6ko0dme22uGbQal04SBPYc1"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "n22JPxrh18m4Y0wIZPIqYZK7VRrsMTWW"
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ"
      },
      {
        "name": "assertion",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "xxxxx.yyyyy.zzzzz"
      },
      {
        "name": "subject_token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ"
      },
      {
        "name": "subject_token_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "urn:ietf:params:oauth:token-type:access_token"
      },
      {
        "name": "actor_token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ"
      },
      {
        "name": "actor_token_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "urn:ietf:params:oauth:token-type:id_token"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "item_upload item_preview base_explorer"
      },
      {
        "name": "resource",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://api.box.com/2.0/files/123456"
      },
      {
        "name": "box_subject_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "enterprise"
      },
      {
        "name": "box_subject_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123456789"
      },
      {
        "name": "box_shared_link",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://cloud.box.com/s/123456"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A token that can be used to make authenticated API calls."
      },
      {
        "statusCode": "400",
        "description": "An OAuth 2.0 error"
      },
      {
        "statusCode": "default",
        "description": "An OAuth 2.0 error"
      }
    ]
  },
  {
    "url": "/oauth2/token#refresh",
    "method": "refreshAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Refresh access token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "refresh_token"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ly1nj6n11vionaie65emwzk575hnnmrk"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "hOzsTeFlT6ko0dme22uGbQal04SBPYc1"
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A token that can be used to make authenticated API calls."
      },
      {
        "statusCode": "400",
        "description": "An OAuth 2.0 error"
      },
      {
        "statusCode": "default",
        "description": "An OAuth 2.0 error"
      }
    ]
  },
  {
    "url": "/oauth2/revoke",
    "method": "revokeAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Revoke access token",
    "parameters": [
      {
        "name": "client_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ly1nj6n11vionaie65emwzk575hnnmrk"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "hOzsTeFlT6ko0dme22uGbQal04SBPYc1"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "n22JPxrh18m4Y0wIZPIqYZK7VRrsMTWW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns an empty response when the token was successfully revoked."
      },
      {
        "statusCode": "400",
        "description": "An OAuth 2.0 error"
      },
      {
        "statusCode": "default",
        "description": "An OAuth 2.0 error"
      }
    ]
  },
  {
    "url": "/files/{file_id}",
    "method": "deleteFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the file has been successfully\ndeleted."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get file information",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.\n\nAdditionally this field can be used to query any metadata\napplied to the file by specifying the `metadata` field as well\nas the scope and key of the template to retrieve, for example\n`?field=metadata.enterprise_12345.contractTemplate`.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.",
        "example": "1"
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": false,
        "description": "The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.",
        "example": "shared_link=[link]&shared_link_password=[password]"
      },
      {
        "name": "xRepHints",
        "schema": "string",
        "required": false,
        "description": "A header required to request specific `representations`\nof a file. Use this in combination with the `fields` query\nparameter to request a specific file representation.\n\nThe general format for these representations is\n`X-Rep-Hints: [...]` where `[...]` is one or many\nhints in the format `[fileType?query]`.\n\nFor example, to request a `png` representation in `32x32`\nas well as `64x64` pixel dimensions provide the following\nhints.\n\n`x-rep-hints: [jpg?dimensions=32x32][jpg?dimensions=64x64]`\n\nAdditionally, a `text` representation is available for all\ndocument file types in Box using the `[extracted_text]`\nrepresentation.\n\n`x-rep-hints: [extracted_text]`",
        "example": "[pdf]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "304",
        "description": "Returns an empty response when the `If-None-Match` header matches\nthe current `etag` value of the folder. This indicates that the folder\nhas not changed since it was last requested."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "415",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}",
    "method": "restoreFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trashed files",
    "typeScriptTag": "trashedFiles",
    "description": "Restore file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Restored.docx"
      },
      {
        "name": "parent",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Represents a file restored from the trash."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}",
    "method": "updateFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Update file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "approved"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "The latest reports. Automatically updated"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "NewFile.txt"
      },
      {
        "name": "parent",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "shared_link",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "lock",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disposition_at",
        "schema": "string",
        "description": "",
        "example": "2012-12-12T10:53:43-08:00"
      },
      {
        "name": "permissions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collections",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/content",
    "method": "fileContentGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Downloads",
    "typeScriptTag": "downloads",
    "description": "Download file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "The byte range of the content to download.\n\nThe format `bytes={start_byte}-{end_byte}` can be used to specify\nwhat section of the file to download.",
        "example": "bytes=0-1024"
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": false,
        "description": "The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.",
        "example": "shared_link=[link]&shared_link_password=[password]"
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "The file version to download",
        "example": "4"
      },
      {
        "name": "accessToken",
        "schema": "string",
        "required": false,
        "description": "An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication.\nWhen using this parameter, please make sure that the access token is sufficiently scoped down to only allow read access to that file and no other files or folders.",
        "example": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The binary content of the file"
      },
      {
        "statusCode": "202",
        "description": "If the file is not ready to be downloaded yet `Retry-After` header will\nbe returned indicating the time in seconds after which the file will\nbe available for the client to download.\n\nThis response can occur when the file was uploaded immediately before the\ndownload request."
      },
      {
        "statusCode": "302",
        "description": "If the file is available for download the response will include a\n`Location` header for the file on `dl.boxcloud.com`.\n\nThe `dl.boxcloud.com` URL is not persistent and clients will need\nto follow the redirect to actually download the file."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/content",
    "method": "fileContentUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Upload file version",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "contentMd5",
        "schema": "string",
        "required": false,
        "description": "An optional header containing the SHA1 hash of the file to\nensure that the file was not corrupted in transit.",
        "example": "134b65991ed521fcfe4724b7d814ab8ded5185dc"
      },
      {
        "name": "attributes",
        "schema": "object",
        "required": true,
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
        "statusCode": "200",
        "description": "A list of files"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/content",
    "method": "preflightCheckBeforeUpload",
    "httpMethod": HttpMethodsEnum.OPTIONS,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Preflight check before upload",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "File.mp4"
      },
      {
        "name": "size",
        "schema": "integer",
        "description": "",
        "example": 1024
      },
      {
        "name": "parent",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The details for the upload session for the file."
      },
      {
        "statusCode": "409",
        "description": "The error that occurs when a file can not be created due\nto a conflict."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/content",
    "method": "smallFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Upload file",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "contentMd5",
        "schema": "string",
        "required": false,
        "description": "An optional header containing the SHA1 hash of the file to\nensure that the file was not corrupted in transit.",
        "example": "134b65991ed521fcfe4724b7d814ab8ded5185dc"
      },
      {
        "name": "attributes",
        "schema": "object",
        "required": true,
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
        "description": "A list of files"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/upload_sessions",
    "method": "createSessionForUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads (Chunked)",
    "typeScriptTag": "uploadsChunked",
    "description": "Create upload session",
    "parameters": [
      {
        "name": "folder_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0"
      },
      {
        "name": "file_size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 104857600
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Project.mov"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An upload session for chunk uploading a file."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/upload_sessions",
    "method": "createSessionForUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads (Chunked)",
    "typeScriptTag": "uploadsChunked",
    "description": "Create upload session for existing file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "file_size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 104857600
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Project.mov"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An upload session for chunk uploading a file."
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/upload_sessions/{upload_session_id}",
    "method": "removeUploadSession",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Uploads (Chunked)",
    "typeScriptTag": "uploadsChunked",
    "description": "Remove upload session",
    "parameters": [
      {
        "name": "uploadSessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the upload session.",
        "example": "D5E3F7A"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A blank response is returned if the session was\nsuccessfully aborted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/upload_sessions/{upload_session_id}",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uploads (Chunked)",
    "typeScriptTag": "uploadsChunked",
    "description": "Get upload session",
    "parameters": [
      {
        "name": "uploadSessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the upload session.",
        "example": "D5E3F7A"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An upload session for chunk uploading a file."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/upload_sessions/{upload_session_id}",
    "method": "filePartUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Uploads (Chunked)",
    "typeScriptTag": "uploadsChunked",
    "description": "Upload part of file",
    "parameters": [
      {
        "name": "uploadSessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the upload session.",
        "example": "D5E3F7A"
      },
      {
        "name": "digest",
        "schema": "string",
        "required": true,
        "description": "The [RFC3230][1] message digest of the chunk uploaded.\n\nOnly SHA1 is supported. The SHA1 digest must be base64\nencoded. The format of this header is as\n`sha=BASE64_ENCODED_DIGEST`.\n\nTo get the value for the `SHA` digest, use the\nopenSSL command to encode the file part:\n`openssl sha1 -binary <FILE_PART_NAME> | base64`\n\n[1]: https://tools.ietf.org/html/rfc3230",
        "example": "sha=fpRyg5eVQletdZqEKaFlqwBXJzM="
      },
      {
        "name": "contentRange",
        "schema": "string",
        "required": true,
        "description": "The byte range of the chunk.\n\nMust not overlap with the range of a part already\nuploaded this session. Each part’s size must be\nexactly equal in size to the part size specified\nin the upload session that you created.\nOne exception is the last part of the file, as this can be smaller.\n\nWhen providing the value for `content-range`, remember that:\n\n* The lower bound of each part's byte range\n  must be a multiple of the part size.\n* The higher bound must be a multiple of the part size - 1.",
        "example": "bytes 8388608-16777215/445856194"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A chunk of a file uploaded as part of\nan upload session, as returned by some endpoints."
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "416",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/upload_sessions/{upload_session_id}/parts",
    "method": "listParts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uploads (Chunked)",
    "typeScriptTag": "uploadsChunked",
    "description": "List parts",
    "parameters": [
      {
        "name": "uploadSessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the upload session.",
        "example": "D5E3F7A"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of uploaded chunks for an upload\nsession."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/upload_sessions/{upload_session_id}/commit",
    "method": "commitSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads (Chunked)",
    "typeScriptTag": "uploadsChunked",
    "description": "Commit upload session",
    "parameters": [
      {
        "name": "uploadSessionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the upload session.",
        "example": "D5E3F7A"
      },
      {
        "name": "digest",
        "schema": "string",
        "required": true,
        "description": "The [RFC3230][1] message digest of the whole file.\n\nOnly SHA1 is supported. The SHA1 digest must be Base64\nencoded. The format of this header is as\n`sha=BASE64_ENCODED_DIGEST`.\n\n[1]: https://tools.ietf.org/html/rfc3230",
        "example": "sha=fpRyg5eVQletdZqEKaFlqwBXJzM="
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      },
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.",
        "example": "1"
      },
      {
        "name": "parts",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A list of files"
      },
      {
        "statusCode": "202",
        "description": "Returns when all chunks have been uploaded but not yet processed.\n\nInspect the upload session to get more information about the\nprogress of processing the chunks, then retry committing the file\nwhen all chunks have processed."
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/copy",
    "method": "createCopy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Copy file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FileCopy.txt"
      },
      {
        "name": "parent",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "304",
        "description": "Returns an empty response when the `If-None-Match` header matches\nthe current `etag` value of the file. This indicates that the file\nhas not changed since it was last requested."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/thumbnail.{extension}",
    "method": "getThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get file thumbnail",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "extension",
        "schema": "string",
        "required": true,
        "description": "The file format for the thumbnail",
        "example": "png"
      },
      {
        "name": "minHeight",
        "schema": "integer",
        "description": "The minimum height of the thumbnail",
        "example": 32
      },
      {
        "name": "minWidth",
        "schema": "integer",
        "description": "The minimum width of the thumbnail",
        "example": 32
      },
      {
        "name": "maxHeight",
        "schema": "integer",
        "required": false,
        "description": "The maximum height of the thumbnail",
        "example": 320
      },
      {
        "name": "maxWidth",
        "schema": "integer",
        "required": false,
        "description": "The maximum width of the thumbnail",
        "example": 320
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The thumbnail"
      },
      {
        "statusCode": "202",
        "description": "Sometimes generating a thumbnail can take a few seconds. In these\nsituations the API returns a `Location`-header pointing to a\nplaceholder graphic for this file type.\n\nThe placeholder graphic can be used in a user interface until the\nthumbnail generation has completed. The `Retry-After`-header indicates\nwhen to the thumbnail will be ready. At that time, retry this endpoint\nto retrieve the thumbnail."
      },
      {
        "statusCode": "302",
        "description": "Returns an error when Box is not able to create a thumbnail for this\nfile type.\n\nInstead, a `Location`-header pointing to a placeholder graphic for\nthis file type will be returned."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/collaborations",
    "method": "fileAccessList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborations (List)",
    "typeScriptTag": "collaborationsList",
    "description": "List file collaborations",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of collaborations"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/comments",
    "method": "listFileComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List file comments",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of comments"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/tasks",
    "method": "listOnFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "List tasks on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of tasks"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/trash",
    "method": "permanentlyRemoveFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trashed files",
    "typeScriptTag": "trashedFiles",
    "description": "Permanently remove file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the file was\npermanently deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/trash",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trashed files",
    "typeScriptTag": "trashedFiles",
    "description": "Get trashed file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a trashed file."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/versions",
    "method": "listAllVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File versions",
    "typeScriptTag": "fileVersions",
    "description": "List all file versions",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of file versions"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/versions/{file_version_id}",
    "method": "moveToTrash",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "File versions",
    "typeScriptTag": "fileVersions",
    "description": "Remove file version",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fileVersionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file version",
        "example": "1234"
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the file has been successfully\ndeleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/versions/{file_version_id}",
    "method": "getSpecificVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File versions",
    "typeScriptTag": "fileVersions",
    "description": "Get file version",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "fileVersionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file version",
        "example": "1234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file version, as can be returned from any\nfile version API endpoints by default"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/versions/{file_version_id}",
    "method": "restoreVersion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "File versions",
    "typeScriptTag": "fileVersions",
    "description": "Restore file version",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fileVersionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file version",
        "example": "1234"
      },
      {
        "name": "trashed_at",
        "schema": "string",
        "description": "",
        "example": "null"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file version, as can be returned from any\nfile version API endpoints by default"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/versions/current",
    "method": "promoteFileVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File versions",
    "typeScriptTag": "fileVersions",
    "description": "Promote file version",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "11446498"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "file_version"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A full representation of a file version, as can be returned from any\nfile version API endpoints by default"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata",
    "method": "listFileMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata instances (Files)",
    "typeScriptTag": "metadataInstancesFiles",
    "description": "List metadata instances on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of metadata instances that have been applied to a file or folder."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "removeClassification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Classifications on files",
    "typeScriptTag": "classificationsOnFiles",
    "description": "Remove classification from file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the classification is\nsuccessfully deleted."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "getClassificationMetadataInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Classifications on files",
    "typeScriptTag": "classificationsOnFiles",
    "description": "Get classification on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of the classification metadata template, containing\nthe classification applied to the file or folder.\n\nTo get more details about the classification applied to an item,\nrequest the classification metadata template."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "addClassification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Classifications on files",
    "typeScriptTag": "classificationsOnFiles",
    "description": "Add classification to file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "Box__Security__Classification__Key",
        "schema": "string",
        "description": "",
        "example": "Sensitive"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of the classification metadata template, containing\nthe classification applied to the file or folder.\n\nTo get more details about the classification applied to an item,\nrequest the classification metadata template."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "updateClassificationMetadataInstance",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Classifications on files",
    "typeScriptTag": "classificationsOnFiles",
    "description": "Update classification on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An instance of the classification metadata template, containing\nthe classification applied to the file or folder.\n\nTo get more details about the classification applied to an item,\nrequest the classification metadata template."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/{scope}/{template_key}",
    "method": "removeInstance",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metadata instances (Files)",
    "typeScriptTag": "metadataInstancesFiles",
    "description": "Remove metadata instance from file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the metadata is\nsuccessfully deleted."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/{scope}/{template_key}",
    "method": "getInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata instances (Files)",
    "typeScriptTag": "metadataInstancesFiles",
    "description": "Get metadata instance on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of a metadata template, which has been applied to a file or\nfolder."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/{scope}/{template_key}",
    "method": "applyTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metadata instances (Files)",
    "typeScriptTag": "metadataInstancesFiles",
    "description": "Create metadata instance on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of a metadata template, which has been applied to a file or\nfolder."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/{scope}/{template_key}",
    "method": "updateInstanceOnFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Metadata instances (Files)",
    "typeScriptTag": "metadataInstancesFiles",
    "description": "Update metadata instance on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An instance of a metadata template, which has been applied to a file or\nfolder."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/global/boxSkillsCards",
    "method": "removeBoxSkillCards",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Remove Box Skill cards from file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the cards are\nsuccessfully deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/global/boxSkillsCards",
    "method": "listBoxSkillCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "List Box Skill cards on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The metadata assigned to a using for Box skills."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/global/boxSkillsCards",
    "method": "applyBoxSkillCards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Create Box Skill cards on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "cards",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The metadata assigned to a using for Box skills."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/metadata/global/boxSkillsCards",
    "method": "updateBoxSkillCardsOnFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Update Box Skill cards on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The metadata assigned to a using for Box skills."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/watermark",
    "method": "removeWatermark",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Watermarks (Files)",
    "typeScriptTag": "watermarksFiles",
    "description": "Remove watermark from file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Removes the watermark and returns an empty response."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/watermark",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Watermarks (Files)",
    "typeScriptTag": "watermarksFiles",
    "description": "Get watermark on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A watermark is a semi-transparent overlay on an embedded file\npreview that displays a viewer's email address or user ID\nand the time of access over a file's content"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}/watermark",
    "method": "applyWatermarkToFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Watermarks (Files)",
    "typeScriptTag": "watermarksFiles",
    "description": "Apply watermark to file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "watermark",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A watermark is a semi-transparent overlay on an embedded file\npreview that displays a viewer's email address or user ID\nand the time of access over a file's content"
      },
      {
        "statusCode": "201",
        "description": "A watermark is a semi-transparent overlay on an embedded file\npreview that displays a viewer's email address or user ID\nand the time of access over a file's content"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_requests/{file_request_id}",
    "method": "deletePermanently",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "File requests",
    "typeScriptTag": "fileRequests",
    "description": "Delete file request",
    "parameters": [
      {
        "name": "fileRequestId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a file request.\n\nThe ID for any file request can be determined\nby visiting a file request builder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/filerequest/123`\nthe `file_request_id` is `123`.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the file request has been successfully\ndeleted."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_requests/{file_request_id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File requests",
    "typeScriptTag": "fileRequests",
    "description": "Get file request",
    "parameters": [
      {
        "name": "fileRequestId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a file request.\n\nThe ID for any file request can be determined\nby visiting a file request builder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/filerequest/123`\nthe `file_request_id` is `123`.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a file request, as returned\nfrom any file request API endpoints by default."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_requests/{file_request_id}",
    "method": "updateRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "File requests",
    "typeScriptTag": "fileRequests",
    "description": "Update file request",
    "parameters": [
      {
        "name": "fileRequestId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a file request.\n\nThe ID for any file request can be determined\nby visiting a file request builder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/filerequest/123`\nthe `file_request_id` is `123`.",
        "example": "123"
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Please upload required documents"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Please upload required documents"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "active"
      },
      {
        "name": "is_email_required",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "is_description_required",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "expires_at",
        "schema": "string",
        "description": "",
        "example": "2020-09-28T10:53:43-08:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a file request, as returned\nfrom any file request API endpoints by default."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_requests/{file_request_id}/copy",
    "method": "copyRequestToFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File requests",
    "typeScriptTag": "fileRequests",
    "description": "Copy file request",
    "parameters": [
      {
        "name": "fileRequestId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a file request.\n\nThe ID for any file request can be determined\nby visiting a file request builder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/filerequest/123`\nthe `file_request_id` is `123`.",
        "example": "123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a file request, as returned\nfrom any file request API endpoints by default."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Delete folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      },
      {
        "name": "recursive",
        "schema": "boolean",
        "required": false,
        "description": "Delete a folder that is not empty by recursively deleting the\nfolder and all of its content.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the folder is successfully deleted\nor moved to the trash."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "503",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}",
    "method": "getFolderDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Get folder information",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.\n\nAdditionally this field can be used to query any metadata\napplied to the file by specifying the `metadata` field as well\nas the scope and key of the template to retrieve, for example\n`?field=metadata.enterprise_12345.contractTemplate`.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.",
        "example": "1"
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": false,
        "description": "The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.",
        "example": "shared_link=[link]&shared_link_password=[password]"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Defines the **second** attribute by which items\nare sorted.\n\nThe folder type affects the way the items\nare sorted:\n\n  * **Standard folder**:\n  Items are always sorted by\n  their `type` first, with\n  folders listed before files,\n  and files listed\n  before web links.\n\n  * **Root folder**:\n  This parameter is not supported\n  for marker-based pagination\n  on the root folder\n\n  (the folder with an `id` of `0`).\n\n  * **Shared folder with parent path\n  to the associated folder visible to\n  the collaborator**:\n  Items are always sorted by\n  their `type` first, with\n  folders listed before files,\n  and files listed\n  before web links.",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.",
        "example": "ASC"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "304",
        "description": "Returns an empty response when the `If-None-Match` header matches\nthe current `etag` value of the folder. This indicates that the folder\nhas not changed since it was last requested."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}",
    "method": "restoreFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trashed folders",
    "typeScriptTag": "trashedFolders",
    "description": "Restore folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Restored Photos"
      },
      {
        "name": "parent",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Represents a folder restored from the trash."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}",
    "method": "updateFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Update folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "ifMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.",
        "example": "1"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "approved"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Legal contracts for the new ACME deal"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "New Folder"
      },
      {
        "name": "sync_state",
        "schema": "string",
        "description": "",
        "example": "synced"
      },
      {
        "name": "can_non_owners_invite",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "parent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shared_link",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "folder_upload_email",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "is_collaboration_restricted_to_enterprise",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "collections",
        "schema": "array",
        "description": ""
      },
      {
        "name": "can_non_owners_view_collaborators",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "503",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/items",
    "method": "listItemsInFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "List items in folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.\n\nAdditionally this field can be used to query any metadata\napplied to the file by specifying the `metadata` field as well\nas the scope and key of the template to retrieve, for example\n`?field=metadata.enterprise_12345.contractTemplate`.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "usemarker",
        "schema": "boolean",
        "required": false,
        "description": "Specifies whether to use marker-based pagination instead of\noffset-based pagination. Only one pagination method can\nbe used at a time.\n\nBy setting this value to true, the API will return a `marker` field\nthat can be passed as a parameter to this endpoint to get the next\npage of the response.",
        "example": true
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": false,
        "description": "The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.",
        "example": "shared_link=[link]&shared_link_password=[password]"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Defines the **second** attribute by which items\nare sorted.\n\nThe folder type affects the way the items\nare sorted:\n\n  * **Standard folder**:\n  Items are always sorted by\n  their `type` first, with\n  folders listed before files,\n  and files listed\n  before web links.\n\n  * **Root folder**:\n  This parameter is not supported\n  for marker-based pagination\n  on the root folder\n\n  (the folder with an `id` of `0`).\n\n  * **Shared folder with parent path\n  to the associated folder visible to\n  the collaborator**:\n  Items are always sorted by\n  their `type` first, with\n  folders listed before files,\n  and files listed\n  before web links.",
        "example": "id"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.",
        "example": "ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of files, folders, and web links in\ntheir mini representation."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders",
    "method": "folders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Create folder",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "New Folder"
      },
      {
        "name": "parent",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "folder_upload_email",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "sync_state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "synced"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/copy",
    "method": "createCopy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Copy folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the folder to copy.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder with the ID `0` can not be copied.",
        "example": "0"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "New Folder"
      },
      {
        "name": "parent",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "304",
        "description": "Returns an empty response when the `If-None-Match` header matches\nthe current `etag` value of the folder. This indicates that the folder\nhas not changed since it was last requested."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/collaborations",
    "method": "folderAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborations (List)",
    "typeScriptTag": "collaborationsList",
    "description": "List folder collaborations",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of collaborations"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/trash",
    "method": "permanentlyRemoveFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trashed folders",
    "typeScriptTag": "trashedFolders",
    "description": "Permanently remove folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the folder was\npermanently deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/trash",
    "method": "getdFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trashed folders",
    "typeScriptTag": "trashedFolders",
    "description": "Get trashed folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a trashed folder."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata",
    "method": "listOnFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata instances (Folders)",
    "typeScriptTag": "metadataInstancesFolders",
    "description": "List metadata instances on folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of metadata instances that have been applied to a file or folder."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "removeFromFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Classifications on folders",
    "typeScriptTag": "classificationsOnFolders",
    "description": "Remove classification from folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the classification is\nsuccessfully deleted."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "getClassificationMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Classifications on folders",
    "typeScriptTag": "classificationsOnFolders",
    "description": "Get classification on folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of the classification metadata template, containing\nthe classification applied to the file or folder.\n\nTo get more details about the classification applied to an item,\nrequest the classification metadata template."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "addClassificationToFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Classifications on folders",
    "typeScriptTag": "classificationsOnFolders",
    "description": "Add classification to folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "Box__Security__Classification__Key",
        "schema": "string",
        "description": "",
        "example": "Sensitive"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of the classification metadata template, containing\nthe classification applied to the file or folder.\n\nTo get more details about the classification applied to an item,\nrequest the classification metadata template."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo",
    "method": "updateClassification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Classifications on folders",
    "typeScriptTag": "classificationsOnFolders",
    "description": "Update classification on folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An instance of the classification metadata template, containing\nthe classification applied to the file or folder.\n\nTo get more details about the classification applied to an item,\nrequest the classification metadata template."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/{scope}/{template_key}",
    "method": "removeInstance",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metadata instances (Folders)",
    "typeScriptTag": "metadataInstancesFolders",
    "description": "Remove metadata instance from folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the metadata is\nsuccessfully deleted."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/{scope}/{template_key}",
    "method": "getFolderMetadataInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata instances (Folders)",
    "typeScriptTag": "metadataInstancesFolders",
    "description": "Get metadata instance on folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of a metadata template, which has been applied to a file or\nfolder."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/{scope}/{template_key}",
    "method": "applyTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metadata instances (Folders)",
    "typeScriptTag": "metadataInstancesFolders",
    "description": "Create metadata instance on folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An instance of a metadata template, which has been applied to a file or\nfolder."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/metadata/{scope}/{template_key}",
    "method": "updateInstanceOnFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Metadata instances (Folders)",
    "typeScriptTag": "metadataInstancesFolders",
    "description": "Update metadata instance on folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An instance of a metadata template, which has been applied to a file or\nfolder."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/trash/items",
    "method": "listRetrievedItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trashed items",
    "typeScriptTag": "trashedItems",
    "description": "List trashed items",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "usemarker",
        "schema": "boolean",
        "required": false,
        "description": "Specifies whether to use marker-based pagination instead of\noffset-based pagination. Only one pagination method can\nbe used at a time.\n\nBy setting this value to true, the API will return a `marker` field\nthat can be passed as a parameter to this endpoint to get the next\npage of the response.",
        "example": true
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.",
        "example": "ASC"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Defines the **second** attribute by which items\nare sorted.\n\nItems are always sorted by their `type` first, with\nfolders listed before files, and files listed\nbefore web links.\n\nThis parameter is not supported when using marker-based pagination.",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of files, folders, and web links in\ntheir mini representation."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/watermark",
    "method": "removeFolderWatermark",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Watermarks (Folders)",
    "typeScriptTag": "watermarksFolders",
    "description": "Remove watermark from folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response will be returned when the watermark\nwas successfully deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/watermark",
    "method": "getFolderWatermark",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Watermarks (Folders)",
    "typeScriptTag": "watermarksFolders",
    "description": "Get watermark for folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A watermark is a semi-transparent overlay on an embedded file\npreview that displays a viewer's email address or user ID\nand the time of access over a file's content"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}/watermark",
    "method": "applyToFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Watermarks (Folders)",
    "typeScriptTag": "watermarksFolders",
    "description": "Apply watermark to folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "watermark",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A watermark is a semi-transparent overlay on an embedded file\npreview that displays a viewer's email address or user ID\nand the time of access over a file's content"
      },
      {
        "statusCode": "201",
        "description": "A watermark is a semi-transparent overlay on an embedded file\npreview that displays a viewer's email address or user ID\nand the time of access over a file's content"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folder_locks",
    "method": "listDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folder Locks",
    "typeScriptTag": "folderLocks",
    "description": "List folder locks",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of folder locks"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folder_locks",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folder Locks",
    "typeScriptTag": "folderLocks",
    "description": "Create folder lock",
    "parameters": [
      {
        "name": "locked_operations",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "folder",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Folder locks define access restrictions placed by folder owners\nto prevent specific folders from being moved or deleted."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folder_locks/{folder_lock_id}",
    "method": "deleteFolderLock",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folder Locks",
    "typeScriptTag": "folderLocks",
    "description": "Delete folder lock",
    "parameters": [
      {
        "name": "folderLockId",
        "schema": "string",
        "required": true,
        "description": "The ID of the folder lock.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the folder lock is successfully deleted."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates",
    "method": "findByInstanceId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "Find metadata template by instance ID",
    "parameters": [
      {
        "name": "metadataInstanceId",
        "schema": "string",
        "required": true,
        "description": "The ID of an instance of the metadata template to find.",
        "example": "01234500-12f1-1234-aa12-b1d234cb567e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of metadata templates"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema",
    "method": "listAllClassifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Classifications",
    "typeScriptTag": "classifications",
    "description": "List all classifications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A metadata template that holds the security classifications\ndefined by an enterprise."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add",
    "method": "addNewClassifications",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Classifications",
    "typeScriptTag": "classifications",
    "description": "Add classification",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A metadata template that holds the security classifications\ndefined by an enterprise."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update",
    "method": "updateLabelsDescriptions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Classifications",
    "typeScriptTag": "classifications",
    "description": "Update classification",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A metadata template that holds the security classifications\ndefined by an enterprise."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/{scope}/{template_key}/schema",
    "method": "deleteSchema",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "Remove metadata template",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the metadata\ntemplate is successfully deleted."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/{scope}/{template_key}/schema",
    "method": "getByNameSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "Get metadata template by name",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A template for metadata that can be applied to files and folders"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/{scope}/{template_key}/schema",
    "method": "updateSchema",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "Update metadata template",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The scope of the metadata template",
        "example": "global"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The name of the metadata template",
        "example": "properties"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A template for metadata that can be applied to files and folders"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/{template_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "Get metadata template by ID",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template",
        "example": "f7a9891f"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A template for metadata that can be applied to files and folders"
      },
      {
        "statusCode": "400",
        "description": "A template for metadata that can be applied to files and folders"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/global",
    "method": "listGlobal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "List all global metadata templates",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of metadata templates"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/enterprise",
    "method": "listForEnterprise",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "List all metadata templates for enterprise",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of metadata templates"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/schema",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metadata templates",
    "typeScriptTag": "metadataTemplates",
    "description": "Create metadata template",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enterprise"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "productInfo"
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Product Info"
      },
      {
        "name": "hidden",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "copyInstanceOnItemCopy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A template for metadata that can be applied to files and folders"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_templates/schema#classifications",
    "method": "initializeTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Classifications",
    "typeScriptTag": "classifications",
    "description": "Add initial classifications",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enterprise"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "securityClassification-6VMVochwUWo"
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Classification"
      },
      {
        "name": "hidden",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "copyInstanceOnItemCopy",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "fields",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A metadata template that holds the security classifications\ndefined by an enterprise."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_cascade_policies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata cascade policies",
    "typeScriptTag": "metadataCascadePolicies",
    "description": "List metadata cascade policies",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "Specifies which folder to return policies for. This can not be used on the\nroot folder with ID `0`.",
        "example": "31232"
      },
      {
        "name": "ownerEnterpriseId",
        "schema": "string",
        "description": "The ID of the enterprise ID for which to find metadata\ncascade policies. If not specified, it defaults to the\ncurrent enterprise.",
        "example": "31232"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of metadata cascade policies."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_cascade_policies",
    "method": "createPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metadata cascade policies",
    "typeScriptTag": "metadataCascadePolicies",
    "description": "Create metadata cascade policy",
    "parameters": [
      {
        "name": "folder_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234567"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enterprise"
      },
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "productInfo"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A metadata cascade policy automatically applies a metadata template instance\nto all the files and folders within the targeted folder."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "The error that occurs when a file can not be created due\nto a conflict."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_cascade_policies/{metadata_cascade_policy_id}",
    "method": "removePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metadata cascade policies",
    "typeScriptTag": "metadataCascadePolicies",
    "description": "Remove metadata cascade policy",
    "parameters": [
      {
        "name": "metadataCascadePolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the metadata cascade policy.",
        "example": "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the policy\nis successfully deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_cascade_policies/{metadata_cascade_policy_id}",
    "method": "getPolicyAssignedToFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata cascade policies",
    "typeScriptTag": "metadataCascadePolicies",
    "description": "Get metadata cascade policy",
    "parameters": [
      {
        "name": "metadataCascadePolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the metadata cascade policy.",
        "example": "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A metadata cascade policy automatically applies a metadata template instance\nto all the files and folders within the targeted folder."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_cascade_policies/{metadata_cascade_policy_id}/apply",
    "method": "applyToChildren",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metadata cascade policies",
    "typeScriptTag": "metadataCascadePolicies",
    "description": "Force-apply metadata cascade policy to folder",
    "parameters": [
      {
        "name": "metadataCascadePolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the cascade policy to force-apply.",
        "example": "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
      },
      {
        "name": "conflict_resolution",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "none"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Returns an empty response when the API call was successful. The metadata\ncascade operation will be performed asynchronously.\n\nThe API call will return directly, before the cascade operation\nis complete. There is currently no API to check for the status of this\noperation."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/metadata_queries/execute_read",
    "method": "itemsByMetadata",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Query files/folders by metadata",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enterprise_123456.someTemplate"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "value >= :amount"
      },
      {
        "name": "query_params",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "amount": "100"
        }
      },
      {
        "name": "ancestor_folder_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0"
      },
      {
        "name": "order_by",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50,
        "default": 100
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "extension",
          "created_at",
          "item_status",
          "metadata.enterprise_1234.contracts",
          "metadata.enterprise_1234.regions.location"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A page of files and folders that matched the metadata query."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/comments/{comment_id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Remove comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the comment has been deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/comments/{comment_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Get comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Comments are messages created on files. Comments\ncan be made independently or created as responses to other\ncomments"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/comments/{comment_id}",
    "method": "updateMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Update comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "message",
        "schema": "string",
        "description": "",
        "example": "Review completed!"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Comments are messages created on files. Comments\ncan be made independently or created as responses to other\ncomments"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/comments",
    "method": "comments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create comment",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Review completed!"
      },
      {
        "name": "tagged_message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@[1234:John] Review completed!"
      },
      {
        "name": "item",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Comments are messages created on files. Comments\ncan be made independently or created as responses to other\ncomments"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaborations/{collaboration_id}",
    "method": "removeSingleCollaboration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Collaborations",
    "typeScriptTag": "collaborations",
    "description": "Remove collaboration",
    "parameters": [
      {
        "name": "collaborationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the collaboration",
        "example": "1234"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A blank response is returned if the collaboration was\nsuccessfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaborations/{collaboration_id}",
    "method": "getSingleCollaboration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborations",
    "typeScriptTag": "collaborations",
    "description": "Get collaboration",
    "parameters": [
      {
        "name": "collaborationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the collaboration",
        "example": "1234"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collaborations define access permissions for users and groups to files and\nfolders, similar to access control lists. A collaboration object grants a\nuser or group access to a file or folder with permissions defined by a\nspecific role."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaborations/{collaboration_id}",
    "method": "updateCollaboration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Collaborations",
    "typeScriptTag": "collaborations",
    "description": "Update collaboration",
    "parameters": [
      {
        "name": "collaborationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the collaboration",
        "example": "1234"
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "editor"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "accepted"
      },
      {
        "name": "expires_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-08-29T23:59:00-07:00"
      },
      {
        "name": "can_view_path",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collaborations define access permissions for users and groups to files and\nfolders, similar to access control lists. A collaboration object grants a\nuser or group access to a file or folder with permissions defined by a\nspecific role."
      },
      {
        "statusCode": "204",
        "description": "Collaborations define access permissions for users and groups to files and\nfolders, similar to access control lists. A collaboration object grants a\nuser or group access to a file or folder with permissions defined by a\nspecific role."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaborations",
    "method": "collaborations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborations (List)",
    "typeScriptTag": "collaborationsList",
    "description": "List pending collaborations",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "The status of the collaborations to retrieve",
        "example": "pending"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of collaborations"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaborations",
    "method": "collaborations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Collaborations",
    "typeScriptTag": "collaborations",
    "description": "Create collaboration",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "notify",
        "schema": "boolean",
        "required": false,
        "description": "Determines if users should receive email notification\nfor the action performed.",
        "example": true
      },
      {
        "name": "item",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "accessible_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "editor"
      },
      {
        "name": "is_access_only",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "can_view_path",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "expires_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2019-08-29T23:59:00-07:00"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Collaborations define access permissions for users and groups to files and\nfolders, similar to access control lists. A collaboration object grants a\nuser or group access to a file or folder with permissions defined by a\nspecific role."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search for content",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The string to search for. This query is matched against item names,\ndescriptions, text content of files, and various other fields of\nthe different item types.\n\nThis parameter supports a variety of operators to further refine\nthe results returns.\n\n* `\"\"` - by wrapping a query in double quotes only exact matches are\n  returned by the API. Exact searches do not return search matches\n  based on specific character sequences. Instead, they return\n  matches based on phrases, that is, word sequences. For example:\n  A search for `\"Blue-Box\"` may return search results including\n  the sequence `\"blue.box\"`, `\"Blue Box\"`, and `\"Blue-Box\"`;\n  any item containing the words `Blue` and `Box` consecutively, in\n  the order specified.\n* `AND` - returns items that contain both the search terms. For\n  example, a search for `marketing AND BoxWorks` returns items\n  that have both `marketing` and `BoxWorks` within its text in any order.\n  It does not return a result that only has `BoxWorks` in its text.\n* `OR` - returns items that contain either of the search terms. For\n  example, a search for `marketing OR BoxWorks` returns a result that\n  has either `marketing` or `BoxWorks` within its text. Using this\n  operator is not necessary as we implicitly interpret multi-word\n  queries as `OR` unless another supported boolean term is used.\n* `NOT` - returns items that do not contain the search term provided.\n  For example, a search for `marketing AND NOT BoxWorks` returns a result\n  that has only `marketing` within its text. Results containing\n  `BoxWorks` are omitted.\n\nWe do not support lower case (that is,\n`and`, `or`, and `not`) or mixed case (that is, `And`, `Or`, and `Not`)\noperators.\n\nThis field is required unless the `mdfilters` parameter is defined.",
        "example": "sales"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "Limits the search results to either the files that the user has\naccess to, or to files available to the entire enterprise.\n\nThe scope defaults to `user_content`, which limits the search\nresults to content that is available to the currently authenticated\nuser.\n\nThe `enterprise_content` can be requested by an admin through our\nsupport channels. Once this scope has been enabled for a user, it\nwill allow that use to query for content across the entire\nenterprise and not only the content that they have access to.",
        "example": "user_content",
        "default": "user_content"
      },
      {
        "name": "fileExtensions",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any files that match any of the provided\nfile extensions. This list is a comma-separated list of file extensions\nwithout the dots.",
        "example": [
          "pdf",
          "png",
          "gif"
        ]
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items created within\na given date range.\n\nDate ranges are defined as comma separated RFC3339\ntimestamps.\n\nIf the the start date is omitted (`,2014-05-17T13:35:01-07:00`)\nanything created before the end date will be returned.\n\nIf the end date is omitted (`2014-05-15T13:35:01-07:00,`) the\ncurrent date will be used as the end date instead.",
        "example": [
          "2014-05-15T13:35:01-07:00",
          "2014-05-17T13:35:01-07:00"
        ]
      },
      {
        "name": "updatedAtRange",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items updated within\na given date range.\n\nDate ranges are defined as comma separated RFC3339\ntimestamps.\n\nIf the start date is omitted (`,2014-05-17T13:35:01-07:00`)\nanything updated before the end date will be returned.\n\nIf the end date is omitted (`2014-05-15T13:35:01-07:00,`) the\ncurrent date will be used as the end date instead.",
        "example": [
          "2014-05-15T13:35:01-07:00",
          "2014-05-17T13:35:01-07:00"
        ]
      },
      {
        "name": "sizeRange",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items with a size within\na given file size range. This applied to files and folders.\n\nSize ranges are defined as comma separated list of a lower\nand upper byte size limit (inclusive).\n\nThe upper and lower bound can be omitted to create open ranges.",
        "example": [
          1000000,
          5000000
        ]
      },
      {
        "name": "ownerUserIds",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items that are owned\nby the given list of owners, defined as a list of comma separated\nuser IDs.\n\nThe items still need to be owned or shared with\nthe currently authenticated user for them to show up in the search\nresults. If the user does not have access to any files owned by any of\nthe users an empty result set will be returned.\n\nTo search across an entire enterprise, we recommend using the\n`enterprise_content` scope parameter which can be requested with our\nsupport team.",
        "example": [
          "123422",
          "23532",
          "3241212"
        ]
      },
      {
        "name": "recentUpdaterUserIds",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items that have been updated\nby the given list of users, defined as a list of comma separated\nuser IDs.\n\nThe items still need to be owned or shared with\nthe currently authenticated user for them to show up in the search\nresults. If the user does not have access to any files owned by any of\nthe users an empty result set will be returned.\n\nThis feature only searches back to the last 10 versions of an item.",
        "example": [
          "123422",
          "23532",
          "3241212"
        ]
      },
      {
        "name": "ancestorFolderIds",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to items within the given\nlist of folders, defined as a comma separated lists\nof folder IDs.\n\nSearch results will also include items within any subfolders\nof those ancestor folders.\n\nThe folders still need to be owned or shared with\nthe currently authenticated user. If the folder is not accessible by this\nuser, or it does not exist, a `HTTP 404` error code will be returned\ninstead.\n\nTo search across an entire enterprise, we recommend using the\n`enterprise_content` scope parameter which can be requested with our\nsupport team.",
        "example": [
          "4535234",
          "234123235",
          "2654345"
        ]
      },
      {
        "name": "contentTypes",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items that match the search query\nfor a specific part of the file, for example the file description.\n\nContent types are defined as a comma separated lists\nof Box recognized content types. The allowed content types are as follows.\n\n* `name` - The name of the item, as defined by its `name` field.\n* `description` - The description of the item, as defined by its\n  `description` field.\n* `file_content` - The actual content of the file.\n* `comments` - The content of any of the comments on a file or\n   folder.\n* `tags` - Any tags that are applied to an item, as defined by its\n   `tags` field.",
        "example": [
          "name",
          "description"
        ]
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Limits the search results to any items of this type. This\nparameter only takes one value. By default the API returns\nitems that match any of these types.\n\n* `file` - Limits the search results to files\n* `folder` - Limits the search results to folders\n* `web_link` - Limits the search results to web links, also known\n   as bookmarks",
        "example": "file"
      },
      {
        "name": "trashContent",
        "schema": "string",
        "required": false,
        "description": "Determines if the search should look in the trash for items.\n\nBy default, this API only returns search results for items\nnot currently in the trash (`non_trashed_only`).\n\n* `trashed_only` - Only searches for items currently in the trash\n* `non_trashed_only` - Only searches for items currently not in\n  the trash\n* `all_items` - Searches for both trashed and non-trashed items.",
        "example": "non_trashed_only",
        "default": "non_trashed_only"
      },
      {
        "name": "mdfilters",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items for which the metadata matches\nthe provided filter.\n\nThis parameter contains a list of 1 metadata template to filter\nthe search results by. This list can currently only\ncontain one entry, though this might be expanded in the future.\n\nThis parameter is required unless the `query` parameter is provided.",
        "example": [
          {
            "scope": "enterprise",
            "templateKey": "contract",
            "filters": {
              "category": "online"
            }
          }
        ]
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Defines the order in which search results are returned. This API\ndefaults to returning items by relevance unless this parameter is\nexplicitly specified.\n\n* `relevance` (default) returns the results sorted by relevance to the\nquery search term. The relevance is based on the occurrence of the search\nterm in the items name, description, content, and additional properties.\n* `modified_at` returns the results ordered in descending order by date\nat which the item was last modified.",
        "example": "modified_at",
        "default": "relevance"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "Defines the direction in which search results are ordered. This API\ndefaults to returning items in descending (`DESC`) order unless this\nparameter is explicitly specified.\n\nWhen results are sorted by `relevance` the ordering is locked to returning\nitems in descending order of relevance, and this parameter is ignored.",
        "example": "ASC",
        "default": "DESC"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Defines the maximum number of items to return as part of a page of\nresults.",
        "example": 100,
        "default": 30
      },
      {
        "name": "includeRecentSharedLinks",
        "schema": "boolean",
        "required": false,
        "description": "Defines whether the search results should include any items\nthat the user recently accessed through a shared link.\n\nWhen this parameter has been set to true,\nthe format of the response of this API changes to return\na list of [Search Results with\nShared Links](r://search_results_with_shared_links)",
        "example": true,
        "default": false
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "deletedUserIds",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to items that were deleted by the given\nlist of users, defined as a list of comma separated user IDs.\n\nThe `trash_content` parameter needs to be set to `trashed_only`.\n\nIf searching in trash is not performed, an empty result set\nis returned. The items need to be owned or shared with\nthe currently authenticated user for them to show up in the search\nresults.\n\nIf the user does not have access to any files owned by\nany of the users, an empty result set is returned.\n\nData available from 2023-02-01 onwards.",
        "example": [
          "123422",
          "23532",
          "3241212"
        ]
      },
      {
        "name": "deletedAtRange",
        "schema": "array",
        "required": false,
        "description": "Limits the search results to any items deleted within a given\ndate range.\n\nDate ranges are defined as comma separated RFC3339 timestamps.\n\nIf the the start date is omitted (`2014-05-17T13:35:01-07:00`),\nanything deleted before the end date will be returned.\n\nIf the end date is omitted (`2014-05-15T13:35:01-07:00`),\nthe current date will be used as the end date instead.\n\nThe `trash_content` parameter needs to be set to `trashed_only`.\n\nIf searching in trash is not performed, then an empty result\nis returned.\n\nData available from 2023-02-01 onwards.",
        "example": [
          "2014-05-15T13:35:01-07:00",
          "2014-05-17T13:35:01-07:00"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "tasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create task",
    "parameters": [
      {
        "name": "item",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "review",
        "default": "review"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Please review",
        "default": ""
      },
      {
        "name": "due_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2012-12-12T10:53:43-08:00"
      },
      {
        "name": "completion_rule",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "all_assignees",
        "default": "all_assignees"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A task allows for file-centric workflows within Box. Users can\ncreate tasks on files and assign them to other users for them to complete the\ntasks."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/tasks/{task_id}",
    "method": "removeFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Remove task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the task was successfully deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/tasks/{task_id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A task allows for file-centric workflows within Box. Users can\ncreate tasks on files and assign them to other users for them to complete the\ntasks."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/tasks/{task_id}",
    "method": "updateTaskConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task.",
        "example": "12345"
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "example": "review"
      },
      {
        "name": "message",
        "schema": "string",
        "description": "",
        "example": "Please review"
      },
      {
        "name": "due_at",
        "schema": "string",
        "description": "",
        "example": "2012-12-12T10:53:43-08:00"
      },
      {
        "name": "completion_rule",
        "schema": "string",
        "description": "",
        "example": "all_assignees"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A task allows for file-centric workflows within Box. Users can\ncreate tasks on files and assign them to other users for them to complete the\ntasks."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/tasks/{task_id}/assignments",
    "method": "listForTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task assignments",
    "typeScriptTag": "taskAssignments",
    "description": "List task assignments",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of task assignments"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/task_assignments",
    "method": "assignMultipleUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task assignments",
    "typeScriptTag": "taskAssignments",
    "description": "Assign task",
    "parameters": [
      {
        "name": "task",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "assign_to",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A task assignment defines which task is assigned to which user to complete."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/task_assignments/{task_assignment_id}",
    "method": "deleteSpecificAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task assignments",
    "typeScriptTag": "taskAssignments",
    "description": "Unassign task",
    "parameters": [
      {
        "name": "taskAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task assignment.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the task\nassignment was successfully deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/task_assignments/{task_assignment_id}",
    "method": "getTaskAssignmentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task assignments",
    "typeScriptTag": "taskAssignments",
    "description": "Get task assignment",
    "parameters": [
      {
        "name": "taskAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task assignment.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A task assignment defines which task is assigned to which user to complete."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/task_assignments/{task_assignment_id}",
    "method": "updateStateAssignedToUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Task assignments",
    "typeScriptTag": "taskAssignments",
    "description": "Update task assignment",
    "parameters": [
      {
        "name": "taskAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the task assignment.",
        "example": "12345"
      },
      {
        "name": "message",
        "schema": "string",
        "description": "",
        "example": "Looks good to me"
      },
      {
        "name": "resolution_state",
        "schema": "string",
        "description": "",
        "example": "completed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A task assignment defines which task is assigned to which user to complete."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shared_items",
    "method": "getBySharedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shared links (Files)",
    "typeScriptTag": "sharedLinksFiles",
    "description": "Find file for shared link",
    "parameters": [
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.",
        "example": "1"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": true,
        "description": "A header containing the shared link and optional password for the\nshared link.\n\nThe format for this header is as follows.\n\n`shared_link=[link]&shared_link_password=[password]`",
        "example": "shared_link=[link]&shared_link_password=[password]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "304",
        "description": "Returns an empty response when the `If-None-Match` header matches\nthe current `etag` value of the folder. This indicates that the folder\nhas not changed since it was last requested."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}#get_shared_link",
    "method": "getSharedLinkInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shared links (Files)",
    "typeScriptTag": "sharedLinksFiles",
    "description": "Get shared link for file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}#add_shared_link",
    "method": "addSharedLinkToFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Files)",
    "typeScriptTag": "sharedLinksFiles",
    "description": "Add shared link to file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}#update_shared_link",
    "method": "updateLinkOnFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Files)",
    "typeScriptTag": "sharedLinksFiles",
    "description": "Update shared link on file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/files/{file_id}#remove_shared_link",
    "method": "removeSharedLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Files)",
    "typeScriptTag": "sharedLinksFiles",
    "description": "Remove shared link from file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": "",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a file, as can be returned from any\nfile API endpoints by default"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shared_items#folders",
    "method": "findFolderBySharedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shared links (Folders)",
    "typeScriptTag": "sharedLinksFolders",
    "description": "Find folder for shared link",
    "parameters": [
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.",
        "example": "1"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": true,
        "description": "A header containing the shared link and optional password for the\nshared link.\n\nThe format for this header is as follows.\n\n`shared_link=[link]&shared_link_password=[password]`",
        "example": "shared_link=[link]&shared_link_password=[password]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "304",
        "description": "Returns an empty response when the `If-None-Match` header matches\nthe current `etag` value of the folder. This indicates that the folder\nhas not changed since it was last requested."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}#get_shared_link",
    "method": "getSharedLinkForFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shared links (Folders)",
    "typeScriptTag": "sharedLinksFolders",
    "description": "Get shared link for folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}#add_shared_link",
    "method": "addLinkToFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Folders)",
    "typeScriptTag": "sharedLinksFolders",
    "description": "Add shared link to folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}#update_shared_link",
    "method": "updateFolderSharedLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Folders)",
    "typeScriptTag": "sharedLinksFolders",
    "description": "Update shared link on folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/folders/{folder_id}#remove_shared_link",
    "method": "removeFromFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Folders)",
    "typeScriptTag": "sharedLinksFolders",
    "description": "Remove shared link from folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": "",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links",
    "method": "createObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Web links",
    "typeScriptTag": "webLinks",
    "description": "Create web link",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Cloud Content Management"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://box.com"
      },
      {
        "name": "parent",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Box Website"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}",
    "method": "removeLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Web links",
    "typeScriptTag": "webLinks",
    "description": "Remove web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response will be returned when the web link\nwas successfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Web links",
    "typeScriptTag": "webLinks",
    "description": "Get web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": false,
        "description": "The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.",
        "example": "shared_link=[link]&shared_link_password=[password]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}",
    "method": "restoreWebLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trashed web links",
    "typeScriptTag": "trashedWebLinks",
    "description": "Restore web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Restored.docx"
      },
      {
        "name": "parent",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Represents a web link restored from the trash."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}",
    "method": "updateObject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Web links",
    "typeScriptTag": "webLinks",
    "description": "Update web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Cloud Content Management"
      },
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "https://box.com"
      },
      {
        "name": "parent",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Box Website"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}/trash",
    "method": "permanentlyRemove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Trashed web links",
    "typeScriptTag": "trashedWebLinks",
    "description": "Permanently remove web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the web link was\npermanently deleted."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}/trash",
    "method": "getTrashedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trashed web links",
    "typeScriptTag": "trashedWebLinks",
    "description": "Get trashed web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a trashed web link."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shared_items#web_links",
    "method": "findSharedWebLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shared links (Web Links)",
    "typeScriptTag": "sharedLinksWebLinks",
    "description": "Find web link for shared link",
    "parameters": [
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "required": false,
        "description": "Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.",
        "example": "1"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "boxapi",
        "schema": "string",
        "required": true,
        "description": "A header containing the shared link and optional password for the\nshared link.\n\nThe format for this header is as follows.\n\n`shared_link=[link]&shared_link_password=[password]`",
        "example": "shared_link=[link]&shared_link_password=[password]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "304",
        "description": "Returns an empty response when the `If-None-Match` header matches\nthe current `etag` value of the folder. This indicates that the folder\nhas not changed since it was last requested."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}#get_shared_link",
    "method": "getLinkInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shared links (Web Links)",
    "typeScriptTag": "sharedLinksWebLinks",
    "description": "Get shared link for web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}#add_shared_link",
    "method": "addLinkToWebLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Web Links)",
    "typeScriptTag": "sharedLinksWebLinks",
    "description": "Add shared link to web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}#update_shared_link",
    "method": "updateSharedLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Web Links)",
    "typeScriptTag": "sharedLinksWebLinks",
    "description": "Update shared link on web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/web_links/{web_link_id}#remove_shared_link",
    "method": "removeSharedLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shared links (Web Links)",
    "typeScriptTag": "sharedLinksWebLinks",
    "description": "Remove shared link from web link",
    "parameters": [
      {
        "name": "webLinkId",
        "schema": "string",
        "required": true,
        "description": "The ID of the web link.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": true,
        "description": "Explicitly request the `shared_link` fields\nto be returned for this item.",
        "example": "shared_link"
      },
      {
        "name": "shared_link",
        "schema": "object",
        "description": "",
        "example": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Web links are objects that point to URLs. These objects\nare also known as bookmarks within the Box web application.\n\nWeb link objects are treated similarly to file objects,\nthey will also support most actions that apply to regular files."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "405",
        "description": "A generic error"
      },
      {
        "statusCode": "412",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users",
    "method": "users",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List enterprise users",
    "parameters": [
      {
        "name": "filterTerm",
        "schema": "string",
        "required": false,
        "description": "Limits the results to only users who's `name` or\n`login` start with the search term.\n\nFor externally managed users, the search term needs\nto completely match the in order to find the user, and\nit will only return one user at a time.",
        "example": "john"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": false,
        "description": "Limits the results to the kind of user specified.\n\n* `all` returns every kind of user for whom the\n  `login` or `name` partially matches the\n  `filter_term`. It will only return an external user\n  if the login matches the `filter_term` completely,\n  and in that case it will only return that user.\n* `managed` returns all managed and app users for whom\n  the `login` or `name` partially matches the\n  `filter_term`.\n* `external` returns all external users for whom the\n  `login` matches the `filter_term` exactly.",
        "example": "managed"
      },
      {
        "name": "externalAppUserId",
        "schema": "string",
        "required": false,
        "description": "Limits the results to app users with the given\n`external_app_user_id` value.\n\nWhen creating an app user, an\n`external_app_user_id` value can be set. This value can\nthen be used in this endpoint to find any users that\nmatch that `external_app_user_id` value.",
        "example": "my-user-1234"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "usemarker",
        "schema": "boolean",
        "required": false,
        "description": "Specifies whether to use marker-based pagination instead of\noffset-based pagination. Only one pagination method can\nbe used at a time.\n\nBy setting this value to true, the API will return a `marker` field\nthat can be passed as a parameter to this endpoint to get the next\npage of the response.",
        "example": true
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of users."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users",
    "method": "users",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create user",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Aaron Levie"
      },
      {
        "name": "login",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "boss@box.com"
      },
      {
        "name": "is_platform_access_only",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "user"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "en"
      },
      {
        "name": "is_sync_enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "job_title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "CEO"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "6509241374"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "900 Jefferson Ave, Redwood City, CA 94063"
      },
      {
        "name": "space_amount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 11345156112
      },
      {
        "name": "tracking_codes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "can_see_managed_users",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Africa/Bujumbura"
      },
      {
        "name": "is_external_collab_restricted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "is_exempt_from_device_limits",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "is_exempt_from_login_verification",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "active"
      },
      {
        "name": "external_app_user_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "my-user-1234"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A full representation of a user, as can be returned from any\nuser API endpoint."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/me",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get current user",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a user, as can be returned from any\nuser API endpoint."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/terminate_sessions",
    "method": "createSessionTerminationJobs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session termination",
    "typeScriptTag": "sessionTermination",
    "description": "Create jobs to terminate users session",
    "parameters": [
      {
        "name": "user_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "123456",
          "456789"
        ]
      },
      {
        "name": "user_logins",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "user@sample.com",
          "user2@sample.com"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A message informing about the\ntermination job status"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "429",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "503",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "notify",
        "schema": "boolean",
        "description": "Whether the user will receive email notification of\nthe deletion",
        "example": true
      },
      {
        "name": "force",
        "schema": "boolean",
        "description": "Whether the user should be deleted even if this user\nstill own files",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Removes the user and returns an empty response."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "getUserInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a user, as can be returned from any\nuser API endpoint."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "updateManagedUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "enterprise",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "notify",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Aaron Levie"
      },
      {
        "name": "login",
        "schema": "string",
        "description": "",
        "example": "somename@box.com"
      },
      {
        "name": "role",
        "schema": "string",
        "description": "",
        "example": "user"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "en"
      },
      {
        "name": "is_sync_enabled",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "job_title",
        "schema": "string",
        "description": "",
        "example": "CEO"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "6509241374"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "900 Jefferson Ave, Redwood City, CA 94063"
      },
      {
        "name": "tracking_codes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "can_see_managed_users",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "Africa/Bujumbura"
      },
      {
        "name": "is_external_collab_restricted",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "is_exempt_from_device_limits",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "is_exempt_from_login_verification",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "is_password_reset_required",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "active"
      },
      {
        "name": "space_amount",
        "schema": "integer",
        "description": "",
        "example": 11345156112
      },
      {
        "name": "notification_email",
        "schema": "object",
        "description": ""
      },
      {
        "name": "external_app_user_id",
        "schema": "string",
        "description": "",
        "example": "my-user-1234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a user, as can be returned from any\nuser API endpoint."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/avatar",
    "method": "removeExisting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User avatars",
    "typeScriptTag": "userAvatars",
    "description": "Delete user avatar",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "* `no_content`: Removes the avatar and returns an empty response."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/avatar",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User avatars",
    "typeScriptTag": "userAvatars",
    "description": "Get user avatar",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The avatar"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/avatar",
    "method": "addOrUpdateImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User avatars",
    "typeScriptTag": "userAvatars",
    "description": "Add or update user avatar",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "pic",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A resource holding URLs to the\navatar uploaded to a Box application."
      },
      {
        "statusCode": "201",
        "description": "A resource holding URLs to the\navatar uploaded to a Box application."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/folders/0",
    "method": "toDestination",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transfer folders",
    "typeScriptTag": "transferFolders",
    "description": "Transfer owned folders",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "notify",
        "schema": "boolean",
        "required": false,
        "description": "Determines if users should receive email notification\nfor the action performed.",
        "example": true
      },
      {
        "name": "owned_by",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A full representation of a folder, as can be returned from any\nfolder API endpoints by default"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/email_aliases",
    "method": "listUserEmailAliases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email aliases",
    "typeScriptTag": "emailAliases",
    "description": "List user's email aliases",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of email aliases"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/email_aliases",
    "method": "createNewAlias",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email aliases",
    "typeScriptTag": "emailAliases",
    "description": "Create email alias",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "alias@example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An email alias for a user."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/email_aliases/{email_alias_id}",
    "method": "removeAlias",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Email aliases",
    "typeScriptTag": "emailAliases",
    "description": "Remove email alias",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "emailAliasId",
        "schema": "string",
        "required": true,
        "description": "The ID of the email alias.",
        "example": "23432"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Removes the alias and returns an empty response."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/users/{user_id}/memberships",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group memberships",
    "typeScriptTag": "groupMemberships",
    "description": "List user's groups",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user.",
        "example": "12345"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of group memberships."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/invites",
    "method": "invites",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invites",
    "typeScriptTag": "invites",
    "description": "Create user invite",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "enterprise",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "actionable_by",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An invite for a user to an enterprise."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/invites/{invite_id}",
    "method": "getUserInviteStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invites",
    "typeScriptTag": "invites",
    "description": "Get user invite status",
    "parameters": [
      {
        "name": "inviteId",
        "schema": "string",
        "required": true,
        "description": "The ID of an invite.",
        "example": "213723"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An invite for a user to an enterprise."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups",
    "method": "groups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List groups for enterprise",
    "parameters": [
      {
        "name": "filterTerm",
        "schema": "string",
        "required": false,
        "description": "Limits the results to only groups whose `name` starts\nwith the search term.",
        "example": "Engineering"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of groups."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups",
    "method": "groups",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create group",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "\"Customer Support Group - as imported from Active Directory\""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Customer Support"
      },
      {
        "name": "provenance",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Active Directory"
      },
      {
        "name": "external_sync_identifier",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "AD:123456"
      },
      {
        "name": "invitability_level",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "admins_only"
      },
      {
        "name": "member_viewability_level",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "admins_only"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Groups contain a set of users, and can be used in place of\nusers in some operations, such as collaborations."
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups/terminate_sessions",
    "method": "createTerminationJobs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Session termination",
    "typeScriptTag": "sessionTermination",
    "description": "Create jobs to terminate user group session",
    "parameters": [
      {
        "name": "group_ids",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "123456",
          "456789"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A message informing about the\ntermination job status"
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "429",
        "description": "A generic error"
      },
      {
        "statusCode": "500",
        "description": "A generic error"
      },
      {
        "statusCode": "503",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups/{group_id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Remove group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group.",
        "example": "57645"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A blank response is returned if the group was\nsuccessfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups/{group_id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group.",
        "example": "57645"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Groups contain a set of users, and can be used in place of\nusers in some operations, such as collaborations."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups/{group_id}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group.",
        "example": "57645"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "\"Customer Support Group - as imported from Active Directory\""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Customer Support"
      },
      {
        "name": "provenance",
        "schema": "string",
        "description": "",
        "example": "Active Directory"
      },
      {
        "name": "external_sync_identifier",
        "schema": "string",
        "description": "",
        "example": "AD:123456"
      },
      {
        "name": "invitability_level",
        "schema": "string",
        "description": "",
        "example": "admins_only"
      },
      {
        "name": "member_viewability_level",
        "schema": "string",
        "description": "",
        "example": "admins_only"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Groups contain a set of users, and can be used in place of\nusers in some operations, such as collaborations."
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups/{group_id}/memberships",
    "method": "listMembersOfGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group memberships",
    "typeScriptTag": "groupMemberships",
    "description": "List members of group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group.",
        "example": "57645"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of group memberships."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/groups/{group_id}/collaborations",
    "method": "groupAccessDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborations (List)",
    "typeScriptTag": "collaborationsList",
    "description": "List group collaborations",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group.",
        "example": "57645"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of collaborations"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/group_memberships",
    "method": "createMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Add user to group",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "group",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "member"
      },
      {
        "name": "configurable_permissions",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "can_run_reports": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Membership is used to signify that a user is part of a\ngroup."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/group_memberships/{group_membership_id}",
    "method": "removeUserFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Group memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Remove user from group",
    "parameters": [
      {
        "name": "groupMembershipId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group membership.",
        "example": "434534"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A blank response is returned if the membership was\nsuccessfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/group_memberships/{group_membership_id}",
    "method": "getSpecificMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Get group membership",
    "parameters": [
      {
        "name": "groupMembershipId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group membership.",
        "example": "434534"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership is used to signify that a user is part of a\ngroup."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/group_memberships/{group_membership_id}",
    "method": "updateMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group memberships",
    "typeScriptTag": "groupMemberships",
    "description": "Update group membership",
    "parameters": [
      {
        "name": "groupMembershipId",
        "schema": "string",
        "required": true,
        "description": "The ID of the group membership.",
        "example": "434534"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "role",
        "schema": "string",
        "description": "",
        "example": "member"
      },
      {
        "name": "configurable_permissions",
        "schema": "object",
        "description": "",
        "example": {
          "can_run_reports": true
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Membership is used to signify that a user is part of a\ngroup."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "webhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List all webhooks",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of webhooks."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "webhooks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create webhook",
    "parameters": [
      {
        "name": "target",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/webhooks"
      },
      {
        "name": "triggers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "FILE.UPLOADED"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Represents a configured webhook."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/webhooks/{webhook_id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Remove webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webhook.",
        "example": "3321123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "An empty response will be returned when the webhook\nwas successfully deleted."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/webhooks/{webhook_id}",
    "method": "getSpecificWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webhook.",
        "example": "3321123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a configured webhook."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/webhooks/{webhook_id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webhook.",
        "example": "3321123"
      },
      {
        "name": "target",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "https://example.com/webhooks"
      },
      {
        "name": "triggers",
        "schema": "array",
        "description": "",
        "example": [
          "FILE.UPLOADED"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a configured webhook."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/skill_invocations/{skill_id}",
    "method": "updateAllBoxSkillCards",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Update all Box Skill cards on file",
    "parameters": [
      {
        "name": "skillId",
        "schema": "string",
        "required": true,
        "description": "The ID of the skill to apply this metadata for.",
        "example": "33243242"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "success"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "file",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "file_version",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "usage",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns an empty response when the card has been successfully updated."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/events",
    "method": "events",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List user and enterprise events",
    "parameters": [
      {
        "name": "streamType",
        "schema": "string",
        "description": "Defines the type of events that are returned\n\n* `all` returns everything for a user and is the default\n* `changes` returns events that may cause file tree changes\n  such as file updates or collaborations.\n* `sync` is similar to `changes` but only applies to synced folders\n* `admin_logs` returns all events for an entire enterprise and\n  requires the user making the API call to have admin permissions. This\n  stream type is for programmatically pulling from a 1 year history of\n  events across all users within the enterprise and within a\n  `created_after` and `created_before` time frame. The complete history\n  of events will be returned in chronological order based on the event\n  time, but latency will be much higher than `admin_logs_streaming`.\n* `admin_logs_streaming` returns all events for an entire enterprise and\n  requires the user making the API call to have admin permissions. This\n  stream type is for polling for recent events across all users within\n  the enterprise. Latency will be much lower than `admin_logs`, but\n  events will not be returned in chronological order and may\n  contain duplicates.",
        "example": "all",
        "default": "all"
      },
      {
        "name": "streamPosition",
        "schema": "string",
        "description": "The location in the event stream to start receiving events from.\n\n* `now` will return an empty list events and\nthe latest stream position for initialization.\n* `0` or `null` will return all events.",
        "example": "1348790499819"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limits the number of events returned\n\nNote: Sometimes, the events less than the limit requested can be returned\neven when there may be more events remaining. This is primarily done in\nthe case where a number of events have already been retrieved and these\nretrieved events are returned rather than delaying for an unknown amount\nof time to see if there are any more results.",
        "example": 50,
        "default": 100
      },
      {
        "name": "eventType",
        "schema": "array",
        "description": "A comma-separated list of events to filter by. This can only be used when\nrequesting the events with a `stream_type` of `admin_logs` or\n`adming_logs_streaming`. For any other `stream_type` this value will be\nignored.",
        "example": [
          "ACCESS_GRANTED"
        ]
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "The lower bound date and time to return events for. This can only be used\nwhen requesting the events with a `stream_type` of `admin_logs`. For any\nother `stream_type` this value will be ignored.",
        "example": "2012-12-12T10:53:43-08:00"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "required": false,
        "description": "The upper bound date and time to return events for. This can only be used\nwhen requesting the events with a `stream_type` of `admin_logs`. For any\nother `stream_type` this value will be ignored.",
        "example": "2013-12-12T10:53:43-08:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of event objects"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/events",
    "method": "events",
    "httpMethod": HttpMethodsEnum.OPTIONS,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get events long poll endpoint",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of real-time servers that can\nbe used for long-polling."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collections",
    "method": "collections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "List all collections",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of collections"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collections/{collection_id}/items",
    "method": "listItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "List collection items",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection.",
        "example": "926489"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response.",
        "example": 1000,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of files, folders, and web links in\ntheir mini representation."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/recent_items",
    "method": "listAccessedItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recent items",
    "typeScriptTag": "recentItems",
    "description": "List recently accessed items",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of recent items."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policies",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retention policies",
    "typeScriptTag": "retentionPolicies",
    "description": "List retention policies",
    "parameters": [
      {
        "name": "policyName",
        "schema": "string",
        "required": false,
        "description": "Filters results by a case sensitive prefix of the name of\nretention policies.",
        "example": "Sales Policy"
      },
      {
        "name": "policyType",
        "schema": "string",
        "required": false,
        "description": "Filters results by the type of retention policy.",
        "example": "finite"
      },
      {
        "name": "createdByUserId",
        "schema": "string",
        "required": false,
        "description": "Filters results by the ID of the user who created policy.",
        "example": "21312321"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of retention policies."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policies",
    "method": "createPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Retention policies",
    "typeScriptTag": "retentionPolicies",
    "description": "Create retention policy",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Policy to retain all reports for at least one month"
      },
      {
        "name": "policy_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Some Policy Name"
      },
      {
        "name": "policy_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "finite"
      },
      {
        "name": "disposition_action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "permanently_delete"
      },
      {
        "name": "retention_length",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "365"
      },
      {
        "name": "retention_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "modifiable"
      },
      {
        "name": "can_owner_extend_retention",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "are_owners_notified",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "custom_notification_recipients",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A retention policy blocks permanent deletion of content\nfor a specified amount of time. Admins can create retention\npolicies and then later assign them to specific folders, metadata\ntemplates, or their entire enterprise.  To use this feature, you must\nhave the manage retention policies scope enabled\nfor your API key via your application management console."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policies/{retention_policy_id}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Retention policies",
    "typeScriptTag": "retentionPolicies",
    "description": "Delete retention policy",
    "parameters": [
      {
        "name": "retentionPolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy.",
        "example": "982312"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the policy has been deleted."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policies/{retention_policy_id}",
    "method": "getPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retention policies",
    "typeScriptTag": "retentionPolicies",
    "description": "Get retention policy",
    "parameters": [
      {
        "name": "retentionPolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy.",
        "example": "982312"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A retention policy blocks permanent deletion of content\nfor a specified amount of time. Admins can create retention\npolicies and then later assign them to specific folders, metadata\ntemplates, or their entire enterprise.  To use this feature, you must\nhave the manage retention policies scope enabled\nfor your API key via your application management console."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policies/{retention_policy_id}",
    "method": "updatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Retention policies",
    "typeScriptTag": "retentionPolicies",
    "description": "Update retention policy",
    "parameters": [
      {
        "name": "retentionPolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy.",
        "example": "982312"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Policy to retain all reports for at least one month"
      },
      {
        "name": "policy_name",
        "schema": "string",
        "description": "",
        "example": "Some Policy Name"
      },
      {
        "name": "disposition_action",
        "schema": "undefined",
        "description": "",
        "example": "permanently_delete"
      },
      {
        "name": "retention_type",
        "schema": "string",
        "description": "",
        "example": "non-modifiable"
      },
      {
        "name": "retention_length",
        "schema": "undefined",
        "description": "",
        "example": "365"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "retired"
      },
      {
        "name": "can_owner_extend_retention",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "are_owners_notified",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "custom_notification_recipients",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A retention policy blocks permanent deletion of content\nfor a specified amount of time. Admins can create retention\npolicies and then later assign them to specific folders, metadata\ntemplates, or their entire enterprise.  To use this feature, you must\nhave the manage retention policies scope enabled\nfor your API key via your application management console."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policies/{retention_policy_id}/assignments",
    "method": "listAllAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retention policy assignments",
    "typeScriptTag": "retentionPolicyAssignments",
    "description": "List retention policy assignments",
    "parameters": [
      {
        "name": "retentionPolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy.",
        "example": "982312"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of the retention policy assignment to retrieve.",
        "example": "metadata_template"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of retention policy assignments."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policy_assignments",
    "method": "createRetentionAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Retention policy assignments",
    "typeScriptTag": "retentionPolicyAssignments",
    "description": "Assign retention policy",
    "parameters": [
      {
        "name": "policy_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "173463"
      },
      {
        "name": "assign_to",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "filter_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date_field",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "upload_date"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A retention assignment represents a rule specifying\nthe files a retention policy retains.\nAssignments can retain files based on their folder or metadata,\nor hold all files in the enterprise."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policy_assignments/{retention_policy_assignment_id}",
    "method": "removeAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Retention policy assignments",
    "typeScriptTag": "retentionPolicyAssignments",
    "description": "Remove retention policy assignment",
    "parameters": [
      {
        "name": "retentionPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy assignment.",
        "example": "1233123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the policy assignment\nis successfully deleted."
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policy_assignments/{retention_policy_assignment_id}",
    "method": "getAssignment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retention policy assignments",
    "typeScriptTag": "retentionPolicyAssignments",
    "description": "Get retention policy assignment",
    "parameters": [
      {
        "name": "retentionPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy assignment.",
        "example": "1233123"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A retention assignment represents a rule specifying\nthe files a retention policy retains.\nAssignments can retain files based on their folder or metadata,\nor hold all files in the enterprise."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policy_assignments/{retention_policy_assignment_id}/files_under_retention",
    "method": "listFilesUnderRetention",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retention policy assignments",
    "typeScriptTag": "retentionPolicyAssignments",
    "description": "Get files under retention",
    "parameters": [
      {
        "name": "retentionPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy assignment.",
        "example": "1233123"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of files under retention."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/retention_policy_assignments/{retention_policy_assignment_id}/file_versions_under_retention",
    "method": "listFileVersionsUnderRetention",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Retention policy assignments",
    "typeScriptTag": "retentionPolicyAssignments",
    "description": "Get file versions under retention",
    "parameters": [
      {
        "name": "retentionPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the retention policy assignment.",
        "example": "1233123"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of files under retention."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policies",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal hold policies",
    "typeScriptTag": "legalHoldPolicies",
    "description": "List all legal hold policies",
    "parameters": [
      {
        "name": "policyName",
        "schema": "string",
        "required": false,
        "description": "Limits results to policies for which the names start with\nthis search term. This is a case-insensitive prefix.",
        "example": "Sales Policy"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of legal hold policies."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policies",
    "method": "createNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Legal hold policies",
    "typeScriptTag": "legalHoldPolicies",
    "description": "Create legal hold policy",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A custom policy for the sales team"
      },
      {
        "name": "policy_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sales Policy"
      },
      {
        "name": "filter_started_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2012-12-12T10:53:43-08:00"
      },
      {
        "name": "filter_ended_at",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2012-12-18T10:53:43-08:00"
      },
      {
        "name": "is_ongoing",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Legal Hold Policy information describes the basic\ncharacteristics of the Policy, such as name, description,\nand filter dates."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policies/{legal_hold_policy_id}",
    "method": "removePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Legal hold policies",
    "typeScriptTag": "legalHoldPolicies",
    "description": "Remove legal hold policy",
    "parameters": [
      {
        "name": "legalHoldPolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy",
        "example": "324432"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A blank response is returned if the policy was\nsuccessfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policies/{legal_hold_policy_id}",
    "method": "getPolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal hold policies",
    "typeScriptTag": "legalHoldPolicies",
    "description": "Get legal hold policy",
    "parameters": [
      {
        "name": "legalHoldPolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy",
        "example": "324432"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Legal Hold Policy information describes the basic\ncharacteristics of the Policy, such as name, description,\nand filter dates."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policies/{legal_hold_policy_id}",
    "method": "updatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Legal hold policies",
    "typeScriptTag": "legalHoldPolicies",
    "description": "Update legal hold policy",
    "parameters": [
      {
        "name": "legalHoldPolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy",
        "example": "324432"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "A custom policy for the sales team"
      },
      {
        "name": "policy_name",
        "schema": "string",
        "description": "",
        "example": "Sales Policy"
      },
      {
        "name": "release_notes",
        "schema": "string",
        "description": "",
        "example": "Required for GDPR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Legal Hold Policy information describes the basic\ncharacteristics of the Policy, such as name, description,\nand filter dates."
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policy_assignments",
    "method": "getListItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal hold policy assignments",
    "typeScriptTag": "legalHoldPolicyAssignments",
    "description": "List legal hold policy assignments",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy",
        "example": "324432"
      },
      {
        "name": "assignToType",
        "schema": "string",
        "description": "Filters the results by the type of item the\npolicy was applied to.",
        "example": "file"
      },
      {
        "name": "assignToId",
        "schema": "string",
        "description": "Filters the results by the ID of item the\npolicy was applied to.",
        "example": "1234323"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of legal hold policies assignments."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policy_assignments",
    "method": "assignFileLegalHold",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Legal hold policy assignments",
    "typeScriptTag": "legalHoldPolicyAssignments",
    "description": "Assign legal hold policy",
    "parameters": [
      {
        "name": "policy_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123244"
      },
      {
        "name": "assign_to",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Legal Hold Assignments are used to assign Legal Hold\nPolicies to Users, Folders, Files, or File Versions.\n\nCreating a Legal Hold Assignment puts a hold\non the File-Versions that belong to the Assignment's\n'apply-to' entity."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}",
    "method": "unassignPolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Legal hold policy assignments",
    "typeScriptTag": "legalHoldPolicyAssignments",
    "description": "Unassign legal hold policy",
    "parameters": [
      {
        "name": "legalHoldPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy assignment",
        "example": "753465"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A blank response is returned if the assignment was\nsuccessfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}",
    "method": "getAssignment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal hold policy assignments",
    "typeScriptTag": "legalHoldPolicyAssignments",
    "description": "Get legal hold policy assignment",
    "parameters": [
      {
        "name": "legalHoldPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy assignment",
        "example": "753465"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Legal Hold Assignments are used to assign Legal Hold\nPolicies to Users, Folders, Files, or File Versions.\n\nCreating a Legal Hold Assignment puts a hold\non the File-Versions that belong to the Assignment's\n'apply-to' entity."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/files_on_hold",
    "method": "listFileVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal hold policy assignments",
    "typeScriptTag": "legalHoldPolicyAssignments",
    "description": "List current file versions for legal hold policy assignment",
    "parameters": [
      {
        "name": "legalHoldPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy assignment",
        "example": "753465"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of file version legal holds."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_version_retentions",
    "method": "listRetentions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File version retentions",
    "typeScriptTag": "fileVersionRetentions",
    "description": "List file version retentions",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": false,
        "description": "Filters results by files with this ID.",
        "example": "43123123"
      },
      {
        "name": "fileVersionId",
        "schema": "string",
        "required": false,
        "description": "Filters results by file versions with this ID.",
        "example": "1"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": false,
        "description": "Filters results by the retention policy with this ID.",
        "example": "982312"
      },
      {
        "name": "dispositionAction",
        "schema": "string",
        "required": false,
        "description": "Filters results by the retention policy with this disposition\naction.",
        "example": "permanently_delete"
      },
      {
        "name": "dispositionBefore",
        "schema": "string",
        "required": false,
        "description": "Filters results by files that will have their disposition\ncome into effect before this date.",
        "example": "2012-12-12T10:53:43-08:00"
      },
      {
        "name": "dispositionAfter",
        "schema": "string",
        "required": false,
        "description": "Filters results by files that will have their disposition\ncome into effect after this date.",
        "example": "2012-12-19T10:34:23-08:00"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of file version retentions."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/file_versions_on_hold",
    "method": "listPreviousFileVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal hold policy assignments",
    "typeScriptTag": "legalHoldPolicyAssignments",
    "description": "List previous file versions for legal hold policy assignment",
    "parameters": [
      {
        "name": "legalHoldPolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy assignment",
        "example": "753465"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of file version legal holds."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_version_retentions/{file_version_retention_id}",
    "method": "getFileVersionRetentionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File version retentions",
    "typeScriptTag": "fileVersionRetentions",
    "description": "Get retention on file",
    "parameters": [
      {
        "name": "fileVersionRetentionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file version retention",
        "example": "3424234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A retention policy blocks permanent deletion of content\nfor a specified amount of time. Admins can apply policies to\nspecified folders, or an entire enterprise. A file version retention\nis a  record for a retained file version. To use this feature,\nyou must  have the manage retention policies scope enabled for your\nAPI key via  your application management console. For more information\nabout retention policies, please visit our help documentation"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_version_legal_holds/{file_version_legal_hold_id}",
    "method": "getFileVersionLegalHoldInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File version legal holds",
    "typeScriptTag": "fileVersionLegalHolds",
    "description": "Get file version legal hold",
    "parameters": [
      {
        "name": "fileVersionLegalHoldId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file version legal hold",
        "example": "2348213"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "File-Version-Legal-Hold is an entity representing all\nholds on a File Version."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_version_legal_holds",
    "method": "listFileVersionLegalHolds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File version legal holds",
    "typeScriptTag": "fileVersionLegalHolds",
    "description": "List file version legal holds",
    "parameters": [
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the legal hold policy to get the file version legal\nholds for.",
        "example": "133870"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of file version legal holds."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barriers/{shield_information_barrier_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barriers",
    "typeScriptTag": "shieldInformationBarriers",
    "description": "Get shield information barrier with specified ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier.",
        "example": "1910967"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a\nshield information barrier object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barriers/change_status",
    "method": "addChangedStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shield information barriers",
    "typeScriptTag": "shieldInformationBarriers",
    "description": "Add changed status of shield information barrier with specified ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1910967"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pending"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a\nshield information barrier object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barriers",
    "method": "listInformationObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barriers",
    "typeScriptTag": "shieldInformationBarriers",
    "description": "List shield information barriers",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Shield Information Barrier objects"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barriers",
    "method": "createBarrier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shield information barriers",
    "typeScriptTag": "shieldInformationBarriers",
    "description": "Create shield information barrier",
    "parameters": [
      {
        "name": "enterprise",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A standard representation of a\nshield information barrier object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_reports",
    "method": "listReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier reports",
    "typeScriptTag": "shieldInformationBarrierReports",
    "description": "List shield information barrier reports",
    "parameters": [
      {
        "name": "shieldInformationBarrierId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier.",
        "example": "1910967"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of shield barrier reports."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_reports",
    "method": "createReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shield information barrier reports",
    "typeScriptTag": "shieldInformationBarrierReports",
    "description": "Create shield information barrier report",
    "parameters": [
      {
        "name": "shield_information_barrier",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A standard representation\nof a shield information barrier report object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_reports/{shield_information_barrier_report_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier reports",
    "typeScriptTag": "shieldInformationBarrierReports",
    "description": "Get shield information barrier report by ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierReportId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier Report.",
        "example": "3423"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation\nof a shield information barrier report object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segments/{shield_information_barrier_segment_id}",
    "method": "deleteSegmentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shield information barrier segments",
    "typeScriptTag": "shieldInformationBarrierSegments",
    "description": "Delete shield information barrier segment",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment.",
        "example": "3423"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body in response"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segments/{shield_information_barrier_segment_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier segments",
    "typeScriptTag": "shieldInformationBarrierSegments",
    "description": "Get shield information barrier segment with specified ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment.",
        "example": "3423"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A shield information barrier segment object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segments/{shield_information_barrier_segment_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shield information barrier segments",
    "typeScriptTag": "shieldInformationBarrierSegments",
    "description": "Update shield information barrier segment with specified ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment.",
        "example": "3423"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "'Corporate division that engages in advisory_based\nfinancial transactions on behalf of individuals,\ncorporations, and governments.'"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Investment Banking"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A shield information barrier segment object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segments",
    "method": "listInformationObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier segments",
    "typeScriptTag": "shieldInformationBarrierSegments",
    "description": "List shield information barrier segments",
    "parameters": [
      {
        "name": "shieldInformationBarrierId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier.",
        "example": "1910967"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Shield Information Barrier Segment objects"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segments",
    "method": "createSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shield information barrier segments",
    "typeScriptTag": "shieldInformationBarrierSegments",
    "description": "Create shield information barrier segment",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "'Corporate division that engages in\n advisory_based financial\ntransactions on behalf of individuals,\ncorporations, and governments.'"
      },
      {
        "name": "shield_information_barrier",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Investment Banking"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A shield information barrier segment object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "409",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shield information barrier segment members",
    "typeScriptTag": "shieldInformationBarrierSegmentMembers",
    "description": "Delete shield information barrier segment member by ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentMemberId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment Member.",
        "example": "7815"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response if the\nsegment member was deleted successfully."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier segment members",
    "typeScriptTag": "shieldInformationBarrierSegmentMembers",
    "description": "Get shield information barrier segment member by ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentMemberId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment Member.",
        "example": "7815"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a\nshield information barrier segment member object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_members",
    "method": "listSegmentMembersBasedOnIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier segment members",
    "typeScriptTag": "shieldInformationBarrierSegmentMembers",
    "description": "List shield information barrier segment members",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment.",
        "example": "3423"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of Shield Information Barrier Member objects"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_members",
    "method": "createNewMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shield information barrier segment members",
    "typeScriptTag": "shieldInformationBarrierSegmentMembers",
    "description": "Create shield information barrier segment member",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "shield_information_barrier_segment_member"
      },
      {
        "name": "shield_information_barrier",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shield_information_barrier_segment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A standard representation of a\nshield information barrier segment member object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_restrictions/{shield_information_barrier_segment_restriction_id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shield information barrier segment restrictions",
    "typeScriptTag": "shieldInformationBarrierSegmentRestrictions",
    "description": "Delete shield information barrier segment restriction by ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentRestrictionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment Restriction.",
        "example": "4563"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body in response"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_restrictions/{shield_information_barrier_segment_restriction_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier segment restrictions",
    "typeScriptTag": "shieldInformationBarrierSegmentRestrictions",
    "description": "Get shield information barrier segment restriction by ID",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentRestrictionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment Restriction.",
        "example": "4563"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a\nsegment restriction of a shield information barrier\nobject"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_restrictions",
    "method": "listBasedOnSegmentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shield information barrier segment restrictions",
    "typeScriptTag": "shieldInformationBarrierSegmentRestrictions",
    "description": "List shield information barrier segment restrictions",
    "parameters": [
      {
        "name": "shieldInformationBarrierSegmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the shield information barrier segment.",
        "example": "3423"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of shield information barrier segment restriction objects"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/shield_information_barrier_segment_restrictions",
    "method": "createBarrierObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shield information barrier segment restrictions",
    "typeScriptTag": "shieldInformationBarrierSegmentRestrictions",
    "description": "Create shield information barrier segment restriction",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "shield_information_barrier_segment_restriction"
      },
      {
        "name": "shield_information_barrier",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shield_information_barrier_segment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "restricted_segment",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A standard representation of a\nsegment restriction of a shield information barrier\nobject"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/device_pinners/{device_pinner_id}",
    "method": "removeDevicePin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Device pinners",
    "typeScriptTag": "devicePinners",
    "description": "Remove device pin",
    "parameters": [
      {
        "name": "devicePinnerId",
        "schema": "string",
        "required": true,
        "description": "The ID of the device pin",
        "example": "2324234"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the pin has been deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/device_pinners/{device_pinner_id}",
    "method": "getPinnerInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device pinners",
    "typeScriptTag": "devicePinners",
    "description": "Get device pin",
    "parameters": [
      {
        "name": "devicePinnerId",
        "schema": "string",
        "required": true,
        "description": "The ID of the device pin",
        "example": "2324234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Device pins allow enterprises to control what devices can\nuse native Box applications."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/enterprises/{enterprise_id}/device_pinners",
    "method": "listPinnerInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Device pinners",
    "typeScriptTag": "devicePinners",
    "description": "List enterprise device pins",
    "parameters": [
      {
        "name": "enterpriseId",
        "schema": "string",
        "required": true,
        "description": "The ID of the enterprise",
        "example": "3442311"
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.",
        "example": "ASC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of device pins"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/terms_of_services",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms of service",
    "typeScriptTag": "termsOfService",
    "description": "List terms of services",
    "parameters": [
      {
        "name": "tosType",
        "schema": "string",
        "required": false,
        "description": "Limits the results to the terms of service of the given type.",
        "example": "managed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of terms of services"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/terms_of_services",
    "method": "createForEnterpriseAndType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Terms of service",
    "typeScriptTag": "termsOfService",
    "description": "Create terms of service",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enabled"
      },
      {
        "name": "tos_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "managed"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "By collaborating on this file you are accepting..."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The root-level record that is supposed to represent a\nsingle Terms of Service."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/terms_of_services/{terms_of_service_id}",
    "method": "getSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms of service",
    "typeScriptTag": "termsOfService",
    "description": "Get terms of service",
    "parameters": [
      {
        "name": "termsOfServiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the terms of service.",
        "example": "324234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The root-level record that is supposed to represent a\nsingle Terms of Service."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/terms_of_services/{terms_of_service_id}",
    "method": "updateSpecificTerm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Terms of service",
    "typeScriptTag": "termsOfService",
    "description": "Update terms of service",
    "parameters": [
      {
        "name": "termsOfServiceId",
        "schema": "string",
        "required": true,
        "description": "The ID of the terms of service.",
        "example": "324234"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "enabled"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "By collaborating on this file you are accepting..."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The root-level record that is supposed to represent a\nsingle Terms of Service."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/terms_of_service_user_statuses",
    "method": "listUserStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Terms of service user statuses",
    "typeScriptTag": "termsOfServiceUserStatuses",
    "description": "List terms of service user statuses",
    "parameters": [
      {
        "name": "tosId",
        "schema": "string",
        "required": true,
        "description": "The ID of the terms of service.",
        "example": "324234"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Limits results to the given user ID.",
        "example": "123334"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of terms of service user statuses"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/terms_of_service_user_statuses",
    "method": "createUserStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Terms of service user statuses",
    "typeScriptTag": "termsOfServiceUserStatuses",
    "description": "Create terms of service status for new user",
    "parameters": [
      {
        "name": "tos",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_accepted",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The association between a Terms of Service and a user"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/terms_of_service_user_statuses/{terms_of_service_user_status_id}",
    "method": "updateUserStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Terms of service user statuses",
    "typeScriptTag": "termsOfServiceUserStatuses",
    "description": "Update terms of service status for existing user",
    "parameters": [
      {
        "name": "termsOfServiceUserStatusId",
        "schema": "string",
        "required": true,
        "description": "The ID of the terms of service status.",
        "example": "324234"
      },
      {
        "name": "is_accepted",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The association between a Terms of Service and a user"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_entries",
    "method": "listAllowedCollaborationDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain restrictions for collaborations",
    "typeScriptTag": "domainRestrictionsForCollaborations",
    "description": "List allowed collaboration domains",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of allowed domains for collaboration."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_entries",
    "method": "addAllowedDomainEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain restrictions for collaborations",
    "typeScriptTag": "domainRestrictionsForCollaborations",
    "description": "Add domain to list of allowed collaboration domains",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "example.com"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "inbound"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entry that describes an approved domain for which users can collaborate\nwith files and folders in your enterprise or vice versa."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_entries/{collaboration_whitelist_entry_id}",
    "method": "removeAllowedDomainEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domain restrictions for collaborations",
    "typeScriptTag": "domainRestrictionsForCollaborations",
    "description": "Remove domain from list of allowed collaboration domains",
    "parameters": [
      {
        "name": "collaborationWhitelistEntryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the entry in the list.",
        "example": "213123"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A blank response is returned if the entry was\nsuccessfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_entries/{collaboration_whitelist_entry_id}",
    "method": "allowedCollaborationDomain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain restrictions for collaborations",
    "typeScriptTag": "domainRestrictionsForCollaborations",
    "description": "Get allowed collaboration domain",
    "parameters": [
      {
        "name": "collaborationWhitelistEntryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the entry in the list.",
        "example": "213123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entry that describes an approved domain for which users can collaborate\nwith files and folders in your enterprise or vice versa."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_exempt_targets",
    "method": "listExemptUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain restrictions (User exemptions)",
    "typeScriptTag": "domainRestrictionsUserExemptions",
    "description": "List users exempt from collaboration domain restrictions",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of users exempt from any of the restrictions\nimposed by the list of allowed collaboration domains for this enterprise."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_exempt_targets",
    "method": "createUserExemptionFromCollaborationDomainRestrictions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain restrictions (User exemptions)",
    "typeScriptTag": "domainRestrictionsUserExemptions",
    "description": "Create user exemption from collaboration domain restrictions",
    "parameters": [
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The user that is exempt from any of the restrictions\nimposed by the list of allowed collaboration domains for this enterprise."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}",
    "method": "removeExemption",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domain restrictions (User exemptions)",
    "typeScriptTag": "domainRestrictionsUserExemptions",
    "description": "Remove user from list of users exempt from domain restrictions",
    "parameters": [
      {
        "name": "collaborationWhitelistExemptTargetId",
        "schema": "string",
        "required": true,
        "description": "The ID of the exemption to the list.",
        "example": "984923"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "A blank response is returned if the exemption was\nsuccessfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}",
    "method": "getUserExemption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain restrictions (User exemptions)",
    "typeScriptTag": "domainRestrictionsUserExemptions",
    "description": "Get user exempt from collaboration domain restrictions",
    "parameters": [
      {
        "name": "collaborationWhitelistExemptTargetId",
        "schema": "string",
        "required": true,
        "description": "The ID of the exemption to the list.",
        "example": "984923"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The user that is exempt from any of the restrictions\nimposed by the list of allowed collaboration domains for this enterprise."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/storage_policies",
    "method": "listPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standard and Zones Storage Policies",
    "typeScriptTag": "standardAndZonesStoragePolicies",
    "description": "List storage policies",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.",
        "example": [
          "id",
          "type",
          "name"
        ]
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of storage policies."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/storage_policies/{storage_policy_id}",
    "method": "getSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standard and Zones Storage Policies",
    "typeScriptTag": "standardAndZonesStoragePolicies",
    "description": "Get storage policy",
    "parameters": [
      {
        "name": "storagePolicyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the storage policy.",
        "example": "34342"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Storage Policy object describes the storage zone."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/storage_policy_assignments",
    "method": "listAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standard and Zones Storage Policy Assignments",
    "typeScriptTag": "standardAndZonesStoragePolicyAssignments",
    "description": "List storage policy assignments",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "resolvedForType",
        "schema": "string",
        "required": true,
        "description": "The target type to return assignments for",
        "example": "user"
      },
      {
        "name": "resolvedForId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user or enterprise to return assignments for",
        "example": "984322"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of storage policy assignments."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/storage_policy_assignments",
    "method": "createAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standard and Zones Storage Policy Assignments",
    "typeScriptTag": "standardAndZonesStoragePolicyAssignments",
    "description": "Assign storage policy",
    "parameters": [
      {
        "name": "storage_policy",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "assigned_to",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The assignment of a storage policy to a user or enterprise"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/storage_policy_assignments/{storage_policy_assignment_id}",
    "method": "unassignStoragePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Standard and Zones Storage Policy Assignments",
    "typeScriptTag": "standardAndZonesStoragePolicyAssignments",
    "description": "Unassign storage policy",
    "parameters": [
      {
        "name": "storagePolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the storage policy assignment.",
        "example": "932483"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Returns an empty response when the storage policy\nassignment is successfully deleted."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/storage_policy_assignments/{storage_policy_assignment_id}",
    "method": "getSpecificAssignment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standard and Zones Storage Policy Assignments",
    "typeScriptTag": "standardAndZonesStoragePolicyAssignments",
    "description": "Get storage policy assignment",
    "parameters": [
      {
        "name": "storagePolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the storage policy assignment.",
        "example": "932483"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The assignment of a storage policy to a user or enterprise"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/storage_policy_assignments/{storage_policy_assignment_id}",
    "method": "updateSpecificAssignment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Standard and Zones Storage Policy Assignments",
    "typeScriptTag": "standardAndZonesStoragePolicyAssignments",
    "description": "Update storage policy assignment",
    "parameters": [
      {
        "name": "storagePolicyAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the storage policy assignment.",
        "example": "932483"
      },
      {
        "name": "storage_policy",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The assignment of a storage policy to a user or enterprise"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/zip_downloads",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Zip Downloads",
    "typeScriptTag": "zipDownloads",
    "description": "Create zip download",
    "parameters": [
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "download_file_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "January Financials"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Represents a successful request to create a `zip` archive of a list of files\nand folders."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/zip_downloads/{zip_download_id}/content",
    "method": "getContentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Zip Downloads",
    "typeScriptTag": "zipDownloads",
    "description": "Download zip archive",
    "parameters": [
      {
        "name": "zipDownloadId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent this `zip` archive.",
        "example": "Lu6fA9Ob-jyysp3AAvMF4AkLEwZwAYbL=tgj2zIC=eK9RvJnJbjJl9rNh2qBgHDpyOCAOhpM=vajg2mKq8Mdd"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The binary content of the archive, which will include the items\nrequested for this download."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "429",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/zip_downloads/{zip_download_id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Zip Downloads",
    "typeScriptTag": "zipDownloads",
    "description": "Get zip download status",
    "parameters": [
      {
        "name": "zipDownloadId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent this `zip` archive.",
        "example": "Lu6fA9Ob-jyysp3AAvMF4AkLEwZwAYbL=tgj2zIC=eK9RvJnJbjJl9rNh2qBgHDpyOCAOhpM=vajg2mKq8Mdd"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The status of a `zip` archive being downloaded."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/sign_requests/{sign_request_id}/cancel",
    "method": "cancelRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sign requests",
    "typeScriptTag": "signRequests",
    "description": "Cancel sign request",
    "parameters": [
      {
        "name": "signRequestId",
        "schema": "string",
        "required": true,
        "description": "The ID of the sign request",
        "example": "33243242"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Sign Request Object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/sign_requests/{sign_request_id}/resend",
    "method": "resendSignRequestEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sign requests",
    "typeScriptTag": "signRequests",
    "description": "Resend sign request",
    "parameters": [
      {
        "name": "signRequestId",
        "schema": "string",
        "required": true,
        "description": "The ID of the sign request",
        "example": "33243242"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Returns an empty response when the API call was successful.\nThe email notifications will be sent asynchronously."
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/sign_requests/{sign_request_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sign requests",
    "typeScriptTag": "signRequests",
    "description": "Get sign request by ID",
    "parameters": [
      {
        "name": "signRequestId",
        "schema": "string",
        "required": true,
        "description": "The ID of the sign request",
        "example": "33243242"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Sign Request Object"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/sign_requests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sign requests",
    "typeScriptTag": "signRequests",
    "description": "List sign requests",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of a sign request, as returned from any Box Sign\nAPI endpoints by default."
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/sign_requests",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sign requests",
    "typeScriptTag": "signRequests",
    "description": "Create sign request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Sign Request Object"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/workflows",
    "method": "workflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "List workflows",
    "parameters": [
      {
        "name": "folderId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.",
        "example": "12345"
      },
      {
        "name": "triggerType",
        "schema": "string",
        "required": false,
        "description": "Type of trigger to search for.",
        "example": "WORKFLOW_MANUAL_START"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of workflows.\n\nYou application must be authorized to use the `Manage Box Relay` application\nscope within the developer console in order to use this resource."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/workflows/{workflow_id}/start",
    "method": "startBasedOnRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Starts workflow based on request body",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The ID of the workflow.",
        "example": "12345"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "workflow_parameters"
      },
      {
        "name": "flow",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "folder",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "outcomes",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Starts the workflow."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "403",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/sign_templates",
    "method": "listTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sign templates",
    "typeScriptTag": "signTemplates",
    "description": "List Box Sign templates",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of templates, as returned from any Box Sign\nAPI endpoints by default."
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/sign_templates/{template_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sign templates",
    "typeScriptTag": "signTemplates",
    "description": "Get Box Sign template by ID",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "The ID of a Box Sign template.",
        "example": "123075213-7d117509-8f05-42e4-a5ef-5190a319d41d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Box Sign template object"
      },
      {
        "statusCode": "401",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/integration_mappings/slack",
    "method": "listSlackMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration mappings",
    "typeScriptTag": "integrationMappings",
    "description": "List Slack integration mappings",
    "parameters": [
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "partnerItemType",
        "schema": "string",
        "description": "Mapped item type, for which the mapping should be returned",
        "example": "channel"
      },
      {
        "name": "partnerItemId",
        "schema": "string",
        "description": "ID of the mapped item, for which the mapping should be returned",
        "example": "12345"
      },
      {
        "name": "boxItemId",
        "schema": "string",
        "description": "Box item ID, for which the mappings should be returned",
        "example": "12345"
      },
      {
        "name": "boxItemType",
        "schema": "string",
        "description": "Box item type, for which the mappings should be returned",
        "example": "folder"
      },
      {
        "name": "isManuallyCreated",
        "schema": "boolean",
        "description": "Whether the mapping has been manually created",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of integration mapping\nobjects."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/integration_mappings/slack",
    "method": "createSlackMapping",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integration mappings",
    "typeScriptTag": "integrationMappings",
    "description": "Create Slack integration mapping",
    "parameters": [
      {
        "name": "partner_item",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "box_item",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A standard representation of an integration\nmapping object."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/integration_mappings/slack/{integration_mapping_id}",
    "method": "deleteSlackMapping",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integration mappings",
    "typeScriptTag": "integrationMappings",
    "description": "Delete Slack integration mapping",
    "parameters": [
      {
        "name": "integrationMappingId",
        "schema": "string",
        "required": true,
        "description": "An ID of an integration mapping",
        "example": "11235432"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Empty body in response"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/integration_mappings/slack/{integration_mapping_id}",
    "method": "updateSlackMapping",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Integration mappings",
    "typeScriptTag": "integrationMappings",
    "description": "Update Slack integration mapping",
    "parameters": [
      {
        "name": "integrationMappingId",
        "schema": "string",
        "required": true,
        "description": "An ID of an integration mapping",
        "example": "11235432"
      },
      {
        "name": "box_item",
        "schema": "object",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A standard representation of an integration\nmapping object."
      },
      {
        "statusCode": "400",
        "description": "A generic error"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  },
  {
    "url": "/file_activities",
    "method": "listByFileId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File activities",
    "typeScriptTag": "fileActivities",
    "description": "List file activities",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File ID for which to retrieve activity",
        "example": "888578620991"
      },
      {
        "name": "activityTypes",
        "schema": "array",
        "description": "Comma-separated list of activity types to return. This field is ignored if marker is passed in. Defaults to all activity types.",
        "example": "comment,task,annotation,versions,app_activity"
      },
      {
        "name": "commentFields",
        "schema": "array",
        "description": "fields that are required for comments",
        "example": "tagged_message,message,created_at,created_by,modified_at,permissions"
      },
      {
        "name": "versionsFields",
        "schema": "array",
        "description": "fields that are required for versions",
        "example": "created_by,end,start,type"
      },
      {
        "name": "annotationFields",
        "schema": "array",
        "description": "fields that are required for annotations",
        "example": "file_version,description,created_at,created_by,modified_at,permissions,target,status"
      },
      {
        "name": "taskFields",
        "schema": "array",
        "description": "fields that are required for tasks",
        "example": "description,created_at,created_by,modified_at,permissions,completion_rule,status"
      },
      {
        "name": "appActivityFields",
        "schema": "array",
        "description": "fields that are required for `app_activity`",
        "example": "rendered_text,occurred_at,created_by,activity_template,app"
      },
      {
        "name": "replyLimit",
        "schema": "string",
        "description": "maximum number of replies the response should contain per each top level activity[annotation, comment]",
        "example": 1
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Used to filter an annotation or a comment based on the status",
        "example": "open"
      },
      {
        "name": "enableReplies",
        "schema": "boolean",
        "description": "Whether or not replies should be returned",
        "example": true
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of items to return per page.",
        "example": 1000
      },
      {
        "name": "marker",
        "schema": "string",
        "required": false,
        "description": "Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.",
        "example": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of file activities"
      },
      {
        "statusCode": "404",
        "description": "A generic error"
      },
      {
        "statusCode": "default",
        "description": "A generic error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Box Platform API"
      apiBaseUrl="https://api.box.com/2.0"
      apiVersion="2.0.0"
      endpoints={164}
      sdkMethods={264}
      schemas={332}
      parameters={804}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/box/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/box/openapi.yaml"
      developerDocumentation="developer.box.com/reference/"
    />
  );
}
  