import { useState, useEffect } from 'react';
import axios from 'axios';
import {Toaster } from 'react-hot-toast';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';


const ACCESS_KEY = 'j30Bn4S-aIpwJ1-e5_GxX9zH9oforAmEhvBbAhC1bis';
const PER_PAGE = 12;

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query,
            page,
            per_page: PER_PAGE,
            client_id: ACCESS_KEY,
          },
        });

        const { results, total_pages } = response.data;
        setImages(prev => (page === 1 ? results : [...prev, ...results]));
        setTotalPages(total_pages);
      } catch  {
        setError('Failed to fetch images.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />

      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />

      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}
          onRequestClose={handleModalClose}
          image={selectedImage}
        />
      )}
    </>
  );
}