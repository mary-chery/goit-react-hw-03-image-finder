import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPictures } from '../api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    hasMoreImages: false,
    showModal: false,
    modalImageUrl: '',
  };

  fetchPictures = async () => {
    this.setState({ isLoading: true });
    const { searchQuery, currentPage } = this.state;
    const newImages = await fetchPictures(searchQuery, currentPage);

    this.setState(prevState => ({
      images: [...prevState.images, ...newImages],
      currentPage: prevState.currentPage + 1,
      hasMoreImages: newImages.length > 0,
    }));
    this.setState({ isLoading: false });
  };

  handleSearch = async searchQuery => {
    if (searchQuery.trim() === '') {
      return;
    }
    this.setState(
      { searchQuery, images: [], hasMoreImages: true, currentPage: 1 },
      () => {
        this.fetchPictures();
      }
    );
  };

  handleLoadMore = () => {
    this.fetchPictures();
  };

  handleImageClick = imageUrl => {
    this.setState({ showModal: true, modalImageUrl: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalImageUrl: '' });
  };

  render() {
    const { images, isLoading, hasMoreImages, showModal, modalImageUrl } =
      this.state;

    return (
      <div>
        {/* <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={images} isLoading={isLoading} />
        {hasMoreImages && <Button onClick={this.handleLoadMore} />} */}

        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery
          images={images}
          isLoading={isLoading}
          onImageClick={this.handleImageClick}
        />
        {showModal && (
          <Modal imageUrl={modalImageUrl} onClose={this.handleCloseModal} />
        )}
        {hasMoreImages && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
