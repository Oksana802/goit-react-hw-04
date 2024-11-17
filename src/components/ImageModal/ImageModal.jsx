import s from "./imageModal.module.css";
const ImageModal = ({ image, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.box}>
        <img
          className={s.img_modal}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <ul className={s.list}>
          <li>
            Author: {image.user.name} ({image.user.location || null})
          </li>
          <li>{image.description}</li>
          <li>Links: {image.likes}</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageModal;
