import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WeFitterTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="we-fitter-typescript-sdk"
      metaDescription={`WeFitter helps digital health platforms improve business performance, engagement and data insights introducing an aggregator API that provides connections with todays most used fitness app's, wearables & gamification elements.

WeFitter's easy to integrate API will boost up user engagement and gives insight in users health profiles in order to personalize content, offerings and health advise. 

WeFitter is build by Thunderbyte.AI, a Dutch Al/ ML organisation with over 12 years of experience in building digital health products.  

Ask for a demo > business@wefitter.com`}
      company="WeFitter"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wefitter/logo.png"
      companyKebabCase="we-fitter"
      clientNameCamelCase="weFitter"
      homepage="wefitter.com"
      lastUpdated={new Date("2024-03-29T23:33:14.049Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wefitter/favicon.png"
      // Missing contactUrl
      contactEmail="hello@wefitter.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wefitter/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["health_data"]}
      methods={[
  {
    "url": "/insights/bio_age",
    "method": "getBioAgeWeekly",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "Get someones biological age on a weekly basis.",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/loyalty/get_recommended_products",
    "method": "getRecommendedProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "loyalty",
    "typeScriptTag": "loyalty",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/loyalty/get_shoppingcart_link",
    "method": "getShoppingcartLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "loyalty",
    "typeScriptTag": "loyalty",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/app/totals",
    "method": "getTotals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Totals",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "List Challenges",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "recent",
        "schema": "integer",
        "required": false,
        "description": "Show challenges that have not ended in the last N weeks"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Create challenge",
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
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "public_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "slogan",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START"
      },
      {
        "name": "end",
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
        "name": "goal",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GOAL"
      },
      {
        "name": "goal_value",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "goal_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GOAL_TYPE"
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VISIBILITY"
      },
      {
        "name": "num_members",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calculation_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALCULATION_METHOD"
      },
      {
        "name": "goal_progress",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "enrollment_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENROLLMENT_METHOD"
      },
      {
        "name": "default_enrollment_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "repetition",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPETITION"
      },
      {
        "name": "avatar",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data_source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activity_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "current_period_start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "current_period_end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "goal_cap",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "total_calories",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_distance",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_steps",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_points",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_activity_duration",
        "schema": "string <iso8601 duration>",
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
    "url": "/challenge/{challenge_public_id}/team",
    "method": "teamStandingsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Team leaderboard",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "dateRange",
        "schema": "integer",
        "required": false,
        "description": "Index of the time period use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{challenge_public_id}/team/{team_public_id}",
    "method": "teamContributionList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Team contribution",
    "parameters": [
      {
        "name": "dateRange",
        "schema": "integer",
        "required": false,
        "description": "Index of the time period use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{public_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Delete challenge",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{public_id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Get Challenge",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{public_id}",
    "method": "partialEdit",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Partial edit challenge",
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
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "public_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "slogan",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START"
      },
      {
        "name": "end",
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
        "name": "goal",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GOAL"
      },
      {
        "name": "goal_value",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "goal_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GOAL_TYPE"
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VISIBILITY"
      },
      {
        "name": "num_members",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calculation_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALCULATION_METHOD"
      },
      {
        "name": "goal_progress",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "enrollment_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENROLLMENT_METHOD"
      },
      {
        "name": "default_enrollment_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "repetition",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPETITION"
      },
      {
        "name": "avatar",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data_source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activity_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "current_period_start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "current_period_end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "goal_cap",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "total_calories",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_distance",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_steps",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_points",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_activity_duration",
        "schema": "string <iso8601 duration>",
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
    "url": "/challenge/{public_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Edit challenge",
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
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "public_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "slogan",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START"
      },
      {
        "name": "end",
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
        "name": "goal",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GOAL"
      },
      {
        "name": "goal_value",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "goal_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GOAL_TYPE"
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VISIBILITY"
      },
      {
        "name": "num_members",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calculation_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALCULATION_METHOD"
      },
      {
        "name": "goal_progress",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "enrollment_method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENROLLMENT_METHOD"
      },
      {
        "name": "default_enrollment_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "repetition",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPETITION"
      },
      {
        "name": "avatar",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data_source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activity_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "current_period_start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "current_period_end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "goal_cap",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "total_calories",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_distance",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_steps",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_points",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "total_activity_duration",
        "schema": "string <iso8601 duration>",
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
    "url": "/challenge/{public_id}/deactivate_member",
    "method": "deactivateMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Deactivate member",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "A profile public_id is expected",
        "example": "PROFILE"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": "A team public_id is expected"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "Whether profile actively participates in challenge.\n\nWhile inactive, scores/leaderboard will not be updated but still be visible."
      },
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/deactivate_member",
    "method": "deactivateMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "This docstring is used by Django Rest Framework",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/deactivate_members",
    "method": "deactivateMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Deactivate members",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "A profile public_id is expected",
        "example": "PROFILE"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": "A team public_id is expected"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "Whether profile actively participates in challenge.\n\nWhile inactive, scores/leaderboard will not be updated but still be visible."
      },
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/deactivate_members",
    "method": "deactivateMembers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "This docstring is used by Django Rest Framework",
    "parameters": [
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/leaderboard",
    "method": "leaderboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Leaderboard",
    "parameters": [
      {
        "name": "dateRange",
        "schema": "integer",
        "required": false,
        "description": "Index of the time period use"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{public_id}/leaderboard_history",
    "method": "getScoresHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Leaderboard history",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{public_id}/member",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Remove member",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "A profile public_id is expected",
        "example": "PROFILE"
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
    "url": "/challenge/{public_id}/member",
    "method": "memberCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Add member",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/member",
    "method": "memberAdd",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Add member",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE"
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/members",
    "method": "getMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Get members",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{public_id}/members",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Add members",
    "parameters": [
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/members",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Add members",
    "parameters": [
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/challenge/{public_id}/periods",
    "method": "periods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Periods",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/challenge/{public_id}/remove_members",
    "method": "removeMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "challenge",
    "typeScriptTag": "challenge",
    "description": "Remove members",
    "parameters": [
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/connection/{connection_slug}/connect",
    "method": "disconnectWearable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "connection",
    "typeScriptTag": "connection",
    "description": "Disconnect Wearable",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "A profile public_id is expected",
        "example": "PROFILE"
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
    "url": "/connection/{connection_slug}/connect",
    "method": "getOAuthUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "connection",
    "typeScriptTag": "connection",
    "description": "Connect wearable",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE"
      },
      {
        "name": "joined",
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
    "url": "/notification/send_to_all",
    "method": "sendToAllCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "Notification to all profiles in app",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "link",
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
    "url": "/notification/send_to_profiles",
    "method": "sendToProfilesCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "Notification to specific profiles",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "link",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "profiles",
        "schema": "array",
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
    "url": "/profile",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "List Profiles",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
      },
      {
        "name": "ordering",
        "schema": "string",
        "required": false,
        "description": "Which field to use when ordering the results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Create Profile",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "public_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nickname",
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
        "name": "birthdate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zoneinfo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE"
      },
      {
        "name": "avatar",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bearer",
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
    "url": "/profile/{profile_public_id}/activity_segment",
    "method": "listActivitySegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Activity segment",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/biometric",
    "method": "listBiometricChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Bio Metric",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/biometric_measurement",
    "method": "listBiometricChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Biometric Measurement",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      },
      {
        "name": "measurementType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEASUREMENT_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/bmi",
    "method": "getBmiOverTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "BMI",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/daily_detail",
    "method": "getDailyDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Daily details",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/daily_summary",
    "method": "getDailySummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Daily Summary",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      },
      {
        "name": "deduplicate",
        "schema": "boolean",
        "required": false,
        "description": "If set to true, duplicates will be aggregated."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/detail_sample",
    "method": "getDetailSamples",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Detail Sample",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/ecg_recordings",
    "method": "getEcgRecordings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Electrocardiograms",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/ecg_recordings/data",
    "method": "getEcgRecordingsData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Electrocardiogram data",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/ecg_recordings/pdf",
    "method": "getEcgPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Electrocardiogram PDF",
    "parameters": [
      {
        "name": "datetime",
        "schema": "string",
        "required": true,
        "description": "The timestamp when the ECG has been recorded in the format `yyyymmddhhmmss`. e.g. `20210913132513`",
        "example": "DATETIME"
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/event",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Event",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/event",
    "method": "eventCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Create Event",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "points",
        "schema": "number",
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
    "url": "/profile/{profile_public_id}/heartrate_sample",
    "method": "getHeartrateSample",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Heart Rate Sample",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      },
      {
        "name": "heartRateDetail",
        "schema": "boolean",
        "required": false,
        "description": "If set to true it will add heart_rate_samples field"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/heartrate_summary",
    "method": "getHeartRateSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Heart Rate Summary",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/height",
    "method": "listHeightChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Height",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/sleep_detail",
    "method": "getSleepDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Sleep detail",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/sleep_summary",
    "method": "getSleepSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Sleep Summary",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      },
      {
        "name": "detail",
        "schema": "boolean",
        "required": false,
        "description": "If set to true and only 1 result is returned, it will add a detail field"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/stress_samples",
    "method": "getStressSamples",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Stress Sample",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/stress_summary",
    "method": "getStressSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Stress Summary",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/track_sample",
    "method": "getGpxTrackSamples",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Track Sample",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/weight",
    "method": "listWeightChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Weight",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{profile_public_id}/workout",
    "method": "listWorkouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Workout",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Lower bound of date or timestamp."
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Upper bound of date or timestamp."
      },
      {
        "name": "deduplicate",
        "schema": "boolean",
        "required": false,
        "description": "If set to true, duplicates will be aggregated."
      },
      {
        "name": "heartRateDetail",
        "schema": "boolean",
        "required": false,
        "description": "If set to true and page_size is 1, it will add heart_rate_samples field"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{public_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Delete Profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{public_id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Get Profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{public_id}",
    "method": "updatePartial",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Partial Update",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "public_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zoneinfo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total_calories",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_distance",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_steps",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_points",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_activity_duration",
        "schema": "string <iso8601 duration>",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "avatar",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num_active_challenges",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num_done_challenges",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num_future_challenges",
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
    "url": "/profile/{public_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Update profile",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "public_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zoneinfo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "total_calories",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_distance",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_steps",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_points",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total_activity_duration",
        "schema": "string <iso8601 duration>",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "avatar",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num_active_challenges",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num_done_challenges",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num_future_challenges",
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
    "url": "/profile/{public_id}/challenge",
    "method": "challenge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Challenge",
    "parameters": [
      {
        "name": "recent",
        "schema": "integer",
        "required": false,
        "description": "Show challenges that have not ended in the last N weeks"
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": false,
        "description": "Only return challenges that are active after this time\n\nNote: this only affects challenges that are not joined.\n\nDefaults to now"
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": false,
        "description": "Only return challenges that are active before this time\n\nNote: this only affects challenges that are not joined.\n\nDefaults to now"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{public_id}/challenges",
    "method": "challenges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "This docstring is used by Django Rest Framework",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/profile/{public_id}/connections",
    "method": "connections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile",
    "typeScriptTag": "profile",
    "description": "Connections",
    "parameters": [
      {
        "name": "redirect",
        "schema": "string",
        "required": false,
        "description": "After connecting redirect back to this url.\n\nNote: has to be a valid http url. For deeplinks (to apps) first redirect to your own backend and then deeplink from there.\n\nNote: the user is only redirected on a successfull connection, otherwise an error screen is shown. (see redirect_on_error to change this)\n\nNote: if this parameter is omitted, then user will see a generic success screen."
      },
      {
        "name": "redirectOnError",
        "schema": "boolean",
        "required": false,
        "description": "If enabled, then user will also be redirected to the redirect url if an error occurs\n\nNote: a query parameter 'error' is added to the redirect url. Possible values are access_denied, unknown. New values may be added at anytime\n\nNote: for backwards compatibility the default is false, but this will be changed in the next breaking release"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "List Teams",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Create Team",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "public_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "num_members",
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
        "name": "avatar",
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
    "url": "/team/{public_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Deletes a Team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{public_id}",
    "method": "read",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Team",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{public_id}",
    "method": "editTeamPartial",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Partial Edit a Team",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "public_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "num_members",
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
        "name": "avatar",
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
    "url": "/team/{public_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Edit Team",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "public_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "num_members",
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
        "name": "avatar",
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
    "url": "/team/{public_id}/member",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Remove member",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "A profile public_id is expected",
        "example": "PROFILE"
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
    "url": "/team/{public_id}/member",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Add member",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE"
      },
      {
        "name": "joined",
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
    "url": "/team/{public_id}/member",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Add member",
    "parameters": [
      {
        "name": "profile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE"
      },
      {
        "name": "joined",
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
    "url": "/team/{public_id}/members",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Add members",
    "parameters": [
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/team/{public_id}/members",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Add members",
    "parameters": [
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/team/{public_id}/remove_members",
    "method": "removeMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Remove members",
    "parameters": [
      {
        "name": "profiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "joined",
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
    "url": "/token",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "Create Token",
    "parameters": [
      {
        "name": "bearer",
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
  }
]
    }
      language="TypeScript"
      apiTitle="WeFitter API"
      apiBaseUrl="https://api.wefitter.com/api/v1.3"
      apiVersion="v1.3"
      endpoints={51}
      sdkMethods={125}
      schemas={81}
      parameters={350}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wefitter/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wefitter/openapi.yaml"
      developerDocumentation="www.wefitter.com/en-us/developers/documentation/"
    />
  );
}
  