const ImageCard = ({ image }) => {
  return (
    <li>
      <img src={image.urls.small} alt={image.description} />
      ImageCard
    </li>
  );
};

export default ImageCard;
