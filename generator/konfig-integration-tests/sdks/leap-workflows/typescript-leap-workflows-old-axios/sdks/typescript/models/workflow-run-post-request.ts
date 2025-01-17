/*
Leap Workflows API

The Leap Workflows API allows developers to run workflows, fetch workflow runs, and provide other utility functions related to workflow runs. Please use the X-Api-Key for authenticated requests.

The version of the OpenAPI document: 1.0
Contact: help@tryleap.ai

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface WorkflowRunPostRequest
 */
export interface WorkflowRunPostRequest {
    /**
     * The UUID of the workflow to be run.
     * @type {string}
     * @memberof WorkflowRunPostRequest
     */
    'workflow_id': string;
    /**
     * The URL to which the workflow results should be sent to on completion.
     * @type {string}
     * @memberof WorkflowRunPostRequest
     */
    'webhook_url'?: string;
    /**
     * Variables that the workflow can use globally and their values.
     * @type {{ [key: string]: any; }}
     * @memberof WorkflowRunPostRequest
     */
    'input'?: { [key: string]: any; };
}

