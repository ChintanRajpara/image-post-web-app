import { ConnectionHandler } from "relay-runtime";
import { commitMutation, useRelayEnvironment } from "react-relay";

import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
  mutation createImageMutation($input: createImageInput!) {
    createImage(input: $input) {
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

const sharedUpdater = ({ store, viewerId }) => {
  const viewerProxy = store.get(viewerId);

  const imagesConnection = ConnectionHandler.getConnection(
    viewerProxy,
    "useImages_images"
  );

  if (imagesConnection) {
    const createImage = store.getRootField("createImage");

    if (createImage) {
      const imageEdge = createImage.getLinkedRecord("image");

      ConnectionHandler.insertEdgeAfter(imagesConnection, imageEdge);
    }
  }
};

const commit = ({
  environment,

  viewerId,
  onCompleted,
  onError,

  url,
}) => {
  const title = `Image #${parseInt(Math.random() * 10000)}`;

  return commitMutation(environment, {
    mutation,
    variables: { input: { url, title } },
    // optimisticUpdater: (store) => {
    //   sharedUpdater({ store, viewerId, url });
    // },
    updater: (store) => {
      sharedUpdater({ store, viewerId, url });
    },
    onCompleted,
    onError,
  });
};

export const useCreateImage = ({ viewerId }) => {
  const relayEnvironment = useRelayEnvironment();

  const createImage = ({ url, onCompleted }) => {
    commit({ environment: relayEnvironment, url, viewerId, onCompleted });
  };

  return { createImage };
};
