import classNames from "classnames/bind";
import styles from "./ImageGallery.module.css";

const cx = classNames.bind(styles);

function ImageGallery({ images }) {
  return (
    <div className={cx("gallery")}>
      {images.map((image, index) => (
        <div key={index} className={cx("image-gallery")}>
          <img src={image.img} className={cx("image")} alt="noImage" />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
