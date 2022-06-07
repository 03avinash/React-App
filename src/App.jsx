import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./Components/Albums";
import Photos from "./Components/Photos";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:id" element={<Albums />} />
          <Route path="/photos/:albumid" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
