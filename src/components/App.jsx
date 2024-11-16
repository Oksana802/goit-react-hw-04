// import s from "./App.Module.css";

import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import ErrorMessager from "./ErrorMessager/ErrorMessager";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);
  useEffect(() => {
    if (!isQuerySubmitted) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImages(query);

        setImages(results);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsQuerySubmitted(false);
      }
    };
    getData();
  }, [isQuerySubmitted, query]);

  const handleChangQuery = (query) => {
    setImages();
    setQuery(query);
    setIsQuerySubmitted(true);
  };

  return (
    <div>
      <SearchBar onChangQuery={handleChangQuery} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {isError && <ErrorMessager />}
    </div>
  );
};

export default App;
