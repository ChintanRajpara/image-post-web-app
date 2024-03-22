import { commitMutation, useRelayEnvironment } from "react-relay";

import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
  mutation updateImageMutation($input: updateImageInput!) {
    updateImage(input: $input) {
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

const sharedUpdater = ({ store, imageNodeId, isFavourite, title }) => {
  const node = store.get(imageNodeId);

  if (node) {
    if (typeof isFavourite === "boolean") {
      node.setValue(isFavourite, "isFavourite");
    }

    if (title) {
      node.setValue(title, "title");
    }
  }
};

const commit = ({
  environment,
  //
  imageNodeId,
  isFavourite,
  title,
  //
  onCompleted,
  onError,
}) => {
  return commitMutation(environment, {
    mutation,
    variables: { input: { id: imageNodeId, isFavourite, title } },
    optimisticUpdater: (store) => {
      sharedUpdater({ store, imageNodeId });
    },
    updater: (store) => {
      sharedUpdater({ store, imageNodeId, isFavourite, title });
    },
    onCompleted,
    onError,
  });
};

export const useUpdateImage = () => {
  const relayEnvironment = useRelayEnvironment();

  const updateImage = ({ imageNodeId, isFavourite, title }) => {
    commit({
      environment: relayEnvironment,
      imageNodeId,
      isFavourite,
      title,
    });
  };

  return { updateImage };
};
