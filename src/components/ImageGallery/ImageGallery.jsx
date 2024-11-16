import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
