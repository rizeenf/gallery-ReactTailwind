import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./Components/ImageCard";
import SearchButton from "./Components/SearchButton";

function App() {
  const [images, setImages] = useState([]);
  const [terms, setTerms] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const getImages = await fetch(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_APP_PIXABAY_API_KEY
        }&q=${terms}&image_type=photo&pretty=true`
      );
      const resp = await getImages.json();
      setImages(resp.hits);
    };
    fetchImages();

    // USING FETCH THEN
    // const getImages = fetch(
    //   `https://pixabay.com/api/?key=${
    //     import.meta.env.VITE_APP_PIXABAY_API_KEY
    //   }&q=${terms}&image_type=photo&pretty=true`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setImages(data))
    //   .catch((err) => console.log(err));
    //   console.log(images)
  }, [terms]);

  const searchBtn = (e) => {
    setTerms(e.target.value);
  };

  return (
    <div className="container mx-auto mobile:p-3">
      <div className="text-sm flex justify-center text-gray-400 ">
        Copyright &copy; 2022 - Rizeenf
      </div>
      <SearchButton changeTerm={searchBtn} />
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
