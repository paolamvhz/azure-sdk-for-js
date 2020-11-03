/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/knowledgebaseMappers";
import * as Parameters from "../models/parameters";
import { QnAMakerClientContext } from "../qnAMakerClientContext";

/** Class representing a Knowledgebase. */
export class Knowledgebase {
  private readonly client: QnAMakerClientContext;

  /**
   * Create a Knowledgebase.
   * @param {QnAMakerClientContext} client Reference to the service client.
   */
  constructor(client: QnAMakerClientContext) {
    this.client = client;
  }

  /**
   * @summary Gets all knowledgebases for a user.
   * @param [options] The optional parameters
   * @returns Promise<Models.KnowledgebaseListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.KnowledgebaseListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.KnowledgebasesDTO>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.KnowledgebasesDTO>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.KnowledgebasesDTO>, callback?: msRest.ServiceCallback<Models.KnowledgebasesDTO>): Promise<Models.KnowledgebaseListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.KnowledgebaseListAllResponse>;
  }

  /**
   * @summary Gets details of a specific knowledgebase.
   * @param kbId Knowledgebase id.
   * @param [options] The optional parameters
   * @returns Promise<Models.KnowledgebaseGetDetailsResponse>
   */
  getDetails(kbId: string, options?: msRest.RequestOptionsBase): Promise<Models.KnowledgebaseGetDetailsResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param callback The callback
   */
  getDetails(kbId: string, callback: msRest.ServiceCallback<Models.KnowledgebaseDTO>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDetails(kbId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.KnowledgebaseDTO>): void;
  getDetails(kbId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.KnowledgebaseDTO>, callback?: msRest.ServiceCallback<Models.KnowledgebaseDTO>): Promise<Models.KnowledgebaseGetDetailsResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        options
      },
      getDetailsOperationSpec,
      callback) as Promise<Models.KnowledgebaseGetDetailsResponse>;
  }

  /**
   * @summary Deletes the knowledgebase and all its data.
   * @param kbId Knowledgebase id.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(kbId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param callback The callback
   */
  deleteMethod(kbId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(kbId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(kbId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @summary Publishes all changes in test index of a knowledgebase to its prod index.
   * @param kbId Knowledgebase id.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  publish(kbId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param callback The callback
   */
  publish(kbId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param options The optional parameters
   * @param callback The callback
   */
  publish(kbId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  publish(kbId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        options
      },
      publishOperationSpec,
      callback);
  }

  /**
   * @summary Replace knowledgebase contents.
   * @param kbId Knowledgebase id.
   * @param replaceKb An instance of ReplaceKbDTO which contains list of qnas to be uploaded
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  replace(kbId: string, replaceKb: Models.ReplaceKbDTO, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param replaceKb An instance of ReplaceKbDTO which contains list of qnas to be uploaded
   * @param callback The callback
   */
  replace(kbId: string, replaceKb: Models.ReplaceKbDTO, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param replaceKb An instance of ReplaceKbDTO which contains list of qnas to be uploaded
   * @param options The optional parameters
   * @param callback The callback
   */
  replace(kbId: string, replaceKb: Models.ReplaceKbDTO, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  replace(kbId: string, replaceKb: Models.ReplaceKbDTO, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        replaceKb,
        options
      },
      replaceOperationSpec,
      callback);
  }

  /**
   * @summary Asynchronous operation to modify a knowledgebase.
   * @param kbId Knowledgebase id.
   * @param updateKb Post body of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.KnowledgebaseUpdateResponse>
   */
  update(kbId: string, updateKb: Models.UpdateKbOperationDTO, options?: msRest.RequestOptionsBase): Promise<Models.KnowledgebaseUpdateResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param updateKb Post body of the request.
   * @param callback The callback
   */
  update(kbId: string, updateKb: Models.UpdateKbOperationDTO, callback: msRest.ServiceCallback<Models.Operation>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param updateKb Post body of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(kbId: string, updateKb: Models.UpdateKbOperationDTO, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Operation>): void;
  update(kbId: string, updateKb: Models.UpdateKbOperationDTO, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Operation>, callback?: msRest.ServiceCallback<Models.Operation>): Promise<Models.KnowledgebaseUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        updateKb,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.KnowledgebaseUpdateResponse>;
  }

  /**
   * @summary Asynchronous operation to create a new knowledgebase.
   * @param createKbPayload Post body of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.KnowledgebaseCreateResponse>
   */
  create(createKbPayload: Models.CreateKbDTO, options?: msRest.RequestOptionsBase): Promise<Models.KnowledgebaseCreateResponse>;
  /**
   * @param createKbPayload Post body of the request.
   * @param callback The callback
   */
  create(createKbPayload: Models.CreateKbDTO, callback: msRest.ServiceCallback<Models.Operation>): void;
  /**
   * @param createKbPayload Post body of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(createKbPayload: Models.CreateKbDTO, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Operation>): void;
  create(createKbPayload: Models.CreateKbDTO, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Operation>, callback?: msRest.ServiceCallback<Models.Operation>): Promise<Models.KnowledgebaseCreateResponse> {
    return this.client.sendOperationRequest(
      {
        createKbPayload,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.KnowledgebaseCreateResponse>;
  }

  /**
   * @summary Download the knowledgebase.
   * @param kbId Knowledgebase id.
   * @param environment Specifies whether environment is Test or Prod. Possible values include:
   * 'Prod', 'Test'
   * @param [options] The optional parameters
   * @returns Promise<Models.KnowledgebaseDownloadResponse>
   */
  download(kbId: string, environment: Models.EnvironmentType, options?: Models.KnowledgebaseDownloadOptionalParams): Promise<Models.KnowledgebaseDownloadResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param environment Specifies whether environment is Test or Prod. Possible values include:
   * 'Prod', 'Test'
   * @param callback The callback
   */
  download(kbId: string, environment: Models.EnvironmentType, callback: msRest.ServiceCallback<Models.QnADocumentsDTO>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param environment Specifies whether environment is Test or Prod. Possible values include:
   * 'Prod', 'Test'
   * @param options The optional parameters
   * @param callback The callback
   */
  download(kbId: string, environment: Models.EnvironmentType, options: Models.KnowledgebaseDownloadOptionalParams, callback: msRest.ServiceCallback<Models.QnADocumentsDTO>): void;
  download(kbId: string, environment: Models.EnvironmentType, options?: Models.KnowledgebaseDownloadOptionalParams | msRest.ServiceCallback<Models.QnADocumentsDTO>, callback?: msRest.ServiceCallback<Models.QnADocumentsDTO>): Promise<Models.KnowledgebaseDownloadResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        environment,
        options
      },
      downloadOperationSpec,
      callback) as Promise<Models.KnowledgebaseDownloadResponse>;
  }

  /**
   * @summary GenerateAnswer call to query knowledgebase (QnA Maker Managed).
   * @param kbId Knowledgebase id.
   * @param generateAnswerPayload Post body of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.KnowledgebaseGenerateAnswerResponse>
   */
  generateAnswer(kbId: string, generateAnswerPayload: Models.QueryDTO, options?: msRest.RequestOptionsBase): Promise<Models.KnowledgebaseGenerateAnswerResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param generateAnswerPayload Post body of the request.
   * @param callback The callback
   */
  generateAnswer(kbId: string, generateAnswerPayload: Models.QueryDTO, callback: msRest.ServiceCallback<Models.QnASearchResultList>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param generateAnswerPayload Post body of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  generateAnswer(kbId: string, generateAnswerPayload: Models.QueryDTO, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QnASearchResultList>): void;
  generateAnswer(kbId: string, generateAnswerPayload: Models.QueryDTO, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QnASearchResultList>, callback?: msRest.ServiceCallback<Models.QnASearchResultList>): Promise<Models.KnowledgebaseGenerateAnswerResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        generateAnswerPayload,
        options
      },
      generateAnswerOperationSpec,
      callback) as Promise<Models.KnowledgebaseGenerateAnswerResponse>;
  }

  /**
   * @summary Train call to add suggestions to knowledgebase (QnAMaker Managed).
   * @param kbId Knowledgebase id.
   * @param trainPayload Post body of the request.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  train(kbId: string, trainPayload: Models.FeedbackRecordsDTO, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param kbId Knowledgebase id.
   * @param trainPayload Post body of the request.
   * @param callback The callback
   */
  train(kbId: string, trainPayload: Models.FeedbackRecordsDTO, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param kbId Knowledgebase id.
   * @param trainPayload Post body of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  train(kbId: string, trainPayload: Models.FeedbackRecordsDTO, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  train(kbId: string, trainPayload: Models.FeedbackRecordsDTO, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        kbId,
        trainPayload,
        options
      },
      trainOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "knowledgebases",
  urlParameters: [
    Parameters.endpoint
  ],
  responses: {
    200: {
      bodyMapper: Mappers.KnowledgebasesDTO
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getDetailsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "knowledgebases/{kbId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.KnowledgebaseDTO
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "knowledgebases/{kbId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const publishOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "knowledgebases/{kbId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const replaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "knowledgebases/{kbId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  requestBody: {
    parameterPath: "replaceKb",
    mapper: {
      ...Mappers.ReplaceKbDTO,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "knowledgebases/{kbId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  requestBody: {
    parameterPath: "updateKb",
    mapper: {
      ...Mappers.UpdateKbOperationDTO,
      required: true
    }
  },
  responses: {
    202: {
      bodyMapper: Mappers.Operation,
      headersMapper: Mappers.KnowledgebaseUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "knowledgebases/create",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: "createKbPayload",
    mapper: {
      ...Mappers.CreateKbDTO,
      required: true
    }
  },
  responses: {
    202: {
      bodyMapper: Mappers.Operation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const downloadOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "knowledgebases/{kbId}/{environment}/qna",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId,
    Parameters.environment
  ],
  queryParameters: [
    Parameters.source,
    Parameters.changedSince
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QnADocumentsDTO
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const generateAnswerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "knowledgebases/{kbId}/generateAnswer",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  requestBody: {
    parameterPath: "generateAnswerPayload",
    mapper: {
      ...Mappers.QueryDTO,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QnASearchResultList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const trainOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "knowledgebases/{kbId}/train",
  urlParameters: [
    Parameters.endpoint,
    Parameters.kbId
  ],
  requestBody: {
    parameterPath: "trainPayload",
    mapper: {
      ...Mappers.FeedbackRecordsDTO,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
