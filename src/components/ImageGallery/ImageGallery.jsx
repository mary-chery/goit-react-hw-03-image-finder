import Loader from 'components/Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ images, isLoading, onImageClick }) {
  return (
    <div>
      {isLoading ? (
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      ) : (
        <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={() => onImageClick(largeImageURL)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
