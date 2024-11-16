const ImageModal = ({ image, onClose }) => {
  return (
    <div onClick={onClose}>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Автор: {image.user.name}</p>
      <p>Лайки: {image.likes}</p>
    </div>
  );
};

export default ImageModal;
