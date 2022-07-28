/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Queries policy events for the subscription level policy assignment.
 *
 * @summary Queries policy events for the subscription level policy assignment.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyEvents_QuerySubscriptionLevelPolicyAssignmentScopeNextLink.json
 */
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function queryAtSubscriptionLevelPolicyAssignmentScopeWithNextLink() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const subscriptionId2 = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const policyAssignmentName = "ec8f9645-8ecb-4abb-9c0b-5292f19d4003";
  const skipToken = "WpmWfBSvPhkAK6QD";
  const options = { skipToken: skipToken };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyEvents.listQueryResultsForSubscriptionLevelPolicyAssignment(
    "default",
    subscriptionId2,
    policyAssignmentName,
    { queryOptions: options }
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtSubscriptionLevelPolicyAssignmentScopeWithNextLink().catch(
  console.error
);
