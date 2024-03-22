/**
 * @generated SignedSource<<9a4af88d7322cdfeb3494f317f72b492>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type deleteImageInput = {
  clientMutationId?: string | null;
  id?: string | null;
};
export type deleteImageMutation$variables = {
  input: deleteImageInput;
};
export type deleteImageMutation$data = {
  readonly deleteImage: {
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
export type deleteImageMutation = {
  response: deleteImageMutation$data;
  variables: deleteImageMutation$variables;
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
    "concreteType": "deleteImagePayload",
    "kind": "LinkedField",
    "name": "deleteImage",
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
    "name": "deleteImageMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteImageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1a7fbecb7273511f1fabca2095746932",
    "id": null,
    "metadata": {},
    "name": "deleteImageMutation",
    "operationKind": "mutation",
    "text": "mutation deleteImageMutation(\n  $input: deleteImageInput!\n) {\n  deleteImage(input: $input) {\n    success\n    message\n    image {\n      node {\n        id\n        title\n        isFavourite\n        url\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8fd595be2fe36213969bae6469c61197";

export default node;
