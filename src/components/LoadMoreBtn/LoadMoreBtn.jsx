import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={s.box}>
        LoadMoreBtn
      </button>
    </div>
  );
};

export default LoadMoreBtn;
