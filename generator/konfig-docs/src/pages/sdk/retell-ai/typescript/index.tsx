import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RetellAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="retell-ai-typescript-sdk"
      metaDescription={`API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.`}
      company="Retell AI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/logo.png"
      companyKebabCase="retell-ai"
      clientNameCamelCase="retellAi"
      homepage="retellai.com"
      lastUpdated={new Date("2024-03-23T08:08:42.516Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/favicon.png"
      contactUrl="https://www.retellai.com/"
      contactEmail="founders@retellai.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["ai","voice_generation","llm","text_to_audio"]}
      methods={[
  {
    "url": "/register-call",
    "method": "establishConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Register Call To Get CallId To Establish Connection",
    "parameters": [
      {
        "name": "agent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD"
      },
      {
        "name": "audio_websocket_protocol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "twilio"
      },
      {
        "name": "audio_encoding",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "s16le"
      },
      {
        "name": "sample_rate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 24000
      },
      {
        "name": "end_call_after_silence_ms",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 600000
      },
      {
        "name": "from_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 12137771234
      },
      {
        "name": "to_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 12137771235
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/get-call/{call_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Retrieve details of a specific call",
    "parameters": [
      {
        "name": "callId",
        "schema": "string",
        "required": true,
        "description": "The call id to retrieve call history for.",
        "example": "119c3f8e47135a29e65947eeb34cf12d"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/list-calls",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Call",
    "typeScriptTag": "call",
    "description": "Retrieve call details",
    "parameters": [
      {
        "name": "filterCriteria",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "The calls will be sorted by `start_timestamp`, whether to return the calls in ascending or descending order.",
        "default": "descending"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of calls returned.",
        "default": 1000
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/create-agent",
    "method": "createNewAgent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Create a new agent",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/get-agent/{agent_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Retrieve details of a specific agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the agent to be retrieved.",
        "example": "16b980523634a6dc504898cda492e939"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/list-agents",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "List all agents",
    "parameters": [],
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/update-agent/{agent_id}",
    "method": "updateExistingAgent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Update an existing agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the agent to be updated.",
        "example": "16b980523634a6dc504898cda492e939"
      },
      {
        "name": "llm_websocket_url",
        "schema": "string",
        "description": "",
        "example": "wss://your-websocket-endpoint"
      },
      {
        "name": "voice_id",
        "schema": "string",
        "description": "",
        "example": "11labs-Adrian"
      },
      {
        "name": "voice_temperature",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "voice_speed",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "responsiveness",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "enable_backchannel",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "ambient_sound",
        "schema": "string",
        "description": ""
      },
      {
        "name": "agent_name",
        "schema": "string",
        "description": "",
        "example": "Jarvis"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "en-US"
      },
      {
        "name": "webhook_url",
        "schema": "string",
        "description": "",
        "example": "https://webhook-url-here"
      },
      {
        "name": "boosted_keywords",
        "schema": "array",
        "description": "",
        "example": [
          "retell",
          "kroger"
        ]
      },
      {
        "name": "format_text",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "optOutSensitiveDataStorage",
        "schema": "boolean",
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
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/delete-agent/{agent_id}",
    "method": "deleteExistingAgent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Agent",
    "typeScriptTag": "agent",
    "description": "Delete an existing agent",
    "parameters": [
      {
        "name": "agentId",
        "schema": "string",
        "required": true,
        "description": "Unique id of the agent to be deleted.",
        "example": "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD"
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
        "statusCode": "422",
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
      apiTitle="Retell SDK"
      apiBaseUrl="https://api.retellai.com"
      apiVersion="1.0.0"
      endpoints={9}
      sdkMethods={9}
      schemas={14}
      parameters={28}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/retell-ai/openapi.yaml"
      developerDocumentation="docs.retellai.com/general/introduction"
    />
  );
}
  