import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ webformatURL, largeImageURL, onClick }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        onClick={onClick}
        alt="photos"
      />
    </li>
  );
}
