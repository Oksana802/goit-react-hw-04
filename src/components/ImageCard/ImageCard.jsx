const ImageCard = ({ image }) => {
  return (
    <li>
      <img src={image.urls.small} alt={image.alt_description} />
      ImageCard
    </li>
  );
};

export default ImageCard;
