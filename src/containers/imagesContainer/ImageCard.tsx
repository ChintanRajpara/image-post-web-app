import { useEffect, useRef } from "react";
import { useUpdateImage } from "../../graphql/mutations/updateImageMutation";
import { useDeleteImage } from "../../graphql/mutations/deleteImageMutation";

const ImageCard = ({
  imageEdge,
  viewerId,
}: {
  imageEdge: ImageEdge;
  viewerId: string;
}) => {
  const { title, id, isFavourite, url } = imageEdge.node;

  const isFavouriteRef = useRef(isFavourite);

  useEffect(() => {
    isFavouriteRef.current = isFavourite;
  }, [isFavourite]);

  const { updateImage } = useUpdateImage();
  const { deleteImage } = useDeleteImage({ viewerId });

  const toggleFavourite = () => {
    updateImage({
      imageNodeId: id,
      isFavourite: !isFavouriteRef.current,
      title: undefined,
    });
  };

  return (
    <div className="w-full p-3 shadow-md rounded flex-1 flex flex-col">
      <div>
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="flex flex-1">
        <img src={url} alt={id} />
      </div>
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() => {
            toggleFavourite();
          }}
          className="btn btn-ghost btn-sm"
        >
          <p className={`text-xl ${isFavourite ? "text-red-600" : ""}`}>
            &#9829;
          </p>
        </button>

        <button
          onClick={() => {
            deleteImage({ imageNodeId: id });
          }}
          className="btn btn-sm btn-error "
        >
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
