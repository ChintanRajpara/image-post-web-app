type ImageNode = {
  id: string;
  isFavourite: boolean;
  title: string;
  url: string;
};

type ImageEdge = {
  node: ImageNode;
  cursor: string;
};
