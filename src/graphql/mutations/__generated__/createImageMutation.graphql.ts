/**
 * @generated SignedSource<<4dc37d767113e54b0d326a145e8f0eec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type createImageInput = {
  clientMutationId?: string | null;
  title?: string | null;
  url?: string | null;
};
export type createImageMutation$variables = {
  input: createImageInput;
};
export type createImageMutation$data = {
  readonly createImage: {
    readonly image: {
      readonly cursor: string;
      readonly node: {
        readonly id: string | null;
        readonly isFavourite: boolean | null;
        readonly title: string | null;
        readonly url: string | null;
      } | null;
    } | null;
    readonly message: string | null;
    readonly success: boolean | null;
  } | null;
};
export type createImageMutation = {
  response: createImageMutation$data;
  variables: createImageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "createImagePayload",
    "kind": "LinkedField",
    "name": "createImage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageEdge",
        "kind": "LinkedField",
        "name": "image",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFavourite",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createImageMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createImageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "900cc5af415c1446c2cd4dbcc941c407",
    "id": null,
    "metadata": {},
    "name": "createImageMutation",
    "operationKind": "mutation",
    "text": "mutation createImageMutation(\n  $input: createImageInput!\n) {\n  createImage(input: $input) {\n    success\n    message\n    image {\n      node {\n        id\n        title\n        isFavourite\n        url\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2861040d54300b74bc9d9cd1b86ea96f";

export default node;
