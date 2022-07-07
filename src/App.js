import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ImageCard from "./Components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./Components/Welcome";
import axios from "axios";
import Spinner from "./Components/Spinner";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const API_URL =
  process.env.REACT_APP_API_URL || "https://gallery-express-api.herokuapp.com";

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
      setLoading(false);
      toast.success("Saved images downloaded");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => getSavedImages(), []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`${API_URL}/new-image/${word}`);
      setImages([{ ...res.data, title: word }, ...images]);
      toast.info(`New image ${word.toUpperCase()} was found`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    setWord("");
  };

  const handleRemoveImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleDeleteImage = async (image) => {
    try {
      await axios.delete(`${API_URL}/images/${image.id}`);
      toast.warn(`Image ${image.title.toUpperCase()} was deleted`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setImages(images.filter((item) => item._id !== image._id));
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;

    try {
      await axios.post(`${API_URL}/images`, imageToBeSaved);
      toast.info(`New image ${imageToBeSaved.title.toUpperCase()} was saved`);
      setImages(
        images.map((image) =>
          image.id === id ? { ...image, saved: true } : image
        )
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Header title="Images Gallery" />
      {loading ? (
        <Spinner abc />
      ) : (
        <>
          <Search
            word={word}
            setWord={setWord}
            handleSubmit={handleSearchSubmit}
          />
          <Container className="mt-4">
            {images.length ? (
              <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => (
                  <Col key={i} className="pb-3">
                    <ImageCard
                      image={image}
                      deleteImage={handleDeleteImage}
                      removeImage={handleRemoveImage}
                      saveImage={handleSaveImage}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Welcome />
            )}
          </Container>{" "}
        </>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
