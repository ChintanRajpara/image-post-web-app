/**
 * @generated SignedSource<<ef300387fd799dd800e8ecd63cbf11d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type updateImageInput = {
  clientMutationId?: string | null;
  id?: string | null;
  isFavourite?: boolean | null;
  title?: string | null;
};
export type updateImageMutation$variables = {
  input: updateImageInput;
};
export type updateImageMutation$data = {
  readonly updateImage: {
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
export type updateImageMutation = {
  response: updateImageMutation$data;
  variables: updateImageMutation$variables;
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
    "concreteType": "updateImagePayload",
    "kind": "LinkedField",
    "name": "updateImage",
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
    "name": "updateImageMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateImageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d8195e7bb9aca88cbbbe61ba12dfb11b",
    "id": null,
    "metadata": {},
    "name": "updateImageMutation",
    "operationKind": "mutation",
    "text": "mutation updateImageMutation(\n  $input: updateImageInput!\n) {\n  updateImage(input: $input) {\n    success\n    message\n    image {\n      node {\n        id\n        title\n        isFavourite\n        url\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1e54f4fe4a4e7972ec968b58216afd14";

export default node;
