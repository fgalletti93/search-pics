import React, { useState } from "react";
import { searchImages } from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

export const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const response = await searchImages(term);
    setImages(response);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={handleSubmit}>helllo</SearchBar>
      <ImageList images={images} />
    </div>
  );
};

// class App extends React.Component {
//   state = { images: [] };

//   onSearchSubmit = async (term) => {
//     const response = await unsplash.get("/search/photos", {
//       params: { query: term },
//     });

//     this.setState({ images: response.data.results });
//   };

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <ImageList images={this.state.images}/>
//       </div>
//     );
//   }
// }

// export default App;
