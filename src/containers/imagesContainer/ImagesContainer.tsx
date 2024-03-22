import useImages from "../../graphql/queries/useImages";
import ImagesGrid from "./ImagesGrid";

const ImagesContainer = () => {
  const { images, viewerId } = useImages();

  return (
    <div>
      <h2 className="font-bold text-6xl">Image Post App</h2>
      <hr />
      <div className="mt-5">
        <ImagesGrid {...{ images, viewerId }} />
      </div>
    </div>
  );
};

export default ImagesContainer;
