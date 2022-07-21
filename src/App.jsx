import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Navbar action={() => setGalleryVisibility(!isGalleryVisibile)}/>
      <Hero/>
      <Gallery visibility={isGalleryVisibile} />
    </div>
  );
}

export default App;
