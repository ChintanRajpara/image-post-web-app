import { usePaginationFragment, useLazyLoadQuery } from "react-relay";

import graphql from "babel-plugin-relay/macro";

export default function useImages() {
  const useImagesQuery = graphql`
    query useImagesQuery($count: Int, $cursor: String) {
      viewer {
        id
        name
        ...useImages_user @arguments(count: $count, cursor: $cursor)
      }
    }
  `;

  const props = useLazyLoadQuery(useImagesQuery, {
    count: 100,
    cursor: null,
  });

  const fragmentSpec = graphql`
    fragment useImages_user on Viewer
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "String" }
    )
    @refetchable(queryName: "UseImagesPaginationQuery") {
      images(first: $count, after: $cursor)
        @connection(key: "useImages_images") {
        edges {
          cursor
          node {
            id
            title
            isFavourite
            url
          }
        }
      }
    }
  `;

  const { data, refetch } = usePaginationFragment(fragmentSpec, props.viewer);

  return {
    refetch,
    images: data?.images,
    viewerId: props?.viewer?.id,
  };
}
