import { ConnectionHandler } from "relay-runtime";
import { commitMutation, useRelayEnvironment } from "react-relay";

import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
  mutation deleteImageMutation($input: deleteImageInput!) {
    deleteImage(input: $input) {
      success
      message
      image {
        node {
          id
          title
          isFavourite
          url
        }
        cursor
      }
    }
  }
`;

const sharedUpdater = ({ store, viewerId, imageNodeId }) => {
  const viewerProxy = store.get(viewerId);

  const imagesConnection = ConnectionHandler.getConnection(
    viewerProxy,
    "useImages_images"
  );

  if (imagesConnection) {
    const imageEdges = imagesConnection.getLinkedRecords("edges");

    if (imageEdges) {
      const imageExist = imageEdges.find(
        (edge) => edge.getLinkedRecord("node").getValue("id") === imageNodeId
      );

      if (imageExist) {
        const imageNodeIdToDelete = imageExist
          .getLinkedRecord("node")
          .getValue("id");

        ConnectionHandler.deleteNode(imagesConnection, imageNodeIdToDelete);
      }
    }
  }
};

const commit = ({
  environment,
  imageNodeId,
  viewerId,
  onCompleted,
  onError,
}) => {
  return commitMutation(environment, {
    mutation,
    variables: { input: { id: imageNodeId } },
    optimisticUpdater: (store) => {
      sharedUpdater({ store, viewerId, imageNodeId });
    },
    updater: (store) => {
      sharedUpdater({ store, viewerId, imageNodeId });
    },
    onCompleted,
    onError,
  });
};

export const useDeleteImage = ({ viewerId }) => {
  const relayEnvironment = useRelayEnvironment();

  const deleteImage = ({ imageNodeId }) => {
    commit({ environment: relayEnvironment, imageNodeId, viewerId });
  };

  return { deleteImage };
};
