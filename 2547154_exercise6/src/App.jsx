import { useState } from 'react';
import SearchImages from './api';
import ImageList from './ImageList';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async () => {
    const response = await SearchImages();
    if (response && response.data && response.data.length > 0) {
      setImages((prevImages) => [...prevImages, response.data[0].attributes.body]);
    }
  };

  window.onload = () => {
    handleSubmit();
  };

  return (
    <div>
      <button onClick={handleSubmit}>Get Another Fact</button>
      <ImageList images={images} />
    </div>
  );
}

export default App;
