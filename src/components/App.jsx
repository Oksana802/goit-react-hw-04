// import s from "./App.Module.css";

import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import ErrorMessager from "./ErrorMessager/ErrorMessager";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, totalPages } = await fetchImages(query, page);
        setTotalPages(totalPages);
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangQuery = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onChangQuery={handleChangQuery} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {page < totalPages && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      {isError && <ErrorMessager />}
    </div>
  );
};

export default App;
